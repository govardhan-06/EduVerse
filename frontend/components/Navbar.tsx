'use client';

export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                alt="EduVerse"
                src="./images/logo.png"
                className="h-12 w-12"
                />
              </div>
              <div className="hidden md:block ml-6">
                <div className="flex space-x-4">
                  <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900">About</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900">Asset Store</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900">Customer Support</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900">Explore</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900">Pricing</a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
            <img 
            className="inline-block size-10 rounded-full ring-5 ring-white" 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt=""/>
            </div>
          </div>
        </div>
      </nav>
    );
};