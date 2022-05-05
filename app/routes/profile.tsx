import { Outlet } from '@remix-run/react'
import React from 'react'

const profile = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default profile