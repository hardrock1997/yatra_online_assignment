import styles from "../styles/home_route_body.module.css"
import HotelsSearcher from "../components/HotelsSearcher"

export default function HomeRouteBody() {
    return (
        <div className={styles.body_container}>
            <div className={styles.body_text_container}>
                <h1 className={styles.hero_heading}>
                    Find Your Perfect
                <span className={styles.gradient_text}> Stay</span>
                </h1>
                <p className={styles.sub_text}>Discover amazing hotels and create unforgettable memories with our</p> <p className={styles.sub_text}>curated selection of accommodations.</p>
            </div>
            <HotelsSearcher/>
        </div>
    )
}