// src/components/common/Button.jsx
export const Button = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 active:scale-95"
    >
      {children}
    </button>
  );
};