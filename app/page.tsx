import Image from "next/image";
import {Footer} from "@/app/universal_comp/Footer"
import Sidebar from "@/app/universal_comp/Sidebar"
import Navbar from "@/app/universal_comp/Navbar"

export default function Home() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Footer />
    </>
  );
}
