'use client';

import { createContext, useContext, useState,useEffect } from 'react';
import hotels from "../hotelsDB"

const HotelContext = createContext();

export function HotelContextProvider({ children}) {
    const [hotelDetails, setHotelDetails] = useState([]);

    const [queryParams ,setQueryParams] = useState({})

    function getHotelDetails(details) {
    if (details) {
        const { city, checkin, checkout, guests } = details;

        const hotelFromJSON = hotels?.filter(hotelObject => hotelObject.city === city);

        if (hotelFromJSON.length > 0) {
        const enrichedHotel = { ...hotelFromJSON[0] };

        enrichedHotel.hotelsCount = hotelFromJSON.length;

        if (checkin) enrichedHotel.checkin = checkin;
        if (checkout) enrichedHotel.checkout = checkout;
        if (guests) enrichedHotel.guests = guests;

        const checkInDate = new Date(checkin);
        const checkOutDate = new Date(checkout);
        const diffTime = checkOutDate - checkInDate;
        const nights = diffTime / (1000 * 60 * 60 * 24);
        if (nights > 0) enrichedHotel.duration = nights;

        setHotelDetails(enrichedHotel);
        }
    }
    }


    useEffect(()=>{
        getHotelDetails(queryParams)
    },[queryParams])

  return (
    <HotelContext.Provider value={{ hotelDetails, setHotelDetails,queryParams,setQueryParams }}>
      {children}
    </HotelContext.Provider>
  );
}

export function useHotelContext() {
  return useContext(HotelContext);
}