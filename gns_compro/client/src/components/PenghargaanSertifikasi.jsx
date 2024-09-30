import { FaTrophy, FaCertificate } from 'react-icons/fa';

const PenghargaanSertifikasi = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Penghargaan dan Sertifikasi GNS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Sertifikasi Lingkungan */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaCertificate className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Sertifikasi Lingkungan</h3>
            <p className="text-gray-600 text-center">
              GNS telah mendapatkan sertifikasi lingkungan yang menunjukkan komitmen kami terhadap praktik bisnis yang ramah lingkungan dan berkelanjutan.
            </p>
          </div>

          {/* Sertifikasi Keamanan Emas */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Sertifikasi Keamanan Emas</h3>
            <p className="text-gray-600 text-center">
              GNS mematuhi standar tinggi keamanan dalam perdagangan emas, telah memperoleh sertifikasi yang membuktikan transparansi dan kepercayaan dalam transaksi kami.
            </p>
          </div>

          {/* Sertifikasi Kualitas Produk */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaCertificate className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Sertifikasi Kualitas Produk</h3>
            <p className="text-gray-600 text-center">
              Kami juga telah mendapatkan sertifikasi yang mengakui kualitas produk kami, menjamin bahwa setiap produk yang kami tawarkan memenuhi standar industri yang ketat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenghargaanSertifikasi;
