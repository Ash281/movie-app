import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    // publicRoutes: ['/api/webhook/clerk'], //these routes dont require auth
    // ignoredRoutes: [ '/api/webhook/clerk'] //all other routes however require auth
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 