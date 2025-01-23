import jwt from "jsonwebtoken";
import status from "http-status";

export function verifyRefreshToken(req, res, next) {
  const refreshToken = req.headers["authorization"]?.split(" ")[1]; // Get token from the 'Authorization' header

  if (!refreshToken) {
    return res
      .status(status.FORBIDDEN)
      .json({ error: "Refresh token is required" });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY); // Verify the refresh token using the secret
    req.userId = decoded?.userId; // Attach the decoded payload (user info) to the request object
    next(); // Pass the request to the next middleware or route handler
  } catch (error) {
    console.error("Refresh token verification error:", error);
    return res
      .status(status.UNAUTHORIZED)
      .json({ error: "Invalid refresh token" });
  }
}
