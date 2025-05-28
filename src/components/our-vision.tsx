import { Button } from "./ui/button"
import { useNavigate } from 'react-router-dom';
import { Logo } from "./header";


export const OurVision=()=>{
    const navigate = useNavigate();

    const handleContactClick = () => {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('open-contact', 'true');
        navigate(`${currentUrl.pathname}${currentUrl.search}`, { replace: true });
    };


    return(
      <section className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900/50 dark:to-red-950/20 p-8 md:p-12 rounded-2xl shadow-sm text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full -translate-y-16 translate-x-16 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-300/20 to-orange-300/20 rounded-full translate-y-12 -translate-x-12 animate-float-delay"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-bounce-slow">
                <Logo/>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-slide-up text-gray-800 dark:text-gray-100">Our Vision</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 animate-slide-up-delay text-gray-600 dark:text-gray-300">
              To be the trusted technology partner for businesses worldwide — delivering innovative, reliable, and
              secure IT solutions that power growth and resilience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2">
              {/* <Button
                size="lg"
                className="bg-[#b04839] hover:bg-[#a03d32] text-white group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Digital Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              <Button
                variant="outline"
                size="lg"
                className="border-[#b04839] text-[#b04839] hover:bg-[#b04839] hover:text-white dark:border-[#b04839] dark:text-[#b04839] dark:hover:bg-[#b04839] dark:hover:text-white transition-all duration-300 hover:scale-105"
                onClick={handleContactClick}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}