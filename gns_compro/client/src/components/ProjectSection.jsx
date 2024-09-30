import React from 'react';

const projects = [
  {
    id: 1,
    title: "Pengelolaan Limbah Industri",
    description: "Pengelolaan limbah di perusahaan manufaktur besar dengan efisiensi tinggi dan teknologi ramah lingkungan.",
    imageUrl: "https://picsum.photos/300?random=1", // Contoh gambar
  },
  {
    id: 2,
    title: "Daur Ulang Limbah Plastik",
    description: "Daur ulang limbah plastik untuk proyek pengelolaan sampah perkotaan.",
    imageUrl: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    title: "Pengolahan Air Limbah",
    description: "Proyek pengolahan air limbah di pabrik kimia besar untuk mengurangi pencemaran.",
    imageUrl: "https://picsum.photos/300?random=3",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Proyek Pengelolaan Limbah Terkemuka</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Berbagai proyek yang telah berhasil kami selesaikan menunjukkan komitmen kami terhadap keberlanjutan dan efisiensi dalam pengelolaan limbah.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Lihat Semua Proyek Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
