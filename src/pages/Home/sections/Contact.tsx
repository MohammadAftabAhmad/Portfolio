import { useState } from "react";
import Particlesbackground from "../../../components/Particlesbackground";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../../../assets/images/astro.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

type ContactFormData = {
  name: string;
  email: string;
  service: string;
  idea: string;
};

type ContactFormErrors = Partial<ContactFormData>;

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: "",
    idea: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof ContactFormErrors])
      setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const required: (keyof ContactFormData)[] = [
      "name",
      "email",
      "service",
      "idea",
    ];
    const newErrors: ContactFormErrors = {};
    required.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Fill this field";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          form_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        idea: "",
      });
    } catch (err) {
      console.error("EmailJS Error: ", err);
      setStatus("error");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="w-full min-h-screen relative bg-black overflow-hidden tet-white py-20 px-6 md:px-20 flex flex-col
       md:flex-row items-center gap-10
       "
      >
        <Particlesbackground />

        <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={Astra}
              alt="contact"
              className="w-80 md:w-140 rounded-2xl shadow-lg object-cover"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* right side */}

          <motion.div
            className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-white font-bold mb-4">
              Let's Work Together
            </h2>
            <form
              className="flex flex-col gap-5 text-white"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label className="mb-1 ">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`p-3 rounded-md bg-white/10 border ${errors.name ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500 `}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 rounded-md bg-white/10 border ${errors.email ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500 `}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`p-3 rounded-md bg-white/10 border ${errors.service ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500 `}
                >
                  <option value="" disabled>
                    Something in mind?
                  </option>
                  <option value="Web Development" className="text-black">
                    Web Development
                  </option>
                  <option value="UI/UX" className="text-black">
                    UI/UX
                  </option>
                  <option value="Others" className="text-black">
                    Others
                  </option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs">{errors.service}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1">
                  Explain Your Idea <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="idea"
                  rows={4}
                  placeholder="Enter Your Idea"
                  value={formData.idea}
                  onChange={handleChange}
                  className={`p-3 rounded-md bg-white/10 border ${errors.idea ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500 `}
                ></textarea>
                {errors.idea && (
                  <p className="text-red-500 text-xs">{errors.idea}</p>
                )}
              </div>
              {status !== "idle" && (
                <p
                  className={`text-sm ${
                    status === "success"
                      ? "text-green-400"
                      : status === "error"
                        ? "text-red-400"
                        : "text-yellow-400"
                  }`}
                >
                  {status === "sending"
                    ? "sending..."
                    : status === "success"
                      ? "Message Sent Successfully"
                      : status === "error"
                        ? "Something went wrong"
                        : ""}
                </p>
              )}
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === "sending"}
                type="submit"
              >
                {status === "sending" ? "sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
