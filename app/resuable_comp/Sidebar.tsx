import Link from "next/link";

import {JetBrains_Mono} from "next/font/google"

import {LayoutDashboard, FolderKanban, ListTodo, CalendarDays} from "lucide-react"



export const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '600'],
    display: 'swap'
})


export default function Sidebar(){
    // const navigate = navigate();
    return(
        <>
            <aside className="sidebar w-[15%] px-7 py-10 min-h-screen hidden md:block lg:block xl:block bg-[var(--sidebar-color)]">
                
                <div className="links h-[75%] flex flex-col gap-y-3 md:gap-y-7">
                    <Link href="" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex gap-x-5 hover:bg-[var(--accent-hover-color)] hover:scale-105`}><LayoutDashboard />Dashboard 
                    </Link> 

                    <Link href="" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex gap-x-5 hover:bg-[var(--accent-hover-color)] hover:scale-105`}> <FolderKanban />Projects</Link>

                    <Link href="" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex gap-x-5 hover:bg-[var(--accent-hover-color)] hover:scale-105`}><ListTodo /> Tasks </Link>

                    <Link href="" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex gap-x-5 hover:bg-[var(--accent-hover-color)] hover:scale-105`}><CalendarDays />Calendar</Link>
                </div>
            </aside>

        </>
    
    )
}