'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Lightbox from '@/Components/Lightbox';
import { motion } from 'framer-motion';

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (imagePath: string) => {
    setImageLoadErrors(prev => ({ ...prev, [imagePath]: true }));
  };

  const galleryImages = [
    "/images/project2/kitchne2.jpeg",
    "/images/project2/kitchne3.jpeg",
    "/images/project2/cupboards.jpeg",
    "/images/project2/cupboards 2.jpeg",
    "/images/project2/hall.jpeg",
    "/images/project2/balcony from bedroom.jpeg",
    "/images/project2/dressing cupboard.jpeg",
    "/images/project1/bedroomcupboards.jpeg",
    "/images/project1/kitchen.jpeg",
    "/images/project3/white cupboards.jpeg",
    "/images/project3/hall with tv.jpeg"
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/project2/hall.jpeg"
            alt="Luxury Interior Design"
            fill
            className="object-cover brightness-50"
            priority
            onError={() => handleImageError('/images/project2/hall.jpeg')}
          />
          {imageLoadErrors['/images/project2/hall.jpeg'] && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Image failed to load</p>
            </div>
          )}
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Create the home of your dreams with our expert interior design services
          </p>
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Watch Our Latest Project
          </h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl h-[600px]">
            <iframe
              src="https://www.youtube.com/embed/v9rkAaIJ1Iw"
              title="PR Interior Studios Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section> */}

      {/* Featured Projects */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "/images/project1/bedroomcupboards.jpeg",
              title: "Modern Living Room",
              description: "Contemporary design with natural lighting"
            },
            {
              image: "/images/project2/kitchne2.jpeg",
              title: "Luxury Kitchen",
              description: "High-end kitchen renovation project"
            },
            {
              image: "/images/project3/white cupboards.jpeg",
              title: "Master Bedroom",
              description: "Elegant and comfortable master suite"
            }
          ].map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-[400px]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform group-hover:scale-105"
                  onError={() => handleImageError(project.image)}
                />
                {imageLoadErrors[project.image] && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Image failed to load</p>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4">{project.description}</p>
                <Link
                  href={`/projects/${index + 1}`}
                  className="text-white text-lg font-semibold px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all inline-block"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <Image
                  src={image}
                  alt={`Project Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-110"
                  onError={() => handleImageError(image)}
                />
                {imageLoadErrors[image] && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Image failed to load</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interior Design",
                description: "Complete interior design solutions tailored to your style and needs",
                image: "/images/project2/hall.jpeg"
              },
              {
                title: "Space Planning",
                description: "Optimize your space with our expert layout and planning services",
                image: "/images/project2/cupboards.jpeg"
              },
              {
                title: "Renovation",
                description: "Transform your existing space with our renovation expertise",
                image: "/images/project1/kitchen.jpeg"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(service.image)}
                  />
                  {imageLoadErrors[service.image] && (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Image failed to load</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Premium Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use only the finest materials to ensure lasting quality and beauty in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="/images/project1/kitchen.jpeg"
                  alt="Kitchen Materials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kitchen Materials</h3>
                <p className="text-gray-600 mb-4">
                  Premium plywood, quartz countertops, and high-grade hardware for your dream kitchen.
                </p>
                <Link
                  href="/materials"
                  className="text-black font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="/images/project1/bedroomcupboards.jpeg"
                  alt="Wardrobe Materials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Wardrobe Materials</h3>
                <p className="text-gray-600 mb-4">
                  Engineered wood, mirror glass, and premium handles for elegant storage solutions.
                </p>
                <Link
                  href="/materials"
                  className="text-black font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="/images/project2/hall.jpeg"
                  alt="Flooring Materials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Flooring Materials</h3>
                <p className="text-gray-600 mb-4">
                  Italian marble, engineered wood, and premium tiles for stunning floors.
                </p>
                <Link
                  href="/materials"
                  className="text-black font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          initialIndex={selectedImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
