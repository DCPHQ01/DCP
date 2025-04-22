import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Management() {
  const accordionItems = [
    {
      id: 1,
      image: "../images/management/ceo.jpg",
      name: "Dr. I.B Gashinbaki", 
      position: "Founder/GCEO Discovery Circle Practitioner",
      description:
        "As the Founder and the Group Country Director of Discovery Circle Practitioners Limited Partners (DCPLP), a management consulting company with vast experience in taxation, audit, investments, finance, operations, management and policy, he brings over twenty (20) years of experience to the Board and Management of the company. He pioneered the establishment of the DCP Country Offices in Nigeria, Liberia, South Africa and Canada. He was also the lead consultant for the establishment of AMML Microfinance Bank, Abuja -Nigeria and Top Up Africa – (a payment technology company based in Nigeria). He holds a B.Sc. in Accounting and Master’s Degree in Law Enforcement & Criminal Justice (MLC) from Ahmadu Bello University, Zaria – Nigeria. In addition, he holds a postgraduate Certificate in Corruption Studies from Hong Kong University, Hong Kong (SAR). He is a fellow, Chartered Institute of Human Capital Development (FCIHCD); Certified Fraud Examiner (CFE) from Austin, Texas, U.S.A; Certified National Accountant (CNA); Associate, Chartered Institute of Taxation (ACTI); and Associate, Council for Supply Chain Management Professionals, Lombard, Illinois, United States. \n\nHe has served in various capacities in public and private organizations such as; Office of the Chief Economic Adviser to the President of Nigeria, Nigerian Security and Minting Company (NSPMC), Economic and Financial Crimes Commission (EFCC), African Petroleum PLC (formerly British Petroleum BP) and also a Policy Advisor to the Nigeria Governors’ Forum.",
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
    <div className="mx-30 my-10">
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 text-gray-700"
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
