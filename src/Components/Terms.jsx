import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#121C2B]">
      {/* Hero Section */}
      <section className="bg-gray-200 dark:bg-[#1f2937] h-[300px] flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white text-center lg:text-4xl">
          Terms and Conditions
        </h1>
      </section>

      {/* Terms and Conditions Content */}
      <section className="p-6 lg:p-12 bg-gray-50 dark:bg-[#0b1727]">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>1. Acceptance of Terms:</strong> By using our services, you agree to comply with and be bound by these terms and conditions.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>2. Legal Advice:</strong> Information provided on this website is for general information purposes only and does not constitute legal advice.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>3. Service Use:</strong> You are responsible for the use of our services in accordance with all applicable laws and regulations.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>4. Fees and Payments:</strong> Any fees for legal services will be clearly communicated and must be paid as agreed.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>5. Confidentiality:</strong> We will maintain the confidentiality of all information shared, except as required by law.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>6. Limitation of Liability:</strong> We will not be liable for any indirect, incidental, or consequential damages arising out of your use of our services.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>7. Modifications:</strong> We reserve the right to modify or update these terms at any time without prior notice.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>8. Termination:</strong> We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>9. Governing Law:</strong> These terms shall be governed and construed in accordance with the laws of [Your Jurisdiction].
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>10. Contact:</strong> If you have any questions about these Terms, please contact us at [phone number] or [email address].
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
