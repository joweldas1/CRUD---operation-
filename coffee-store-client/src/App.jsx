
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import CoffeeCards from './Component/CoffeeCards';
import { useState } from 'react';

function App() {
  const coffees=useLoaderData()
  const [rCoffee,setCoffee]=useState(coffees)

  

  return (
    <>
    <Navbar/>
    <div className='md:w-4/5 mx-auto'>
      <h1 className='text-center'>Our Coffee Categories : {rCoffee.length} </h1>
     <div className='md:grid grid-cols-2 space-y-3 gap-4 sm:space-y-6 md:space-y-0   border-red-500 '>
     {
        rCoffee.map((coffee)=> <CoffeeCards key={coffee._id} coffee={coffee} rCoffee={rCoffee}  setCoffee={setCoffee} ></CoffeeCards>  )
      }
     </div>
    </div>
 
    </>
  )
}

export default App
