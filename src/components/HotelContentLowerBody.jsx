import styles from "../styles/hotel_content_body.module.css"
import {useHotelContext} from "../app/HotelDetailsContextProvider"
import PriceCardDetails from "./PriceCardDetails"
import Button from "./Button"
import book_now_icon from "../assets/book_now_icon.svg"
import Image from "next/image"
import cancellation_icon from "../assets/cancellation_icon.svg"
import StarRating from "../components/StarRating"

export default function HotelContentLowerBody() {
    const {hotel}=useHotelContext()

    function handleClick() {
        alert(`Booking Initiated for ${hotel[0]?.name}`)
    }

    return (
        <div className={styles.lower_main_container}>
            <div className={styles.upper_half}>
                <h3><span>₹</span>{hotel[0]?.price}</h3>
                <p>per night</p>
            </div>
            <div className={styles.lower_half}>
                <PriceCardDetails firstTitle="Rating" SecondTitle={<StarRating rating={hotel[0]?.rating} />}/>
                <PriceCardDetails firstTitle="Location" SecondTitle={hotel[0]?.city}/>
                <div className={styles.price_calculation}>
                    <div className={styles.first_row}>
                        <h4>Base Price:</h4>
                        <h4>{hotel[0]?.price}</h4>
                    </div>
                    <div className={styles.first_row}>
                         <p>Taxes & Fees</p>
                         <p>₹468</p>
                    </div>
                    <div className={styles.total_price}>
                        <h2>Total</h2>
                        <h2>₹{hotel[0]?.price+468}</h2>
                    </div>
                </div>
                <div className={styles.book_now_button}>
                    <Button onClick={handleClick} styleType="gradient" buttonText="Book Now" imageSrc={book_now_icon}/>
                </div>
               <p><span><Image src={cancellation_icon} width={20} height={20} alt="cancellation_icon"/></span>
                    Free cancellation up to 24 hours</p>
            </div>
        </div>
    )
}