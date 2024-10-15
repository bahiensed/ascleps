import Link from "next/link";
import { Leaf } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className="bg-gray-100 fixed flex items-center p-2 shadow-md justify-between w-full z-50">
      <Link href={"/"} className="flex gap-1 items-center">
        <Leaf />
        <h3 className="font-bold text-xl tracking-tight">Ascleps</h3>
      </Link>

      <div className="flex gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header
