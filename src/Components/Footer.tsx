'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="https://raw.githubusercontent.com/iTKonnects-connectwithtechnology/MetaDataWebsites/main/Projects/Help/PRInteriors/Images%20and%20logos/logo.jpeg"
                                alt="PR Interior Studios"
                                width={150}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400">
                            We make your dream home
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="mailto:pr.interior8@gmail.com" className="hover:text-white transition-colors">
                                    pr.interior8@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919618891888" className="hover:text-white transition-colors">
                                    +91 96188 91888
                                </a>
                            </li>
                            <li>
                                <address className="not-italic">
                                    Gayathri Bharathi Nilayam,<br />
                                    HyderNagar, Vasantha Nagar,<br />
                                    Nizampet, Hyderabad, 500090
                                </address>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Monday - Saturday</li>
                            <li>10:00 AM - 7:00 PM</li>
                            <li>Sunday - Closed</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} PR Interior Studios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 