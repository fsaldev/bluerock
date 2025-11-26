import { Grid3x3, ExternalLink } from 'lucide-react';

const Apps = () => {
  const apps = [
    { id: 1, name: 'Application 1', description: 'Data visualization and analytics', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Application 2', description: 'Real-time monitoring tools', color: 'from-green-500 to-green-600' },
    { id: 3, name: 'Application 3', description: 'Workflow automation system', color: 'from-orange-500 to-orange-600' },
    { id: 4, name: 'Application 4', description: 'Data processing pipeline', color: 'from-pink-500 to-pink-600' },
    { id: 5, name: 'Application 5', description: 'Team collaboration hub', color: 'from-cyan-500 to-cyan-600' },
    { id: 6, name: 'Application 6', description: 'Security management', color: 'from-red-500 to-red-600' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Applications</h1>
        <p className="text-sm sm:text-base text-gray-400">Access your integrated applications</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-gray-700 transition-all cursor-pointer group"
          >
            <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
              <Grid3x3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center gap-2">
              {app.name}
              <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-0">{app.description}</p>
            <button className="mt-3 sm:mt-4 w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-all text-xs sm:text-sm">
              Launch App
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
