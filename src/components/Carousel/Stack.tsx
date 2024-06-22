// import { MutableRefObject, useRef } from "react";
import { Carousel } from "flowbite-react";
export const Stack = () => {
    return (
        <section className="flex justify-center items-center">
            <div className="w-1/2 h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img className="w-32" src="https://iili.io/J6JX6xI.png" alt="..." />
                    <img className="w-32" src="https://iili.io/J6JXPVt.png" alt="..." />
                    <img className="w-32" src="https://iili.io/J6JXiiX.png" alt="..." />
                    <img className="w-80" src="https://iili.io/JtNL96P.png" alt="..." />
                    <img className="w-56" src="https://iili.io/JtOiAF9.png" alt="..." />
                    <img className="w-80" src="https://iili.io/JtOiCuf.png" alt="..." />
                    <img className="w-80" src="https://iili.io/JtOi1nV.png" alt="..." />
                    <img className="w-80" src="https://iili.io/JtOiauj.png" alt="..." />
                </Carousel>
            </div>
        </section>
    )
}