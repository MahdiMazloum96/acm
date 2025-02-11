import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Hello, Tailwind!</h1>
        <p className="text-gray-500 text-center ">
          This is a simple component styled with Tailwind CSS.
          تست فونت
        </p>
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-700 ">
          کلیک کنید
        </button>
      </div>
    </div>
  );
};

export default App;