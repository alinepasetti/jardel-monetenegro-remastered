import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-20 px-0">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-medium">VideoMaker</div>
            <div className="flex space-x-8">
              <button className="text-gray-600 hover:text-black">Home</button>
              <button className="text-gray-600 hover:text-black">Services</button>
              <button className="text-gray-600 hover:text-black">Portfolio</button>
              <button className="text-gray-600 hover:text-black">Contact</button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content with top padding for fixed nav */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}

// 12-column grid container component
interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export function GridContainer({ children, className = "" }: GridContainerProps) {
  return (
    <div className={`mx-20 px-0 ${className}`}>
      <div className="grid grid-cols-12 gap-6">
        {children}
      </div>
    </div>
  );
}