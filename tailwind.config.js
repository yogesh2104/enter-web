/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    container: {
        center: true,
        padding: '2rem',
        screens: {
            '2xl': '1600px'
        }
    },
    extend: {
        
        borderRadius: {
            xl: "calc(var(--radius) + 4px)",
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
        },
        animation: {
            'spin-slow': 'spin 3s linear infinite',
            marquee: "marquee var(--duration) linear infinite",
            "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
            spotlight: "spotlight 2s ease .75s 1 forwards",
            'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
            "bg-shine": "bg-shine 8s linear infinite"
        },
        keyframes: {
            spin: {
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' },
            },
            marquee: {
                from: { transform: "translateX(0)" },
                to: { transform: "translateX(calc(-100% - var(--gap)))" },
            },
            "marquee-vertical": {
                from: { transform: "translateY(0)" },
                to: { transform: "translateY(calc(-100% - var(--gap)))" },
            },
            spotlight: {
                "0%": {
                  opacity: 0,
                  transform: "translate(-72%, -62%) scale(0.5)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translate(-50%,-40%) scale(1)",
                },
            },
            'shake' : {
                '10%, 90%': {
                    transform: 'translate3d(-1px, 0, 0)'
                },
                '20%, 80%' : {
                    transform: 'translate3d(2px, 0, 0)'
                },
                '30%, 50%, 70%': {
                    transform: 'translate3d(-4px, 0, 0)'
                },
                '40%, 60%': {
                    transform: 'translate3d(4px, 0, 0)'
                }
            },
            "bg-shine": {
                "from": {
                    "backgroundPosition": "0 0"
                },
                "to": {
                    "backgroundPosition": "-200% 0"
                }
            }
        },
        transitionDuration: {
            '2200': '2200ms',
        }
    }
  },
  plugins: [],
}