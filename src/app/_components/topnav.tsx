import { SignedIn, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return (
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
  
        <div>
            <SignOutButton>
                <SignInButton />
            </SignOutButton>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }