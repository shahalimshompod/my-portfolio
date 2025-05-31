import { motion } from "framer-motion";
import contactLottie from "../../assets/lotties/contactLottie.json";
import Lottie from "lottie-react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "7868b029-4f7a-4802-aa1f-e052ee5a78b7");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            toast.success("Message sent successfully!", {
                style: {
                    border: "1px solid #713200",
                    padding: "16px",
                    color: "#713200",
                },
                iconTheme: {
                    primary: "#713200",
                    secondary: "#FFFAEE",
                },
            });

            event.target.reset(); // Reset the form here
        }
    };

    return (
        <div id="contact_me" className="w-full mx-auto rounded-2xl my-16 md:my-20 lg:my-28 px-4 sm:px-8 md:px-12 lg:px-16">
            <Toaster />
            <motion.h1
                className="text-center font-bold montserrat text-3xl sm:text-4xl text-[#424874] mb-10 md:mb-16"
                initial={{ y: 50, opacity: 1 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Have Anything in mind?
            </motion.h1>

            <div className="flex flex-col lg:flex-row items-center justify-around gap-8 mt-8">
                {/* Lottie Animation */}
                <div className="w-full lg:w-1/3">
                    <Lottie animationData={contactLottie} loop={true} />
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-1/2 border border-[#A6B1E1] p-3 rounded-2xl shadow-2xl shadow-[#DCD6F7]">
                    <h2 className="text-2xl sm:text-3xl font-bold montserrat text-center text-[#424874] mb-6">
                        Reach Me Out
                    </h2>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <label className="block text-gray-700 font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <label className="block text-gray-700 font-medium">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <label className="block text-gray-700 font-medium">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500"
                            ></textarea>
                        </motion.div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-2 px-4 bg-[#A6B1E1] text-white font-semibold rounded-lg shadow-md cursor-pointer"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;