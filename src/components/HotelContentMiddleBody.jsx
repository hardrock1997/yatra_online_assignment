
import styles from "../styles/hotel_content_body.module.css"
import { useHotelContext } from "@/app/HotelDetailsContextProvider"
export default function HotelContentMiddleBody({cardType}) {
    const {hotel} = useHotelContext()

    if(cardType==="description") {
        return (
            <div className={styles.middle_container_description}>
                <h2>About this hotel</h2>
                <h3>{hotel[0]?.description} hotel in {hotel[0]?.city}</h3>
            </div>
        )
    }
    else if(cardType==="facilities") {
        return (
            <>
            <h2 className={styles.facility_title}>Facilities & Amenities</h2>
            <div className={styles.middle_container_facilities}>
                {
                    hotel[0]?.facilities.map((facility,i)=>{
                        return (
                            <div key={i} className={styles.facilities_container}>
                            <h3 >{facility}</h3>
                            </div>
                        )
                    })
                }
            </div>
            </>
        )
    }
    else if(cardType==="ContactInfo") {
         return (
            <div className={styles.middle_container_contact_info}>
                <h2>Contact Information</h2>
                <h3>{hotel[0]?.contactInfo}</h3>
                <h3>{hotel[0]?.email}</h3>
                <h3>{hotel[0]?.city} India</h3>
            </div>
        )
    }
 
}