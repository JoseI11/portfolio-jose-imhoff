import instagramIcon from "../../assets/Social Networks/instagram.png"
import githubIcon from "../../assets/Social Networks/github.png"
import linkedinIcon from "../../assets/Social Networks/linkedin.png"

export const Footer = () => {
    return (
        <footer className="flex justify-between items-center  bg-gradient-to-r from-DarkOrange to-Orange h-44">
            <h5 className="text-slate-950 font-sans font-semibold m-6">Made by José Imhoff 2024🔨</h5>
      
            <div className="flex space-x-4 m-6 md:space-x-9">
                <a className="hover:text-red-500" href="https://www.instagram.com/joseimhoff1112/"><img className="w-11" src={instagramIcon} /></a>
                <a href="https://github.com/JoseI11"><img className="w-11" src={githubIcon} /></a>
                <a href="https://www.linkedin.com/in/jose-imhoff/"><img className="w-11" src={linkedinIcon}/></a>
            </div>

        </footer>
    )
}