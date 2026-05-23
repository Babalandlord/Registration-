'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Registration {
  id: string
  full_name: string
  email: string
  phone_no: string
  sex: string
  corper_status: string
  state_of_residence: string
  created_at: string
}

type ViewType = 'card' | 'table'

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [viewType, setViewType] = useState<ViewType>('card')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }

    fetchRegistrations()
  }, [router])

  useEffect(() => {
    const filtered = registrations.filter((reg) =>
      reg.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.phone_no.includes(searchTerm)
    )
    setFilteredRegistrations(filtered)
  }, [searchTerm, registrations])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/admin/registrations')
      if (!response.ok) {
        if (response.status === 401) {
          router.push('/admin/login')
          return
        }
        throw new Error('Failed to fetch registrations')
      }
      const data = await response.json()
      setRegistrations(data.registrations)
      setTotalCount(data.count)
    } catch (error) {
      console.error('Error fetching registrations:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleExportCSV = () => {
    const csv = [
      ['Full Name', 'Email', 'Phone', 'Sex', 'Corper Status', 'State', 'Registration Date'],
      ...filteredRegistrations.map((reg) => [
        reg.full_name,
        reg.email,
        reg.phone_no,
        reg.sex,
        reg.corper_status,
        reg.state_of_residence,
        new Date(reg.created_at).toLocaleDateString(),
      ]),
    ]
    const csvContent = csv.map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'registrations.csv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Event Attendees</h1>
            <p className="text-purple-200">View and manage all registered participants</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <div className="flex gap-2">
              <Button 
                onClick={() => setViewType('card')}
                className={`text-sm px-4 py-2 rounded-lg transition-all ${viewType === 'card' ? 'btn-primary' : 'bg-purple-500/20 text-purple-200 hover:bg-purple-500/30'}`}
              >
                Grid View
              </Button>
              <Button 
                onClick={() => setViewType('table')}
                className={`text-sm px-4 py-2 rounded-lg transition-all ${viewType === 'table' ? 'btn-primary' : 'bg-purple-500/20 text-purple-200 hover:bg-purple-500/30'}`}
              >
                Table View
              </Button>
            </div>
            <Button onClick={handleExportCSV} className="btn-secondary text-sm">
              📥 Export CSV
            </Button>
            <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white">
              Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="glass-purple p-6 rounded-xl mb-8">
          <div className="text-4xl font-bold text-yellow-400">{totalCount}</div>
          <p className="text-purple-200 mt-2">Total Registrations</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <Input
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="glass-purple bg-purple-500/5 border-purple-400/30 text-white placeholder:text-purple-300/50 max-w-md"
          />
        </div>

        {/* Views */}
        {viewType === 'card' ? (
          // Card View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredRegistrations.length > 0 ? (
              filteredRegistrations.map((reg) => (
                <div key={reg.id} className="glass-purple p-6 rounded-xl hover:bg-purple-500/20 transition-all">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{reg.full_name}</h3>
                    <p className="text-purple-200 text-sm">{reg.email}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">Phone:</span>
                      <span className="text-white font-medium">{reg.phone_no}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">Gender:</span>
                      <span className="text-white font-medium">{reg.sex}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">State:</span>
                      <span className="text-white font-medium">{reg.state_of_residence}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-purple-400/20">
                      <span className="text-purple-200 text-sm">Status:</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          reg.corper_status === 'Yes'
                            ? 'bg-green-500/30 text-green-200'
                            : 'bg-orange-500/30 text-orange-200'
                        }`}
                      >
                        {reg.corper_status === 'Yes' ? 'Corper' : 'Ex-Corper'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-purple-400/20">
                    <p className="text-purple-300 text-xs">
                      Registered: {new Date(reg.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-purple-200 text-lg">No registrations found matching your search.</p>
              </div>
            )}
          </div>
        ) : (
          // Table View
          <div className="glass-purple rounded-xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-400/20 bg-purple-500/10">
                    <th className="px-6 py-4 text-left text-purple-200 font-semibold">Name</th>
                    <th className="px-6 py-4 text-left text-purple-200 font-semibold">Email</th>
                    <th className="px-6 py-4 text-left text-purple-200 font-semibold">Phone</th>
                    <th className="px-6 py-4 text-left text-purple-200 font-semibold">Gender</th>
                    <th className="px-6 py-4 text-left text-purple-200 font-semibold">State</th>
                    <th className="px-6 py-4 text-left text-purple-200 font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-purple-200 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRegistrations.length > 0 ? (
                    filteredRegistrations.map((reg) => (
                      <tr
                        key={reg.id}
                        className="border-b border-purple-400/10 hover:bg-purple-500/10 transition-colors"
                      >
                        <td className="px-6 py-4 text-white font-medium">{reg.full_name}</td>
                        <td className="px-6 py-4 text-purple-200 text-sm">{reg.email}</td>
                        <td className="px-6 py-4 text-purple-200">{reg.phone_no}</td>
                        <td className="px-6 py-4 text-purple-200">{reg.sex}</td>
                        <td className="px-6 py-4 text-purple-200">{reg.state_of_residence}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              reg.corper_status === 'Yes'
                                ? 'bg-green-500/30 text-green-200'
                                : 'bg-orange-500/30 text-orange-200'
                            }`}
                          >
                            {reg.corper_status === 'Yes' ? 'Corper' : 'Ex-Corper'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-purple-200 text-sm">
                          {new Date(reg.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-purple-200">
                        No registrations found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-8">
          <Link href="/" className="text-purple-200 hover:text-purple-100 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
