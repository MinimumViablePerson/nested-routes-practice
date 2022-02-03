import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { ProductDetails } from './components/ProductDetails'
import { ProductList } from './components/ProductList'
import { TweetList } from './components/TweetList'
import { About } from './pages/About'
import { Home } from './pages/Home'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/home/products/:id'
          element={<h2>Product Details Header 😮</h2>}
        />
        <Route path='/about' element={<h2>About header 😳</h2>} />
        <Route path='*' element={<Header />} />
      </Routes>

      <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />}>
          <Route path='products' element={<ProductList />}>
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='tweets' element={<TweetList />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </div>
  )
}

export default App
