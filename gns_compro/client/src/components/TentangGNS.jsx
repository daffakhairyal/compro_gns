import { FaRegGem, FaRecycle, FaSeedling } from 'react-icons/fa';

const TentangGNS = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Tentang GNS Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Tentang GNS</h2>

        {/* Sejarah Singkat */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sejarah GNS</h3>
          <p className="text-lg text-gray-600 mb-6">
            GNS didirikan pada tahun 2005 sebagai perusahaan perdagangan emas lokal. Seiring berjalannya waktu, GNS berevolusi menjadi perusahaan multinasional yang berkembang pesat di tiga bidang utama: perdagangan emas, pengolahan limbah, dan pengolahan pakan ternak. Berawal dari visi untuk menciptakan nilai melalui keberlanjutan, kami terus berinovasi untuk mencapai solusi yang ramah lingkungan dan berdampak positif pada masyarakat.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visi & Misi</h3>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Visi:</strong> Menjadi perusahaan terdepan yang memberikan solusi berkelanjutan di sektor perdagangan emas, pengolahan limbah, dan pakan ternak untuk membangun masa depan yang lebih baik.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>Misi:</strong> Kami berkomitmen untuk memberikan produk dan layanan berkualitas tinggi dengan fokus pada inovasi, keberlanjutan, dan tanggung jawab sosial untuk meningkatkan kesejahteraan ekonomi dan lingkungan global.
          </p>
        </div>

        {/* Filosofi Perusahaan */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filosofi & Nilai Perusahaan</h3>
          <p className="text-lg text-gray-600 mb-6">
            Filosofi kami adalah bahwa keberlanjutan dan inovasi harus berjalan beriringan. Kami percaya bahwa dengan menjaga keseimbangan antara perkembangan bisnis dan kelestarian lingkungan, kami dapat menciptakan dampak positif jangka panjang. Nilai-nilai inti kami meliputi transparansi, integritas, tanggung jawab sosial, serta komitmen terhadap kualitas dan inovasi yang berkelanjutan.
          </p>
        </div>
      </div>

      {/* Lini Usaha GNS Section */}
      <div className="container mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Lini Usaha Kami</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Perdagangan Emas */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <FaRegGem className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Perdagangan Emas</h3>
            <p className="text-gray-600 text-center">
              GNS menawarkan layanan perdagangan emas yang fokus pada transparansi, keamanan, dan kepercayaan. Kami menyediakan platform yang dapat diandalkan untuk investasi dan perdagangan emas fisik dengan standar kualitas tertinggi.
            </p>
          </div>

          {/* Pengolahan Limbah */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <FaRecycle className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Pengolahan Limbah</h3>
            <p className="text-gray-600 text-center">
              Kami berkomitmen terhadap pengelolaan limbah yang ramah lingkungan dengan teknologi terbaru untuk mendaur ulang limbah secara efisien, membantu mengurangi dampak negatif terhadap lingkungan dan menciptakan produk daur ulang yang bermanfaat.
            </p>
          </div>

          {/* Pengolahan Pakan Ternak */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <FaSeedling className="text-4xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Pengolahan Pakan Ternak</h3>
            <p className="text-gray-600 text-center">
              GNS memproduksi pakan ternak berkualitas tinggi yang ramah lingkungan dengan bahan-bahan alami terbaik. Kami berusaha untuk meningkatkan produktivitas peternakan dengan menyediakan solusi pakan yang sehat dan berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangGNS;
