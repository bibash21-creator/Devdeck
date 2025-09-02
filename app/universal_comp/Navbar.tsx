"use client"

import {useState} from "react"

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Menu, X, Search, User, UploadCloud, Upload, Sun, Moon} from "lucide-react"
import Link from "next/link"
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"

import {JetBrains_Mono} from "next/font/google"

import {Input} from "@/components/ui/input"

import {useEffect} from 'react'






export const jetbrains = JetBrains_Mono({
      subsets: ['latin'],
      weight: ['400', '600'],
      display: 'swap'
   })


   export function ThemeToggle(){

}




export default function Navbar(){
 


   // Hamburger Menu
   const [menuOpen, setMenuOpen] = useState(false);


   // Search Menu Open
   const [showInput, setShowInput] = useState(false)


   // Profile Image Upload
   const [profileImage, setProfileImage] = useState<string>('')

   const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const file = e.target.files?.[0]
      if(file){
         const reader = new FileReader()

         reader.onloadend = () => {
            setProfileImage(reader.result as string)
         }
         reader.readAsDataURL(file)
      }
   }


     // For Theme Toggling
   const {theme, setTheme} = useTheme();
   const [mounted, setMounted] = useState(false);

      useEffect(()=>{
      setMounted(true)
   }, [])

   if (!mounted) return null //Prevent hydration mismatch





   return (
    <>
    
      <header className="flex flex-wrap items-center justify-between sticky bottom-0 bg-[var(--sidebar-color)]">

         {/* Mobile design */}
         <div className="flex flex-wrap items-center md:hidden">

            {/* Hamburger Menu Starting */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
               <SheetTrigger className="p-1">
                  
                  <Menu className="text-xl text-[var(--primary-text-color)] dark:text-[var(--secondary-text-color)]" />
               </SheetTrigger>

               <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-20 mx-5">
                     <Link href="/dashboard" className={`${jetbrains.className}  text-xl text-[var(--primary-text-color)]`} >Dashboard</Link>

                     <Link href="/projects" className={`${jetbrains.className}  text-xl text-[var(--primary-text-color)]`} >Projects</Link>

                     <Link href="/settings" className={`text-[var(--primary-text-color)] ${jetbrains.className}  text-xl`} >Tasks</Link>

                     <Link href="/calendar" className={`${jetbrains.className}  text-xl text-[var(--primary-text-color)]`} >Calendar</Link>
                    


                    
                  </nav>

                 
               </SheetContent>


            </Sheet>
 <div className="flex flex-wrap items-center  justify-evenly">
 <Link href="" className={`${jetbrains.className} text-xl p-3 text-[var(--primary-text-color)]`}>
               Devdeck
            </Link>

            

            </div>

            </div>
            {/* Hamburger menu ends here */}



            <nav className="flex  items-center md:hidden flex-wrap">
               
             

             {/* Search Button */}
             <div className="relative">
               <button onClick = {()=>setShowInput(prev=> !prev)}
               className="p-10"
               aria-label="Toggle Search">
                  <Search className="h-5 w-5" />
                  </button>

                  {/* The toggle works here */}
                  {showInput && (
                     <div className="absolute">
                        <Input type="search" placeholder="Search..."
                        className="text-sm" />
                     </div>
                  )  }
                   </div>


            {/* Theme Toggler Works Here */}
            <Button variant="ghost" 
            size="icon"
            onClick = {()=> setTheme(theme === "dark"?"light": "dark")}
            aria-label="Toggle Theme"
            className="rounded-full">
               {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-400" />): (
                     <Moon className="h-5 w-5 text-zinc-800"/>
                  
               )}

            </Button>

             {/* Profile Avatar with Upload */}
             <div className="relative w-8 h-8">
               <Avatar className="w-full h-full text-[var(--secondary-text-color)]">
                  <AvatarImage src={profileImage} alt="User" />
                  <AvatarFallback>
                     <User className="h-10 w-10" />
                  </AvatarFallback>
               </Avatar>

               <label className="absolute bottom-0 right-0">
                  <UploadCloud className = "h-3 w-3 text-[var(--accent-active-color)]"/>

                  <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
               </label>
             </div>
           
            </nav>
           

         






   


    {/* Desktop and Large Scale design */}

    <nav className="hidden md:flex justify-between min-w-full mt-3 items-center ">

      <div className="">
         <Link href="/" className={` px-7  text-2xl md:text-3xl text-[var(--primary-text-color)] ${jetbrains.className} `}>
         
         
         Devdeck
         
         
         
         </Link>
         </div>   
                  
                  
                  
                  

      
{/* Search button */}
      <div className="">
        
           <div className="flex items-center gap-x-10 border border-[var(--primary-text-color)] py-2 px-3">
            <Search className="w-ful h-full cursor-pointer"/>

            <input type="text" placeholder="Search..."
            className="text-[var(--secondary-text-color)] text-sm" />

            
           </div>
         
      </div>

      <div className="flex gap-x-20 ">
{/* Light and dark Mode goes here  */}
      <Button
      variant= "ghost"
      size="icon"
      onClick = {()=> setTheme(theme==="dark" ?"light": "dark")}
      aria-label = "Toggle Theme"
      className="rounded-full"> 
         {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-400" />
         ) : (
            <Moon className="h-5 w-5 text-zinc-700" />
         )}
         






      </Button>


      {/* User Profile in Here Too */}
         <div className="relative w-10  h-10">
            <Avatar className="">
               <AvatarImage src={profileImage} alt="User" />

               <AvatarFallback>
                  
                   <User/>
                 
                 
               </AvatarFallback>
            </Avatar>

            <label className="absolute bottom-0 right-0">
               <UploadCloud className="h-3 w-3"/>

               <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            </label>
         </div>
      </div>

      
      
      

    </nav>

    
       </header>
    </>

   )
}