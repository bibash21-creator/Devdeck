import Image from "next/image";
import {Footer} from "@/app/universal_comp/Footer"
import Sidebar from "@/app/resuable_comp/Sidebar"
import Navbar from "@/app/universal_comp/Navbar"
import Dashboard from "@/app/resuable_comp/Dashboard"

export default function Home() {
  return (
    <>
    <Navbar />

    <div className="flex">
 <Sidebar />
    <Dashboard />
    </div>
   
    <Footer />
    </>
  );
}
