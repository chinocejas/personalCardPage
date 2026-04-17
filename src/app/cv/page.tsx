import type { Metadata } from "next"

import ExperiencesList from "@/components/cv/ExperiencesList"

export const metadata: Metadata = {
  title: "Curriculum Vitae | nico.cejas",
  description: "My job experiences and professional background.",
}

export default function CurriculumVitaePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <ExperiencesList />
    </div>
  )
}
