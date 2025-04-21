import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'
import React from 'react'

const page = async() => {
 const user = await getCurrentUser();


  return (
    <>
    <h3>Interview Generation</h3>
    {/* job of agent is to take the info from user to know what kind of interview are we planning to generate */}
    <Agent userName={user?.name} userId={user?.id}  type="generate" />
    </>
  )
}

export default page