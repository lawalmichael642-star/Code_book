import React from 'react'
import { product } from '../data/Product'
import Productcard from '../Components/elements/Productcard'

const Home = () => {
  return (
    <section className='mx-auto max-w-6xl'>
     <div className='mb-8 rounded-3xl bg-linear-to-r from-slate-950 to-slate-800 p-8  text-white shadow-xl shadow-slate-400/10 '>
          <h2 className='text-4xl font-semibold'> lesson 1:project structure </h2>
          <p className='mt-3 max-w-2xl text-slate-200'>
          This lesson establishes the folder layout and the first working UI shell
          </p>
     </div>
     <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {products.map((product)=>(
               <Productcard key={product.id} product={product}/>
          ))}

     </div>
    </section>
  )
}

export default Home
