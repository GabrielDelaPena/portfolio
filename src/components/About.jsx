import { motion } from "framer-motion";

const About = () => {
  return (
    <div name='about'>
      <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>

            <div>
            </div>
          </div>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <motion.div
              className='sm:text-right text-4xl font-bold'
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
              <p>Hi. I’m Gabriel, nice to meet you. Please take a look around.</p>
            </motion.div>
            <motion.div
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
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p>
                I am a passionate frontend developer with experience in creating visually stunning and highly functional websites and applications.
                With a keen eye for detail and a commitment to delivering exceptional user experiences,
                I strive to build intuitive, responsive, and user-friendly interfaces that engage and delight users.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About