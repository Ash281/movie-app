import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/api/webhooks/user'], //these routes dont require auth
    // ignoredRoutes: [ '/api/webhooks'] //all other routes however require auth
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 