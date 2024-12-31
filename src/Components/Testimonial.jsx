// src/ElfsightWidget.js
import React, { useEffect } from 'react';

const ElfsightWidget = () => {
    useEffect(() => {
        // Create and append the script tag dynamically
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.setAttribute('data-use-service-core', 'true');
        script.defer = true;
        document.body.appendChild(script);

        // Cleanup function to remove the script tag on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="elfsight-app-13e7f44d-b015-47d1-932d-633c70013fc3"
            data-elfsight-app-lazy
        ></div>
    );
};

export default ElfsightWidget;
