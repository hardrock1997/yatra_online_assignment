"use client"

import styles from "../styles/header.module.css"
import { useRouter } from 'next/navigation';
export default function Header(props) {

    const router = useRouter()

    const {image, headerTitle,headerButton,hotelDetails}=props
    
    const containerClass = image && headerTitle
    ? styles.container_with_image_and_yatra_heading
    : styles.container_with_stats_and_button;

    return (
        <header className={containerClass}>
        {image && <div>{image}</div>}
        {headerTitle && <div className={styles.yatra_heading}>{headerTitle}</div>}
        {headerButton && <div>{headerButton}</div>}
        {hotelDetails && <div className={styles.stats}>
            {hotelDetails?.guests > 0 && (
            <span>{hotelDetails.guests} Guest{hotelDetails.guests > 1 ? "s" : ""}</span>
            )}

            {hotelDetails?.guests > 0 && hotelDetails?.duration > 0 && <span> • </span>}

            {hotelDetails?.duration > 0 && (
            <span>{hotelDetails.duration} Night{hotelDetails.duration > 1 ? "s" : ""}</span>
            )}
        </div>}
        </header>
    )

}