'use client';

import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const HomeAcRentalPricing = () => {
  const prices = [
    { title: 'Split AC Rent', price: '₹13,500', icon: <AcUnitIcon className="text-blue-600" /> },
    { title: 'Window AC Rent', price: '₹7,500', icon: <AcUnitIcon className="text-cyan-600" /> },
    { title: 'Service Charge', price: '₹350', icon: <AttachMoneyIcon className="text-green-600" /> },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Affordable AC Rentals & Service Charges
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {prices.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center transition hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-lg text-blue-700 font-bold mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAcRentalPricing;
