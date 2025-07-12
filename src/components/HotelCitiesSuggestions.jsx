import styles from "../styles/hotels_searcher.module.css"
import Image from "next/image"
import location from "../assets/location.svg"
import { useEffect } from "react"

export default function HotelCitiesSuggestions({hotelDetails, setHotelDetails, error, setError}) {

    function handleChange(e) {
        const stateCopy=structuredClone(hotelDetails)
        const errorStateCopy = structuredClone(error)
        stateCopy[e.target.name]=e.target.value
        errorStateCopy[e.target.name]=""
        setError(errorStateCopy)
        setHotelDetails(stateCopy)
    }

    function handleBlur(e) {
        const stateCopy=structuredClone(error)
        hotelDetails[e.target.name]==="" ? stateCopy[e.target.name]=`Please select a ${e.target.name}` : ""
        setError(stateCopy)
    }

    useEffect(()=>{
        console.log("useEffect")
    },[hotelDetails.city])

    return (
    <div className={styles.input_container} id="location">
        <div className={styles.label_container}>
            <Image
            src={location}
            alt="location__logo_in_hotel_detail"
            width={20}
            height={20}
            />
            <label htmlFor="city">
                City
            </label>
        </div>
            <input type="text" id="city" placeholder="Enter city name" onChange={handleChange} name="city" value={hotelDetails.city} onBlur={handleBlur}/>
            <p className={styles.error}>{error.city.length>0 && error.city}</p>
    </div>
    )
}