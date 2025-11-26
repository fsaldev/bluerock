import { Activity, TrendingUp, Users, Database } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Sessions', value: '1,248', icon: Activity, change: '+12.5%', positive: true },
    { label: 'Total Projects', value: '34', icon: Database, change: '+4', positive: true },
    { label: 'Team Members', value: '18', icon: Users, change: '+2', positive: true },
    { label: 'Performance', value: '94.2%', icon: TrendingUp, change: '+2.1%', positive: true },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-400">Welcome to your monitoring dashboard</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <span className={`text-xs sm:text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Visualization Area</h2>
        <div className="aspect-video bg-[#1a1a1a] rounded-lg border border-gray-800 flex items-center justify-center p-4">
          <p className="text-sm sm:text-base text-gray-400 text-center">Complex data visualization components will be rendered here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
