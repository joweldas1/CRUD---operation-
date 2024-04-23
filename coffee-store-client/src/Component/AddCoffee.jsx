import React from "react";
import Navbar from "./Navbar";
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleToAddCoffee=e=>{
        e.preventDefault()
        const form=new FormData(e.currentTarget)
        const name = form.get('name')
        const supplier = form.get('supplier')
        const category = form.get('category ')
        const chef= form.get('chef')
        const price= form.get('price')
        const details= form.get('details')
        const image= form.get('image')
        const newCoffee={name,supplier,category,chef,price,details,image}
        console.log(newCoffee  );
        // send data to server
        fetch('https://coffee-store-server-fawn-mu.vercel.app/coffee',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Details Added done',
                    icon: 'success',
                    confirmButtonText: 'close'
                  })
            }
            console.log(data);
        })
    }
  return (
    <div className="">
      <Navbar />

      <div className=" w-full mt-3 lg:mt-10 lg:max-w-5xl bg-[#F4F3F0] mx-auto p-3  
      lg:border-4 filter  border-blue-400">
        <h1 className="font-rancho text-center text-3xl font-semibold filter blur-[0.2px]">Add New Coffee</h1>
        <p className="text-md text-center lg:mx-24 lg:text-sm my-2 font-raleway font-medium ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>


        <form  onSubmit={handleToAddCoffee}>
          <div className="lg:flex justify-center gap-2 ">
            <div className="flex-grow">

              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-semibold">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Coffee Name"
                  className="input input-bordered w-full "
                  name='name'
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Supplier</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Supplier Name"
                  className="input input-bordered w-full"
                  name="supplier"
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Category</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Category Name"
                  className="input input-bordered w-full "
                  name="category"
                />
              </label>

            </div>
            <div className="flex-grow">

              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-semibold">Chef</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Chef Name"
                  className="input input-bordered w-full "
                  name="chef"
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-semibold">Price</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Taste Name"
                  className="input input-bordered w-full "
                  name="Price"
                />
              </label>

              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-semibold">Details</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Coffee Details "
                  className="input input-bordered w-full"
                  name="details"
                />
              </label>
            </div>
          </div>

          <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-semibold">Photo</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full "
                  name="image"
                />
           </label>
           <input type="submit" 
           className="cursor-pointer  py-1 my-3 w-full font-rancho text-3xl font-semibold text-center border-black border-2 bg-[#D2B48C]"
            value='submit'  />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
