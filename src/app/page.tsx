import React from 'react'

const page = () => {
  return(
    <div><figure className="md:flex bg-red-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/ayesha-pic.jpg" alt="" width="384" height="5.5"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
     <blockquote>
      <p className="text-lg font-medium">
         Highly analytical and detail-driven biochemist , leveraging experience in multiple programming languages to drive innovative solutions. Focused and intellectual, with a passion for problem-solving and continuous learning.
         Have a strong foundation in analytics, and a unique blend of scientific and technical skills.
        </p>
      </blockquote>
      <figcaption className="font-medium">
         <div className="text-sky-500 dark:text-sky-400">
          Ayesha Asif
       </div>
           <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer,SDK
           </div>
          </figcaption>
        </div>
      </figure></div>
  )
}

export default page