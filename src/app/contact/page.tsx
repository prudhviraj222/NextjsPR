'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: 'residential'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imageLoadError, setImageLoadError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Add message to Firestore
            const messagesRef = collection(db, "PRInteriors", "admin", "messages");
            await addDoc(messagesRef, {
                ...formData,
                timestamp: serverTimestamp(),
                status: 'new'
            });

            // Show success message
            toast.success('Message sent successfully!');

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                projectType: 'residential'
            });
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative min-h-[60vh] flex items-center justify-center bg-gray-50"
            >
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/teams/image.png"
                            alt="Contact Us"
                            fill
                            className="object-contain"
                            priority
                            onError={() => setImageLoadError(true)}
                        />
                        {imageLoadError && (
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-500">Image failed to load</p>
                            </div>
                        )}
                    </div>
                    <div className="absolute inset-0 bg-black/30" /> {/* Subtle overlay for text readability */}
                </div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Let&#39;s discuss how we can transform your space into something extraordinary
                    </p>
                </motion.div>
            </motion.section>

            {/* Contact Form Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold mb-2">Email</h3>
                                    <a
                                        href="mailto:pr.interior8@gmail.com"
                                        className="text-gray-600 hover:text-black transition-colors"
                                    >
                                        pr.interior8@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Phone</h3>
                                    <a
                                        href="tel:+919618891888"
                                        className="text-gray-600 hover:text-black transition-colors"
                                    >
                                        +91 96188 91888
                                    </a>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Address</h3>
                                    <address className="text-gray-600 not-italic">
                                        Gayathri Bharathi Nilayam,<br />
                                        HyderNagar, Vasantha Nagar,<br />
                                        Nizampet,<br />
                                        Hyderabad, 500090
                                    </address>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Business Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                                        Project Type
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                                    >
                                        <option value="residential">Residential</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="renovation">Renovation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                                        required
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-black text-white py-3 rounded-md transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                                        }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
} 