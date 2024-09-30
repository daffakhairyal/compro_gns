import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header dengan Latar Belakang Besar */}
        <div className="relative mb-10">
          <img
            src="https://picsum.photos/1200/200" // Gambar latar belakang dari Lorem Picsum
            alt="GNS"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
            About Us
          </h2>
        </div>

        {/* Deskripsi Perusahaan */}
        <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Deskripsi Perusahaan</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            GNS adalah perusahaan yang berfokus pada tiga lini usaha utama: perdagangan emas, pengolahan limbah, dan pengolahan pakan ternak. 
            Kami berkomitmen untuk memberikan produk dan layanan berkualitas tinggi yang memenuhi kebutuhan pelanggan 
            dan mendukung keberlanjutan lingkungan.
          </p>
        </div>

        {/* Lini Bisnis */}
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Lini Bisnis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Perdagangan Emas",
              description: "Menawarkan berbagai produk emas dengan fokus pada transparansi dan kepercayaan.",
              imgSrc: "https://picsum.photos/300/200?random=1", // Gambar untuk perdagangan emas
            },
            {
              title: "Pengolahan Limbah",
              description: "Mengelola limbah dengan pendekatan ramah lingkungan dan proses daur ulang yang inovatif.",
              imgSrc: "https://picsum.photos/300/200?random=2", // Gambar untuk pengolahan limbah
            },
            {
              title: "Pengolahan Pakan Ternak",
              description: "Memproduksi pakan ternak berkualitas tinggi yang berkelanjutan dan ramah lingkungan.",
              imgSrc: "https://picsum.photos/300/200?random=3", // Gambar untuk pengolahan pakan ternak
            },
          ].map((business, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              <img 
                src={business.imgSrc}
                alt={business.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{business.title}</h4>
              <p className="text-gray-600">{business.description}</p>
            </div>
          ))}
        </div>

        {/* Visi dan Misi */}
        <div className="my-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Visi dan Misi</h3>
          <p className="text-gray-700 mb-2">
            <strong>Visi:</strong> Menjadi pemimpin industri dalam keberlanjutan dan inovasi di semua lini usaha kami.
          </p>
          <p className="text-gray-700">
            <strong>Misi:</strong> Memberikan produk dan layanan yang berkualitas tinggi, berkontribusi pada keberlanjutan lingkungan, dan menciptakan nilai bagi pemangku kepentingan kami.
          </p>
        </div>

        {/* Budaya Kerja */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Budaya Kerja GNS</h3>
          <p className="text-gray-600 mb-4 text-center">
            Di GNS, kami mendorong lingkungan kerja yang kolaboratif dan inovatif, yang kami sebut sebagai budaya kerja <strong>SIAP</strong>:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {[
              { letter: "S", title: "Sinergi", description: "Mendorong kolaborasi dan kerja sama antara anggota tim untuk mencapai tujuan bersama." },
              { letter: "I", title: "Inovasi", description: "Mengutamakan kreativitas dan ide-ide baru untuk meningkatkan proses dan produk yang dihasilkan." },
              { letter: "A", title: "Akuntabilitas", description: "Bertanggung jawab terhadap tindakan dan keputusan, menjaga integritas dalam setiap aspek pekerjaan." },
              { letter: "P", title: "Profesionalisme", description: "Menjunjung tinggi standar kerja yang tinggi dan memberikan layanan terbaik kepada pelanggan dan pemangku kepentingan." },
            ].map((value, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{value.letter} - {value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
                <hr className="my-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
