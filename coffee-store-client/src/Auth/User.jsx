import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Swal from "sweetalert2";

const User = () => {
  const userLoader = useLoaderData();
  const[user,setUser]=useState(userLoader)
  const handleDelete = id=> {
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        background:'purple',
        color:'white',
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://coffee-store-server-fawn-mu.vercel.app/user/${id}`,{
                method:"DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                if(data.deletedCount>0){
                    const remain=user.filter(u=>u._id!==id)
                    setUser(remain)
                }
                console.log(data);
              });
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }



      
      });


    
  };



  console.log(userLoader);
  return (
    <div>
      <Navbar />
      <h1>Total user {userLoader.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>CreateAT</th>
              <th>lastLoggedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((u, idx) => (
              <tr key={u._id}>
                <th>{idx + 1}</th>
                <td>{u.email}</td>
                <td>{u.createdAT}</td>
                <td>{u.lastLoggedAt}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(u._id)}
                    className="btn btn-ghost"
                  >
                    X
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
