import './Home.css';
import React from 'react';
import Room from '../Room/Room';


function Home() {
  const rooms = [
    {
      title: 'Standard Single Room',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, perferendis',
      imgUrl: 'https://cf.bstatic.com/images/hotel/max1280x900/169/169284637.jpg',
      bed: 1,
      capacity: 1,
      bedType: 'Single',
      avatar: 'S',
      price: 119,
    },
    {
      title: 'Couple Power Room',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, deleniti',
      imgUrl: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg',
      bed: 1,
      capacity: 2,
      bedType: 'Couple',
      avatar: 'D',
      price: 149,
    },
    {
      title: 'Family Capacity Room',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7SibKzGoGiArsmc3IEisXku6rsQmoSvCJA&usqp=CAU',
      bed: 2,
      capacity: 4,
      bedType: 'Family',
      avatar: 'F',
      price: 199,
    },
  ]

    return (
    <div className="Home">
      <div className="container">
        <div className="cards">
          { rooms.map((room, idx) => <Room key={idx} room={room} />) }
        </div>
      </div>
    </div>
  )
}

export default Home;