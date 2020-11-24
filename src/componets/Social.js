import React from "react";
import { ReactComponent as IcTwitter } from "../images/icons/twitter.svg";
import { ReactComponent as IcFacebook } from "../images/icons/facebook.svg";
import { ReactComponent as IcLinkedin } from "../images/icons/linkedin.svg";
import { ReactComponent as IcInstagram } from "../images/icons/instagram.svg";
import { ReactComponent as IcWeb } from "../images/icons/web.svg";

const socialMedia = [
    {
    icon: <IcTwitter />,
    link: "https://web.facebook.com/ana.sotohernandes.5/",
    },
    {
    icon: <IcFacebook />,
    link: "https://web.facebook.com/ana.sotohernandes.5/",
    },
    {
    icon: <IcLinkedin />,
    link: "https://www.linkedin.com/in/ana-laura-soto-hern%C3%A1ndez-b2728316b/",
    },
    {
    icon: <IcInstagram />,
    link: "https://www.linkedin.com/in/ana-laura-soto-hern%C3%A1ndez-b2728316b/",
    },
    {
    icon: <IcWeb />,
    link: "https://www.linkedin.com/in/ana-laura-soto-hern%C3%A1ndez-b2728316b/",
    },
    ]

export default function Social() {
    return (
        <div className="social">
            {socialMedia.map((social, index) => (
            <a key={index}
            href= {social.link}
            target="_blank"
            rel= "noreferrer noopener">
                {social.icon}
            </a>
            ))}
        </div>
    )
}
