import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div name='skills'>
            <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
                {/** Container */}
                <div className='max-w-[1000px] h-full mx-auto p-4 flex flex-col justify-center'>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                        <p className='py-4'>These are the technologies I’ve worked with. </p>
                    </div>

                    {/** Logo's */}
                    <motion.div
                        className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'
                        /** initial condition */
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            /** final conditions
                             * x: -50 : div will be at -50 from the start
                             * x: 0 : div will be at 0 from the start
                             */
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                            <p className='my-4'>REACT JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                            <p className='my-4'>NODE JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                            <p className='my-4'>MONGO DB</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills