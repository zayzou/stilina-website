import {FiMapPin} from "react-icons/fi";
import {FiPhone} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import {MdOutlineFax} from "react-icons/md";
import {socials} from "../utils/constants";
import {FormInput,SubmitBtn} from "../components";


function Contact() {
    const iconStyle = "w-6 h-3 md:w-12 md:h-6";
    const socialLink = socials(iconStyle);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
            <div className="flex flex-col gap-10">
                <h2 className="text-lg font-bold sm:text-3xl xl:text-4xl">
                    Contactez-nous
                </h2>
                <p className="inline-flex items-center ">
                    <FiMapPin className="mr-2 w-5 h-5"/>{" "}
                    <a
                        href="https://maps.app.goo.gl/C135q5oVzfv4Gp228"
                        target="_blank"
                        className="link text-sm"
                    >
                        SARL Madani Scolaire et Bureau Usine Frikat, DEM, Tizi Ouzou,
                        Algerie
                    </a>
                </p>
                <p className="inline-flex items-center  ">
                    <FiPhone className="mr-2 w-5 h-5"/>
                    <span className="text-sm">
            <a href="tel:+213770806780">+213 770 80 67 80</a>
          </span>
                </p>
                <p className="inline-flex items-center  ">
                    <MdOutlineFax className="mr-2 w-5 h-5"/>
                    <span className="text-sm">
            <a href="tel:+21326387171">+213 26 38 71 71</a>
          </span>
                </p>
                <p className="inline-flex items-center  ">
                    <FiMail className="mr-2 w-5 h-5"/>{" "}
                    <a href="mailto:contact.stilina.com" className="text-sm link">
                        contact.stilina.com
                    </a>
                </p>

                <div>
                    <p className="mb-4">Suivez nous</p>
                    <div className="flex gap-3">
                        {socialLink.map(({id, url, icon}) => {
                            return (
                                <a
                                    key={id}
                                    href={url}
                                    className="btn rounded-3xl bg-base-100 shadow-xl"
                                >
                                    {icon}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Que souhaitez-vous demander ?</h2>
                    <form action="https://formspree.io/f/mvoeonrn" method="POST">
                        <FormInput label="Nom complet" name="name" type="text" defaultValue="Votre nom"/>
                        <FormInput label="Adresse e-mail" name="_replyto" type="email" defaultValue="abcd@email.com"/>
                        <label className="form-control w-full mb-5">
                            <div className="label">
                                <span className="label-text">Message</span>
                            </div>
                            <textarea
                                className="textarea textarea-bordered"
                                name="message"
                                placeholder="Message"
                            ></textarea>
                        </label>
                        <input
                            type="hidden"
                            name="_subject"
                            id="email-subject"
                            value="Contact Form Submission"
                        ></input>
                        <SubmitBtn text="Contactez-nous" style="btn-neutral"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
