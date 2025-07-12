import Image from "next/image";
import header_plane from "../assets/header_plane.svg"
import Header from "@/components/Header";
import HomeRouteBody from "@/components/HomeRouteBody";
import HomeRouteFooter from "../components/HomeRouteFooter"

export default function Home() {
  return (
    <div>
      <Header image={ <Image
        src={header_plane}
        alt="header_plane_logo"
        width={38}
        height={38}
      />}
      headerTitle="YatraBooking"
      />
      <HomeRouteBody/>
      <HomeRouteFooter/>
    </div>
  );
}
