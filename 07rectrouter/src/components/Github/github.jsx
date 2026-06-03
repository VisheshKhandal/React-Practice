import react from 'react';
import { useState, useEffect } from 'react';
function Github() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/Yash-Khandal")
            .then(response => response.json())
            .then( data => {
                console.log(data);
                setdata(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-10 w-full max-w-md text-center hover:shadow-2xl transition duration-300">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600 mb-6">
                    Github followers : {data.followers}
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                    {data.name}
                </h1>
                <img src={data.avatar_url} alt="Git-Picture" className="w-32 h-32 rounded-full mx-auto mb-4" />
            </div>
        </div>
    )
}

export default Github;