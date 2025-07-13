"use client"
import styles from "../styles/hotel_content_body.module.css"
import HotelContentUpperBody from "../components/HotelContentUpperBody"
import HotelContentMiddleBody from "../components/HotelContentMiddleBody"
import HotelContentLowerBody from "../components/HotelContentLowerBody"

export default function HotelContentBody() {
    return (
        <div className={styles.parent_container}>
            <HotelContentUpperBody/>
            <HotelContentMiddleBody cardType="description"/>
            <HotelContentMiddleBody cardType="facilities"/>
            <HotelContentMiddleBody cardType="ContactInfo"/>
            <HotelContentLowerBody/>
        </div>
    )
}