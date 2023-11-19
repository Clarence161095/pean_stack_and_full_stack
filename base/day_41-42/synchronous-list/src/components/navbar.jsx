export default function MyNavbar() {
  return (
    <nav className="bg-blue-500 py-2 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white text-xl font-semibold">
            Facebook
          </a>
          <div className="relative">
            <input
              type="text"
              className="bg-white border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
              placeholder="Tìm kiếm trên Facebook"
            />
            <i className="absolute top-3 right-4 text-gray-500 fas fa-search"></i>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-home text-xl"></i>
          </button>
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-user-friends text-xl"></i>
          </button>
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-comment-alt text-xl"></i>
          </button>
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-bell text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

