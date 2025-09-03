// intro.jsx
function Intro() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    LifeSync
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Personal Life Management Platform
                </p>
                <div className="space-y-4">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                        Get Started
                    </button>
                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition duration-200">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Intro;