import { FaWhatsapp, FaEnvelope, FaFacebook, FaYoutube } from 'react-icons/fa';

const KontakDanLokasi = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Kontak dan Lokasi GNS</h2>
  
          {/* Gambar Perusahaan */}

  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Peta Lokasi */}
            <div className="bg-gray-100 rounded-lg shadow-lg">
              <iframe
                title="Peta Lokasi GNS"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091525!2d144.9537353153154!3d-37.81627997975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b045%3A0x50cb4e2e76e03e1b!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1615920593854!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

                        {/* Informasi Kontak */}
        <div className='grid grid-row-2'>
            <div className="mb-12">
            <img
              src="https://picsum.photos/800/400?random=1"
              alt="Foto Perusahaan GNS"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <ul className="text-gray-700">
                <li className="mb-4">
                  <strong>Alamat:</strong>
                  <p>Jalan Raya GNS No. 123, Jakarta, Indonesia</p>
                </li>
                <li className="mb-4">
                  <strong>Email:</strong>
                  <p>
                    <FaEnvelope className="inline mr-2 text-blue-500" />
                    <a href="mailto:info@gns.co.id" className="text-blue-500 hover:underline">info@gns.co.id</a>
                  </p>
                </li>
                <li className="mb-4">
                  <strong>Telepon:</strong>
                  <p>
                    <FaWhatsapp className="inline mr-2 text-green-500" />
                    <a href="https://wa.me/62123456789" className="text-green-500 hover:underline">(021) 123-4567</a>
                  </p>
                </li>
                <li className="mb-4">
                  <strong>Media Sosial:</strong>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="text-blue-600 text-2xl hover:text-blue-700" />
                    </a>
                    <a href="https://www.youtube.com/YourChannel" target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="text-red-600 text-2xl hover:text-red-700" />
                    </a>
                  </div>
                </li>
                <li>
                  <strong>Jam Operasional:</strong>
                  <p>Senin - Jumat, 08:00 - 17:00</p>
                </li>
              </ul>
            </div>
        </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default KontakDanLokasi;
  
