import React from "react"
import * as Sico from "react-icons/si";
import * as aico from "react-icons/ai";
import * as Faico from "react-icons/fa";
import "../Styles/footer.css"

export default function Footer(){
    return(
        <>
        <div className="footercontent">
        <div className="icons">
            {/* Facebook */}
            <a href="#">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fbicon"><Sico.SiFacebook /></span>
                </div>
                <div className="text">Facebook/tarun</div>

            </a>
            {/* InstaGram */}
            <a href="#">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="instaicon"><Sico.SiInstagram /></span>
                </div>
                <div className="text">@t_a_r_u_n_s_k</div>

            </a>
            {/* github */}
            <a href="#">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="giticon"><Sico.SiGithub/></span>
                </div>
                <div className="text">Toxic-Whitelgnd</div>

            </a>
            {/* Linked in */}
            <a href="#">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="linicon"><Sico.SiLinkedin/></span>
                </div>
                <div className="text">Tarun S K</div>

            </a>
            {/* email */}
            <a href="#">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="emicon"><aico.AiOutlineMail/></span>
                </div>
                <div className="text">darklgnd100@gmail.com</div>

            </a>



        </div>

        <div className="quotes">
           
            <h4> To all  Haters My Motivation and Quotes is</h4>
            <p><i>"Your Intellegence is My Fukking Common Sense"</i></p>
        </div>

        <div className="madeby">
            <h5>Made By 💗 Tarun .... © copyright 2022</h5>
        </div>
        
        </div> 
        
        </>

    )
}