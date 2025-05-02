import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Management() {
  const accordionItems = [
    {
      id: 1,
      image: "../images/management/gceo.jpg",
      name: "Dr. Iliyasu B. Gashinbaki, B.Sc, PGCC, MLC, DBA, FCNA, FCTI, FCCrFA, FCCFI, CFE", 
      position: "Founder/GCEO Discovery Circle Practitioner",
      description:
        "Dr. Iliyasu B. Gashinbaki, is a distinguished consultant, forensic expert, and thought leader with decades of experience in tax, audit, finance, forensics, and public sector advisory. He is the Founder and Chief Executive Officer of Discovery Circle Practitioners (DCP), a multidisciplinary consulting firm committed to delivering high-impact solutions across governance, institutional development, and financial systems. He is the Founder/Pioneer President and Chairman, Governing Council of the Chartered Institute of Forensics and Certified Fraud Investigators of Nigeria (CIFCFIN), and is also the Founder/GCEO of the MECA GROUP, with interests spanning Agri-Tech, Engineering, Energy, and E-Commerce. Dr. Gashinbaki has advised numerous public and private institutions and has held board positions in national and international organizations, including the Nigeria Extractive Industries Transparency Initiative (NEITI), the Abuja Chamber of Commerce and Industry (ACCI), and the African Space Foundation. \n\nDr. Gashinbaki holds a Bachelor’s degree in Accounting, a Master’s degree in Law Enforcement & Criminal Justice (MLC) from Ahmadu Bello University, Zaria, a Postgraduate Certificate in Corruption Studies from Hong Kong University, and a Doctorate in Business Administration (DBA) from Bentwood University, California. He is a Chartered Accountant, Certified Fraud Examiner (CFE), Chartered Tax Practitioner, Chartered Forensic Accountant, and a Fellow of several professional institutes. His expertise blends deep technical knowledge with policy-level insight, positioning him as a leading voice in Nigeria’s consulting and forensic landscape.",
    },
    {
      id: 2,
      image: "../images/management/coo.jpg",
      name: "Prince Chinedu Obi, PHD,CCFI",
      position: "Chief Operating Officer",
      description:
        "Dr. Prince Chinedu Obi (JP) is a seasoned professional with over 25 years of extensive experience in the informal sector, with particular expertise in agricultural mechanization, logistics, cooperative development, and heavy-duty fleet operations. He has consistently demonstrated exceptional leadership in managing complex systems, people, and large-scale operational structures across Nigeria. \n\nA dedicated farmer and agribusiness expert, Dr. Obi has successfully owned and operated a commercial fleet of tractors, delivering mechanization services across multiple states. His deep understanding of the agricultural value chain, particularly within the mechanization segment, has positioned him as a key player in driving productivity and efficiency in Nigeria’s farming communities. \n\nDr. Obi is a specialist in start-up development and change management, bringing a strategic mindset and operational excellence to every initiative he leads. He previously served as the Managing Director/CEO of Mega Movers (MM2) Logistics Limited, where he oversaw nationwide logistics operations, and as the Chief Operating Officer of Discovery Infrastructures Limited, where he led transformative projects in infrastructure and development. \n\nCurrently, he is responsible for the strategic oversight and nationwide deployment of Machine and Equipment Corporation Africa (MECA), managing its operations across Nigeria’s 36 states and the Federal Capital Territory (FCT), including all 774 Local Government Councils. His leadership continues to be instrumental in advancing MECA’s vision of revolutionizing mechanization and equipment accessibility throughout the federation."
    },    
    {
      id: 3,
      image: "../images/management/mbd.jpg",
      name: "Oloje ‘Kojo Richards, MBA, MNSE, CCFI, MNIM",
      position: "Senior Manager, Business Development",
      description:
        "Oloje ‘Kojo Richards is a dynamic business development strategist with over a decade of high-impact experience spanning energy infrastructure, Telecoms, Oil & Gas, institutional strengthening, and value driven consulting, As Senior Manager, Business Development, Kojo leads the firm’s growth architecture shaping bold ideas into actionable strategies that deliver long-term value, bringing a rare combination of technical depth, commercial intelligence, and policy fluency to every engagement. \n\nHe is instrumental in designing and executing enterprise-level initiatives that unlock new markets, deepen stakeholder alliances, and position DCP as a trusted advisor to both governmental and private sector institutions. \n\nKojo is Currently saddled with the responsibility of strategy coordination at DCP, where he has successfully designed and coordinated multi-sectoral growth roadmaps that align with the firm’s long-term vision. Renowned for his clarity of thought and precision in execution, he brings equal strength to high-level strategic dialogue and on-the-ground implementation consistently transforming complex challenges into actionable, high-value opportunities. \n\nHe is recognized for consistently advancing bold ideas into scalable, impact-driven solutions with an unwavering commitment to excellence, sustainable impact, and a reputation for consummate professionalism. \n\nKojo holds a Master’s in Business Administration (MBA) with distinction. He is a Corporate Member of the Nigerian Society of Engineers, a Certified Forensic Investigator, a lettered Project Manager and a Member of the Nigerian Institute of Management.",
    },
    {
      id: 4,
      image: "../images/management/mf.jpg",
      name: "Ohaeri Chima Charles, ACA, ACTI, CCrFA",
      position: "Manager, Finance",
      description:
        "Ohaeri Chima Charles is a seasoned finance professional with over twelve years of experience in Financial Forensics, Auditing, Taxation, Financial Management, and Project Monitoring & Evaluation. His career spans the Financial and ICT sectors, providing him with broad expertise and a deep understanding of complex financial and operational environments. \n\nHe has led significant projects such as the NDDC Forensic Audit for Edo State Lot 7b in 2021, commissioned by the Nigerian Presidency, and the World Bank-supported AGILE-AF educational project in Adamawa State in 2024. Additionally, Ohaeri has extensive experience monitoring and evaluating state-acquired bonds across Bauchi, Katsina, Adamawa, and Ogun States. \n\nOhaeri is also a tax consultant specializing in dispute resolution within the Nigerian tax system. He holds memberships with the Chartered Institute of Taxation of Nigeria (CITN), the Institute of Chartered Accountants of Nigeria (ICAN), and the Chartered Institute of Forensics and Certified Fraud Investigators of Nigeria. \n\nCurrently, as Finance Manager at Discovery Circle Professionals LP, Ohaeri is recognized for his strong leadership, resource management skills, and ability to navigate complex systems to deliver impactful results across multiple sectors.",
    },
    {
      id: 5,
      image: "../images/management/mlcs.jpg",
      name: "Emmanuella Chinonso Eze, ESQ., CCFI",
      position: "Manager, Legal & Corporate Services",
      description:
        "Emmanuella is a highly skilled legal practitioner and strategic HR professional with seven years of cross-sectoral experience in legal advisory, corporate governance, human resources management, and institutional strengthening. She holds an LL.B from Enugu State University of Science & Technology and was called to the Nigerian Bar in 2018. She is currently pursuing a Master’s in Business Administration. \n\nHer professional journey began at Marcus-Okoko & Co., where she gained valuable litigation, regulatory, and corporate governance experience. She subsequently served as Head of Corporate Services at Jogos Counselors and later as Legal Practice Manager at J.K. Gadzama LLP, where she oversaw firm operations, compliance, and legal support for cross-border transactions in finance, agriculture, energy, and public-private partnerships. \n\nCurrently, Emmanuella serves as the Manager, Legal and Corporate Services at Discovery Circle Practitioners (DCP), where she provides strategic legal and HR leadership. She advises on regulatory compliance, labour law, business restructuring, capital market transactions, and public-sector advisory. She also leads recruitment, performance management, policy development, and employee engagement across the organization and client companies. \n\nAdept in legal drafting, legal risk management, and corporate structuring, Emmanuella plays a pivotal role in DCP’s African expansion strategy. Her recent tasks include bond issuance project monitoring, legal advisory for subnational revenue generation, and support for the largest livestock processing facility in Nigeria. She also plays a key role in developing and reviewing legal frameworks, including Power Purchase Agreements (PPA), Gas Sale and Purchase Agreements (GSPA), Engineering, Procurement and Construction Agreements (EPCA), Shareholders Agreements, and PPP frameworks. \n\nEmmanuella is a member of the Nigerian Bar Association, the International Federation of Female Lawyers (FIDA), and a Member of the Chartered Institute of Forensics and Certified Fraud Investigators of Nigeria. Her multidisciplinary background, exceptional management skills, and dedication to excellence make her a valuable asset in any legal or corporate advisory role.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-5 md:mx-30 my-20">
      <div className="text-3xl font-bold mb-10 flex justify-center">
        <h2>Management</h2>
      </div>
        <div className="space-y-4">
            {accordionItems.map((item, index) => (
            <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
            >
                <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center">
                      <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.position}</p>
                      </div>
                  </div>
                  <div className="text-xl">{openIndex === index ? "-" : "+"}</div>
                </div>

                {openIndex === index && (
                  <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, delay:0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                  >
                    <div className="p-4 text-gray-700 whitespace-pre-line text-justify">
                        <p>{item.description}</p>
                    </div>
                </motion.div>
                )}
            </div>
            ))}
        </div>
    </div>
  );
}
