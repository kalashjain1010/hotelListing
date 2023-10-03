// PropertyPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import HotelCard from './HotelCard';

const hotelData = require('./hotelData.json');

function PropertyPage() {
  const { id } = useParams();
  const hotel = hotelData.find((hotel) => hotel.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <HotelCard hotel={hotel} />
    </div>
  );
}

export default PropertyPage;
