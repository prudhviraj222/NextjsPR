'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const services = [
    {
        title: "Interior Design",
        description: "Complete interior design solutions tailored to your style and needs. We create beautiful, functional spaces that reflect your personality and lifestyle.",
        image: "/images/project2/hall.jpeg",
        features: [
            "Space planning and layout optimization",
            "Color scheme and material selection",
            "Furniture and decor selection",
            "Lighting design",
            "3D visualization and renderings"
        ]
    },
    {
        title: "Space Planning",
        description: "Optimize your space with our expert layout and planning services. We ensure every square foot is utilized effectively while maintaining aesthetic appeal.",
        image: "/images/project2/cupboards.jpeg",
        features: [
            "Floor plan optimization",
            "Traffic flow analysis",
            "Storage solutions",
            "Multi-functional spaces",
            "Accessibility considerations"
        ]
    },
    {
        title: "Renovation",
        description: "Transform your existing space with our renovation expertise. We breathe new life into your home while preserving its character and improving functionality.",
        image: "/images/project1/kitchen.jpeg",
        features: [
            "Kitchen remodeling",
            "Bathroom renovation",
            "Room additions",
            "Structural modifications",
            "Complete home makeovers"
        ]
    }
];

const process = [
    {
        step: 1,
        title: "Consultation",
        description: "We begin with a detailed consultation to understand your vision, needs, and budget."
    },
    {
        step: 2,
        title: "Design Concept",
        description: "Our team creates a comprehensive design concept based on your requirements."
    },
    {
        step: 3,
        title: "Development",
        description: "We refine the design, select materials, and create detailed specifications."
    },
    {
        step: 4,
        title: "Implementation",
        description: "Our team manages the project execution, ensuring quality and timely completion."
    }
];

export default function Services() {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});

    const handleImageError = (imagePath: string) => {
        console.error(`Failed to load image: ${imagePath}`);
        setImageLoadErrors(prev => ({ ...prev, [imagePath]: true }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative min-h-[40vh] flex items-center justify-center bg-gray-900"
            >
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    <Image
                        src="/images/project2/hall.jpeg"
                        alt="Services"
                        fill
                        className="object-cover opacity-50"
                        priority
                        onError={() => handleImageError('/images/project2/hall.jpeg')}
                        sizes="100vw"
                    />
                    {imageLoadErrors['/images/project2/hall.jpeg'] && (
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <p className="text-gray-500">Image failed to load</p>
                        </div>
                    )}
                </div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Services
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Comprehensive interior design solutions to transform your space
                    </p>
                </motion.div>
            </motion.section>

            {/* Services Overview */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                onClick={() => setSelectedService(service)}
                            >
                                <div className="relative h-48">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        onError={() => handleImageError(service.image)}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Service Details */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        key={selectedService.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                            <Image
                                src={selectedService.image}
                                alt={selectedService.title}
                                fill
                                className="object-cover"
                                onError={() => handleImageError(selectedService.image)}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {imageLoadErrors[selectedService.image] && (
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                    <p className="text-gray-500">Image failed to load</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">{selectedService.title}</h2>
                            <p className="text-gray-600 mb-8">{selectedService.description}</p>
                            <ul className="space-y-4">
                                {selectedService.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center text-gray-700"
                                    >
                                        <svg
                                            className="w-5 h-5 text-black mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <Link
                                    href="/contact"
                                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step) => (
                            <div key={step.step} className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let&#39;s discuss how we can bring your vision to life
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
} 