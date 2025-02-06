import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-[#DCD6F7] px-28 py-8">
            <div className="w-1/3 mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className=" montserrat text-2xl font-semibold uppercase text-[#424874]">Lets build something <br /> out of the world ;)</h1>
                    <h1 className="flex items-center gap-2 text-[#424874]">
                        <a href="mailto:shahalimsompod@gmail.com"><IoMdMail size={36} /></a>
                        <FaLinkedin size={30} />
                        <FaGithub size={30} />
                        <FaFacebook size={30} />
                    </h1>
                </div>
                <p className="montserrat font-light text-sm text-center mt-8 text-[#424874]">Copyright @ 2025 Shah Alim Shompod. All right reserved.</p>
            </div>
        </div>
    );
};

export default Footer;