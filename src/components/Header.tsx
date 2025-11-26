import { Search, Bookmark, Bell, Filter, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const savedViews = ['Default View', 'Analytics', 'Overview', 'Monitoring'];

  return (
    <header className="h-16 bg-[#0f0f0f] border-b border-gray-800 flex items-center px-3 sm:px-6 gap-2 sm:gap-4">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden w-10 h-10 rounded-lg bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-all"
        title="Menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex-1 flex items-center gap-2 sm:gap-4 min-w-0">
        {/* Search Bar - Hidden on very small screens, visible on sm+ */}
        <div className="relative flex-1 max-w-2xl hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
          />
        </div>

        {/* Saved Views - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex gap-2">
          {savedViews.map((view, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm transition-all whitespace-nowrap ${
                index === 0
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'bg-[#1a1a1a] text-gray-400 border border-gray-700 hover:text-gray-200 hover:border-gray-600'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        {/* Mobile Search Button */}
        <button
          className="sm:hidden w-10 h-10 rounded-lg bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-all"
          title="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        <button
          className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-all"
          title="Bookmarks"
        >
          <Bookmark className="w-5 h-5" />
        </button>
        <button
          className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-all"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        {/* Filter button hidden on mobile */}
        <button
          className="hidden sm:flex w-10 h-10 rounded-lg bg-[#1a1a1a] border border-gray-700 items-center justify-center text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-all"
          title="Filter"
        >
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
