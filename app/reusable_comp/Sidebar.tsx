import Link from "next/link";

import {JetBrains_Mono} from "next/font/google"

import {LayoutDashboard, FolderKanban, ListTodo, CalendarDays, Settings} from "lucide-react"



export const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '600'],
    display: 'swap'
})


export default function Sidebar(){
    // const navigate = navigate();
    return(
        <>
            <aside className="sidebar min-w-[18%] px-7 py-10 hidden md:block lg:block xl:block bg-[var(--sidebar-color)] min-h-full">
                
                <div className="flex md:min-h-[80vh] justify-between relative
                flex-col space-y-3 md:span-y-7">
                    <div className="space-y-3 md:span-y-7">
<Link href="/dashboard" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex flex-wrap gap-x-3 hover:bg-[var(--accent-hover-color)] hover:scale-105`}><LayoutDashboard />Dashboard 
                    </Link> 

                    <Link href="/projects" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex flex-wrap gap-x-3 hover:bg-[var(--accent-hover-color)] hover:scale-105`}> <FolderKanban />Projects</Link>

                    <Link href="/tasks" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex flex-wrap gap-x-3 hover:bg-[var(--accent-hover-color)] hover:scale-105`}><ListTodo /> Tasks </Link>

                    <Link href="/calendar" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex flex-wrap gap-x-3 hover:bg-[var(--accent-hover-color)] hover:scale-105`}><CalendarDays />Calendar</Link>

                    </div>


                    <div className="">
<Link href="" className={`${jetbrains.className} text-xl text-[var(--primary-text-color)] flex flex-wrap gap-x-3 hover:bg-[var(--accent-hover-color)] hover:scale-105`}><Settings/>Settings</Link>
                    </div>
                    
                    
                </div>
            </aside>

        </>
    
    )
}