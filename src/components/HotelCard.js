// HotelCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function HotelCard({ hotel }) {
  return (
    <div className="border rounded-lg p-4">
      <Link to={`/property/${hotel.id}`}>
        <img src={hotel.image} alt={hotel.name} className="w-full h-32 object-cover mb-2" />
        <h3 className="text-lg font-semibold">{hotel.name}</h3>
        <p className="text-gray-600">{hotel.location}</p>
        <p className="text-gray-700">${hotel.price} / night</p>
      </Link>
    </div>
  );
}

export default HotelCard;
