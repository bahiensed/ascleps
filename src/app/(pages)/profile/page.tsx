import Image from 'next/image'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'

const Profile = () => {
  return (
    <>
    <div className="relative">
    <Image
      src="https://media.licdn.com/dms/image/v2/D5616AQGsUfew2C6C8g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1719348954222?e=1734566400&v=beta&t=6K6P2i0DCbUs33io5SRMP_D0zEcPFN4Acdhj2OAElvc"
      alt="User Name"
      className="absolute object-cover object-right w-full h-32 lg:h-40"
    />
    <div className="mt-8 absolute">
      <Avatar className="border-4 border-neutral-50 mx-6 object-cover object-right w-32 h-32 lg:w-44 lg:h-44">
        <AvatarImage
          src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="@ascleps"
        />
        <AvatarFallback>CJ</AvatarFallback>
      </Avatar>
    </div>
  </div>























<h1 className="text-4xl font-bold tracking-tighter">
      Profile
    </h1>
    </>
  )
}

export default Profile
