import Link from "next/link";
import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <div className="absolute bg-gray-100 flex items-center p-2 shadow-md justify-between w-full">
      <Link href={"/"} className="flex gap-1 items-center">
        <Leaf />
        <h3 className="font-bold text-xl tracking-tight">Ascleps</h3>
      </Link>

      <div className="flex gap-4">
        <div>Log In</div>
        <div>Sign Up</div>
      </div>
    </div>
  )
}

export default Header
