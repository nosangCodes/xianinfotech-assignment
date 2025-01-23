import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  if (!process.env.SECRET_KEY) {
    throw Error("jwt secret  is missing");
  }
  return jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "12h",
  });
};
export const generateRefreshToken = (userId) => {
  if (!process.env.SECRET_KEY) {
    throw Error("jwt secret  is missing");
  }
  return jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
};
