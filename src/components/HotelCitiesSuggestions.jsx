import styles from "../styles/hotels_searcher.module.css"
import Image from "next/image"
import location from "../assets/location.svg"
import cities from "../citiesDB"
import { useEffect,useRef} from "react"

export default function HotelCitiesSuggestions({hotelDetails, setHotelDetails, error, setError, citySuggestions, setCitySuggestions}) {

    const suggestionsRef=useRef(false)

    function handleChange(e) {
        const stateCopy=structuredClone(hotelDetails)
        const errorStateCopy = structuredClone(error)
        stateCopy[e.target.name]=e.target.value
        errorStateCopy[e.target.name]=""
        setError(errorStateCopy)
        setHotelDetails(stateCopy)
        suggestionsRef.current=true
    }

    function handleBlur(e) {
        const stateCopy=structuredClone(error)
        hotelDetails[e.target.name]==="" ? stateCopy[e.target.name]=`Please select a ${e.target.name}` : ""
        setError(stateCopy)
    }

    function getSuggestions(cities, typedCity) {
        let citySuggestions=[]
        for(const cityObj of cities) {
            if(typedCity.length>0 && cityObj.city.toLowerCase().includes(typedCity.toLowerCase())) {
                citySuggestions.push(cityObj.city)
            }
        }
        setCitySuggestions(citySuggestions)
    }

    function handleClick(city) {
        const cityClicked = citySuggestions.filter(citySuggestion=>citySuggestion===city)[0]
        setCitySuggestions([])
        const hotelDetailsCopy=structuredClone(hotelDetails)
        hotelDetailsCopy["city"]=cityClicked
        setHotelDetails(hotelDetailsCopy)
        suggestionsRef.current=false
    }


    useEffect(()=>{
        let timer=setTimeout(()=>{
            suggestionsRef.current===true ? getSuggestions(cities,hotelDetails.city):""
        },200)

        return ()=>{
            clearTimeout(timer)
        }
        
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
            {citySuggestions.length>0 && <div className={styles.city_suggestions} > 
                {
                    citySuggestions && citySuggestions.map((city,i)=>{
                        return (
                            <h4 key={i} onClick={()=>handleClick(city)}>{city}</h4>
                        )
                    })
                }
            </div>}
            <p className={styles.error}>{error.city.length>0 && error.city}</p>
    </div>
    )
}