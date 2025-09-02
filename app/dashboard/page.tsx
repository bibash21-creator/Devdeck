import {JetBrains_Mono} from "next/font/google"
import { CloudSun, ListTodo, UsersRound} from "lucide-react"
import {FaGithub} from "react-icons/fa"

// Fonts definition
export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600']  
})
export default function DashboardPage(){
    // const boxSections = [
    //     {title: ""}
    // ]
    return(
        <>
        
        <aside className="flex flex-col mt-10 min-w-[100%] md:min-w-[82%]">
                {/* Mobile View and Laptop View Integrated as Single in here*/}
            <header className={`${jetbrains.className} text-3xl font-extrabold md:text-4xl lg:text-5xl p-3 md:p-10`}>Dashboard</header>

            {/* Grid Content begins here */}
            <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-x-10 py-3 px-3 md:px-15">
                {/* Github Box */}
                <div className="flex flex-col border border-[var(--primary-text-color)] bg-[var(--primary-text-color)] text-[var(--bg-color)] rounded-xl p-10 hover:scale-105 cursor-pointer hover:text-[var(--primary-text-color)] hover:bg-[var(--bg-color)]">
                    <span className="flex  flex-col items-left md:flex-row"
                    >
<FaGithub size={30}/>
                   <span className={`${jetbrains.className} text-2xl px-5`}>Github</span>
                    </span>

                    <span className={`${jetbrains.className} py-5 text-xl`}><strong className="text-3xl ffont-extrabold">15</strong> Repositories</span>                   
                </div>

                {/* weather Box */}
                 <div className="flex flex-col border border-[var(--primary-text-color)] bg-[var(--primary-text-color)] text-[var(--bg-color)] rounded-xl p-10 hover:scale-105 cursor-pointer hover:text-[var(--primary-text-color)] hover:bg-[var(--bg-color)]">

                    <span className="flex md:flex-wrap flex-col items-left md:flex-row">
                         <CloudSun size={30}/>
                    <span className={`${jetbrains.className} px-5 text-2xl`}>Weather</span>
                    
                    </span>
                    <strong className={`${jetbrains.className} py-5 text-3xl`}>72 F</strong>
                    <span className={`${jetbrains.className}  text-sm`}>Partly Cloudy</span>
                   
                </div>
                
                {/* Tasks Box */}
                 <div className="flex flex-col border border-[var(--primary-text-color)] bg-[var(--primary-text-color)] text-[var(--bg-color)] rounded-xl p-10 hover:scale-105 cursor-pointer hover:text-[var(--primary-text-color)] hover:bg-[var(--bg-color)]">
                    <span className="flex md:flex-row flex-col  items-left"><ListTodo size={30} />
                    <span className={`${jetbrains.className} text-2xl px-5`}>Tasks</span></span>
                    
                    <span className="flex flex-wrap  items-center">
                    <span className={`${jetbrains.className} text-3xl font-extrabold py-5`}>8</span>
                     <span className={`${jetbrains.className} text-sm px-5`}>3 in progress</span>
                    </span>

                    <span className={`${jetbrains.className} text-md`}>Work hard to enjoy Bad</span>
                    
                </div>

                {/* Daily Active User */}
                 <div className="flex flex-col border border-[var(--primary-text-color)] bg-[var(--primary-text-color)] text-[var(--bg-color)] rounded-xl p-10 hover:scale-105 cursor-pointer hover:text-[var(--primary-text-color)] hover:bg-[var(--bg-color)]">
                    <span className="flex md:flex-row items-left flex-col"> <UsersRound size={30}/>
                    <span className={`${jetbrains.className} text-2xl px-5`}>Active User</span>
                    
                    </span>
                   
                    <span className={`${jetbrains.className} text-2xl font-extrabold py-5`}>1952</span>

                     <span className={`${jetbrains.className} text-md`}>Code to stay happy</span>

                
                </div>
               
            </div>

        </aside>
        
        </>
    )
}