import { motion } from 'motion/react'
import React from 'react'

const Marque = ({imagesurls ,direction}) => {
  return (
    <div className='flex w-full whitespace-nowrap overflow-hidden'>
      <motion.div  initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex flex-shrink-0 gap-40 py-10 pr-40">
    
     {imagesurls.map((url , index) => 
     <img key={index} src={url} className='W-[6VW] flex-shrink-0' />)}
     </motion.div> 
     <motion.div  initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex flex-shrink-0 gap-40 py-10 pr-40">
     {imagesurls.map((url , index) => <img key={index} src={url} className='w-[6vw] flex-shrink-0' />)}
     </motion.div>
    </div>
  )
}

export default Marque