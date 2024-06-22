import Proyect1 from '../../assets/Chaos-page.jpg'
import Proyect2 from '../../assets/Karate-kid-page.jpg'
import Proyect3 from '../../assets/Computer-supplies-page.jpg'
export const Aboutsection = () => {
    return (
        <section className="grid grid-cols-2 gap-6 justify-items-center pb-10 max-sm:grid-cols-1 ">
            <div className="max-w-sm bg-white border border-gray-200 h-max rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg object-cover " src={Proyect1} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CHAOS web page</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proyecto realizado para el curso de desarrollo web de CoderHouse acerca del grupo japones de Lucha libre CHAOS</p>
                    <a href="https://chaosnjpw.netlify.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Acceder al sitio
                    </a>
                </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={Proyect2} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Karate Kid & Cobra Kai page</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proyecto realizado para el curso de JavaScript de CoderHouse acerca de la pelicula Karate Kid como de la serie de Netflix Cobra Kai</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Acceder al sitio
                    </a>
                </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={Proyect3} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Eccomerce computer supplies & solutions</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proyecto realizado para el curso de React de CoderHouse</p>
                    <a href="https://proyecto-ecommerce-final-imhoff-jose.vercel.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Acceder al sitio
                     
                    </a>
                </div>
            </div>
        </section>

    )
}