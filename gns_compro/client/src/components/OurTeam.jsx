import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'Memimpin perusahaan dengan visi yang jelas dan strategi inovatif.',
      photo: 'https://via.placeholder.com/150', // Ganti dengan URL foto asli
    },
    {
      name: 'Jane Smith',
      position: 'CFO',
      description: 'Bertanggung jawab atas perencanaan dan pengelolaan keuangan perusahaan.',
      photo: 'https://via.placeholder.com/150', // Ganti dengan URL foto asli
    },
    {
      name: 'Mike Johnson',
      position: 'CTO',
      description: 'Mengawasi semua aspek teknologi dan inovasi dalam perusahaan.',
      photo: 'https://via.placeholder.com/150', // Ganti dengan URL foto asli
    },
    {
      name: 'Emily Davis',
      position: 'COO',
      description: 'Mengelola operasi sehari-hari dan memastikan efisiensi.',
      photo: 'https://via.placeholder.com/150', // Ganti dengan URL foto asli
    },
    {
      name: 'Sarah Wilson',
      position: 'Head of Marketing',
      description: 'Bertanggung jawab atas strategi pemasaran dan pengembangan merek.',
      photo: 'https://via.placeholder.com/150', // Ganti dengan URL foto asli
    },
    {
      name: 'David Brown',
      position: 'Head of Production',
      description: 'Mengawasi produksi dan memastikan kualitas produk.',
      photo: 'https://via.placeholder.com/150', // Ganti dengan URL foto asli
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img 
                src={member.photo} 
                alt={`${member.name}`} 
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <h4 className="text-lg text-gray-600 mb-4">{member.position}</h4>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
