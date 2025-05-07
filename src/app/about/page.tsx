'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const team = [
    {
        name: "Prudhvi Raj",
        role: "Lead Designer",
        image: "/images/teams/image.png",
        bio: "With over 15 years of experience, Prudhvi brings creativity and expertise to every project."
    },
    {
        name: "Rana",
        role: "Senior Designer",
        image: "/images/project2/kitchne2.jpeg",
        bio: "Rana specializes in modern and minimalist designs that maximize space and functionality."
    }
];

const values = [
    {
        title: "Creativity",
        description: "We believe in pushing boundaries and exploring new ideas to create unique spaces.",
        image: "/images/project2/hall.jpeg"
    },
    {
        title: "Quality",
        description: "We never compromise on quality, ensuring every detail meets our high standards.",
        image: "/images/project1/kitchen.jpeg"
    },
    {
        title: "Client Focus",
        description: "Your vision is our priority. We work closely with you to bring your dreams to life.",
        image: "/images/project3/white cupboards.jpeg"
    }
];

export default function AboutPage() {
    const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});

    const handleImageError = (imagePath: string) => {
        setImageLoadErrors(prev => ({ ...prev, [imagePath]: true }));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[60vh] flex items-center justify-center"
            >
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    <Image
                        src="/images/project2/hall.jpeg"
                        alt="About Us"
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
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        About Us
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        We make your dream home&#39;s vision a reality.
                    </p>
                </motion.div>
            </motion.section>

            {/* Our Story Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
                        <div className="prose prose-lg mx-auto">
                            <p>
                                Founded in 2010, DesignStudio has been at the forefront of interior design innovation,
                                transforming spaces and creating environments that reflect our clients&#39; unique personalities
                                and aspirations. Our journey began with a simple mission: to make beautiful design
                                accessible to everyone.
                            </p>
                            <p>
                                Over the years, we&#39;ve grown from a small team of passionate designers to a full-service
                                interior design studio, serving clients across the country. Our portfolio includes
                                residential projects, commercial spaces, and everything in between.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        Our Team
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative h-80">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        onError={() => handleImageError(member.image)}
                                    />
                                    {imageLoadErrors[member.image] && (
                                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                            <p className="text-gray-500">Image failed to load</p>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        Our Values
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative h-48">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                    <Image
                                        src={value.image}
                                        alt={value.title}
                                        fill
                                        className="object-cover"
                                        onError={() => handleImageError(value.image)}
                                    />
                                    {imageLoadErrors[value.image] && (
                                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                            <p className="text-gray-500">Image failed to load</p>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 