import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const userAgreement = localStorage.getItem('userAgreement');

    if (!userAgreement) {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    // Save to local storage when the user agrees
    localStorage.setItem('userAgreement', 'Agreed to the website: Adv. G V. Deshmukh & Associates');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mainpopup">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative backdrop-blur-lg bg-opacity-70 border border-gray-300 border-opacity-40 w-full max-w-[300px] sm:max-w-md mypopupcontent">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white hover:text-gray-400"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-white text-center">Welcome to Our Site!</h2>
            <p className="text-white mt-2 text-sm sm:text-base text-justify">
              The Bar Council of India does not permit advertisement or solicitation by 
              Advocates in any form or manner. By accessing this website (https://advgvdeshmukh.com), you acknowledge and confirm that you are seeking 
              information relating to "Adv. G. V. Deshmukh & Associates" of your 
              own accord and that there has been no form of solicitation, advertisement or 
              inducement by "Adv. G V. Deshmukh & Associates" or its members.
              The information provided under this website is solely available at your 
              request for informational purposes only, and should not be interpreted as 
              soliciting or advertisement. We are not liable for any consequence of any 
              action taken by the user relying on material/information provided under this 
              website. In cases where the user has any legal issues, he/she in all cases must 
              seek independent legal advice.
            </p>

            <p className="text-white mt-2 text-sm sm:text-base">
              The contents of this website are the intellectual property of "Adv. G. V. 
              Deshmukh & Associates".
            </p>
            <div className="flex items-center justify-center mt-5">
              <button 
                onClick={closePopup}
                type="submit" 
                className="text-white text-center bg-blue-500 dark:bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded text-lg"
              >
                AGREE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
