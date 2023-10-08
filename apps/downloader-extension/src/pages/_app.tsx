import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <main className="wrapper">
      <header>The header</header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Outlet />
    </main>
  )
}
