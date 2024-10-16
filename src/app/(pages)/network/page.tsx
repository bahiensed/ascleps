import Image from "next/image"
import Link from "next/link"
import { Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { connections, recomendations } from "@/constants"

const Network = () => {
  return (
    <>
      <h1 className="font-bold text-3xl tracking-tighter">
        Network
      </h1>

      <div className="mb-2 mt-6 pr-3 w-full md:w-2/3">
        <div className="flex items-center">
          <div className="font-bold text-xl text-gray-700 tracking-tighter w-2/3">
            Your connections
          </div>
          <Link href="/" className="font-bold text-base text-right tracking-tighter w-1/3">
            See all
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-2/3">
        {connections.map((connection) => (
          <Card className="relative flex flex-col h-full justify-between" key={connection.id}>
            <div>
              <div className="relative h-16 w-full rounded-t-lg overflow-hidden">
                <Image
                  src={connection.cover}
                  alt="Cover Image"
                  width={1128}
                  height={191}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative flex ml-4 mt-[-32px]">            
                <Avatar className="w-16 h-16">
                  <AvatarImage src={connection.avatar} />
                  <AvatarFallback>{connection.fallback}</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col mx-3 my-2">
                <p className="font-semibold text-base tracking-tight truncate w-full">
                  {connection.name}
                </p>
                <div className="font-light text-gray-700 text-xs">
                  <p className="truncate w-full">{connection.position}</p>
                  <p className="truncate w-full">{connection.almaMater}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mb-4 mt-8">
              <Button className="font-semibold" variant="outline">
                <Send  className="mr-2 w-4" /> Message
              </Button>
            </div>
          </Card>
        ))}
      </div>




      <div className="mb-2 mt-12 pr-3 w-full md:w-2/3">
        <div className="flex items-center">
          <div className="font-bold text-xl text-gray-700 tracking-tighter w-2/3">
            People you may also know
          </div>
          <Link href="/" className="font-bold text-base text-right tracking-tighter w-1/3">
            See all
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-2/3">
        {recomendations.map((recomendation) => (
          <Card className="relative flex flex-col h-full justify-between" key={recomendation.id}>
            <div>
              <div className="relative h-16 w-full rounded-t-lg overflow-hidden">
                <Image
                  src={recomendation.cover}
                  alt="Cover Image"
                  width={1128}
                  height={191}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative flex ml-4 mt-[-32px]">            
                <Avatar className="w-16 h-16">
                  <AvatarImage src={recomendation.avatar} />
                  <AvatarFallback>{recomendation.fallback}</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col mx-3 my-2">
                <p className="font-semibold text-base tracking-tight truncate w-full">
                  {recomendation.name}
                </p>
                <div className="font-light text-gray-700 text-xs">
                  <p className="truncate w-full">{recomendation.position}</p>
                  <p className="truncate w-full">{recomendation.almaMater}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mb-4 mt-8">
              <Button className="font-semibold" variant="outline">
                <Send  className="mr-2 w-4" /> Message
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Network
