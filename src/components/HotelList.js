import React, { useState } from 'react';
import HotelCard from './HotelCard';
import hotelData from './hotelData.json';
function HotelList() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleHotels, setVisibleHotels] = useState(3);

  const filteredHotels = hotelData.filter((hotel) => hotel.city === hotelData[activeTab].city);
  return (
    <div className='bg-[#f4f4fd] pb-5'>

    <div className="container mx-auto p-4">
      <div className="flex">
        {hotelData.slice(0, 4).map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full mx-2 ${
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

      <div className='flex justify-center items-center '>
  <button
    className="bg-blue-500 text-white p-2 mt-4 rounded-full"
    onClick={() => setVisibleHotels(visibleHotels + 3)}
  >
    Show More
  </button>
</div>

    </div>
        </div>
  );
}

export default HotelList;