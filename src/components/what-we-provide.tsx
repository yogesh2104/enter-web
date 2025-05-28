import { useState, useEffect, useRef } from "react"
import { Check } from "lucide-react"
import { siteInfo } from "@/lib/site-info"

const campaignData = siteInfo.servicesData


interface CampaignData {
    features: string[]
    image: string
    icon: React.ReactNode
    title: string
    description: string
}

interface Tab {
    id: keyof typeof campaignData
    label: string
}


const tabs: Tab[] = [
    { id: "websiteBuilding", label: "Website Building" },
    { id: "networkSetup", label: "Network Setup" },
    { id: "cloudServices", label: "Cloud Services" },
    { id: "cybersecurity", label: "Cybersecurity" },
]

export default function WhatWeProvide() {
    
    const [activeTab, setActiveTab] = useState<keyof typeof campaignData>("websiteBuilding")
    const containerRef = useRef<HTMLDivElement>(null)
    const stickyRef = useRef<HTMLDivElement>(null)
    const spacerSectionsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        const handleScroll = (): void => {
            if (!containerRef.current) return

            const container = containerRef.current
            const containerTop = container.offsetTop
            const containerHeight = container.offsetHeight
            const scrollTop = window.pageYOffset
            
            // Calculate scroll progress within the container
            const scrollStart = containerTop - 40 // Account for top-10 (40px)
            const scrollEnd = containerTop + containerHeight - window.innerHeight
            
            if (scrollTop >= scrollStart && scrollTop <= scrollEnd) {
                const scrollProgress = (scrollTop - scrollStart) / (scrollEnd - scrollStart)
                const clampedProgress = Math.max(0, Math.min(1, scrollProgress))
                let newActiveTab: keyof typeof campaignData
                if (clampedProgress < 0.25) {
                    newActiveTab = "websiteBuilding"
                } else if (clampedProgress < 0.5) {
                    newActiveTab = "networkSetup"
                } else if (clampedProgress < 0.75) {
                    newActiveTab = "cloudServices"
                } else {
                    newActiveTab = "cybersecurity"
                }
                
                if (newActiveTab !== activeTab) {
                    setActiveTab(newActiveTab)
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [activeTab])

    const scrollToTab = (tabId: keyof typeof campaignData): void => {
        if (!containerRef.current) return
        
        const tabIndex = tabs.findIndex(tab => tab.id === tabId)
        const container = containerRef.current
        const containerTop = container.offsetTop
        const containerHeight = container.offsetHeight
        
        const scrollStart = containerTop - 40
        const scrollEnd = containerTop + containerHeight - window.innerHeight
        const targetProgress = tabIndex / (tabs.length - 1)
        const targetScroll = scrollStart + (targetProgress * (scrollEnd - scrollStart))
        
        window.scrollTo({
            top: Math.max(0, targetScroll),
            behavior: "smooth"
        })
    }
 
    const currentData: CampaignData = campaignData[activeTab]

    return (
        <>
        
            <div className="text-center mb-16" id="services">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-4xl mx-auto leading-tight">
                    Explore Our Services To Know More
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    From stunning websites to secure networks, cloud integration, and advanced cybersecurity — our end-to-end IT services empower your business to thrive in the digital era.
                </p>
            </div>

            <div className="w-full mb-10">
                <div className="lg:hidden sticky top-0 z-50  ">
                    <div className="flex overflow-x-auto space-x-2 scrollbar-hide p-3">
                        {tabs.map((tab) => (
                            <button 
                                key={tab.id}
                                onClick={() => scrollToTab(tab.id)}
                                className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                                    activeTab === tab.id 
                                        ? "bg-primary text-white shadow-lg" 
                                        : "bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600"
                                }`}
                            >
                                {tab.label}
                                {tab.id === "cloudServices" && <span className="ml-1 text-yellow-400">★</span>}
                            </button>
                        ))}
                    </div>
                </div>

                <div 
                    ref={containerRef}
                    className="min-h-screen"
                >
                    <div 
                        ref={stickyRef}
                        className="hidden lg:block sticky top-20 md:top-10 z-40"
                    >
                        <div className="rounded-2xl shadow-2xl">
                            <div className="flex h-[82vh] min-h-[730px]">
                                <div className="w-96 bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900/50 dark:to-red-950/20 p-4 flex flex-col border-r border-gray-800 rounded-l-2xl">
                                    <div className="mb-6">
                                    
                                        <div className="flex flex-col space-y-2 bg-gray-800/50 rounded-lg p-3">
                                            {tabs.map((tab) => (
                                                <button 
                                                    key={tab.id}
                                                    onClick={() => scrollToTab(tab.id)}
                                                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 text-left ${
                                                        activeTab === tab.id 
                                                            ? "bg-primary text-white shadow-lg transform scale-[1.02]" 
                                                            : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                                                    }`}
                                                >
                                                    {tab.label}
                                                    {tab.id === "cloudServices" && <span className="ml-1 text-yellow-400">★</span>}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="flex-1 overflow-y-auto">
                                        <h3 className="text-lg font-semibold text-white mb-3">What's Included:</h3>
                                        <div className="space-y-2">
                                            {currentData.features.map((feature, index) => (
                                                <div
                                                    key={`${activeTab}-${index}`}
                                                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300"
                                                >
                                                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                                                        <Check className="w-3 h-3 text-white dark:text-black" />
                                                    </div>
                                                    <span className="text-gray-300 leading-relaxed text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 p-8 rounded-r-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900/50 dark:to-red-950/20">
                                    <div className="h-full flex flex-col justify-center items-center text-center">
                                        <div className="w-full max-w-full h-full bg-gray-700/30 rounded-xl overflow-hidden border border-gray-600/30">
                                            <img 
                                                src={currentData.image} 
                                                alt={currentData.title}
                                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        {tabs.map((tab, index) => (
                            <div 
                                key={`spacer-${tab.id}`}
                                ref={(el) => {
                                    if (el) spacerSectionsRef.current[index] = el
                                }}
                                className="h-screen"
                            />
                        ))}
                    </div>
                    <div className="lg:hidden">
                        {tabs.map((tab) => (
                            <div 
                                key={tab.id}
                                className="min-h-screen p-6 border-b border-gray-700 last:border-b-0 bg-gray-900/50"
                            >
                                <div className="mb-6">
                                    <img 
                                        src={campaignData[tab.id].image} 
                                        alt={campaignData[tab.id].title}
                                        className="w-full h-full object-cover rounded-lg opacity-90 border border-gray-600/30"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                                    {campaignData[tab.id].features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/50"
                                        >
                                            <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-300 leading-relaxed text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}