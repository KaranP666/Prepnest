'use client'

import { useRouter } from 'next/navigation'
import { logoutUser } from '@/lib/actions/auth.action'
import { startTransition } from 'react'

const LogoutButton = () => {
  const router = useRouter()

  const handleLogout = () => {
    startTransition(async () => {
      await logoutUser()
      router.push('/sign-in')
    })
  }

  return (
    <button
      onClick={handleLogout}
      className="ml-auto px-4 py-2 text-sm font-bold text-user-primary hover:underline"
    >
      Logout
    </button>
  )
}

export default LogoutButton
