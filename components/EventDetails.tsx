export function EventDetails() {
  return (
    <section id="event-details" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            About the Event
          </h2>
          <p className="text-lg text-purple-200">
            Everything you need to know about Ritarock Educonsult Hangout
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Event Info Card */}
          <div className="glass-purple p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Event Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-purple-200 text-sm">📅 Date</p>
                <p className="text-white text-lg font-semibold">August 8, 2026</p>
              </div>
              <div>
                <p className="text-purple-200 text-sm">⏰ Time</p>
                <p className="text-white text-lg font-semibold">10:00 AM till mama calls</p>
              </div>
              <div>
                <p className="text-purple-200 text-sm">📍 Location</p>
                <p className="text-white text-lg font-semibold">AGodi Gardens</p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="glass-gold p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">What to Expect</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-white text-3xl sm:text-4xl font-bold text-center">
                Fun fun funnnn 🎉
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
