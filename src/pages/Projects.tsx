import { ProyectCard } from "../components/ProjectCards/ProyectCard";

export const ProjectPage = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center md:text-left mb-16 md:mb-0">
          <h1 className="sans-serif text-5xl font-bold text-NavyBlue">Projects that I have worked on</h1>
          <p className="leading-relaxed mb-4 text-center">These are my projects or participate in, although the design is not my strong point, dedicate time to them as also try to reflect the knowledge that I was learning in each of them</p>
        <ProyectCard />
        </div>
      
    )

}