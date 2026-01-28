import { ArrowRight } from "lucide-react"
import Button from "../components/Button"


const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 tp-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {
          [...Array(30)].map((_, i) => (
            <div
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgrondColor: "#20b2a6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${
                  15 + Math.random() * 20
                }s ease-in-out infinite`,
                animationDelay:  `${Math.random() * 5}s`,
              }}
            />             
          ))
        }
      </div>

      {/* Content */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Software Engineer - React Specialist
                
              </span>
            </div>

            {/* HeadLine */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafiting <span className="text-primary glow-text">Digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Hello, I'm Nemoto Mailon = a software engineer specializing in React, Next.js and Typescript. I build scalable, performat web application that users love.
              </p>
            </div>
            {/* CTA */}
            <div className="">
              <Button size="lg">Contact Me <ArrowRight className="w-5 h-5" /></Button>
              
              <button className="">
                {/* Animated SVG Border */}
                <svg
                  className="absolute left-0 top-0 w-full h-full pointer-events"
                  viewBox=""
                  preserveAspectRatio="none"
                  style={{ overflow: "visible"}}
                >
                  <path
                    d=""
                    fill="none"
                    stroke=""
                    strokeWidth=""
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Right Column - Profile Image */}
        </div>
      </div>
    </section>
  )
}

export default Hero

