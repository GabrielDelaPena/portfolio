import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/** Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Gabriel Dela Peña</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I’m a Frontend Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Thank you for taking the time to view my portfolio.
                </p>
                <div>
                    <button className=' border-2 hover:bg-pink-600 hover:border-pink-600'>
                        <Link className='text-white group px-6 my-2 flex items-center' to="about" smooth={true} duration={500}>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home