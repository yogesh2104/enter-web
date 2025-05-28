import { type LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface Button {
  text: string
  href: string
  variant: "primary" | "secondary"
}

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface HeroSectionProps {
  title: string
  description: string
  buttons: Button[]
  features: Feature[]
  gradientFrom?: string
  gradientTo?: string
}

export default function HeroSection({
  title,
  description,
  buttons = [],
  features = [],
}: HeroSectionProps) {
  const getButtonClasses = (variant: "primary" | "secondary") => {
    const baseClasses = "flex items-center h-12 px-6 rounded-full transition-all duration-200 font-medium"

    if (variant === "primary") {
      return `${baseClasses} bg-primary text-white dark:border shadow-lg hover:shadow-xl`
    }

    return `${baseClasses} text-black bg-gray-100 dark:border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700`
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="Tech Background"
          className="w-full h-[80vh] md:h-[90vh] object-cover dark:opacity-70 opacity-100 md:rounded-2xl"
        />
      </div>

      <div className="relative mx-auto pt-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
          <div className="space-y-6">
          <h1 className="text-white dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
              {title}
          </h1>
          <p className="text-white dark:text-gray-300 mx-auto max-w-xl text-lg lg:text-xl">{description}</p>
          </div>

          <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
              {buttons.map((button, index) => (
                  <Link key={index} to={button.href} className={getButtonClasses(button.variant)}>
                  {button.text}
                  </Link>
              ))}
          </div>

          <div className="text-left grid grid-cols-1 lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const isMiddle = features.length === 3 && index === 1
                const isLast = index === features.length - 1

                return (
                <div
                  key={index}
                  className={`flex items-start gap-6 ${
                  isMiddle ? "lg:px-6 py-6 lg:py-0" : isLast ? "pt-6 lg:pt-0 lg:pl-6" : "lg:pr-6 pb-6 lg:pb-0"
                  }`}
                >
                  <div className="w-10 flex-shrink-0">
                    <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                      <Icon className="w-6 h-6" />
                    </span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h2 className="text-gray-900 dark:text-white font-semibold text-lg">{feature.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              )
              })}
          </div>
      </div>

    </section>
  )
}
