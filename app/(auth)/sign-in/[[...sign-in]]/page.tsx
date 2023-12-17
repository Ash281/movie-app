import { SignIn } from "@clerk/nextjs";
 
/* SIGN IN PAGE FOR EXISTING USERS */
export default function Page() {
  return (
    <main 
    className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignIn />
    </main>
  ) 
}