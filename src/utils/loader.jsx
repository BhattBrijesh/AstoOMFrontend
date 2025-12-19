const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 bg-opacity-70 backdrop-blur-sm z-[9999]">
    <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
      <div className="flex space-x-2 mb-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-10 bg-orange-400 rounded-md animate-wave"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
    <style>{`
      @keyframes wave {
        0%,100% { transform: translateY(0); opacity: 0.6; }
        50% { transform: translateY(-15px); opacity: 1; }
      }
      .animate-wave {
        animation: wave 1.2s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default Loader;
