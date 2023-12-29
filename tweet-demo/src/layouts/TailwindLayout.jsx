import { useState } from 'react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-200">
      <div className={`fixed z-30 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-opacity-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>
      <div className={`fixed z-40 bottom-0 inset-x-0 flex-none h-14 bg-white dark:bg-darker lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <div className="w-full h-full overflow-y-auto">
          <div className="flex items-center justify-between px-4 pt-4">
            <h1 className="text-2xl font-semibold">Logo</h1>
            <button onClick={() => setIsOpen(false)}>
              <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="mt-5">
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h13M3 8h9M3 12h9M3 16h9m11 0v-14a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v14"></path>
              </svg>
              <span className="mx-4 font-medium">Dashboard</span>
            </a>
            {/* Add more navigation items here */}
          </nav>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-full">
        <header className="w-full bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {/* Add your content here */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}