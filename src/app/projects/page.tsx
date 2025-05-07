'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from '@/Components/Lightbox';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Modern Living Room",
        description: "A contemporary living room design that combines comfort with modern aesthetics.",
        category: "residential",
        image: "/images/project1/bedroomcupboards.jpeg",
        tags: ["modern", "living room", "residential"]
    },
    {
        id: 2,
        title: "Luxury Kitchen",
        description: "A high-end kitchen renovation project that transforms the space into a chef's dream.",
        category: "residential",
        image: "/images/project2/kitchne2.jpeg",
        tags: ["kitchen", "luxury", "residential"]
    },
    {
        id: 3,
        title: "Master Bedroom",
        description: "An elegant and comfortable master suite that serves as a personal sanctuary.",
        category: "residential",
        image: "/images/project3/white cupboards.jpeg",
        tags: ["bedroom", "luxury", "residential"]
    },
    {
        id: 4,
        title: "Restaurant Renovation",
        category: "commercial",
        image: "/project-4.jpg",
        description: "Complete renovation of a fine dining restaurant"
    },
    {
        id: 5,
        title: "Loft Conversion",
        category: "renovation",
        image: "/project-5.jpg",
        description: "Industrial loft transformation into a modern home"
    },
    {
        id: 6,
        title: "Boutique Hotel",
        category: "commercial",
        image: "/project-6.jpg",
        description: "Interior design for a boutique hotel chain"
    }
];

const categories = ["all", "residential", "commercial", "renovation"];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage] = useState("");

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[40vh] flex items-center justify-center bg-gray-50"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/project1/kitchen.jpeg"
                        alt="Projects Overview"
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
                        Our Projects
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        We make your dream home - Explore our portfolio of interior design and renovation projects
                    </p>
                </motion.div>
            </motion.section>

            {/* Category Filter */}
            <section className="py-8 px-4 bg-white border-b">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {categories.map(category => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${selectedCategory === category
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            variants={container}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map(project => (
                                <motion.div
                                    key={project.id}
                                    variants={item}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white rounded-lg shadow-lg overflow-hidden"
                                >
                                    <div className="relative aspect-video">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            onError={(e) => {
                                                console.error(`Error loading image: ${project.image}`);
                                                e.currentTarget.src = '/placeholder.jpg';
                                            }}
                                        />
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
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
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                                            >
                                                View Project
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <Lightbox
                    images={[selectedImage]}
                    initialIndex={0}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </div>
    );
} 