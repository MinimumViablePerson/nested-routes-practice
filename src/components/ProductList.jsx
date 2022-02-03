import { Outlet } from 'react-router-dom'

export function ProductList () {
  return (
    <div>
      <Outlet />
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  )
}
