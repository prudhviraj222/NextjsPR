'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const materials = [
    {
        category: "Kitchen Materials",
        items: [
            {
                name: "Premium Plywood",
                description: "High-quality plywood with superior durability and moisture resistance, perfect for kitchen cabinets.",
                image: "/images/project1/kitchen.jpeg"
            },
            {
                name: "Quartz Countertops",
                description: "Premium quartz countertops offering exceptional durability, stain resistance, and elegant aesthetics.",
                image: "/images/project2/kitchne2.jpeg"
            },
            {
                name: "Stainless Steel Hardware",
                description: "High-grade stainless steel hardware ensuring smooth operation and long-lasting performance.",
                image: "/images/project1/kitchen.jpeg"
            }
        ]
    },
    {
        category: "Wardrobe Materials",
        items: [
            {
                name: "Engineered Wood",
                description: "Premium engineered wood with superior strength and stability for long-lasting wardrobes.",
                image: "/images/project1/bedroomcupboards.jpeg"
            },
            {
                name: "Mirror Glass",
                description: "High-quality mirror glass with anti-fog and scratch-resistant properties.",
                image: "/images/project2/cupboards.jpeg"
            },
            {
                name: "Premium Handles",
                description: "Elegant and durable handles made from high-quality materials for smooth operation.",
                image: "/images/project1/bedroomcupboards.jpeg"
            }
        ]
    },
    {
        category: "Flooring Materials",
        items: [
            {
                name: "Italian Marble",
                description: "Premium Italian marble offering unmatched elegance and durability.",
                image: "/images/project2/hall.jpeg"
            },
            {
                name: "Engineered Wood Flooring",
                description: "High-quality engineered wood flooring with superior stability and natural beauty.",
                image: "/images/project3/white cupboards.jpeg"
            },
            {
                name: "Porcelain Tiles",
                description: "Premium porcelain tiles with excellent durability and water resistance.",
                image: "/images/project2/hall.jpeg"
            }
        ]
    }
];

export default function Materials() {
    const [selectedCategory, setSelectedCategory] = useState(materials[0].category);

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
                    <Image
                        src="/images/project2/hall.jpeg"
                        alt="Materials"
                        fill
                        className="object-cover opacity-50"
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
                        Premium Materials
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        We use only the finest materials to ensure lasting quality and beauty
                    </p>
                </motion.div>
            </motion.section>

            {/* Materials Categories */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Category Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {materials.map((category) => (
                            <motion.button
                                key={category.category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category.category)}
                                className={`px-6 py-3 rounded-full transition-colors ${selectedCategory === category.category
                                    ? 'bg-black text-white'
                                    : 'bg-white text-gray-800 hover:bg-gray-100'
                                    }`}
                            >
                                {category.category}
                            </motion.button>
                        ))}
                    </div>

                    {/* Materials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {materials
                            .find((cat) => cat.category === selectedCategory)
                            ?.items.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance Section */}
            <section className="py-20 px-4 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Our Quality Promise</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We source our materials from trusted manufacturers and suppliers who share our commitment to quality and sustainability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
                            <p className="text-gray-300">
                                We use only the highest quality materials that meet international standards.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold mb-4">Durability</h3>
                            <p className="text-gray-300">
                                Our materials are selected for their long-lasting performance and resistance to wear.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                            <p className="text-gray-300">
                                We prioritize eco-friendly materials and sustainable sourcing practices.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
} 