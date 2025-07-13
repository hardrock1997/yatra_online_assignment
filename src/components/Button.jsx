import styles from "../styles/button.module.css"
import Image from "next/image"

export default function Button({onClick, styleType="custom", buttonText,imageSrc}) {

    const className =
    styleType === "gradient"
      ? styles.gradient_view_button
      : styles.custom_back_button;

   return (
     <button className={className} 
     onClick={onClick}>
            <Image src={imageSrc} width={20} height={20} alt="back_button_header"/>
               {buttonText}
    </button>
   )
}

