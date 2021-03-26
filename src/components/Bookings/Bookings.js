import './Bookings.css';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

function Bookings() {
  const [loggedInUser,] = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${loggedInUser.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => setBookings(data))
  }, [loggedInUser.email])
  
  return (
    <div className="Bookings">
      <h3 className="text-center">You have: {bookings.length}</h3>
      <ul>
      {
        bookings.map((book, idx) => 
          <li key={idx}>
            {book.name} || 
             from: {new Date(book.checkIn).toDateString()} ||
             to: {new Date(book.checkOut).toDateString()}
          </li>
        )
      }
      </ul>
    </div>
  )
}

export default Bookings;
