import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('admin-access-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem('admin-refresh-token')
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/refresh-token`,
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        )
        console.log('🚀 ~ res:', res)

        if (res.status === 403 || res.status === 401) {
          console.log('refresh token expired')
          location.href = '/'
          window.localStorage.removeItem('admin-access-token')
          window.localStorage.removeItem('admin-refresh-token')
          return
        } else if (res.status === 200) {
          window.localStorage.setItem(
            'admin-access-token',
            res.data?.data?.accessToken,
          )
          window.localStorage.setItem(
            'admin-refresh-token',
            res.data?.data?.refreshToken,
          )

          // Update the authorization header with the new access token.
          axiosInstance.defaults.headers.common['Authorization'] =
            `Bearer ${res.data?.data?.accessToken}`
          return axiosInstance(originalRequest) // Retry the original request with the new access token.
        }
      } catch (error) {
        console.log("🚀 ~ error:", error)
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        localStorage.removeItem('admin-access-token')
        localStorage.removeItem('admin-refresh-token')
        window.location.href = '/auth/sign-in'
        return Promise.reject(refreshError)
      }
      // Handle 401 error, e.g., redirect to login or refresh token
    }
    console.log('here')
    return Promise.reject(error)
  },
)

export default axiosInstance
