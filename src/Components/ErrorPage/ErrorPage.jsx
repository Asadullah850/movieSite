import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-4">Oops! The page you are looking for could not be found.</p>
                <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Go Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;