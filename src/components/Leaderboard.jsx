import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = ({ results }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Leaderboard</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Top Scores</h2>
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <span className="font-medium">{result.name}</span>
                <span className="font-bold text-blue-600">{result.score}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No scores available. Be the first to complete a quiz!</p>
        )}
      </div>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Leaderboard;
