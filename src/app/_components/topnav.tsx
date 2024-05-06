import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return (
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
        <div>Animals Gallery</div>
  
        <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }