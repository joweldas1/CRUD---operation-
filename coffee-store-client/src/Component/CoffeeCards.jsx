import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const CoffeeCards = ({coffee ,rCoffee , setCoffee}) => {
    const {name,supplier,category,chef,taste,details,image,price,_id} =coffee;

    

    const handleDelete=_id=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://coffee-store-server-fawn-mu.vercel.app/coffee/${_id}`,{
            method:'DELETE',
          })
          .then(res=>res.json())
          .then(data=>{    console.log(data);

          
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }); 
              if(data.deletedCount>0){
                const remain=rCoffee.filter(r=>r._id!==_id);
                setCoffee(remain)

            }
            
          })
        }
      });

    
    }
  return (
    <div >
      <div className="card card-side w-full h-full bg-purple-400 shadow-xl">
      
        <div className="flex items-center justify-around  w-full ">
        <figure>
          <img src={image} className="w-36 h-36 "/>
        </figure>
            <div className="">
                <h2 className="font-semibold">Name : <span className="font-normal">{name}</span></h2>
                <h2 className="font-semibold">Chef : <span className="font-normal"> {chef}</span> </h2>
                <h2 className="font-semibold">Price :<span className="font-normal">{price}</span></h2>
                <h2 className="font-semibold">supplier :<span className="font-normal">{supplier     }</span></h2>
            </div>
            <div>
                <div className="join join-vertical space-y-2 my-5 px-3  ">
                <button className="btn join-item">view</button>
                <Link to={`updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                <button 
                onClick={()=>handleDelete(_id)}
                 className="btn join-item">Delete</button>
                </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
