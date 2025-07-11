import styles from "../styles/home_route_footer.module.css";
import footer_icon_1 from "../assets/footer_icon_1.svg"
import footer_icon_2 from "../assets/footer_icon_2.svg"
import footer_icon_3 from "../assets/footer_icon_3.svg"
import Image from "next/image";

export default function HomeRouteFooter() {
  return (
    <footer className={styles["why-choose-section"]}>
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h2>Why Choose YatraBooking?</h2>
          <p>
            Experience hassle-free hotel booking with our premium features
          </p>
        </div>

        <div className={styles["features-grid"]}>
          <div className={styles.feature}>
            <div className={`${styles["icon-wrapper"]} ${styles.blue}`}>
              <Image src={footer_icon_1} alt="search_footer_icon" width={30} height={30}/>
            </div>
            <h3>Smart Search</h3>
            <p>
              Find the perfect hotel with our intelligent search and filtering
              system
            </p>
          </div>

          <div className={styles.feature}>
            <div className={`${styles["icon-wrapper"]} ${styles.green}`}>
              <Image src={footer_icon_2} alt="search_footer_icon" width={30} height={30}/>
            </div>
            <h3>Prime Locations</h3>
            <p>
              Discover hotels in the best locations across major cities
            </p>
          </div>

          <div className={styles.feature}>
            <div className={`${styles["icon-wrapper"]} ${styles.orange}`}>
               <Image src={footer_icon_3} alt="search_footer_icon" width={30} height={30}/>
            </div>
            <h3>Best Prices</h3>
            <p>
              Get the best deals and competitive prices for your stay
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
