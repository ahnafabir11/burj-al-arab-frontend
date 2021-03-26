import './Book.css';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Button } from '@material-ui/core';

function Book() {
  const {type} = useParams();
  const [loggedInUser, ] = useContext(UserContext);

  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date()
  });
  const handleCheckIn = (date)=> {
    const newDates = {...selectedDate};
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };
  const handleCheckOut = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkOut = date;
    setSelectedDate(newDates);
  };
  const handleBooking = ()=> {
    const newBooking = {...loggedInUser, ...selectedDate};
    fetch(`http://localhost:5000/addBooking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newBooking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <div className="Book">
      <h2 className="text-center">Hello, {loggedInUser.name}</h2>
      <h3 className="text-center">Let's Book {type} Bed Room</h3>
      <p className="text-center">Want to Book <Link to="/">another</Link> room ?</p>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Check In"
            value={selectedDate.checkIn}
            onChange={handleCheckIn}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Check Out"
            format="dd/MM/yyyy"
            value={selectedDate.checkOut}
            onChange={handleCheckOut}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
        <Button onClick={handleBooking} variant="contained" color="primary">Book Now</Button>
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default Book;