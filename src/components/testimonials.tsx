import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { AnimatedTooltip } from "./animated-tooltip"
import { siteInfo } from "@/lib/site-info"

export default function Testimonials() {
  const testimonials = siteInfo.testimonials
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  const averageRating = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) / testimonials.length
  const totalReviews = testimonials.length * 10


  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-4xl mx-auto leading-tight">
          Read trusted reviews from our customers
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See what our clients say about their experience working with us
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900/50 dark:to-red-950/20 rounded-2xl mx-auto text-white p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8 items-start mt-10">
          <div className="lg:col-span-1">
            <Card className="p-6 text-center border dark:bg-[#FFFFFF0A]">
              <CardContent className="p-0">
                <div className="text-6xl font-bold text-foreground mb-4">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(averageRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6">Based on {totalReviews}+ reviews</p>

                <div className="flex justify-center -space-x-3">
                  <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={siteInfo.people} />
                  </div>
                </div>
                <h3 className="font-semibold">Customer experiences that <br/> speak for themselves</h3>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <Card className="border-0 shadow-none bg-transparent">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="text-2xl border rounded-full p-1">{testimonial.logo}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{testimonial.company}</h3>
                            <div className="flex gap-1 mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>

                        <blockquote className="text-lg leading-relaxed text-muted-foreground mb-8 relative">
                          
                          <span className="relative z-10">{testimonial.text}</span>
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <img className="size-14 rounded-full" src={testimonial.author.avatar}/>
                          <div>
                            <div className="font-semibold text-foreground text-lg">{testimonial.author.name}</div>
                            <div className="text-muted-foreground">{testimonial.author.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-end mt-2">
                <div className="flex gap-2">
                  <CarouselPrevious className="relative text-black dark:text-white inset-0 translate-y-0 h-10 w-10" />
                  <CarouselNext className="relative inset-0 text-black dark:text-white translate-y-0 h-10 w-10" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
