import React from "react"
import Link from "next"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import SocialIconsSmall from "./SocialIconsSmall"

export default function ProfileCard() {
  const badgePrefix = "#"

  return (
    <Card className="w-full max-w-sm overflow-hidden border-none shadow-2xl">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4 relative">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src="/images/nicoprofile.jpg" alt="Nicolas Cejas" />
            <AvatarFallback>NC</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-1/3 w-4 h-4 rounded-full border-2 border-background bg-green-500"></span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight mb-2">Nicolas Cejas</h2>
        
        <p className="text-muted-foreground mb-6">
          I'm a software developer with a focus on backend development. <span>🇦🇷</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <Badge variant="secondary">{badgePrefix}backend</Badge>
          <Badge variant="secondary">{badgePrefix}net</Badge>
          <Badge variant="secondary">{badgePrefix}sql</Badge>
          <Badge variant="secondary">{badgePrefix}azure</Badge>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <Badge variant="outline">{badgePrefix}HTML&CSS</Badge>
          <Badge variant="outline">{badgePrefix}Javascript</Badge>
          <Badge variant="outline">{badgePrefix}Jquery</Badge>
        </div>

        <div className="flex justify-center space-x-4">
          <SocialIconsSmall />
        </div>
      </CardContent>
    </Card>
  )
}
