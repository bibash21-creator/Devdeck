"use client"

import {useState} from "react"

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Menu, X, Search, User} from "lucide-react"
import Link from "next/link"

import {JetBrains_Mono} from "next/font/google"


export const jetbrains = JetBrains_Mono({
      subsets: ['latin'],
      weight: ['400', '600'],
      display: 'swap'
   })




export default function Navbar(){
   const [menuOpen, setMenuOpen] = useState(false)

   
   return (
    <>
    
      <header className="flex items-center justify-between sticky bottom-0">

         {/* Mobile design */}
         <div className="flex items-center md:hidden min-w-full border border-red-500">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
               <SheetTrigger className="p-1">
                  {menuOpen? <X className="text-xl" />:
                  <Menu className="text-xl text-[var(--primary-text-color)]" />}
               </SheetTrigger>

               <SheetContent side="top" className="w-[20vw]border border-green-500 flex ">
                  <nav className="flex flex-col gap-4 mt-6">
                     <Link href="/" className="text-xl text-[var(--primary-text-color)]" >Dashboard</Link>

                     <Link href="/projects" className="text-xl text-[var(--primary-text-color)]">Projects</Link>

                     <Link href="/settings" className="text-xl text-[var(--primary-text-color)]">Settings</Link>

                     <Link href="" className="">Search</Link>

                    
                  </nav>

                 
               </SheetContent>


            </Sheet>

            <nav className="flex items-center  justify-evenly border border-green-500">
 <Link href="" className={`${jetbrains.className} text-xl p-3 text-[var(--primary-text-color)]`}>
               Devdeck
            </Link>

             <div className={`${jetbrains.className} text-xl p-3 text-[var(--primary-text-color)]`}>
                    Search
                  </div>


            <div className={ `text-xl ${jetbrains.className} text-[var(--primary-text-color)]`}>
               Profile
            </div>
            </nav>
           
         </div>






   


    {/* Desktop and Large Scale design */}

    <nav className="hidden md:flex min-w-full mt-3">

      <div className="w-[15%] text-center p-2">
         <Link href="" className={` text-2xl md:text-3xl text-[var(--primary-text-color)] ${jetbrains.className} `}>
         
         
         Devdeck
         
         
         
         </Link>
         </div>   

      <div className="w-[85%]  flex items-center">
         <Link href="" className="mx-50 border border-green-500">Search</Link></div>   
         
    </nav>


       </header>
    </>

   )
}