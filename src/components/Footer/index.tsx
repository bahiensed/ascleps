import Link from "next/link";
import { BookHeart, BookText, Calculator, CirclePlus, CircleUserRound, Gamepad2, Pill, ShoppingBag, SquareActivity, TableProperties, Trophy, UsersRound } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="bottom-0 fixed flex w-full bg-gray-100 whitespace-nowrap">
      <Link
        href="/profile/1/"
        className="border border-gray-300 flex flex-1 flex-col items-center p-1 hover:bg-gray-400/40"
      >
        <CircleUserRound />
        <small className="text-xs font-medium">Profile</small>
      </Link>

      <Link
        href="/community"
        className="border border-gray-300 flex flex-1 flex-col items-center p-1 hover:bg-gray-400/40"
      >
        <UsersRound />
        <small className="text-xs font-medium">Community</small>
      </Link>

      <Link
        href="/round"
        className="border border-gray-300 flex flex-1 flex-col items-center p-1 hover:bg-gray-400/40"
      >
        <SquareActivity />
        <small className="text-xs font-medium">Round</small>
      </Link>

      <Link
        href="/challenges"
        className="border border-gray-300 flex flex-1 flex-col items-center p-1 hover:bg-gray-400/40"
      >
        <Trophy />
        <small className="text-xs font-medium">Challenges</small>
      </Link>

      <Link
        href="/marketplace"
        className="border border-gray-300 flex flex-1 flex-col items-center p-1 hover:bg-gray-400/40"
      >
        <ShoppingBag />
        <small className="text-xs font-medium">Marketplace</small>
      </Link>


      <div className="border border-gray-300 flex flex-1 flex-col items-center hover:bg-gray-400/40">
        <Drawer>
          <DrawerTrigger className="flex flex-1 flex-col items-center p-1 w-full h-full">
            <CirclePlus />
            <small className="text-xs font-medium">More</small>
          </DrawerTrigger>

          <DrawerContent className="pb-10">
            <div className="text-md font-semibold p-5">More</div>

            <DrawerClose asChild>
              <Link href="/games" className="flex items-center space-x-2 px-5 py-2 hover:bg-gray-400/40">
                <Gamepad2 />
                <small className="text-sm font-medium">Games</small>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Link href="/rankings" className="flex items-center space-x-2 px-5 py-2 hover:bg-gray-400/40">
                <TableProperties />
                <small className="text-sm font-medium">Rankings</small>
              </Link>
            </DrawerClose>

            <Separator className="my-2" />

            <DrawerClose asChild>
              <Link href="/calculators" className="flex items-center space-x-2 px-5 py-2 hover:bg-gray-400/40">
                <Calculator />
                <small className="text-sm font-medium">Calculators</small>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Link href="/icd" className="flex items-center space-x-2 px-5 py-2 hover:bg-gray-400/40">
                <BookText />
                <small className="text-sm font-medium">ICD-11</small>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Link href="/pharmacopoeias" className="flex items-center space-x-2 px-5 py-2 hover:bg-gray-400/40">
                <Pill />
                <small className="text-sm font-medium">Pharmacopoeias</small>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Link href="/other-lists" className="flex items-center space-x-2 px-5 py-2 hover:bg-gray-400/40">
                <BookHeart />
                <small className="text-sm font-medium">Other Lists</small>
              </Link>
            </DrawerClose>

          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default Footer
