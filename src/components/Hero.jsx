import { Link } from "react-scroll"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-[#FFDE21] text-black px-4 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Ride Together,
                <br />
                <span className="text-[#019875]">Earn Together</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-800 max-w-lg">
                Join the future of transportation with <span className="font-semibold text-[#019875]">Cryda</span> —
                where blockchain meets ride-sharing for smarter, safer, and more rewarding journeys.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                disabled
                className="bg-gray-400 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-not-allowed opacity-75 text-center"
              >
                APK Coming Soon
              </button>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="cursor-pointer px-8 py-4 text-[#019875] border-2 border-[#019875] rounded-full text-lg font-semibold hover:bg-[#019875] hover:text-white transition-all duration-300 hover:shadow-lg text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-96">
              <img
                src="/city-driver-pana.svg"
                alt="City driver illustration"
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#019875] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#019875] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
