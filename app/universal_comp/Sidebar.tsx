import Link from "next/link";



export default function Sidebar(){
    // const navigate = navigate();
    return(
        <>
            <aside className="sidebar border border-green-500 w-[15%] p-3 min-h-screen hidden md:block lg:block xl:block">
                
                <div className="links border border-red-500 h-[75%] flex flex-col gap-y-3 md:gap-y-7 text-[#f5f5f5]">
                    <Link href="" className="">Dashboard</Link>

                    <Link href="" className="">Projects</Link>

                    <Link href="" className="">Tasks</Link>

                    <Link href="" className="">Calendar</Link>
                </div>
            </aside>

        </>
    
    )
}