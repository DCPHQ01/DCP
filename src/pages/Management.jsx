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
      name: "Prince Chinedu Obi",
      position: "Chief Operating Officer",
      description:
        "Prince Chinedu Obi (JP) has vast knowledge and experience in the informal sector, working with farmers, cooperatives and large-scale heavy-duty trucks. He is a farmer and has owned and managed a fleet of tractors for commercial operations in several states. \n\nHe has more than twenty-five (25) years of in-depth experience in managing people, working in complex systems and operations. He is a specialist in start-up companies and change management. Before now, he was the Managing Director/CEO of Mega Movers (MM2) Logistics Limited and also served as the Chief Operating Officer of Discovery Infrastructures Limited. Over the years, his proven managerial expertise has been put into full use in end-to-end agricultural mechanization management value chain. \n\nOverall, he is responsible for the massive deployment and operations of MECA across the 36 States + FCT of the federation and the 774 LGCs in Nigeria.",
    },
    {
      id: 3,
      image: "../images/management/mbd.jpg",
      name: "Oloje 'Kojo Richards",
      position: "Manager, Business Development",
      description:
        "Oloje 'Kojo Richards is a seasoned Innovation, strategy and Implementation professional with extensive background in Strategic Partnership, fostering growth and organizational Expansion. \n\nHe possesses a multidisciplinary industry expertise and cognate experience that cuts across Telecommunication, Consulting and Government sectors. A trained Engineer and a member of the Nigerian society of Engineers. He holds a Master of Business Administration Degree from Afe Babalola University, Nigeria.",
    },
    {
      id: 4,
      image: "../images/management/mf.jpg",
      name: "Ohaeri Chima Charles",
      position: "Manager, Finance",
      description:
        "Ohaeri Chima Charles is a distinguished finance professional with over twelve years of experience in Financial Forensics, Auditing, Taxation, Financial Management, and Project Monitoring & Evaluation. His extensive career spans the Financial, ICT, and agricultural sectors, providing him with a comprehensive understanding and expertise in these fields. \n\nThroughout his career, Ohaeri has successfully led and managed high-profile financial projects, including the NDDC Forensic Audits for Edo State Lot 7b in 2021, a critical assignment by the Nigerian President. He also spearheaded the World Bank educational-based AGILE-AF projects in Adamawa State in 2024 and has significant experience in monitoring and evaluating state-acquired bonds in Bauchi, Katsina, and Adamawa States. \n\nOhaeri is well-versed in the Nigerian tax system, offering consultancy services for resolving tax disputes. He is a respected member of The Institute of Chartered Accountants of Nigeria (ICAN) and The Chartered Institute of Forensics and Certified Fraud Investigators of Nigeria. Known for his exceptional ability to manage personnel and resources efficiently, he is currently the Manager of Finance at DCP, excelling in navigating complex systems and operations.",
    },
    {
      id: 5,
      image: "../images/management/mlcs.jpg",
      name: "Emmanuella Chinonso Eze",
      position: "Manager, Legal & Corporate Services",
      description:
        "Emmanuella Chinonso Eze is a consummate legal practitioner, she obtained her LL. B in 2017 from the Enugu State University of Science & Technology and got called to the Nigerian Bar as Barrister and Solicitor of the Supreme Court of Nigeria in 2018. \n\nShe began her legal career at the law firm of Marcus Okoko &Co where she gained experiences in various capital market transactions, regulatory compliance, corporate secretarial roles, and corporate governance performance management. Emmanuella further proceeded to J-K Gadzama LLP where she garnered a broadband of experiences having handled and managed the firm’s legal operations and ensured optimal client satisfaction in local and transatlantic transactions in various sectors, including banking and finance, debt recovery, corporate finance, risk management and intellectual property rights. \n\nShe is particularly adept at providing advisory services and is well experienced in legal drafting and research, policy development, documentation/review and legal risk management.",
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
