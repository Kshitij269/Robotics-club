import React from 'react'
import {motion} from "framer-motion"

function Landing() {
  return (
   <div className='h-screen flex justify-center flex-column m-0 p-0 bg-gradient-to-b from-purple-600 to-blue-600'>
     <div className="border-4 border-black rounded-lg mx-5 my-10">
            <section className="bg-transparent dark:bg-gray-900 my-10">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mx-auto place-self-center justify-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">ROBOTICS CLUB</h1>
                        <h1 className="flex justify-center max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">NIT DELHI</h1>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover ={{scale:0.8}} transition={{type: "spring",stiffness: 260,damping: 100}}>
                        <a href="/home" class="flex items-center justify-center my-10 px-5 py-3 mr-3 text-base text-xl text-center text-white rounded-lg bg-black hover:bg-white hover:text-black">
                        Home
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        </motion.div>
                    </div>
                    <motion.div className="lg:mt-0 lg:col-span-5 lg:flex"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{type: "spring",stiffness: 260,damping: 100}}>
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
                    </motion.div>           
                </div>
            </section>
        </div>
    </div>
  )
}

export default Landing;