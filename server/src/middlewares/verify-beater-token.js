import jwt from "jsonwebtoken";
import status from "http-status";

const ACCESS_TOKEN_SECRET = process.env.SECRET_KEY;

// Middleware to verify Bearer token
export function verifyBearerToken(req, res, next) {
  try {
    // Extract token from the Authorization header
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(status.UNAUTHORIZED).json({
        error: "Authorization header is missing",
      });
    }

    // The token should follow the "Bearer <token>" format
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(status.UNAUTHORIZED).json({
        error: "Token is missing in the Authorization header",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);

    // Attach user info to the request object for use in subsequent routes
    req.userId = decoded.userId;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Invalid or expired token:", error);
    return res.status(status.UNAUTHORIZED).json({
      error: "Invalid or expired token",
    });
  }
}
