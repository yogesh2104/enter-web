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
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-black mb-2 leading-tight">
              About Us
            </h1>

            <p className="text-xl  max-w-2xl mx-auto">
              {siteInfo.slogan}
            </p>
          </div>

          <div className=" mx-auto">
            <div className="">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                {siteInfo.about.description[0]}
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                {siteInfo.about.description[1]}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              {siteInfo.whychooseus.heading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto md:px-0 p-2">
            {siteInfo.whychooseus.data.map((item, index) => (
              <div
                key={index}
                className="group relative border rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/10"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 p-[1px]">
                  <div className={`h-full w-full rounded-2xl`}></div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div
                      className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl p-[1px] group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="size-10 rounded-2xl bg-primary flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-2 md:mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="dark:text-slate-300 leading-relaxed mb-2 md:mb-4 text-sm md:text-base">
                        {item.description}
                      </p>

                      <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                        <span className="text-xs md:text-sm">Learn more</span>
                        <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

