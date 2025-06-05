"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  AnimatedGradientText,
  FloatingElement,
  RotateOnScroll,
} from "@/components/framer-animations"
import Navigation from "@/components/navigation"
import { ArrowRight, Code, Database, Download, ExternalLink, Github, Linkedin, Palette, Star, User } from "lucide-react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  
  // Refs for scroll animations
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 -z-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.15),transparent_65%)]" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        </motion.div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          style={{ 
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY
          }}
        >
          <div className="flex flex-col items-center text-center">
            <FadeIn>
              <Badge variant="outline" className="mb-6 px-6 py-1.5 text-sm font-medium border-primary-300 text-primary-700 dark:border-primary-700 dark:text-primary-400">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Available for work
              </Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Hi, I'm <AnimatedGradientText>Alex Johnson</AnimatedGradientText>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
                A <span className="font-semibold text-primary-700 dark:text-primary-400">Full-Stack Developer</span> crafting beautiful, functional, and user-centered digital experiences
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2 bg-primary-700 hover:bg-primary-800 transition-colors">
                  View My Work <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download className="w-4 h-4" /> Download Resume
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} className="mt-16">
              <div className="flex items-center gap-2 animate-bounce">
                <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary-500"
                >
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </div>
            </FadeIn>
          </div>
        </motion.div>
        
        <FloatingElement 
          className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-blue-500/10 backdrop-blur-sm hidden lg:block"
          yOffset={15}
          duration={4}
        />
        
        <FloatingElement 
          className="absolute top-32 right-20 w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-sm hidden lg:block"
          yOffset={10}
          duration={3.5}
        />
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              About <span className="text-primary-700 dark:text-primary-400">Me</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for creating exceptional digital experiences
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <FadeIn direction="right">
                <h3 className="text-2xl font-bold mb-4 text-primary-700 dark:text-primary-400">
                  Full-Stack Developer & UI/UX Enthusiast
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications. My passion lies in bridging the gap between functionality and aesthetics to deliver exceptional user experiences.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm constantly exploring new technologies and methodologies to stay at the forefront of web development. My approach combines technical expertise with creative problem-solving to build solutions that not only meet but exceed expectations.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">Name:</p>
                    <p className="text-gray-600 dark:text-gray-300">Alex Johnson</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">Email:</p>
                    <p className="text-gray-600 dark:text-gray-300">alex@example.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">Location:</p>
                    <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">Availability:</p>
                    <p className="text-primary-700 dark:text-primary-400 font-medium">Available for hire</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="gap-2 bg-primary-700 hover:bg-primary-800 transition-colors">
                    <User className="w-4 h-4" /> Contact Me
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="order-1 md:order-2">
              <RotateOnScroll maxRotate={5}>
                <div className="relative perspective">
                  <div className="relative z-10 rotate-y">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Alex Johnson"
                      width={500}
                      height={500}
                      className="rounded-2xl shadow-xl mx-auto"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary rounded-2xl -rotate-6 scale-[0.97] opacity-30 blur-sm"></div>
                </div>
              </RotateOnScroll>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900/50 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              My <span className="text-primary-700 dark:text-primary-400">Skills</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-primary-700 to-primary-500" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
                      <Code className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Frontend Development</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">React / Next.js</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">TypeScript</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Tailwind CSS</span>
                        <span className="text-sm font-medium">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Framer Motion</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-secondary to-blue-400" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                      <Database className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Backend Development</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Node.js</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Express / Fastify</span>
                        <span className="text-sm font-medium">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">PostgreSQL / MongoDB</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">GraphQL</span>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-accent to-purple-400" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">UI/UX Design</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Figma</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">UI Design</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Prototyping</span>
                        <span className="text-sm font-medium">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">User Research</span>
                        <span className="text-sm font-medium">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
          
          <div className="mt-16">
            <FadeIn>
              <h3 className="text-2xl font-bold mb-8 text-center">Technologies I Work With</h3>
            </FadeIn>
            
            <StaggerContainer className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { name: 'React', icon: '/placeholder.svg?height=40&width=40' },
                { name: 'Next.js', icon: '/placeholder.svg?height=40&width=40' },
                { name: 'TypeScript', icon: '/placeholder.svg?height=40&width=40' },
                { name: 'Node.js', icon: '/placeholder.svg?height=40&width=40' },
                { name: 'Tailwind CSS', icon: '/placeholder.svg?height=40&width=40' },
                { name: 'MongoDB', icon: '/placeholder.svg?height=40&width=40' },
                { name: 'PostgreSQL', icon: '/placeholder.svg?height=40&width=40' },
                { name: 'GraphQL', icon: '/placeholder.svg?height=40&width=40' },
              ].map((tech, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-md flex items-center justify-center p-3 mb-2">
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-900 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent -z-10" />
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Work <span className="text-primary-700 dark:text-primary-400">Experience</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              My professional journey and the companies I've had the pleasure to work with
            </p>
          </FadeIn>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  role: 'Senior Frontend Developer',
                  company: 'TechCorp Inc.',
                  period: '2021 - Present',
                  description: 'Led the frontend development team in building a scalable SaaS platform. Implemented modern React architecture with TypeScript and Next.js. Improved performance by 40% and reduced bundle size by 35%.',
                  technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
                  align: 'right'
                },
                {
                  role: 'Full-Stack Developer',
                  company: 'InnovateSoft',
                  period: '2019 - 2021',
                  description: 'Developed and maintained multiple client projects using the MERN stack. Collaborated with designers to implement responsive and accessible user interfaces. Built RESTful APIs and integrated third-party services.',
                  technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
                  align: 'left'
                },
                {
                  role: 'UI/UX Developer',
                  company: 'DesignHub',
                  period: '2017 - 2019',
                  description: 'Translated design mockups into functional web applications. Worked closely with UX researchers to implement user-centered design principles. Created interactive prototypes and conducted usability testing.',
                  technologies: ['JavaScript', 'HTML/CSS', 'Figma', 'Vue.js', 'SCSS'],
                  align: 'right'
                }
              ].map((job, index) => (
                <div key={index} className="relative">
                  <FadeIn direction={job.align === 'right' ? 'left' : 'right'}>
                    <div className={`flex flex-col md:flex-row items-center ${job.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 border-2 border-primary-500 dark:border-primary-700 z-10 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                      </div>
                      
                      {/* Content */}
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${job.align === 'right' ? 'md:pr-12' : 'md:pl-12'}`}>
                        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">{job.role}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                              </div>
                              <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                                {job.period}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {job.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900/50 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Featured <span className="text-primary-700 dark:text-primary-400">Projects</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </FadeIn>
          
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Apps</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="design">UI/UX</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'E-commerce Platform',
                    description: 'A full-featured online store with product management, cart functionality, and payment processing.',
                    image: '/placeholder.svg?height=300&width=500',
                    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    link: '#',
                    github: '#'
                  },
                  {
                    title: 'Task Management App',
                    description: 'A collaborative task management tool with real-time updates and team features.',
                    image: '/placeholder.svg?height=300&width=500',
                    tags: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
                    link: '#',
                    github: '#'
                  },
                  {
                    title: 'Finance Dashboard',
                    description: 'An interactive dashboard for tracking personal finances with data visualization.',
                    image: '/placeholder.svg?height=300&width=500',
                    tags: ['React', 'D3.js', 'Firebase', 'Tailwind CSS'],
                    link: '#',
                    github: '#'
                  },
                  {
                    title: 'Social Media App',
                    description: 'A social platform with user profiles, posts, comments, and real-time notifications.',
                    image: '/placeholder.svg?height=300&width=500',
                    tags: ['React Native', 'GraphQL', 'AWS', 'Apollo'],
                    link: '#',
                    github: '#'
                  },
                  {
                    title: 'Weather Application',
                    description: 'A beautiful weather app with forecasts, maps, and location-based features.',
                    image: '/placeholder.svg?height=300&width=500',
                    tags: ['Vue.js', 'API Integration', 'Geolocation', 'Charts.js'],
                    link: '#',
                    github: '#'
                  },
                  {
                    title: 'Portfolio Website',
                    description: 'A modern portfolio website with animations and interactive elements.',
                    image: '/placeholder.svg?height=300&width=500',
                    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
                    link: '#',
                    github: '#'
                  }
                ].map((project, index) => (
                  <FadeIn key={index} direction="up" delay={0.1 * index}>
                    <Card className="overflow-hidden border-none shadow-lg group">
                      <div className="relative overflow-hidden aspect-video">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="flex gap-2">
                            <Button size="sm" variant="default" className="gap-1" asChild>
                              <Link href={project.link}>
                                <ExternalLink className="w-3 h-3" /> Live Demo
                              </Link>
                            </Button>
                            <Button size="sm" variant="outline" className="gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm" asChild>
                              <Link href={project.github}>
                                <Github className="w-3 h-3" /> Code
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Web projects would be filtered here */}
                <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
                  Showing web application projects
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="mobile" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mobile projects would be filtered here */}
                <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
                  Showing mobile application projects
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Design projects would be filtered here */}
                <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
                  Showing UI/UX design projects
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="gap-2">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-900 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent -z-10" />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Client <span className="text-primary-700 dark:text-primary-400">Testimonials</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              What people say about working with me
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart',
                image: '/placeholder.svg?height=100&width=100',
                quote: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise made the project a success.'
              },
              {
                name: 'Michael Chen',
                role: 'Product Manager, InnovateCorp',
                image: '/placeholder.svg?height=100&width=100',
                quote: 'Working with Alex was a pleasure. They understood our requirements perfectly and delivered a high-quality solution on time and within budget.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Marketing Director, GrowthLabs',
                image: '/placeholder.svg?height=100&width=100',
                quote: 'Alex\'s work on our website redesign transformed our online presence. The site is not only beautiful but also performs exceptionally well.'
              }
            ].map((testimonial, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      \
