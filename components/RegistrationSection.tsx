import { RegistrationForm } from './RegistrationForm'

export function RegistrationSection() {
  return (
    <section id="register" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Register for the Event
          </h2>
          <p className="text-lg text-purple-200">
            Secure your spot at Ritarock Educonsult Hangout today
          </p>
        </div>

        <div className="glass-purple p-8 md:p-12 rounded-2xl">
          <RegistrationForm />
        </div>

        <p className="text-center text-purple-200 text-sm mt-8">
          We&apos;ll send you a confirmation email with event details and updates.
        </p>
      </div>
    </section>
  )
}
