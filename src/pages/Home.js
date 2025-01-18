import React from 'react'
import styles from '../Home.module.css'

const Home = () => {
  return (
    <div>
        <nav className="bg-indigo-500 text-white py-4">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <a href="#home" className="text-xl font-bold heading">
                anirudh-led
            </a>
            <ul className="flex space-x-6">
                <li>
                <a href="#about" className="transition-colors hover:text-gray-400">
                    About
                </a>
                </li>
                <li>
                <a href="#projects" className="transition-colors hover:text-gray-400">
                    Projects
                </a>
                </li>
                <li>
                <a href="#contact" className="transition-colors hover:text-gray-400">
                    Contact
                </a>
                </li>
            </ul>
            </div>
     </nav>
        <section
            id="home"
            className="hero h-screen flex items-center justify-center text-center text-white"
        >
            <div className="bg-teal-100 w-full h-full flex justify-center items-center flex-col">
                <h1 className="text-4xl md:text-6xl font-semibold text-transparent bg-gradient-to-r from-purple-950 via-blue-900 to-green-600 inline-block animate-typewriter overflow-hidden whitespace-nowrap max-w-max bg-clip-text">
                    Hi, I'm Anirudh
                </h1>
                <p className="break-all mx-6 mt-4 text-lg md:text-2xl text-blue-950">
                    A passionate developer and tech enthusiast.
                </p>
            </div>
        </section>
    {/* About Section */}
    <section id="about" className="py-16 bg-sky-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
            I'm a fullstack web developer and a python AI newbie.
            I have expirence in HTML, CSS, JS, Python, React, ExpressJS.
        </p>
        </div>
    </section>
    {/* Projects Section */}
    <section id="projects" className="py-16 bg-green-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Librario</h3>
            <p className="mt-2 text-gray-700">
                A library management site that uses React JS for the frontend and Express JS
                for the backend. It also uses mongodb as its database.
            </p>
            </div>
            {/* Project 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Website Company</h3>
            <p className="mt-2 text-gray-700">
                A website company made for a not real company, AVS Services.
            </p>
            </div>
            {/* Project 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">AI Handwritten digit recogniser</h3>
            <p className="mt-2 text-gray-700">
                It uses pytorch.
            </p>
            </div>
        </div>
        </div>
    </section>
    {/* Contact Section */}
    <section id="contact" className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="mt-4 text-lg">
            Feel free to reach out if you'd like to work together or have any
            questions!
        </p>
        <div class="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold">Email</h3>
        <p class="mt-2 text-gray-700 mx-2">
          You can reach me at:  
          <a href="mailto:aniabhi313@gmail.com" class="text-blue-500 hover:text-blue-700">aniabhi313@gmail.com</a>
        </p>
      </div>
        </div>
    </section>
    {/* Footer */}
    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
        <p>© 2025 Anirudh Ravi. All rights reserved.</p>
        </div>
    </footer>
    </div>

  )
}

export default Home;