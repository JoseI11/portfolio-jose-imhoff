import instagramIcon from "../../assets/Social Networks/3721672-instagram_108066.png"
import githubIcon from "../../assets/Social Networks/github-logo_icon-icons.com_73546.png"
import linkedinIcon from "../../assets/Social Networks/linkedin_socialnetwork_17441.png"

export const Footer = () => {
    return (
        <footer className="flex justify-between items-center bg-gradient-to-r from-light-blue via-bright-blue to-white h-44">
            <h5 className="text-slate-950 font-sans font-semibold m-6">Made by José Imhoff 2024🔨</h5>
      
            <div className="flex space-x-4 m-6 md:space-x-9">
                <a className="hover:text-red-500" href="https://www.instagram.com/joseimhoff1112/"><img src={instagramIcon} /></a>
                <a href="https://github.com/JoseI11"><img src={githubIcon} /></a>
                <a href="https://www.linkedin.com/in/jos%C3%A9-imhoff-9037a3171/"><img src={linkedinIcon}/></a>
            </div>

        </footer>
    )
}