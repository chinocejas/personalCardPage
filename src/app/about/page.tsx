import type { Metadata } from "next"

import AboutMe from "@/components/profile/AboutMe"

export const metadata: Metadata = {
  title: "About me | nico.cejas",
  description: "More information about my personal background and hobbies.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <AboutMe />
    </div>
  )
}
