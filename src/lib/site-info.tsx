import { Code, Wifi,Lock, Globe, Network, Cloud, Shield, Server, Users, ShieldCheck, MessageSquare, Clock } from "lucide-react"

const env = process.env.NODE_ENV
export const Domain = env == "development" ? "http://localhost:3000"  : "https://enterweb.in"

export const siteInfo = {
    siteName:"Enter Web IT Firm",
    siteLogo:"/logo-one.png",
    siteDiscription:"IT services including website building, network setup, and cybersecurity solutions tailored to your business needs.",
    ourvision:"Expert services in web development, networking, and cybersecurity tailored for your business needs.",
    slogan:"Building the Backbone of Your Business",
    email:"info@enterweb.in ",
    footerText:`© 2024-${new Date().getFullYear()}, enterweb.in, All Rights Reserved`,
    address:"SUPERTECH ECO VILLAGE-1, Sector 1, Bisrakh Jalalpur, Greater Noida, Uttar Pradesh 201306",   
    contactInfo:(
      <div className="mt-6 text-center text-sm space-y-2">
        <p><strong>Phone:</strong> +91 85273 86205</p>
        <p><strong>Email:</strong> info@enterweb.in</p>
      </div>
    ),
    mainLink:[
      { name: "Home",link:"/" },
      { name:"Services", link:"#services" },
      { name:"Project", link:"#project" },
      { name:"About", link:"#about" },
    ],
    socialLink:[
      { name: "LinkedIn", url: "https://www.linkedin.com" },
      { name: "Twitter", url: "https://www.twitter.com" },
      { name: "Instagram", url: "https://www.instagram.com" },
    ],
    extraLink:[
      { name: "Privacy Policy",link:"/privacy-policy" },
      { name: "Terms of Service",link:"/terms-of-service" },
    ],
    classes:{
      "max-container-width":"max-w-7xl"
    },
    testimonials:[
      {
        id: 1,
        company: "Logoipsum",
        text: "The team transformed our brand's online presence with creativity & precision. The results exceeded our expectations! Their digital marketing expertise helped us reach a broader audience & significantly boosted our sales.",
        author: {
          name: "Sarah Mitchell",
          role: "Marketing Director",
          avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        logo: "🔮",
        rating: 4,
      },
      {
        id: 2,
        company: "TechFlow",
        text: "Outstanding service and incredible attention to detail. They delivered beyond our wildest dreams and helped us achieve a 300% increase in conversions within just 3 months.",
        author: {
          name: "David Chen",
          role: "CEO",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        logo: "⚡",
        rating: 5,
      },
      {
        id: 3,
        company: "InnovateNow",
        text: "Professional, reliable, and results-driven. The team's strategic approach to our digital transformation was exactly what we needed to stay competitive in our market.",
        author: {
          name: "Maria Rodriguez",
          role: "Head of Operations",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        logo: "🚀",
        rating: 5,
      },
      {
        id: 4,
        company: "DataSync",
        text: "Exceptional work quality and timely delivery. The team's expertise in data analytics helped us make informed decisions that drove our business growth by 250%.",
        author: {
          name: "Alex Thompson",
          role: "CTO",
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        logo: "📊",
        rating: 5,
      },
    ],
    people: [
      {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
      {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
      },
    ],
    customFeatures: [
      {
        icon: Code,
        title: "Custom Development",
        description: "Tailored software solutions built specifically for your business requirements and goals.",
      },
      {
        icon: Wifi,
        title: "Network Solutions",
        description: "Robust networking infrastructure design and implementation for seamless connectivity.",
      },
      {
        icon: Lock,
        title: "Cybersecurity",
        description: "Comprehensive security audits and protection against modern cyber threats.",
      },
    ],
    servicesData:{
      websiteBuilding: {
        features: [
          "Responsive and SEO-optimized design",
          "Up to 5 custom pages",
          "Basic CMS integration (e.g., WordPress)",
          "Standard contact form setup",
          "Email support",
        ],
        image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?auto=format&fit=crop&w=1006&h=720",
        icon: <Globe className="w-12 h-12 text-blue-400" />,
        title: "Website Building",
        description: "Create stunning, responsive websites that drive results"
      },
      networkSetup: {
        features: [
          "LAN configuration with IP addressing & subnetting",
          "Network assessment & requirements gathering",
          "Wireless Access Point (WAP) setup",
          "Firewall setup & basic intrusion prevention",
          "Basic VPN configuration for remote access",
          "Testing, optimization, and performance tuning",
        ],
        image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
        icon: <Network className="w-12 h-12 text-green-400" />,
        title: "Network Setup",
        description: "Secure and efficient network infrastructure solutions"
      },
      cloudServices: {
        features: [
          "Cloud migration strategy & execution",
          "AWS / Azure / Google Cloud setup",
          "Data backup & disaster recovery",
          "Scalable resource configuration",
          "24/7 Monitoring & Reporting Dashboard",
          "Standard support",
        ],
        image: "https://images.unsplash.com/photo-1600715503643-8aeae8c03c9c?auto=format&fit=crop&w=1006&h=720",
        icon: <Cloud className="w-12 h-12 text-purple-400" />,
        title: "Cloud Services",
        description: "Scalable cloud solutions for modern businesses"
      },
      cybersecurity: {
        features: [
          "Comprehensive security audit",
          "Firewall & intrusion detection setup",
          "Advanced threat monitoring",
          "Employee training & awareness sessions",
          "Data encryption & secure access control",
          "Priority incident response team",
        ],
        image: "https://images.unsplash.com/photo-1561575130-72ea88375283?auto=format&fit=crop&w=1006&h=720",
        icon: <Shield className="w-12 h-12 text-red-400" />,
        title: "Cybersecurity",
        description: "Comprehensive protection for your digital assets"
      }
    },
    project:{
      allProject:[
        {
          title: "E-Commerce Platform",
          category: "Web Development",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Code className="h-5 w-5" />,
        },
        {
          title: "Cloud Migration",
          category: "Cloud Solutions",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Server className="h-5 w-5" />,
        },
        {
          title: "Security Infrastructure",
          category: "Cybersecurity",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Shield className="h-5 w-5" />,
        },
        {
          title: "Mobile Banking App",
          category: "Web Development",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Code className="h-5 w-5" />,
        },
        {
          title: "Data Analytics Dashboard",
          category: "Cloud Solutions",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Server className="h-5 w-5" />,
        },
        {
          title: "Threat Detection System",
          category: "Cybersecurity",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Shield className="h-5 w-5" />,
        },
      ],
      web:[
        {
          title: "E-Commerce Platform",
          category: "Web Development",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Code className="h-5 w-5" />,
        },
        {
          title: "Mobile Banking App",
          category: "Web Development",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Code className="h-5 w-5" />,
        },
      ],
      cloud:[
        {
          title: "Cloud Migration",
          category: "Cloud Solutions",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Server className="h-5 w-5" />,
        },
        {
          title: "Data Analytics Dashboard",
          category: "Cloud Solutions",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Server className="h-5 w-5" />,
        },
      ],
      security:[
        {
          title: "Security Infrastructure",
          category: "Cybersecurity",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Shield className="h-5 w-5" />,
        },
        {
          title: "Threat Detection System",
          category: "Cybersecurity",
          image: "https://images.unsplash.com/photo-1521106139607-40628ec32fb8?auto=format&fit=crop&w=1006&h=720",
          icon: <Shield className="h-5 w-5" />,
        },
      ]
    },
    about:{
      description:[`At Enter Web IT Firm we believe that technology should be a growth enabler — not a challenge. Since our inception,we've been on a mission to help businesses build strong, secure, and scalable digital foundations through our suite of specialized IT services.`, "Whether you're a startup looking to establish your online presence or an enterprise seeking advanced network and cloud solutions, our team is equipped to deliver results that matter."]
    },
    whychooseus:{
      heading:'We combine expertise, innovation, and dedication to deliver exceptional results for your business.',
      data:[
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Client-Centered Approach",
          description:
            "We don't believe in one-size-fits-all. Our solutions are crafted around your business goals.",
          gradient: "from-teal-500 to-cyan-500",
        },
        {
          icon: <ShieldCheck className="h-8 w-8 text-white" />,
          title: "Expertise You Can Trust",
          description:
            "Our team of certified developers, engineers, and security analysts brings years of hands-on experience to every project.",
          gradient: "from-blue-500 to-indigo-500",
        },
        {
          icon: <MessageSquare className="h-8 w-8 text-white" />,
          title: "Transparent Communication",
          description: "We keep you in the loop at every step, ensuring clarity, confidence, and collaboration.",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          icon: <Clock className="h-8 w-8 text-white" />,
          title: "Ongoing Support",
          description: "From launch to maintenance, we're with you every step of the way.",
          gradient: "from-orange-500 to-red-500",
        },
      ]
    }
}

export type SiteConfig = typeof siteInfo
