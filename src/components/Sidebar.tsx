import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FolderOpen, Clock, Grid3x3, Settings, Hexagon, SquareStack, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Home' },
    { path: '/projects', icon: FolderOpen, label: 'Projects' },
    { path: '/history', icon: Clock, label: 'History' },
    { path: '/apps', icon: Grid3x3, label: 'Apps' },
  ];

  const appLaunchers = [
    { path: '/apps/app1', label: 'App 1' },
    { path: '/apps/app2', label: 'App 2' },
    { path: '/apps/app3', label: 'App 3' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-20 bg-[#0f0f0f] border-r border-gray-800 flex-col items-center py-6 fixed h-screen z-30">
        <div
          className="mb-8 cursor-pointer transition-transform hover:scale-110"
          onClick={() => handleNavigate('/dashboard')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Hexagon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                  active
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
                title={item.label}
              >
                <Icon className="w-6 h-6" />
              </button>
            );
          })}

          <div className="w-12 h-px bg-gray-800 my-2" />

          {appLaunchers.map((app) => {
            const active = isActive(app.path);
            return (
              <button
                key={app.path}
                onClick={() => handleNavigate(app.path)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                  active
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
                title={app.label}
              >
                <SquareStack className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <button
            onClick={() => handleNavigate('/settings')}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
              isActive('/settings')
                ? 'bg-blue-500/20 text-blue-400'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
            }`}
            title="Settings"
          >
            <Settings className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleNavigate('/profile')}
            className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
              isActive('/profile')
                ? 'border-blue-400'
                : 'border-gray-700 hover:border-gray-500'
            }`}
            title="Profile"
          >
            {user?.avatar ? (
              <img src={user.avatar} alt="User Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-300">
                {user?.username?.[0]?.toUpperCase()}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-[#0f0f0f] border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full py-6 px-4">
          <div className="flex items-center justify-between mb-8">
            <div
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => handleNavigate('/dashboard')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Hexagon className="w-6 h-6 text-white" />
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                    active
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}

            <div className="h-px bg-gray-800 my-4" />

            {appLaunchers.map((app) => {
              const active = isActive(app.path);
              return (
                <button
                  key={app.path}
                  onClick={() => handleNavigate(app.path)}
                  className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                    active
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  }`}
                >
                  <SquareStack className="w-5 h-5" />
                  <span className="font-medium">{app.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 mt-auto">
            <button
              onClick={() => handleNavigate('/settings')}
              className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                isActive('/settings')
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>

            <button
              onClick={() => handleNavigate('/profile')}
              className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                isActive('/profile')
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <div className={`w-8 h-8 rounded-full overflow-hidden border-2 ${
                isActive('/profile') ? 'border-blue-400' : 'border-gray-700'
              }`}>
                {user?.avatar ? (
                  <img src={user.avatar} alt="User Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-300 text-sm">
                    {user?.username?.[0]?.toUpperCase()}
                  </div>
                )}
              </div>
              <span className="font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
