import { useParams } from 'react-router-dom';
import { SquareStack } from 'lucide-react';

const AppDetail = () => {
  const { appId } = useParams();

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <SquareStack className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">Application {appId?.replace('app', '')}</h1>
          <p className="text-sm sm:text-base text-gray-400">App-specific content and functionality</p>
        </div>
      </div>

      <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 sm:p-8">
        <div className="text-center py-8 sm:py-12">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <SquareStack className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">Application Module</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto px-4">
            This is a placeholder for Application {appId?.replace('app', '')}. Future app-specific
            features and components will be implemented here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
