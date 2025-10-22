const NewsLatter = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500 drop-shadow-lg">
          🎮 Join the Game Zone Community!
        </h2>

        <p className="text-gray-300 mb-8 text-lg md:text-xl">
          Stay updated with the latest game releases, tips, and exclusive
          offers. Subscribe to our newsletter and never miss out on epic
          adventures!
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border rounded-lg w-full sm:w-2/3  focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-gray-400 mt-4 text-sm">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsLatter;
