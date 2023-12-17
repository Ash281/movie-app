import { SignUp } from "@clerk/nextjs";
 
/* SIGN UP PAGE FOR NEW USERS */
export default function Page() {
  return (
  <main 
    className="flex min-h-screen flex-col
     items-center justify-between p-24">
    <SignUp />
  </main>
  )
}