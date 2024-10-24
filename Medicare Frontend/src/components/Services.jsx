import React from 'react'

const cardData = [
  {
    title: 'Secure Patient Records',
    description:
      'Your medical records are protected with industry-leading security measures.',
    image:
      'https://i.pinimg.com/564x/13/3a/ea/133aea6ec191ea0ebf79fed2c5d44572.jpg',
  },
  {
    title: 'Easily Manage Medical Records',
    description: 'Easily manage and access your medical records on any screen.',
    image:
      'https://i.pinimg.com/564x/1a/c1/48/1ac1484d5fa7a9c77659cd0405eda5e9.jpg',
  },
  {
    title: 'Medical Records at Your Thumbs',
    description:
      'Experience the simplicity of managing medical records at your fingertips.',
    image:
      'https://i.pinimg.com/564x/cc/ab/f8/ccabf81111e3ce2c84f7da790995ab0a.jpg',
  },
]

const Services = () => {
  return (
    <div
      id="Services"
      className="flex flex-col items-center bg-gradient-to-r from-blue-400 to-blue-300 min-h-8 pt-20 pb-24"
      style={{ background: 'linear-gradient(to right, #2196F3, #21CBF3)' }}
    >
      <h1 className="text-4xl font-bold  text-white mb-10">OUR SERVICES</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-7xl mx-auto px-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden transition-shadow duration-300 hover:shadow-xl w-full md:w-1/3 h-[400px]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-5 flex-grow">
              <h2 className="text-xl font-semibold mb-3">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
