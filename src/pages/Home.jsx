import { Outlet } from 'react-router-dom'

export function Home () {
  return (
    <main>
      <h2>Home!</h2>
      <p>Welcome to our home page.</p>

      <Outlet />

      <p>Some other stuff</p>
    </main>
  )
}
