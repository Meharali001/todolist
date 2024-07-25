import React from 'react';

const Servicescard = ({ imgsrc, heading }) => {
  return (
    <div className="services-card">
      <img src={imgsrc} alt={heading} className="service-image" />
      <h1>{heading}</h1>
    </div>
  );
}

export default Servicescard;
