
import {JetBrains_Mono} from "next/font/google"


export const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '600']
})





export default function Calendar(){
    return(
        <>
        <section className="">
            <header className={`${jetbrains.className} p-3 text-3xl md:text-4xl lg:text-5xl font-extrabold`}>Calendar</header>
        </section>
        </>
    )
}