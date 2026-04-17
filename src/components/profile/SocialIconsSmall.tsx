import React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, Camera, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SocialIconsSmall() {
  return (
    <>
      <Button variant="ghost" size="icon" asChild>
        <Link href="mailto:nico.cejas@gmail.com">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Link>
      </Button>
      
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.linkedin.com/in/nicocejas" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://github.com/chinocejas" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://github.com/chinocejas/resume/blob/master/nicolas_cejas_resume.pdf" target="_blank" rel="noopener noreferrer" title="Curriculum Vitae">
          <FileText className="h-5 w-5" />
          <span className="sr-only">Resume / CV</span>
        </Link>
      </Button>

      <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.instagram.com/nico.cjas/" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Link>
      </Button>

      <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.eyeem.com/u/nicocejas" target="_blank" rel="noopener noreferrer" title="EyeEm Photos">
          <Camera className="h-5 w-5" />
          <span className="sr-only">EyeEm Photos</span>
        </Link>
      </Button>
    </>
  )
}
