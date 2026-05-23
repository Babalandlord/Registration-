'use client'

import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { EventDetails } from '@/components/EventDetails'
import { RegistrationSection } from '@/components/RegistrationSection'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <EventDetails />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  )
}
