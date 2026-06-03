import { useParams } from 'react-router-dom';

const User = () => {
    const { userid } = useParams();

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">

            <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-10 w-full max-w-md text-center hover:shadow-2xl transition duration-300">

                <div className="w-24 h-24 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-4xl font-bold text-orange-600 mb-6">
                    {userid?.charAt(0).toUpperCase()}
                </div>

                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                    User Profile
                </h1>

                <p className="text-gray-500 text-lg">
                    Welcome back,
                </p>

                <h2 className="text-2xl font-semibold text-orange-600 mt-2">
                    {userid}
                </h2>

                <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-medium shadow-md hover:scale-105 transition duration-300">
                    View Profile
                </button>

            </div>

        </div>
    );
}

export default User;