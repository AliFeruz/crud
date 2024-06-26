import React from 'react';
import Link from 'next/link';
import { ArrowUturnLeftIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div>
        <Link href="/" className='flex items-center justify-start space-x-2 py-4'>
        <ChevronDoubleLeftIcon className='h-8 w-8 text-slate-700'/>
        <p className="text-slate-950 hover:underline text-xs uppercase">Back</p>
        </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">About This App</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to our beautifully crafted Notes WebApp, designed to streamline your note-taking experience. This application is built with a modern tech stack including Next.js, NextAuth for authentication, Tailwind CSS for stunning and responsive design, and Shadcn for rich UI components. Our data management is powered by Mongoose and MongoDB, ensuring efficient and scalable data handling.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">Key Features:</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
          <li><strong>User Authentication:</strong> Secure user registration and login functionality powered by NextAuth, ensuring your notes are safe and personalized.</li>
          <li><strong>Dynamic Note Management:</strong> Create, read, update, and delete notes with ease. Each note is presented in a visually appealing grid card layout with randomly assigned background colors, making your notes not only functional but also aesthetically pleasing.</li>
          <li><strong>Responsive Design:</strong> The application is designed to be fully responsive, providing a seamless experience across all devices.</li>
          <li><strong>Dark and Light Themes:</strong> Toggle between dark and light themes to match your preference and environment. The theme state is managed using React Context, ensuring a consistent experience throughout the app.</li>
          <li><strong>Real-time Updates:</strong> Enjoy real-time data fetching and updates, giving you instant access to your latest notes without the need to refresh the page.</li>
          <li><strong>Date and Time Information:</strong> Each note card displays creation time information, helping you keep track of your note-taking activities.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">Technologies Used:</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Next.js:</strong> For server-side rendering and static site generation.</li>
          <li><strong>NextAuth:</strong> For robust and secure authentication.</li>
          <li><strong>Tailwind CSS:</strong> For fast and flexible styling.</li>
          <li><strong>Shadcn:</strong> For enhanced UI components.</li>
          <li><strong>Mongoose & MongoDB:</strong> For powerful and scalable data management.</li>
          <li><strong>React Context:</strong> For state management, including theme toggling and data fetching.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Feel free to explore the source code and connect with me on GitHub and LinkedIn for more information and future updates.
        </p>
        <div className="flex space-x-4">
          <Link href="https://github.com/your-github-profile">
            <p className="text-blue-500 dark:text-blue-300 hover:underline">GitHub</p>
          </Link>
          <Link href="https://linkedin.com/in/your-linkedin-profile">
            <p className="text-blue-500 dark:text-blue-300 hover:underline">LinkedIn</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
