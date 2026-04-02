import { authMiddleware } from "@clerk/nextjs";

// 允许所有路由公开访问，不强制登录
export default authMiddleware({
  publicRoutes: ["/(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};