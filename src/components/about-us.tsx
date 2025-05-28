import {
  ArrowRight,
} from "lucide-react"
import { siteInfo } from "@/lib/site-info"
export default function AboutUs() {
  return (
    <>

     <section className="relative py-16 overflow-hidden">
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-2 leading-tight">
              About Us
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {siteInfo.slogan}
            </p>
          </div>

          <div className=" mx-auto">
            <div className="">
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                {siteInfo.about.description[0]}
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                {siteInfo.about.description[1]}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {siteInfo.whychooseus.heading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {siteInfo.whychooseus.data.map((item, index) => (
              <div
                key={index}
                className="group relative border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/10"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 p-[1px]">
                  <div className={`h-full w-full rounded-2xl`}></div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div
                      className={`shrink-0 w-16 h-16 rounded-2xl p-[1px] group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-2xl bg-primary flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed mb-4">{item.description}</p>

                      <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                        <span className="text-sm">Learn more</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 text-white" id="about">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-4xl mx-auto leading-tight">
            About US
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {siteInfo.slogan}
          </p>
        </div>
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg md:text-xl">
              At Agency we believe that technology should be a growth enabler — not a challenge. Since our inception,
              we've been on a mission to help businesses build strong, secure, and scalable digital foundations through
              our suite of specialized IT services.
            </p>
            <p className="mt-6 text-lg md:text-xl text-slate-300">
              Whether you're a startup looking to establish your online presence or an enterprise seeking advanced
              network and cloud solutions, our team is equipped to deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Client-Centered Approach</h3>
                <p className="text-slate-300">
                  We don't believe in one-size-fits-all. Our solutions are crafted around your business goals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Expertise You Can Trust</h3>
                <p className="text-slate-300">
                  Our team of certified developers, engineers, and security analysts brings years of hands-on experience
                  to every project.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Transparent Communication</h3>
                <p className="text-slate-300">
                  We keep you in the loop at every step, ensuring clarity, confidence, and collaboration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ongoing Support</h3>
                <p className="text-slate-300">From launch to maintenance, we're with you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    
    </>
  )
}

