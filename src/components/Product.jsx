import React from 'react'
import { useProducts } from '../context/productContext'
import { Link } from 'react-router-dom';
function Product() {
  let products = useProducts();
  return (
    <>
      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4 p-2 bg-gray-700'>

        {products.map(product => {
          return (
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={product.id}>
              <Link to={`/${product.id}`}>
                <img class="p-8 rounded-t-lg h-[300px] w-[400px]" src={product.images[0]} alt="product image" />
                </Link>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <div className="text-lg text-gray-800 dark:text-white">
                  {product.description}
                </div>
                <div class="flex items-center justify-between my-2">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.price}$</span>
                  <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
              </div>
            </div>

          )
        })}
      </div>

    </>
  )
}

export default Product