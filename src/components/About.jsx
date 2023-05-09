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
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I’m Gabriel, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
                I am a passionate frontend developer with experience in creating visually stunning and highly functional websites and applications.
                With a keen eye for detail and a commitment to delivering exceptional user experiences,
                I strive to build intuitive, responsive, and user-friendly interfaces that engage and delight users.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About