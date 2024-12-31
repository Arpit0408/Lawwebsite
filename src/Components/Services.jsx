import React from 'react';
import { 
  FaFileSignature, 
  FaMoneyCheckAlt, 
  FaDollarSign , 
  FaHome, 
  FaSearch, 
  FaUsers, 
  FaBalanceScale, 
  FaUniversity, 
  FaGavel , 
  FaCarCrash,
  FaDesktop,
  FaGraduationCap ,
  FaClipboardList, 
  FaBookOpen, 
  FaUserFriends, 
  FaShieldAlt, 
  FaClipboardCheck, 
  FaPeopleCarry,
  FaBriefcase 
} from 'react-icons/fa';

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 dark:bg-[#121C2B] h-[300px] flex items-center justify-center">
        <h1 className='text-3xl font-semibold text-gray-800 pt-20 capitalize text-center lg:text-4xl dark:text-white pb-1'>Services</h1>
      </section>

      <section className="bg-gray-100 pt-12 pb-10 dark:bg-[#0b1727] dark:text-white">
        <div className="container px-6 mx-auto text-center">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Our Expertise
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 max-w-3xl mx-auto">
          Civil & Property Litigation, Money Recovery, Real Estate & Property Transfer, MAHA-RERA, Registration of Documents, Indian Contract Act, Land Laws In Maharashtra, Corporate Law, Company Law, Arbitration and Conciliation Act, Co-operative & Society Act, Consumer Law, Intellectual Property Rights (Ipr)., Rent Control Law, School & Universities Tribunals, Labour law, Family Laws, law Criminal Litigations or Cases, Accident Claim, Information Technology Laws.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {/* A) Civil & Property Litigation */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      <FaGavel className="w-8 h-8" />
    </span>
    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Civil and Property Litigation</h1>
    <p className="text-gray-500 dark:text-gray-300">
      We offer comprehensive legal assistance in civil disputes, including property-related matters. Our services include representing clients in:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Property ownership disputes</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Breach of contract</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Succession and inheritance disputes</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Partition suits and more</div>
    </div>
  </div>

            {/* B) Money Recovery */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaMoneyCheckAlt className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Money Recovery</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We assist in recovering dues through legal proceedings, including:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Filing suits for recovery of money</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Drafting demand notices</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Negotiating settlements</div>
             </div>
            </div>

            {/* C) Real Estate & Property Transfer */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaFileSignature className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Real Estate & Property Transfer</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We assist with the legal complexities of real estate transactions. Our services include:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Drafting and reviewing sale agreements</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Property title verifications</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Lease agreements</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Due diligence for property transfer</div>
             </div>
            </div>

            {/* D) MAHA-RERA */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaHome className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">MAHA-RERA</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We guide developers, real estate agents, and buyers in complying with MAHARERA rules. Our services include:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">MAHARERA registration</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Filing and defending MAHARERA complaints</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Dispute resolution between buyers and builders</div>
             </div>
            </div>
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      <FaHome className="w-8 h-8" />
    </span>
    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Co-oprative & Society Laws </h1>
    <p className="text-gray-500 dark:text-gray-300">
    Our services include legal assistance for housing societies and cooperative societies in disputes involving:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Society Administration</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Property Transfer in Societies</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Disputes Between Members and the Society</div>
    </div>
  </div>

            {/* E) Registration of Documents */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaClipboardList className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Registration of Documents</h1>
              <p className="text-gray-500 dark:text-gray-300">
                Our expertise includes the registration of legal documents, ensuring proper compliance and protection of your interests in:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Sale deeds</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Gift deeds</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Wills and testaments</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Lease agreements and more</div>
             </div>
            </div>

            {/* F) Indian Contract Act */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaGavel  className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Indian Contract Act</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We provide legal services for disputes arising under the Indian Contract Act, covering:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Breach of contract</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Enforcement of contractual obligations</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Drafting and negotiating contracts</div>
             </div>
            </div>

            {/* G) Land Laws in Maharashtra */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaHome className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Land Laws in Maharashtra</h1>
              <p className="text-gray-500 dark:text-gray-300">
                Our team is skilled in handling land disputes governed by Maharashtra’s specific land laws. We assist with:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Land acquisition disputes</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Tenancy disputes</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Title disputes under the Maharashtra Land Revenue Code</div>
             </div>
            </div>

            {/* H) Corporate & Company Law */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaBriefcase className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Corporate & Company Law</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We provide legal services for corporate entities, including:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Incorporation of companies</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Compliance with company laws</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Drafting shareholders' agreements</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Dispute resolution</div>
             </div>
            </div>

            {/* I) Dispute Resolution */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaShieldAlt className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Dispute Resolution</h1>
              <p className="text-gray-500 dark:text-gray-300">
                Our firm specializes in resolving disputes through:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Mediation</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Arbitration</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Litigation in courts</div>
             </div>
            </div>

            {/* J) Family & Divorce Law */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaUserFriends className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Family & Divorce Law</h1>
              <p className="text-gray-500 dark:text-gray-300">
                Our firm provides compassionate and effective legal representation in:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Divorce proceedings</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Child custody issues</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Alimony and maintenance</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Property settlements</div>
             </div>
            </div>

            {/* K) Employment & Labor Law */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaUsers className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Employment & Labor Law</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We provide legal support on employment-related matters, including:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Drafting employment contracts</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Workplace disputes</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Compliance with labor laws</div>
             </div>
            </div>

            {/* L) Taxation Laws */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaClipboardCheck className="w-8 h-8" />
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Taxation Laws</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We provide legal counsel on taxation issues, including:
              </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Tax planning</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Filing appeals</div>
                <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Compliance with tax regulations</div>
             </div>
            </div>
{/* M) Rent Control Act */}
<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
  <span className="inline-block text-blue-500 dark:text-blue-400">
    <FaHome className="w-8 h-8" />
  </span>
  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Rent Control Act</h1>
  <p className="text-gray-500 dark:text-gray-300">
    We handle rent control disputes, including:
  </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Eviction suits</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Rent determination</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Tenant-landlord disputes under the Maharashtra Rent Control Act</div>
 </div>
</div>

{/* N) School & University Tribunals */}
<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
  <span className="inline-block text-blue-500 dark:text-blue-400">
    <FaGraduationCap className="w-8 h-8" />
  </span>
  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">School & University Tribunals</h1>
  <p className="text-gray-500 dark:text-gray-300">
    We handle education-related disputes, representing students and institutions before educational tribunals in matters like:
  </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Admission disputes</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Service-related issues of teachers and staff</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Academic misconduct</div>
 </div>
</div>

{/* O) Labour Laws */}
<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
  <span className="inline-block text-blue-500 dark:text-blue-400">
    <FaPeopleCarry className="w-8 h-8" />
  </span>
  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Labour Laws</h1>
  <p className="text-gray-500 dark:text-gray-300">
    Our firm provides legal services related to labour law, including:
  </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Industrial disputes</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Unfair dismissal claims</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Wage disputes and compliance with labour laws</div>
 </div>
</div>

{/* P) Family Laws */}
<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
  <span className="inline-block text-blue-500 dark:text-blue-400">
    <FaUserFriends className="w-8 h-8" />
  </span>
  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Family Laws</h1>
  <p className="text-gray-500 dark:text-gray-300">
    We offer legal representation in family matters, including:
  </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Divorce and child custody</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Maintenance and alimony</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Domestic violence cases</div>
 </div>
</div>

{/* Q) Criminal Litigation & Cases */}
<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
  <span className="inline-block text-blue-500 dark:text-blue-400">
    <FaGavel className="w-8 h-8" />
  </span>
  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Criminal Litigation & Cases</h1>
  <p className="text-gray-500 dark:text-gray-300">
    Our criminal law team represents clients in various criminal matters, including:
  </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Bail applications</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Trial representation</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">White-collar crimes</div>
 </div>
</div>

{/* R) Accident Claim */}
<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
  <span className="inline-block text-blue-500 dark:text-blue-400">
    <FaCarCrash className="w-8 h-8" />
  </span>
  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Accident Claim</h1>
  <p className="text-gray-500 dark:text-gray-300">
    We represent clients in accident-related disputes, helping them recover compensation for:
  </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Personal injury claims</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Motor vehicle accident claims</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Insurance disputes</div>
 </div>
</div>

{/* S) Information Technology Laws */}
<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
  <span className="inline-block text-blue-500 dark:text-blue-400">
    <FaDesktop className="w-8 h-8" />
  </span>
  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Information Technology Laws</h1>
  <p className="text-gray-500 dark:text-gray-300">
    Our firm provides legal advice and representation in cases related to:
  </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Cybercrime</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Data protection and privacy issues</div>
    <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">IT contract disputes</div>
 </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
