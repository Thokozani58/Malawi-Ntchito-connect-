import React, { useMemo, useState } from 'react';

const districts = ['Chitipa','Karonga','Likoma','Mzimba','Nkhata Bay','Rumphi','Dedza','Dowa','Kasungu','Lilongwe','Mchinji','Nkhotakota','Ntcheu','Ntchisi','Salima','Chikwawa','Chiradzulu','Blantyre','Machinga','Mangochi','Mulanje','Mwanza','Nsanje','Thyolo','Phalombe','Balaka','Zomba','Neno'];
const jobs = [
  {title:'Accounts Assistant', employer:'Example Employer', district:'Lilongwe', type:'Full-time', tag:'DEMO LISTING'},
  {title:'Sales Representative', employer:'Example Business', district:'Blantyre', type:'Full-time', tag:'DEMO LISTING'},
  {title:'Graduate Trainee', employer:'Example Organisation', district:'Mzuzu', type:'Internship', tag:'DEMO LISTING'}
];
export default function App() {
  const [lang,setLang] = useState('en');
  const [district,setDistrict] = useState('All districts');
  const [search,setSearch] = useState('');
  const t = lang === 'en' ? {
    nav:['Home','Find jobs','Our services','For employers','Contact'],
    hero:'Find opportunities. Build your future.',
    sub:'A Malawi-wide platform connecting job seekers, employers and career support services — from Chitipa to Nsanje.',
    search:'Search jobs or skills', district:'All districts', find:'Find opportunities',
    services:'Career and application support', serviceSub:'Practical support to help you present yourself professionally.',
    cards:[['CV writing','Professionally prepared CVs tailored to a role.'],['Application letters','Clear, targeted application letters.'],['Application submission support','Guidance and assistance submitting applications through accepted channels.'],['Career guidance','Support with job searches, interviews and career planning.']],
    employers:'Are you recruiting?', employersSub:'Reach job seekers across all 28 districts of Malawi. Share vacancies and connect with suitable candidates.',
    jobs:'Latest opportunities', note:'These are demonstration listings for the website preview, not verified live vacancies.',
    coverage:'Serving all 28 districts of Malawi', footer:'Malawi Ntchito Connect • Opportunity for everyone.'
  } : {
    nav:['Poyamba','Fufuzani ntchito','Ntchito zathu','Kwa olemba ntchito','Tipezeni'],
    hero:'Pezani mwayi. Mangani tsogolo lanu.',
    sub:'Tsamba lothandiza anthu ofuna ntchito ndi olemba ntchito m’madera onse a Malawi — kuchokera ku Chitipa mpaka ku Nsanje.',
    search:'Sakani ntchito kapena luso', district:'Madera onse', find:'Fufuzani mwayi',
    services:'Thandizo pa ntchito ndi zikalata', serviceSub:'Timakuthandizani kukonzekera zikalata zanu mwaukadaulo.',
    cards:[['Kukonza CV','Timakonza CV yogwirizana ndi ntchito imene mukufuna.'],['Kalata yopemphera ntchito','Kalata yomveka bwino komanso yogwirizana ndi ntchito.'],['Thandizo potumiza pempho','Malangizo ndi thandizo potumiza mapempho kudzera m’njira zovomerezeka.'],['Malangizo a ntchito','Thandizo pofufuza ntchito, kukonzekera mafunso ndi mapulani a ntchito.']],
    employers:'Kodi mukufuna kulemba anthu ntchito?', employersSub:'Lumikizanani ndi anthu ofuna ntchito m’maboma onse 28 a Malawi.',
    jobs:'Mwayi watsopano', note:'Izi ndi zitsanzo zowonetsera tsambali, si ntchito zotsimikiziridwa kuti zilipo.',
    coverage:'Tikufikira maboma onse 28 a Malawi', footer:'Malawi Ntchito Connect • Mwayi kwa aliyense.'
  };
  const filtered = useMemo(()=>jobs.filter(j=>(district==='All districts'||district==='Madera onse'||j.district===district)&&(`${j.title} ${j.employer} ${j.district}`).toLowerCase().includes(search.toLowerCase())),[district,search]);
  return <div>
    <header className="top"><a className="brand" href="#"><span className="mark">NC</span><span>Malawi Ntchito Connect<small>OPPORTUNITY FOR EVERYONE</small></span></a><nav>{t.nav.map(x=><a href={x.includes('jobs')||x.includes('ntchito')?'#jobs':x.includes('services')||x.includes('zathu')?'#services':'#'} key={x}>{x}</a>)}</nav><button className="lang" onClick={()=>setLang(lang==='en'?'ny':'en')}>{lang==='en'?'Chichewa':'English'}</button></header>
    <main>
      <section className="hero"><div className="eyebrow">🇲🇼 MALAWI-WIDE CAREER PLATFORM</div><h1>{t.hero}</h1><p>{t.sub}</p><div className="search"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder={t.search}/><select value={district} onChange={e=>setDistrict(e.target.value)}><option>{t.district}</option>{districts.map(d=><option key={d}>{d}</option>)}</select><a className="cta" href="#jobs">{t.find}</a></div><div className="coverage">✓ {t.coverage}</div></section>
      <section id="services" className="section"><div className="eyebrow">WHAT WE DO</div><h2>{t.services}</h2><p className="muted">{t.serviceSub}</p><div className="cards">{t.cards.map(([a,b],i)=><article className="card" key={a}><div className="number">0{i+1}</div><h3>{a}</h3><p>{b}</p></article>)}</div></section>
      <section id="jobs" className="section jobs"><div><div className="eyebrow">EXPLORE CAREERS</div><h2>{t.jobs}</h2><p className="muted">{t.note}</p></div><div className="joblist">{filtered.map((j,i)=><article className="job" key={i}><div><span className="demo">{j.tag}</span><h3>{j.title}</h3><p>{j.employer} · {j.district} · {j.type}</p></div><span className="arrow">↗</span></article>)}{filtered.length===0&&<p>No demo listings match your search.</p>}</div></section>
      <section className="employer"><div><div className="eyebrow">FOR ORGANISATIONS</div><h2>{t.employers}</h2><p>{t.employersSub}</p></div><a className="cta light" href="mailto:hello@ntchitoconnect.mw">Contact our team</a></section>
    </main><footer>{t.footer}<span>English | Chichewa</span></footer>
  </div>;
}
