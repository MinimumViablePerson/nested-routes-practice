import { useParams } from 'react-router-dom'

export function ProductDetails () {
  const params = useParams()
  return (
    <div>
      <h2>Details for product: {params.id}</h2>
    </div>
  )
}
