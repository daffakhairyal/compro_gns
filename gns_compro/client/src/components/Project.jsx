import React, { useState } from 'react';

const Project = () => {
  const projects = [
    { 
      id: 1, 
      src: 'https://picsum.photos/400/300?random=1', 
      alt: 'Project 1', 
      description: 'Deskripsi untuk Project 1. Ini adalah proyek pengelolaan limbah yang berkelanjutan.' 
    },
    { 
      id: 2, 
      src: 'https://picsum.photos/400/300?random=2', 
      alt: 'Project 2', 
      description: 'Deskripsi untuk Project 2. Proyek ini berfokus pada perdagangan pakan ternak yang berkualitas.' 
    },
    { 
      id: 3, 
      src: 'https://picsum.photos/400/300?random=3', 
      alt: 'Project 3', 
      description: 'Deskripsi untuk Project 3. Kami melakukan perdagangan emas dengan transparansi dan kepercayaan.' 
    },
    { 
      id: 4, 
      src: 'https://picsum.photos/400/300?random=4', 
      alt: 'Project 4', 
      description: 'Deskripsi untuk Project 4. Mengelola limbah dengan teknologi ramah lingkungan.' 
    },
    { 
      id: 5, 
      src: 'https://picsum.photos/400/300?random=5', 
      alt: 'Project 5', 
      description: 'Deskripsi untuk Project 5. Menyediakan pakan ternak berkualitas untuk meningkatkan produktivitas.' 
    },
    { 
      id: 6, 
      src: 'https://picsum.photos/400/300?random=6', 
      alt: 'Project 6', 
      description: 'Deskripsi untuk Project 6. Proyek kami di bidang perdagangan emas yang terpercaya.' 
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedProject(null); // Reset project after fade out
    }, 300); // Match this timeout with CSS transition duration
  };

  return (
    <section className='p-5 md:px-10 md:py-8 bg-gray-50'>
      <h2 className='text-5xl font-bold text-center mb-10'>Our Projects</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {projects.map(project => (
          <div key={project.id} className='rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
            <img 
              src={project.src} 
              alt={project.alt} 
              className='w-full h-48 object-cover cursor-pointer' 
              onClick={() => openPopup(project)} 
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={closePopup} // Close modal on background click
        >
          <div 
            className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()} // Prevent click on modal from closing it
          >
            <button 
              className='absolute top-2 right-2 text-gray-600 hover:text-red-500'
              onClick={closePopup}
            >
              &times;
            </button>
            <img 
              src={selectedProject.src} 
              alt={selectedProject.alt} 
              className='w-full h-auto object-cover' 
            />
            <div className='p-5'>
              <h3 className='text-lg font-semibold text-gray-800'>{selectedProject.alt}</h3>
              <p className='text-gray-600'>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
