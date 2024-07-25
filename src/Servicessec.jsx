import React from 'react';
import Servicescard from './Servicescard';

export const services = [
  {
    image: "https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p1.png",
    name: "Personal Care"
  },
  {
    image: "https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p2.png",
    name: "Domiciliary Care"
  },
  {
    image: "https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p3.png",
    name: "Respite Care"
  },
  {
    image: "https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p1.png",
    name: "Personal Care"
  },
  {
    image: "https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p2.png",
    name: "Domiciliary Care"
  },
  {
    image: "https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p3.png",
    name: "Respite Care"
  }
];

const Servicessec = () => {
  return (
    <div className='services-sec'>
      <div className="container">
        <div className="cards">
          {services.map((service, index) => (
            <Servicescard key={index} imgsrc={service.image} heading={service.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicessec;
