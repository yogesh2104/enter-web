import { ArrowRight } from "lucide-react"
import { Card } from "./ui/card"
import { Link } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { siteInfo } from "@/lib/site-info"

export const OurProject=()=>{
    return(
        <section className="py-16 mb-10" id="project">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-4xl mx-auto leading-tight">
                    Featured Projects
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Explore our portfolio of successful digital transformations and innovative solutions
                </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-center mb-8">
                    <TabsList className="bg-slate-800">
                        <TabsTrigger value="all">All Projects</TabsTrigger>
                        <TabsTrigger value="web">Web Development</TabsTrigger>
                        <TabsTrigger value="cloud">Cloud Solutions</TabsTrigger>
                        <TabsTrigger value="security">Cybersecurity</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="all" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {siteInfo.project.allProject.map((project, index) => (
                        <Card key={index} className="py-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900/50 dark:to-red-950/20 overflow-hidden group">
                            <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                            </div>
                            <div className="p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                                {project.icon}
                                </div>
                                <span className="text-sm text-slate-400">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <Link
                                to="#"
                                className="inline-flex items-center text-rose-500 hover:text-rose-400 text-sm font-medium"
                            >
                                View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                            </div>
                        </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="web" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {siteInfo.project.web.map((project, index) => (
                        <Card key={index} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900/50 dark:to-red-950/20 py-0 overflow-hidden group">
                            <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                            </div>
                            <div className="p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                                {project.icon}
                                </div>
                                <span className="text-sm text-slate-400">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <Link
                                to="#"
                                className="inline-flex items-center text-rose-500 hover:text-rose-400 text-sm font-medium"
                            >
                                View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                            </div>
                        </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="cloud" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {siteInfo.project.cloud.map((project, index) => (
                        <Card key={index} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900/50 dark:to-red-950/20 py-0 overflow-hidden group">
                            <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                            </div>
                            <div className="p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                                {project.icon}
                                </div>
                                <span className="text-sm text-slate-400">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <Link
                                to="#"
                                className="inline-flex items-center text-rose-500 hover:text-rose-400 text-sm font-medium"
                            >
                                View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                            </div>
                        </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="security" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {siteInfo.project.security.map((project, index) => (
                        <Card key={index} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900/50 dark:to-red-950/20 py-0 overflow-hidden group">
                            <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                            </div>
                            <div className="p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                                {project.icon}
                                </div>
                                <span className=" text-sm text-slate-400">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <Link
                                to="#"
                                className="inline-flex items-center text-rose-500 hover:text-rose-400 text-sm font-medium"
                            >
                                View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                            </div>
                        </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}