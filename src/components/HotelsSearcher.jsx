"use client"

import styles from "../styles/hotels_searcher.module.css"
import date_picker from "../assets/date_picker.svg"
import guests from "../assets/guests.svg"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation";
import HotelCitiesSuggestions from "../components/HotelCitiesSuggestions"
import search_icon from "../assets/search_icon.svg"
import Button from "./Button"

export default function HotelsSearcher() {
  
    const [hotelDetails, setHotelDetails] = useState({
        city:"",
        checkIn:"",
        checkOut:"",
        guests:1
    })
    const [error, setError] = useState({
        city:"",
        checkIn:"",
        checkOut:"",
        guests:""
    })
    const [citySuggestions, setCitySuggestions] = useState([])

    const router = useRouter();

    function handleChange(e) {
        const stateCopy=structuredClone(hotelDetails)
        stateCopy[e.target.name]=e.target.value
        const errorStateCopy = structuredClone(error)
        errorStateCopy[e.target.name] = ""
        setError(errorStateCopy)
        setHotelDetails(stateCopy)

    }

    function getNextDate() {
        if(hotelDetails.checkIn.length>0) {
            const checkInDate = new Date(hotelDetails.checkIn);
            const nextDay = new Date(checkInDate);
            nextDay.setDate(checkInDate.getDate() + 1);
            const nextDayStr = nextDay.toISOString().split("T")[0];
            return nextDayStr
        }
    }

    function validate() {
        let flag=true
        const keys=Object.keys(hotelDetails)
        const errorCopy=structuredClone(error)
        for(const key of keys) {
            if(hotelDetails[key]==="" && (key==="checkIn" || key==="checkOut")) {
                errorCopy[key]=`Please select ${key} date`
                flag=false
            }
            else if(hotelDetails[key]==="" && key==="city"){
                errorCopy[key]=`Please select a ${key}`
                flag=false
            }
        }
        if(flag) {
            return true
        }
        else {
                Object.keys(errorCopy).length>0 ?setError(errorCopy):""
                return false
        }
    }

    function handleSubmitClick() {
       const result=validate(hotelDetails)
        if (result) {
        const searchParams = new URLSearchParams({
            city: hotelDetails.city,
            checkin: hotelDetails.checkIn,
            checkout: hotelDetails.checkOut,
            guests: hotelDetails.guests.toString(),
        })

        router.push(`/hotels?${searchParams.toString()}`)
    }
}

        function getLocalDateYYYYMMDD() {
        const today = new Date();
        const tzOffset = today.getTimezoneOffset() * 60000; // in ms
        const localISOTime = new Date(today - tzOffset).toISOString().split("T")[0];
        return localISOTime;
        }


    function handleBlur(e) {
        const stateCopy=structuredClone(error)
        hotelDetails[e.target.name]==="" ? stateCopy[e.target.name]=`Please select ${e.target.name} date` : ""
        setError(stateCopy)
    }

    return (
        <div className={styles.hotel_searcher_container}>
            <h3 className={styles.main_text}>Search Hotels</h3>
            <div className={styles.details_container}>
                <HotelCitiesSuggestions hotelDetails={hotelDetails} setHotelDetails={setHotelDetails} error={error} setError={setError} citySuggestions={citySuggestions} setCitySuggestions={setCitySuggestions}/>
                <div className={styles.input_container} id="check-in">
                    <div className={styles.label_container}>
                        <Image
                        src={date_picker}
                        alt="location__logo_in_hotel_detail"
                        width={20}
                        height={20}
                        />
                    <label htmlFor="checkIn">
                        Check-in
                     </label>
                        </div>
                    <input type="date" id="checkIn" onChange={handleChange} value={hotelDetails.checkIn} name="checkIn" min={getLocalDateYYYYMMDD()}
                    onBlur={handleBlur}
                    />
                     <p className={styles.error}>{error.checkIn.length>0 && error.checkIn}</p>
                </div>
                <div className={styles.input_container} id="check-out">
                    <div className={styles.label_container}>
                         <Image
                        src={date_picker}
                        alt="location__logo_in_hotel_detail"
                        width={20}
                        height={20}
                        />
                    <label htmlFor="checkOut">
                        Check-out
                    </label>
                        </div>
                    <input type="date" id="checkOut"  onChange={handleChange} value={hotelDetails.checkOut} name="checkOut" min={getNextDate()}
                    onBlur={handleBlur}
                    />
                    <p className={styles.error}>{error.checkOut.length>0 && error.checkOut}</p>
                </div>
                <div className={styles.input_container} id="guests">
                    <div className={styles.label_container}>
                          <Image
                        src={guests}
                        alt="location__logo_in_hotel_detail"
                        width={20}
                        height={20}
                        />
                    <label htmlFor="Guests">
                        Guests
                    </label>
                        </div>
                    <select id="Guests" onChange={handleChange} value={hotelDetails.guests} name="guests"
                    >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                    </select>
                </div>
            </div>
            <Button  onClick={handleSubmitClick} styleType="gradient" buttonText="Search Hotels" imageSrc={search_icon}/>
        </div>
    )
}