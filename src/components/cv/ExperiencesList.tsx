"use client"

import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const jobExperiences = [
  {
    id: 1, 
    name: 'Clarika Software + Innovation',
    role: 'Software developer',
    startDate: '11/11/2021',
    endDate: 'Present',   
    avatar: 'https://media.licdn.com/dms/image/C4D0BAQHF25xbzzWuvg/company-logo_200_200/0/1632254013235?e=1689811200&v=beta&t=VeVY9hrPnME2p8ht_TuT9ry_hDXIPp1LzooeZq-qN2o',
    projects: [
      {
        id: 1,
        name: "DAC Group - LPAD",
        description: "This is a legacy project that presents a great opportunity for me to improve and redesign the existing functionalities and make the UI more user-friendly. I work closely with other teams and use a range of APIs, topics, and queues to ensure smooth communication and collaboration."
      }
    ],
    technologies: ["C#", "NET Core", "Net Framework", "razor", "html/css", "jquery", "React"]  
  },
  {
    id: 2, 
    name: 'PwC',
    role: 'Software developer',
    startDate: '06/01/2020',
    endDate: '11/01/2021',   
    avatar: 'https://media.licdn.com/dms/image/C4E0BAQEMcCsKYUoUKw/company-logo_200_200/0/1658309646399?e=1689811200&v=beta&t=s_zyCazjJQtDwo9k0CXX0ZByMTDx3X2EmXQZvjgX_bs',
    projects: [
      {
        id: 1,
        name: "Taxes Api",
        description: "I was responsible for building a hub of APIs for taxes, which were designed for internal use within the company. This was primarily a backend project."
      },
      {
        id: 2,
        name: "Internal CRM",
        description: "I also worked on an MVC system that allowed clients to build their own portals. This project involved implementing numerous unit tests."
      }
    ],
    technologies: ["C#", "NET Core", "Azure Cloud", "Service Bus", "Net Framework", "ASP", "SDK", "unit test", "Razor", "Html/css", "Jquery", "REST/SOAP", "SQL"]  
  },
  {
    id: 3, 
    name: 'Accion Point Group',
    role: 'Software developer',
    startDate: '04/04/2018',
    endDate: '06/06/2020',   
    avatar: 'https://media.licdn.com/dms/image/C4D0BAQHymuLMqto-jQ/company-logo_200_200/0/1656704209472?e=1689811200&v=beta&t=fFGkZhgLTC7JFvD_ReDZT7KLJur4--WXzJTlfrZjlEw',
    projects: [
      {
        id: 1,
        name: "Bantotal",
        description: "I started working for a core bank system in a software factory where I was responsible for developing customer requirements. I later had the opportunity to travel to many different places in my country to work with this system, but in a different capacity, as a technical analyst responsible for software implementation. This involved working closely with customers to ensure that the software was implemented correctly and that it met their needs."
      },
      {
        id: 2,
        name: "Hardware connections",
        description: "In addition to this work, I also had the opportunity to work on another project for another company's client, who built hardware incubators. In this project, we developed software that would read values from the hardware and process them on the server."
      }
    ],
    technologies: ["C#", "NET", "WinForms", "NetCore", "SQL", "ORACLE", "Genexus", "AS400", "React", "Entity Framework", "Modbus", "Rest/Soap", "HTML", "css"]  
  },
  {
    id: 4, 
    name: 'Government of Santa Fe',
    role: 'Software developer',
    startDate: '12/12/2016',
    endDate: '06/07/2017',   
    avatar: 'https://media.licdn.com/dms/image/C560BAQHQAJPb1hW5UQ/company-logo_200_200/0/1519899192304?e=1689811200&v=beta&t=s7YHcNZitoEzNMByPwCEg9arjgpLPbR-8IsunDPw_C4',
    projects: [
      {
        id: 1,
        name: "Entry-level Technical Support",
        description: "In my first job, as entry-level Technical Support for University Partnership. I worked as functional analyst and technical support specialist, utilizing my skills in SQL queries to support the company's business operations."
      }
    ],
    technologies: ["SQL", "System Analysis", "IT"]  
  }
]

export default function ExperiencesList() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 mt-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase text-primary/80 tracking-widest mb-2">Curriculum Vitae</h2>
        <h3 className="text-xl text-muted-foreground font-medium">Nicolas Cejas</h3>
      </div>

      <div className="space-y-8">
        {jobExperiences.map((job) => (
          <Card key={job.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-muted/30 pb-4 border-b">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border border-border/50 rounded-lg bg-white shadow-sm dark:bg-white/95">
                  {/* Note: In production you might want to use a fallback or local image if the external linkedin image expires */}
                  <AvatarImage src={job.avatar} alt={job.name} className="object-contain p-1.5" />
                  <AvatarFallback className="text-xs font-semibold text-slate-700 bg-slate-100">{job.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-xl font-bold">{job.name}</h4>
                  <p className="text-sm font-medium text-primary">{job.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {job.startDate} — {job.endDate || "Present"}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {job.projects.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <h5 className="font-semibold text-foreground/90">{project.name}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t pt-4">
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs font-normal">
                      #{tech.toLowerCase()}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
