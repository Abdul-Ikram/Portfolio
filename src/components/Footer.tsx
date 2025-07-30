import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-gray-600 text-gray-300 hover:text-white hover:border-white"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>

          {/* Main Content */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Abdul Ikram</h3>
            <p className="text-gray-300 max-w-md">
              Senior Python Developer passionate about building scalable applications 
              and solving complex problems with clean, efficient code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-700"></div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              © {currentYear} Abdul Ikram. Built with 
              <Heart className="h-4 w-4 text-red-500" />
              using React & TailwindCSS
            </p>
            <p className="mt-2">
              All rights reserved. This portfolio is designed to showcase my professional work and capabilities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;