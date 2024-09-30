import { FaRecycle, FaLeaf, FaIndustry, FaGlobe } from 'react-icons/fa';

const SustainabilitySolutions = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 text-white">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold ">Solusi Berkelanjutan GNS</h2>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan solusi pengelolaan limbah yang ramah lingkungan, memastikan limbah diolah dengan aman dan berkelanjutan.
          </p>
        </div>

        {/* Grid for Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center text-green-600 mb-4">
              <FaRecycle className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Inovasi Ramah Lingkungan</h3>
            <p className="text-gray-600 mt-4 text-center">
              Kami menggunakan teknologi canggih untuk mengurangi dampak lingkungan dan memastikan pengelolaan limbah yang efisien.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center text-green-600 mb-4">
              <FaLeaf className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Daur Ulang & Pengolahan</h3>
            <p className="text-gray-600 mt-4 text-center">
              Fokus kami adalah memaksimalkan daur ulang, memastikan limbah dikelola dengan metode yang paling ramah lingkungan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center text-green-600 mb-4">
              <FaIndustry className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Pengelolaan Limbah Industri</h3>
            <p className="text-gray-600 mt-4 text-center">
              Kami memastikan bahwa setiap limbah industri diproses sesuai standar internasional dan peraturan lokal.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center text-green-600 mb-4">
              <FaGlobe className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Keberlanjutan untuk Masa Depan</h3>
            <p className="text-gray-600 mt-4 text-center">
              Bersama GNS, Anda berkontribusi pada keberlanjutan lingkungan untuk generasi mendatang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySolutions;
