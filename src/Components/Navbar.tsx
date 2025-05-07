'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/services', label: 'Services' },
        { href: '/materials', label: 'Materials' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="https://printeriorstudios.com/assets/onlylogo-C56EJIou.jpeg"
                                alt="PR INTERIOR STUDIOS"
                                width={150}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                            <span className="ml-3 text-xl font-semibold text-white">PR Interior Studios</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.href === '/contact' ? (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-200 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-gray-200"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
} 