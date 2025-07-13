'use client';

import { createContext, useContext, useState,useEffect } from 'react';
import hotels from "../hotelsDB"

const HotelContext = createContext();

export function HotelContextProvider({ children}) {
    const [hotelDetails, setHotelDetails] = useState([]);
    const [hotel, setHotel] = useState({})

    const [queryParams ,setQueryParams] = useState({})

    const [loading, setLoading] = useState(false)


    console.log("hotelDetails",hotelDetails)

    function getHotelDetails(details) {
      console.log("DETAILS IN CONTEXT",details)
        setLoading(true)
        if (details) {
        const { city, checkin, checkout, guests } = details;

        const hotelFromJSON = hotels?.filter(hotelObject => hotelObject.city === city);
  
        const enrichedHotel = [ ...hotelFromJSON];
    
        for(let i=0;i<hotelFromJSON.length;++i) {
          enrichedHotel[i].hotelsCount = hotelFromJSON[i].length;
          enrichedHotel[i].contactInfo = hotelFromJSON[i].contactInfo
          enrichedHotel[i].email = hotelFromJSON[i].email
          if (checkin) enrichedHotel[i].checkin = checkin;
          if (checkout) enrichedHotel[i].checkout = checkout;
          if (guests) enrichedHotel[i].guests = guests;
          const checkInDate = new Date(checkin);
          const checkOutDate = new Date(checkout);
          const diffTime = checkOutDate - checkInDate;
          const nights = diffTime / (1000 * 60 * 60 * 24);
          if (nights > 0) enrichedHotel[i].duration = nights;
        }
        setHotelDetails(enrichedHotel);
    }
    }


    useEffect(()=>{
        getHotelDetails(queryParams)
        let timer = setTimeout(()=>{
          setLoading(false)
        },500)

        return ()=>{
          clearTimeout(timer)
        }
    },[queryParams])

  return (
    <HotelContext.Provider value={{ hotelDetails, setHotelDetails,queryParams,setQueryParams,loading,setHotel,hotel }}>
      {children}
    </HotelContext.Provider>
  );
}

export function useHotelContext() {
  return useContext(HotelContext);
}