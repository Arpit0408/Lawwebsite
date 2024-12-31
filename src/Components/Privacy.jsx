import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#121C2B]">
      {/* Hero Section */}
      <section className="bg-gray-200 dark:bg-[#1f2937] h-[300px] flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white text-center lg:text-4xl">
          Privacy Policy
        </h1>
      </section>

      {/* Privacy Policy Content */}
      <section className="p-6 lg:p-12 bg-gray-50 dark:bg-[#0b1727]">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>1. Data Collection:</strong> We collect personal information provided by you, such as name, contact details, and case specifics.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>2. Usage:</strong> Your data is used to provide legal services, communicate updates, and enhance client experience.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>3. Security:</strong> We implement robust security measures to protect your information from unauthorized access or disclosure.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>4. Retention:</strong> Personal data is retained only as long as necessary for legal and operational purposes.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>5. Third Parties:</strong> We do not share your information with third parties, except as required by law or with your consent.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>6. Access and Correction:</strong> You can request access to, or correction of, your personal information at any time.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>7. Cookies:</strong> Our website may use cookies to enhance user experience; you can manage cookie preferences through your browser settings.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>8. Changes:</strong> We may update this policy periodically and will notify you of significant changes.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>9. Contact:</strong> For any questions about this policy, please contact us at [phone number] or [email address].
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            <strong>10. Consent:</strong> By using our services, you consent to our privacy policy and practices.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
