import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-blue-600 text-white py-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">eQuiz System</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#features" className="hover:underline">Features</a></li>
                            <li><Link to="/leaderboard" className='hover:underline'> Quizzes</Link></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 w-full">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Welcome to eQuiz System</h2>
                    <p className="text-lg mb-6">Engage, Learn, and Challenge Yourself with Fun Quizzes</p>
                    <div className="space-x-4">
                        <button className="bg-white text-blue-600 px-6 py-2 rounded-md shadow hover:bg-gray-100">
                            <Link to="/quiz">Start a Quiz</Link>
                        </button>

                        <button className="bg-gray-800 text-white px-6 py-2 rounded-md shadow hover:bg-gray-900">
                            <Link to="/leaderboard">View Leaderboard</Link>
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
                            <Link to="/auth">Login / Sign Up</Link>
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="container mx-auto my-10 px-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Wide Range of Quizzes</h4>
                        <p className="text-sm text-gray-600">Choose from a variety of topics to enhance your knowledge.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Leaderboard</h4>
                        <p className="text-sm text-gray-600">Compete with friends and see who scores the highest!</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Interactive Design</h4>
                        <p className="text-sm text-gray-600">A smooth and engaging UI/UX for better user experience.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-blue-600 text-white py-4 text-center">
                <p>© 2024 eQuiz System. All rights reserved. <b>By Hamad Ali & Hassan Fayyaz </b></p>
            </footer>
        </div>
    );
};

export default HomePage;
