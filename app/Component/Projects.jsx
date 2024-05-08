/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5XJEp9ecxgT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 import Link from "next/link"

 export default function Projects() {
   return (
    <center>

     <section className="w-full py-12 md:py-24 lg:py-32 dark">
       <div className="container space-y-8 px-4 md:px-6">
         <div className="text-center">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
           <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Check out some of the projects I've worked on.
           </p>
         </div>
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
           <div className="group overflow-hidden rounded-lg shadow-lg transition-all  hover:shadow-xl ">
             <Link className="block" href="#">
               <img
                 alt="Project 1"
                 className="h-60 w-full object-cover object-center transition-all "
                 src="/Images/eshop.png"
                 style={{
                   aspectRatio: "300/200",
                   objectFit: "cover",
                   height:'100%'
                 }}
                 width="300"
               />
               <div className="bg-gray-800 hover:bg-yellow-300   p-4">
                 <h3 className="text-lg font-semibold text-gray-50">Project 1</h3>
                 <p className="text-sm text-gray-400">A brief summary of Project 1.</p>
               </div>
             </Link>
           </div>
           <div className="group overflow-hidden rounded-lg shadow-lg transition-all  hover:shadow-xl">
             <Link className="block" href="#">
               <img
                 alt="Project 2"
                 className="h-60 w-full object-cover object-center transition-all "
                 src="/Images/eshop.png"
                 style={{
                   aspectRatio: "300/200",
                   objectFit: "cover",height:'100%'

                 }}
                 width="300"
               />
               <div className="bg-gray-800 hover:bg-yellow-300   p-4">
                 <h3 className="text-lg font-semibold text-gray-50">Project 2</h3>
                 <p className="text-sm text-gray-400">A brief summary of Project 2.</p>
               </div>
             </Link>
           </div>
           <div className="group overflow-hidden rounded-lg shadow-lg transition-all  hover:shadow-xl">
             <Link className="block" href="#">
               <img
                 alt="Project 3"
                 className="h-60 w-full object-cover object-center transition-all "
                 src="/Images/eshop.png"
                 style={{
                   aspectRatio: "300/200",
                   objectFit: "cover",                   height:'100%'

                 }}
                 width="300"
               />
               <div className="bg-gray-800 hover:bg-yellow-300   p-4">
                 <h3 className="text-lg font-semibold text-gray-50">Project 3</h3>
                 <p className="text-sm text-gray-400">A brief summary of Project 3.</p>
               </div>
             </Link>
           </div>
           <div className="group overflow-hidden rounded-lg shadow-lg transition-all  hover:shadow-xl">
             <Link className="block" href="#">
               <img
                 alt="Project 4"
                 className="h-60 w-full object-cover object-center transition-all "
                 src="/Images/eshop.png"
                 style={{
                   aspectRatio: "300/200",
                   objectFit: "cover",                   height:'100%'

                 }}
                 width="300"
               />
               <div className="bg-gray-800 hover:bg-yellow-300   p-4">
                 <h3 className="text-lg font-semibold text-gray-50">Project 4</h3>
                 <p className="text-sm text-gray-400">A brief summary of Project 4.</p>
               </div>
             </Link>
           </div>
           <div className="group overflow-hidden rounded-lg shadow-lg transition-all  hover:shadow-xl">
             <Link className="block" href="#">
               <img
                 alt="Project 5"
                 className="h-60 w-full object-cover object-center transition-all "
                 src="/Images/eshop.png"
                 style={{
                   aspectRatio: "300/200",
                   objectFit: "cover",                   height:'100%'

                 }}
                 width="300"
               />
               <div className="bg-gray-800 hover:bg-yellow-300   p-4">
                 <h3 className="text-lg font-semibold text-gray-50">Project 5</h3>
                 <p className="text-sm text-gray-400">A brief summary of Project 5.</p>
               </div>
             </Link>
           </div>
           <div className="group overflow-hidden rounded-lg shadow-lg transition-all  hover:shadow-xl">
             <Link className="block" href="#">
               <img
                 alt="Project 6"
                 className="h-60 w-full object-cover object-center transition-all "
                 src="/Images/eshop.png"
                 style={{
                   aspectRatio: "300/200",
                   objectFit: "cover",                   height:'100%'

                 }}
                 width="300"
               />
               <div className="bg-gray-800 hover:bg-yellow-300   p-4">
                 <h3 className="text-lg font-semibold text-gray-50">Project 6</h3>
                 <p className="text-sm text-gray-400">A brief summary of Project 6.</p>
               </div>
             </Link>
           </div>
         </div>
       </div>
     </section>
     </center>
   )
 }