import styles from "../styles/hotels_route_body.module.css"
import Image from "next/image"
import location from "../assets/location.svg"
import { useRouter } from 'next/navigation';
import {useHotelContext} from "../../src/app/HotelDetailsContextProvider"

export default function HotelsRouteLowerSection() {
    const router = useRouter();

    const {hotelDetails} = useHotelContext()

    console.log(hotelDetails)

    function handleViewDetails() {
        router.push(`/hotels/${hotelDetails.id}`);
    }

    return (
        <div className={styles.main_lower_container}>
            <section className={styles.upper_sub_section}>
                <img
                alt={hotelDetails?.name}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className={styles.image_fill_cover}
                src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800"
                ></img>
            </section>
            <section className={styles.lower_sub_section}>
                <section className={styles.lower_first_half}>
                    <h3 className={styles.hotel_name}>{hotelDetails?.name}</h3>
                    <div className={styles.star_container}>Star</div>
                </section>
                <section className={styles.lower_second_half}>
                    <span className={styles.hotel_location}>
                        <Image
                            src={location}
                            alt="location_image"
                            width={20}
                            height={20}
                        />
                        <p>{hotelDetails?.city}</p>
                    </span>
                    <h4 className={styles.sub_heading}>Elegant stay with all modern amenities in the heart of Delhi. Experience luxury and comfort with exceptional service.</h4>
                    <div className={styles.facilities}>
                        {
                            hotelDetails && hotelDetails.length>0 && hotelDetails?.facilities.map((facility,i)=>{
                                return <p key={i} className={styles.facility_name}>{facility}</p>
                            })
                        }
                    </div>
                    <h4 className={styles.cost}>₹ {hotelDetails?.price}
                        <p>per night</p>
                    </h4>
                    <p className={styles.total_price}>Total: ₹{hotelDetails?.price*hotelDetails?.duration} for {hotelDetails?.duration} nights</p>
                    <button className={styles.gradient_view_button} onClick={handleViewDetails}>View Details</button>
                </section>
            </section>
        </div>
    )
}