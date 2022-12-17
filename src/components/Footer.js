import React from 'react'
import { TbBrandGithub, TbBrandTwitter, TbBrandLinkedin } from "react-icons/tb";
import "./Footer.css"


function Footer() {
    return (
        <footer>
            App made by {"  "}
            <a target='_blank' rel='noreferrer' href='https://samueloyedeji.vercel.app'>Samuel Oyedeji</a>

            <div className='social-icons'>
                <a href="https://github.com/smtoyedeji" target="_blank" rel='noreferrer'>
                    <TbBrandGithub />
                </a>
                <a href="https://www.twitter.com/oyedeji__/" target="_blank" rel='noreferrer'>
                    <TbBrandTwitter />
                </a>
                <a href="https://www.linkedin.com/in/samuel-oyedeji" target="_blank" rel='noreferrer'>
                    <TbBrandLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer