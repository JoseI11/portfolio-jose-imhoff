import Proyect1 from '../../assets/Chaos-page.jpg'
import Proyect2 from '../../assets/Karate-kid-page.jpg'
import Proyect3 from '../../assets/Computer-supplies-page.jpg'
import Proyect4 from '../../assets/mascocuidado.png'
export const ProyectCard=()=>{
    return(
        <section className="grid grid-cols-2 gap-6 justify-items-center pb-10 max-sm:grid-cols-1 ">
        <div className="max-w-sm bg-cyan-600 border border-gray-200 h-max rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg object-cover " src={Proyect1} alt="" />
            </a>
            <div className="p-5">
                <a href="https://chaosnjpw.netlify.app">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CHAOS web page</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Project made it for the web development course of CoderHouse about the Japanese wrestling group CHAOS</p>
                <a href="https://chaosnjpw.netlify.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Access to the site
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
        <div className="max-w-sm bg-cyan-600 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={Proyect2} alt="" />
            </a>
            <div className="p-5 bg-cyan-600">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Karate Kid & Cobra Kai page</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Project made for the JavaScript course of CoderHouse about the film Karate Kid as of the Netflix series Cobra Kai</p>
                <a href="https://cobra-kai-fan.netlify.app" className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Access to the site
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
        <div className="max-w-sm bg-cyan-600 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={Proyect3} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Eccomerce computer supplies & solutions</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proyect made for the ReactJs course of CoderHouse about an eccomerce named computer supplies and solutions</p>
                <a href="https://proyecto-ecommerce-final-imhoff-jose.vercel.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Access to the site
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
        <div className="max-w-sm bg-cyan-600 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={Proyect4} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mascocuidado</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Web page for pet care made for the No Country job simulation</p>
                <a href="https://mascocuidado.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Access to the site
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    </section>

    )
}