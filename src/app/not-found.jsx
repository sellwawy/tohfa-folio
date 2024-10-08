import Contact from '../components/Contact'
import React from 'react'

function NotFound() {
   return (
      <>
         <div className="flex flex-col items-center justify-center bg-white pt-32 font-semibold">
            <h1 className="text-5xl">404</h1>
            <p className="text-3xl">Not Found</p>
            <p className="text-2xl">Could not find the requested page.</p>
         </div>
         <Contact className="pb-spacing-7" />
      </>
   )
}

export default NotFound
