import * as React from 'react'
import { Outlet } from '@tanstack/react-router'

import { router } from './router'

console.log(router.state)

export function App() {
  console.log(router.state)

  return (
    // Build our routes and render our router
    <>
      <div>
        <router.Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </router.Link>{' '}
        <router.Link
          to="/posts"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Posts
        </router.Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}