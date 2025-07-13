
import styles from "../styles/hotel_content_body.module.css"
import { useEffect } from "react"
import { useHotelContext } from "@/app/HotelDetailsContextProvider"
import hotels from "@/hotelsDB"

export default function HotelContentUpperBody() {
    const {queryParams,setHotel,hotel} = useHotelContext()

    async function getHotelDetails() {
        const {id}=queryParams
        const hotel = hotels.filter(hotel=>hotel.id===id)
        setHotel(hotel)
    }

    useEffect(()=>{
        getHotelDetails()
    },[queryParams.id])

    return (
        <div className={styles.upper_container}>
             <img
              alt={hotel?.name}
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className={styles.image_fill_cover}
              src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
        </div>
    )
}