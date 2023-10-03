import React, { useState } from 'react';
import HotelCard from './HotelCard';
import hotelData from './hotelData.json'; // Import the JSON data

function HotelList() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleHotels, setVisibleHotels] = useState(3);

  const filteredHotels = hotelData.filter((hotel) => hotel.city === hotelData[activeTab].city);
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        {hotelData.slice(0, 4).map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.city}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {filteredHotels.slice(0, visibleHotels).map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <button
        className="bg-blue-500 text-white p-2 mt-4"
        onClick={() => setVisibleHotels(visibleHotels + 3)}
      >
        Show More
      </button>
    </div>
  );
}

export default HotelList;