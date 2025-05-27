import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/Team/business-8941891_1280.jpg'
import team2 from '../../assets/Team/people-1979261_1280.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1'>
                <motion.img
                animate={{
                    y:[100,130,100]}}
                transition={{duration:2, repeat:Infinity}}
      src={team1}
      className="max-w-sm rounded-t-4xl rounded-br-4xl border-s-6 border-b-6 border-gray-600  shadow-2xl"
    />
                <motion.img
                animate={{
                    x:[100,130,100]}}
                transition={{duration:2, delay:3, repeat:Infinity}}
      src={team2}
      className="max-w-sm rounded-t-4xl rounded-br-4xl border-s-6 border-b-6 border-gray-600  shadow-2xl"
    />
        </div>
    <div className='flex-1'>
      {/* <motion.h1
      animate={{rotate:360,
        x:200,
        y:-200,
        transition:{duration:4}
      }}
      className="text-5xl font-bold">Latest job for you!</motion.h1> */}
      <motion.h1
        initial={{scale:0}}
        animate={{scale:1, transition:{duration:4}}}
      className="text-5xl font-bold">Remote <motion.span
        animate={
            {
                color:['#7965C1', '#CD5656', '#537D5D'],
                transition:{duration:2, repeat:Infinity}
            }
        }
      >jobs</motion.span> for you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
);
};

export default Banner;