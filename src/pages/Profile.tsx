import { useAuth } from '../contexts/AuthContext';
import { Mail, Phone, MapPin, Calendar, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-sm sm:text-base text-gray-400">Manage your account information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-1">
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gray-800 mb-3 sm:mb-4">
                {user?.avatar ? (
                  <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-2xl sm:text-4xl text-gray-300">
                    {user?.username?.[0]?.toUpperCase()}
                  </div>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{user?.username}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">Administrator</p>
              <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-all text-sm sm:text-base">
                Change Avatar
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Personal Information</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Full Name</label>
                <input
                  type="text"
                  defaultValue={user?.username}
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Email</label>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="email"
                    defaultValue={`${user?.username}@example.com`}
                    className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Phone</label>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Location</label>
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    defaultValue="San Francisco, CA"
                    className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Member Since</label>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    defaultValue="January 2024"
                    className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all text-sm sm:text-base">
              Save Changes
            </button>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
