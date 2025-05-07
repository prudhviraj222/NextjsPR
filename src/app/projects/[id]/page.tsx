'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from '@/Components/Lightbox';
import { motion } from 'framer-motion';
import { use } from 'react';
import Footer from '@/Components/Footer';

const projects = [
    {
        id: 1,
        title: "Modern Living Room",
        description: "A contemporary living room design that combines comfort with modern aesthetics.",
        category: "residential",
        images: [
            "bedroomcupboards.jpeg",
            "kitchen.jpeg"
        ],
        tags: ["modern", "living room", "residential"]
    },
    {
        id: 2,
        title: "Luxury Kitchen",
        description: "A high-end kitchen renovation project that transforms the space into a chef's dream.",
        category: "residential",
        images: [
            "kitchne2.jpeg",
            "kitchne3.jpeg",
            "cupboards.jpeg",
            "cupboards 2.jpeg",
            "hall.jpeg",
            "balcony from bedroom.jpeg",
            "dressing cupboard.jpeg"
        ],
        tags: ["kitchen", "luxury", "residential"]
    },
    {
        id: 3,
        title: "Master Bedroom",
        description: "An elegant and comfortable master suite that serves as a personal sanctuary.",
        category: "residential",
        images: [
            "white cupboards.jpeg",
            "hall with tv.jpeg"
        ],
        tags: ["bedroom", "luxury", "residential"]
    }
];

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-8">The project you&#39;re looking for doesn&#39;t exist.</p>
                    <Link
                        href="/projects"
                        className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    const getImagePath = (imageName: string) => {
        return `/images/project${project.id}/${imageName}`;
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[60vh] flex items-center justify-center bg-gray-50"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src={getImagePath(project.images[0])}
                        alt={project.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        {project.description}
                    </p>
                </motion.div>
            </motion.section>

            {/* Project Details */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                            <p className="text-gray-600 mb-8">
                                We make your dream home&#39;s vision a reality. Here&#39;s how we transformed this space:
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Category</h3>
                                    <p className="text-gray-600">{project.category}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags?.map(tag => (
                                            <motion.span
                                                key={tag}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold mb-4">Project Gallery</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                                        onClick={() => {
                                            setSelectedImageIndex(index);
                                            setLightboxOpen(true);
                                        }}
                                    >
                                        <Image
                                            src={getImagePath(image)}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <Lightbox
                    images={project.images.map(img => getImagePath(img))}
                    initialIndex={selectedImageIndex}
                    onClose={() => setLightboxOpen(false)}
                />
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
} 