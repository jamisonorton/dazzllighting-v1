export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "Dazzl Wholesale Lighting-v1";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern permanent lighting wholesale ecommerce store built with Next.js";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "https://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 6;

export const signInDefaultValues = {
  email: "dazzlholidaylighting@gmail.com",
  password: "123456",
};
