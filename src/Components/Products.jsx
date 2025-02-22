import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react';

const Products = () => {
    var products =[
      {
        title: "arqitel",
        description:
          "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live: true,
        case: false,
      },
      {
        title: "cula",
        description:
          "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
        live: true,
        case: true,
      },
      {
        title: "layout land",
        description:
          "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
        live: true,
        case: false,
      },
      {
        title: "TTR",
        description:
          "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
        live: true,
        case: false,
      },
      {
        title: "Yahoo!",
        description:
            "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
        live: true,
        case: true,
    },
    ];

    const [pos, setPos] = useState(0);
    const mover = (val)=>{
      setPos(val*19);
    }
  return (
    <div className='mt-32 relative'>
        {products.map((val, index ) =>(<Product key={index}  val={val} mover={mover} count={index}/>
        ))}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
          <motion.div 
          initial={{y:pos , x:"-50%"}}
          animate={{y:pos+`rem`}} 
          
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}className='window absolute w-[27rem] h-[19rem] bg-white left-[45%] overflow-hidden'>
            <img className='w-full h-full' src="https://up.yimg.com/ib/th?id=OIP.amEbZWd9JRcIxkyVtYNODwHaE8&pid=Api&rs=1&c=1&qlt=95&w=182&h=121" alt="" />
    
          <motion.div  animate={{y:-pos + 'rem'}} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}className='w-full h-full bg-sky-200'>
                      <img className='w-full h-full' src="https://up.yimg.com/ib/th?id=OIP._FJFJqCgfY1GSl100ui2SQHaE5&pid=Api&rs=1&c=1&qlt=95&w=184&h=121" alt="" />
                    </motion.div>
          <motion.div animate={{y:-pos + 'rem'}} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}className='w-full h-full bg-sky-300'>
                      <img className='w-full h-full overflow-hidden' src="https://tse1.mm.bing.net/th?id=OIP.VYJtv8o26pl7QqP_3x6megHaDk&pid=Api&P=0&h=180" alt="" />
                    </motion.div>
          <motion.div animate={{y:-pos + 'rem'}} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}className='w-full h-full bg-sky-400'><img className='w-full h-full' src="https://tse1.mm.bing.net/th?id=OIP.uhm9F8w15e6Qfft4y7SobgHaEK&pid=Api&P=0&h=180" alt="" /></motion.div>
          <motion.div animate={{y:-pos + 'rem'}} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}className='w-full h-full bg-sky-500'>
                      <img className='w-full h-full' src="https://plus.unsplash.com/premium_photo-1673971706769-13a9499e3794?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </motion.div>

          </motion.div>
        </div>
        
    </div>
  )
}

export default Products