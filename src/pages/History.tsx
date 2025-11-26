import { Clock, User, FileEdit, GitBranch } from 'lucide-react';

const History = () => {
  const activities = [
    {
      id: 1,
      type: 'edit',
      user: 'John Doe',
      action: 'Updated project configuration',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      type: 'create',
      user: 'Jane Smith',
      action: 'Created new dashboard view',
      timestamp: '5 hours ago',
    },
    {
      id: 3,
      type: 'merge',
      user: 'Mike Johnson',
      action: 'Merged feature branch',
      timestamp: '1 day ago',
    },
    {
      id: 4,
      type: 'edit',
      user: 'Sarah Williams',
      action: 'Modified API endpoints',
      timestamp: '2 days ago',
    },
    {
      id: 5,
      type: 'create',
      user: 'John Doe',
      action: 'Added new monitoring rules',
      timestamp: '3 days ago',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'edit':
        return FileEdit;
      case 'create':
        return Clock;
      case 'merge':
        return GitBranch;
      default:
        return Clock;
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Activity History</h1>
        <p className="text-sm sm:text-base text-gray-400">Track recent changes and updates</p>
      </div>

      <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {activities.map((activity, index) => {
            const Icon = getIcon(activity.type);
            return (
              <div
                key={activity.id}
                className={`flex items-start gap-3 sm:gap-4 pb-3 sm:pb-4 ${
                  index !== activities.length - 1 ? 'border-b border-gray-800' : ''
                }`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base text-white font-medium mb-1 break-words">{activity.action}</p>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                        <User className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{activity.user}</span>
                        <span>•</span>
                        <span>{activity.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
