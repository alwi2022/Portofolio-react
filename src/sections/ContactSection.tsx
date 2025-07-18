// src/sections/ContactSection.tsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";

const ContactSection = () => {
  const { lang } = useLang();
  const t = langData[lang].contact;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, email, message } = formData;

    if (!firstName || !email || !message) {
      toast.error(t.validation.empty);
      return;
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      toast.error(t.validation.invalidEmail);
      return;
    }

    setLoading(true);
    toast.loading(t.validation.loading);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          firstName,
          lastName: formData.lastName,
          email,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );

      toast.dismiss();
      toast.success(t.validation.success);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      toast.dismiss();
      toast.error(t.validation.error);
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <section id="Contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.sectionTitle}
            </h2>
            <p className="text-lg text-zinc-300">
              {t.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t.formTitle}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      {t.form.firstName}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-600 rounded-lg bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      {t.form.lastName}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-600 rounded-lg bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-zinc-600 rounded-lg bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-zinc-600 rounded-lg bg-zinc-800 text-white resize-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.form.placeholder}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center gap-2 px-6 py-3 font-medium rounded-lg transition-colors ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed opacity-70"
                      : "bg-gray-100 text-black hover:opacity-90"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  {loading ? t.form.sending : t.form.send}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t.infoTitle}
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <Mail className="w-5 h-5 text-blue-400" />
                      ),
                      label: t.infoLabels.email,
                      value: "imambahrialwi21@gmail.com",
                    },
                    {
                      icon: (
                        <Phone className="w-5 h-5 text-blue-400" />
                      ),
                      label: t.infoLabels.phone,
                      value: "+62 895-6182-16004",
                    },
                    {
                      icon: (
                        <MapPin className="w-5 h-5 text-blue-400" />
                      ),
                      label: t.infoLabels.location,
                      value: "Serang, Indonesia",
                    },
                  ].map((item) => (
                    <div className="flex items-center gap-4" key={item.label}>
                      <div className="p-3 bg-blue-900/30 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {item.label}
                        </div>
                        <div className="text-zinc-300">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-zinc-700">
                  <div className="flex gap-4">
                    {[
                      {
                        icon: "github",
                        href: "https://github.com/alwi2022",
                        label: "GitHub",
                      },
                      {
                        icon: "linkedin",
                        href: "https://www.linkedin.com/in/imam-bahri-alwi-019816250/",
                        label: "LinkedIn",
                      },
                      {
                        icon: "instagram",
                        href: "https://www.instagram.com/aaalwi1/",
                        label: "Instagram",
                      },
                    ].map(({ icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-150 fill-white "
                        aria-label={label}
                      >
                        <img
                          src={`https://skillicons.dev/icons?i=${icon}`}
                          alt={label}
                          width={30}
                          height={30}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-xl shadow-md">
                <a
                  href="/fullstack-cv-imambahrialwi.pdf"
                  className="flex items-center justify-center gap-3 w-full bg-gray-100 text-black font-medium px-6 py-4 rounded-lg transition-transform transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  {t.resumeDownload}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
