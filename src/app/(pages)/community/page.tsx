import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Community = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 tracking-tighter">
        Community
      </h1>

      <section className="grid grid-cols-2 gap-4">
        <Card>
          <div  className="flex justify-center mt-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </div>
        </Card>

        <Card>
            <div  className="flex justify-center mt-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

          <CardContent className="border border-red-500">
            <p>Card Content</p>
          </CardContent>

          <CardFooter className="border border-red-500">
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card>
          <div  className="flex justify-center mt-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9" />
            <AvatarFallback>CN</AvatarFallback>
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
