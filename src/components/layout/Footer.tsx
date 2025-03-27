"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-cyan-400">CCNA</span>
              <span className="text-lg">Interactive Course</span>
            </div>
            <p className="text-gray-400 text-sm">
              An interactive learning platform for Cisco CCNA certification preparation with hands-on labs and community support.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/modules" className="text-gray-400 hover:text-cyan-300 transition-colors">
                  Course Modules
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-gray-400 hover:text-cyan-300 transition-colors">
                  Interactive Labs
                </Link>
              </li>
              <li>
                <Link href="/qa-board" className="text-gray-400 hover:text-cyan-300 transition-colors">
                  Q&A Board
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-cyan-300 transition-colors">
                  Study Materials
                </Link>
              </li>
              <li>
                <a
                  href="https://www.netacad.com/resources/lab-downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors"
                >
                  Download Packet Tracer
                </a>
              </li>
              <li>
                <Link href="/cheatsheets" className="text-gray-400 hover:text-cyan-300 transition-colors">
                  Command Cheat Sheets
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-cyan-300 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>chosenfewrecords@hotmail.de</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Fri: 9AM - 5PM (EST)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CCNA Interactive Course. All rights reserved. <span className="text-cyan-400">Powered by Naga Apparel</span>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a> */}
            <a href="inkedin.com/in/maurice-holda/" className="text-gray-400 hover:text-cyan-300 transition-colors">
  <span className="sr-only">LinkedIn</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16.5 8a1.5 1.5 0 01-3 0h-5a1.5 1.5 0 01-3 0H6a1.5 1.5 0 01-1.5 1.5v9a1.5 1.5 0 011.5 1.5h12a1.5 1.5 0 011.5-1.5v-9a1.5 1.5 0 01-1.5-1.5h-.5zM8 9.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5H8zm3.5 0a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-1zm3.5 0a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-1z" />
  </svg>
</a>
            {/* <a href="inkedin.com/in/maurice-holda/" className="text-gray-400 hover:text-cyan-300 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
