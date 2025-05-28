import AboutUs from "@/components/about-us"
import HeroSection from "@/components/hero-section"
import { OurProject } from "@/components/our-project"
import { OurVision } from "@/components/our-vision"
import Testimonials from "@/components/testimonials"
import WhatWeProvide from "@/components/what-we-provide"
import { siteInfo } from "@/lib/site-info"

const Home=()=>{

    const customButtons = [
        { text: "Get Started", href: "/?open-contact=true", variant: "primary" as const },
        { text: "Learn More", href: "#about", variant: "secondary" as const },
    ]
    
    return(
        <main className="container mx-auto">
            <HeroSection
                title="Your Trusted IT Solutions Partner"
                description="Expert services in web development, networking, and cybersecurity tailored for your business needs."
                buttons={customButtons}
                features={siteInfo.customFeatures}
            />
            <WhatWeProvide/>
            <OurProject/>
            <Testimonials/>
            <AboutUs/>
            <OurVision/>
        </main>
    )
}

export default Home