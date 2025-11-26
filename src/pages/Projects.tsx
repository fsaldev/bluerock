import { FolderOpen, MoreVertical, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    { id: 1, name: 'Analytics Dashboard', status: 'Active', lastModified: '2 hours ago' },
    { id: 2, name: 'API Integration', status: 'In Progress', lastModified: '5 hours ago' },
    { id: 3, name: 'User Management', status: 'Completed', lastModified: '1 day ago' },
    { id: 4, name: 'Data Pipeline', status: 'Active', lastModified: '3 days ago' },
    { id: 5, name: 'Monitoring System', status: 'In Progress', lastModified: '1 week ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'In Progress':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Completed':
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-sm sm:text-base text-gray-400">Manage and monitor your active projects</p>
        </div>
        <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all text-sm sm:text-base">
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-gray-700 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white truncate">{project.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-gray-400">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{project.lastModified}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-200 transition-colors flex-shrink-0 ml-2">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
