import { Bell, Lock, Palette, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-sm sm:text-base text-gray-400">Configure your application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">Notifications</h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm sm:text-base text-gray-300">Email notifications</span>
              <input type="checkbox" className="w-5 h-5 rounded bg-gray-800 border-gray-700" defaultChecked />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm sm:text-base text-gray-300">Push notifications</span>
              <input type="checkbox" className="w-5 h-5 rounded bg-gray-800 border-gray-700" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm sm:text-base text-gray-300">Activity alerts</span>
              <input type="checkbox" className="w-5 h-5 rounded bg-gray-800 border-gray-700" defaultChecked />
            </label>
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">Security</h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm sm:text-base text-gray-300">Two-factor authentication</span>
              <input type="checkbox" className="w-5 h-5 rounded bg-gray-800 border-gray-700" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm sm:text-base text-gray-300">Session timeout</span>
              <input type="checkbox" className="w-5 h-5 rounded bg-gray-800 border-gray-700" defaultChecked />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm sm:text-base text-gray-300">Login notifications</span>
              <input type="checkbox" className="w-5 h-5 rounded bg-gray-800 border-gray-700" defaultChecked />
            </label>
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">Appearance</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Theme</label>
              <select className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500">
                <option>Dark</option>
                <option>Light</option>
                <option>Auto</option>
              </select>
            </div>
            <div>
              <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Font size</label>
              <select className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">Regional</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Language</label>
              <select className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="text-gray-300 text-xs sm:text-sm mb-2 block">Timezone</label>
              <select className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-200 focus:outline-none focus:border-blue-500">
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all text-sm sm:text-base">
          Save Changes
        </button>
        <button className="w-full sm:w-auto px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-all text-sm sm:text-base">
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default Settings;
