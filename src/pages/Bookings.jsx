import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings , setBookings] = useState([])
    const url =`http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() =>{

      axios.get(url ,{withCredentials:true})
      .then(res =>{
        setBookings(res.data)
      })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    },[url])

    const handleDelete = id =>{
      const process = confirm('are you sure want to delete')
      if(process){

          fetch(`http://localhost:5000/bookings/${id}`,{
             method:'DELETE' 
          })
          .then(res => res.json())
          .then(data =>{
              console.log(data)
              if(data.deletedCount > 0){
                  alert('deleted successfully')
                  const remaining =bookings.filter(booking =>booking._id !== id)
                  setBookings(remaining)
                
              }
          })
      }
  } 

  const handleConfirm =id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify({status:'confirm'})
    })

    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount > 0){
        // update status
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'confirm'
        const newBookings = [updated,...remaining];
        setBookings(newBookings)
      }
    })
  }

    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-4">My bookings:{bookings.length}</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>img</th>
        <th>name</th>
        <th>date</th>
        <th>price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            bookings.map(booking =><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}
              handleConfirm={handleConfirm}></BookingRow>)
        }
      
     
    
     
    </tbody>
   
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Bookings