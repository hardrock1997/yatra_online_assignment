import styles from "../styles/hotels_searcher.module.css"
import location from "../assets/location.svg"
import date_picker from "../assets/date_picker.svg"
import guests from "../assets/guests.svg"
import Image from "next/image"

export default function HotelsSearcher() {
    return (
        <div className={styles.hotel_searcher_container}>
            <h3 className={styles.main_text}>Search Hotels</h3>
            <div className={styles.details_container}>
                
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
                    <input type="text" id="city"/>
                </div>
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
                    <input type="date" id="checkIn"/>
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
                    <input type="date" id="checkOut"/>
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
                    <select id="Guests" defaultValue="1">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                    </select>
                </div>
            </div>

            <button className={styles.search_button} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.3-4.3" />
                </svg>
                Search Hotels
                </button>
        </div>
    )
}