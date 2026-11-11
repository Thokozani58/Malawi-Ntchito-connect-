import React, { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "Find Opportunities Across Malawi",
      subtitle: "Connecting job seekers and employers from Chitipa to Nsanje.",
      jobs: "Find Jobs",
      cv: "CV Writing",
      letters: "Application Letters",
      delivery: "Application Submission Support",
      career: "Career Guidance",
      contact: "Contact Us"
    },
    ny: {
      title: "Pezani Mwayi wa Ntchito ku Malawi",
      subtitle: "Kulumikiza ofuna ntchito ndi olemba ntchito m'dziko lonse.",
      jobs: "Pezani Ntchito",
      cv: "Kukonza CV",
      letters: "Makalata Ofunsira Ntchito",
      delivery: "Kutumiza Zikalata Zofunsira Ntchito",
      career: "Malangizo a Ntchito",
      contact: "Lumikizanani Nafe"
    }
  };

  const t = content[language];

  return (
    <main>
      <header>
        <h2>Malawi Ntchito Connect</h2>
        <button onClick={() =>
          setLanguage(language === "en" ? "ny" : "en")
        }>
          {language === "en" ? "Chichewa" : "English"}
        </button>
      </header>

      <section className="hero">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <a href="#jobs">{t.jobs}</a>
      </section>

      <section id="jobs">
        <h2>{t.jobs}</h2>
        <p>Job opportunities and internships across all 28 districts.</p>
        <p>New vacancy listings will appear here.</p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <article>{t.cv}</article>
        <article>{t.letters}</article>
        <article>{t.delivery}</article>
        <article>{t.career}</article>
      </section>

      <footer>
        <h2>{t.contact}</h2>
        <p>Malawi Ntchito Connect</p>
        <p>Serving all 28 districts of Malawi.</p>
      </footer>
    </main>
  );
}
