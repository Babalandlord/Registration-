export function HeroSection() {
  return (
    <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium">
            ✨ Join us for an unforgettable experience
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up text-balance leading-tight">
          Ritarock Educonsult <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">Hangout</span>
        </h1>

        <p className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto animate-fade-in-up text-pretty">
          Join us for a fun hangout and networking experience. Connect with friends, have a great time, and make memories!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
          <a href="#register" className="btn-primary inline-block">
            Register Now
          </a>
          <a href="#event-details" className="glass-purple inline-block px-6 py-3 rounded-lg text-white font-semibold hover:bg-purple-500/20 transition-all">
            Learn More
          </a>
        </div>


      </div>
    </div>
  )
}
