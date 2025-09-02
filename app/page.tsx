import Image from "next/image";
import {Footer} from "@/app/universal_comp/Footer"
import Sidebar from "@/app/reusable_comp/Sidebar"
import Navbar from "@/app/universal_comp/Navbar"
import DashboardPage from "@/app/dashboard/page"
// import ProjectPage from "@/app/projects/page"
import TaskPage from "@/app/tasks/page"

export default function Home() {
  return (
    <>

    <DashboardPage />

    {/* <ProjectPage /> */}
   


    
    </>
  );
}
