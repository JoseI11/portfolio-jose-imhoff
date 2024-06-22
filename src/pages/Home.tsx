import { Link } from 'react-router-dom'
import Photo_profile from '../assets/Photo_profile.jpg'
import { Stack } from '../components/Carousel/Stack'

export const Home = () => {
    return (

        <section>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi to everyone, my name is José Imhoff, I am frontend developer
                        <br className="hidden lg:inline-block" /> and here I show the projects that I did
                    </h1>
                    <p className="mb-8 leading-relaxed text-3xl">
                        Welcome to my portfolio to everyone!!!
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work with me
                        </Link>
                        <Link
                            to="/proyect"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            This are my projects to show
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center w-full h-auto rounded-lg transition duration-300 transform hover:scale-110"
                        alt="hero"
                        src={Photo_profile}
                    />
                </div>
            </div>
            <div className='flex justify-center'>
                <h3 className='text-white text-3xl font-mono'>Stack that I use in my projects</h3>

            </div>
            <Stack />

        </section>


    )
}