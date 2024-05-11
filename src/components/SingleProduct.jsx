import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../context/productContext';
function SingleProduct() {
    const {key} = useParams();
    const products = useProducts();
    let product = products.find(pdt => pdt.id == key);
    console.log(product);
    const {images} = product;
    
  return (
    <>
    <div className='bg-slate-600'>
        <h2 className="text-3xl px-3 font-bold text-white py-3">{product.title}</h2>
        <div className="flex justify-center gap-2 px-2 my-2 max-h-[300px]">
            {images.map((img) => {
                return (<div className='border-red-500'>
                    <img src={img} alt="" className='h-full w-full shadow-md rounded-md'/>
                </div>
                )
            })}
        </div>
        <h1 className='text-white p-2 font-bold'>Desc: {product.description}</h1>
        <h2 className='text-white p-2 font-bold'>Price: {product.price} $</h2>
        <h2 className='text-white p-2 font-bold'>Discount: {product.discountPercentage} %</h2>
        <h2 className='text-white p-2 font-bold'>Rating: {product.rating} / 5</h2>
        <div className='flex justify-center items-center gap-4'>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add To Cart</button>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
        </div>
    </div>
    
        
    </>
  )
}

export default SingleProduct