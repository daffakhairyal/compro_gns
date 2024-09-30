import { FaShieldAlt, FaLeaf, FaStar } from 'react-icons/fa';

const KeunggulanGNS = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Keunggulan GNS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Keunggulan Teknis dan Pengalaman */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaShieldAlt className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Keunggulan Teknis dan Pengalaman</h3>
            <p className="text-gray-600 text-center">
              GNS memiliki tim ahli yang berpengalaman di setiap lini usaha. Kami menggunakan teknologi terbaru dan praktik terbaik untuk memastikan efisiensi dan keandalan dalam semua proses bisnis kami.
            </p>
          </div>

          {/* Fokus pada Keberlanjutan dan Tanggung Jawab Sosial */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaLeaf className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Fokus pada Keberlanjutan</h3>
            <p className="text-gray-600 text-center">
              Kami berkomitmen untuk beroperasi dengan cara yang ramah lingkungan dan berkelanjutan. GNS tidak hanya fokus pada keuntungan, tetapi juga pada dampak positif terhadap masyarakat dan lingkungan.
            </p>
          </div>

          {/* Kualitas dan Inovasi Produk */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Kualitas dan Inovasi</h3>
            <p className="text-gray-600 text-center">
              Produk dan layanan GNS dikenal karena kualitasnya yang tinggi. Kami terus berinovasi untuk memenuhi kebutuhan pelanggan dan menghadirkan solusi yang terbaik dan paling efisien di pasar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeunggulanGNS;
