"use client"

import {useState} from "react"

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Menu} from "lucide-react"
import Link from "next/link"



export default function Navbar(){
   const [menuOpen, setMenuOpen] = useState(false)
   return (
    <>
    
      <header className="flex items-center justify-between">

         {/* Mobile design */}
         <div className="flex items-center md:hidden m-5">
            <Sheet>
               <SheetTrigger className="p-1">
                  <Menu className="text-xl text-[var(--primary-text-color)]" />
               </SheetTrigger>

               <SheetContent side="right" className="w-[20vw]border border-greenn-50">
                  <nav className="flex flex-col gap-4 mt-6">
                     <Link href="/" className="text-xl text-[var(--primary-text-color)]" >Dashboard</Link>

                     <Link href="/projects" className="text-xl text-[var(--primary-text-color)]">Projects</Link>

                     <Link href="/settings" className="text-xl text-[var(--primary-text-color)]">Settings</Link>
                  </nav>
               </SheetContent>


            </Sheet>

            <Link href="" className="text-xl text-[var(--primary-text-color)]">Devdeck</Link>
         </div>






   


    {/* Desktop and Large Scale design */}

    <nav className="hidden md:flex min-w-full ">

      <div className="w-[15%] border border-red-500 text-center p-2">
         <Link href="" className=" text-2xl text-[var(--primary-text-color)]">Devdeck</Link>
         </div>   

      <div className="w-[85%] border border-blue-900 flex items-center">
         <Link href="" className="mx-50 border border-green-500">Search</Link></div>   
         
    </nav>


       </header>
    </>

   )
}