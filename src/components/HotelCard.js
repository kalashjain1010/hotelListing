import React from "react";
import { Link } from "react-router-dom";
import { LiaHotelSolid } from "react-icons/lia";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";

function HotelCard({ hotel }) {
  return (
    <div className="border h-auto mt-3 flex flex-wrap rounded-lg p-2 max-w-sm mx-8 bg-white pb-12">
      <Link to={`/property/${hotel.id}`}>
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-3/5 object-cover mb-2 rounded-xl "
        />
        <div className="flex flex-col">
          <h1 className="flex items-center text-justify ml-3">
            <SlLocationPin size={12} className="text-orange-300 m-1" />
            {hotel.location}
          </h1>

          <h3 className="text-xl font-semibold ml-3">{hotel.name}</h3>
          <p className="text-gray-600 ml-3">{hotel.city}</p>

          <div className="flex flex-row flex-wrap px-4 mt-3">
            <div className="border-dashed border-gray-100 border-2 p-1 flex flex-col justify-center text-center mx-3 ">
              <LiaHotelSolid size={20} />3 Room
            </div>
            <div className="border-dashed  border-gray-100  border-2 p-1 flex flex-col justify-center text-center mx-4 ">
              <LiaBedSolid size={20} />4 bed
            </div>
            <div className="border-dashed  border-gray-100  border-2 p-1 flex flex-col justify-center text-center mx-4 ">
              <LiaBathSolid size={20} />1 Bath
            </div>
            <div className="border-dashed border-2  border-gray-100  p-1 flex flex-col justify-center text-center mx-1">
              <LiaExpandArrowsAltSolid size={20} />
              312 sft
            </div>
          </div>
          <div className="text-gray-200">
            ---------------------------------------------------------
          </div>
          <div className="mt-3 flex flex-row flex-wrap justify-between px-6">
            <div className="flex flex-row items-end">
              <div className="text-blue-600 text-xl font-semibold ">
                ${hotel.price}
              </div>
              <div className="text-gray-700"> / night</div>
            </div>
            <div className="border-solid border-2 border-blue-500 rounded-full p-2 text-blue-600 font-semibold hover:bg-gray-100">
              Read More
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HotelCard;
