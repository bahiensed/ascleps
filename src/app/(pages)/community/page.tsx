import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import coverImage from "../../../../public/images/users/1719348954222/1719348954222.jpeg"

const Community = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 tracking-tighter">
        Community
      </h1>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="relative">
          <div className="relative h-12 w-full rounded-t-lg overflow-hidden">
            <Image
              src={coverImage}
              alt="Cover Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="relative flex justify-center mt-[-2rem]">            
            <Avatar className="w-14 h-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </Card>

        <Card>
            <div  className="flex justify-center mt-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

          <CardContent>
            <p>Card Content</p>
          </CardContent>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card>
          <div  className="flex justify-center mt-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybUxQMFdwbEZuSkJCdG41VEVqa0VZTThRSWgifQ?width=80" />
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>

      <Separator className="mb-1 mt-4" />
      <Link href="/"><span className="text-xs">Show More</span></Link>

    </>
  )
}

export default Community
