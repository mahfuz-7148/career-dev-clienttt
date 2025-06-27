import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" alt=''
                    animate={{y: [100, 150, 100]}}
                    transition={{duration:5, repeat: Infinity}}
                />
                <motion.img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" alt=''
                    animate={{x: [100, 150, 100]}}
                    transition={{duration:5, delay:2, repeat: Infinity}}
                />
                <div className='flex-1'>
                    <motion.h1
                        initial={{scale: 0}}
                        animate={{scale: 1, transition: {duration: 5}}}
                        className="text-5xl font-bold"><motion.span
                        animate={{
                            color: ['#ff5733', '#33ff33', '#8a33ff'],
                            transition: {
                                duration: 5,
                                repeat: Infinity
                            }

                        }}
                    >Career Dev</motion.span> job for you</motion.h1>
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