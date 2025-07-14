import React from 'react';
function Middle(){
    return (
    <div className="mt-6 mt-5">
        <h1 className="text-white mb-4 ml-10 text-lg">I'm interested in covering titles releasing in</h1>
        <div className="flex flex-wrap ml-10 gap-4">
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-red-700">Film</button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-red-700">Series</button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-red-700">Documentary</button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-red-700">Kids</button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-red-700">Reality</button>
        </div>
        <hr className="border-t border-gray-500 w-full my-4 mt-15" />
    </div>
    )
}
export default Middle;