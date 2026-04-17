import React from "react"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SocialIconsSmall from "./SocialIconsSmall"

export default function AboutMe() {
  return (
    <Card className="w-full max-w-lg overflow-hidden border-none shadow-2xl mt-8">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-6">
          <Link href="/">
            <Avatar className="h-20 w-20 mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              <AvatarImage src="/images/nicoprofile.jpg" alt="Nicolas Cejas" />
              <AvatarFallback>NC</AvatarFallback>
            </Avatar>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight">About me</h2>
        </div>
        
        <div className="text-left text-muted-foreground space-y-4 mb-8 px-2 md:px-6">
          <p>
            Born in Argentina, I recently planted my roots in the charming landscapes of Italy. 
            As a seasoned software developer with several years of hands-on experience, 
            I honed my skills through studies at the UTN FRSF in Argentina.
          </p>
          <p>
            Beyond the world of code, you'll find me chasing footballs on the field, embracing the 
            intensity of crossfit, and indulging my love for travel, exploring new cultures and meeting
            fascinating people.
          </p>
          <p>
            In my moments away from tech and fitness, I transform into a virtual shutterbug, 
            capturing moments with my phone and diving into the art of mobile photo editing. 
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          <SocialIconsSmall />
        </div>
      </CardContent>
    </Card>
  )
}
