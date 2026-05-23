'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  sex: z.enum(['Male', 'Female', 'Other']),
  corperStatus: z.enum(['Yes', 'No']),
  stateOfResidence: z.string().min(2, 'Please select a state'),
})

type RegistrationFormData = z.infer<typeof registrationSchema>

const states = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'Federal Capital Territory', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger',
  'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
  'Taraba', 'Yobe', 'Zamfara'
]

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  })

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Registration failed')
      }

      toast({
        title: 'Success!',
        description: 'Registration successful. Check your email for confirmation.',
      })
      reset()
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Registration failed',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-purple-200">
            Full Name
          </Label>
          <Input
            id="fullName"
            placeholder="Your full name"
            className="glass-purple bg-purple-500/5 border-purple-400/30 text-white placeholder:text-purple-300/50"
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="text-sm text-red-400">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-purple-200">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="glass-purple bg-purple-500/5 border-purple-400/30 text-white placeholder:text-purple-300/50"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-purple-200">
            Phone Number
          </Label>
          <Input
            id="phone"
            placeholder="+234 (0) 123 456 7890"
            className="glass-purple bg-purple-500/5 border-purple-400/30 text-white placeholder:text-purple-300/50"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="sex" className="text-purple-200">
            Sex
          </Label>
          <select
            id="sex"
            className="glass-purple w-full bg-purple-500/5 border border-purple-400/30 text-white rounded-lg px-4 py-2"
            {...register('sex')}
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.sex && (
            <p className="text-sm text-red-400">{errors.sex.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="corperStatus" className="text-purple-200">
            Are you a Corper?
          </Label>
          <select
            id="corperStatus"
            className="glass-purple w-full bg-purple-500/5 border border-purple-400/30 text-white rounded-lg px-4 py-2"
            {...register('corperStatus')}
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.corperStatus && (
            <p className="text-sm text-red-400">{errors.corperStatus.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="stateOfResidence" className="text-purple-200">
            State of Residence
          </Label>
          <select
            id="stateOfResidence"
            className="glass-purple w-full bg-purple-500/5 border border-purple-400/30 text-white rounded-lg px-4 py-2"
            {...register('stateOfResidence')}
          >
            <option value="">Select a state...</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.stateOfResidence && (
            <p className="text-sm text-red-400">{errors.stateOfResidence.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Registering...' : 'Register Now'}
      </Button>
    </form>
  )
}
