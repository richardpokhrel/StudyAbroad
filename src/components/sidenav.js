import React, { useState } from 'react';
import {
  Home,
  Search,
  FileText,
  Globe,
  Users,
  Settings,
  HelpCircle,
  Bell,
  MessageCircle,
  User,
  PlusCircle,
  Menu,
  FileCheck,
  ChevronRight
} from 'lucide-react';

const AdvancedNavigation = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const sideNavItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'search', icon: Search, label: 'Course Search', path: '/courses' },
    { id: 'applications', icon: FileText, label: 'My Applications', path: '/applications', hasSubMenu: true },
    { id: 'visa', icon: FileCheck, label: 'Visa Status', path: '/visa' },
    { id: 'countries', icon: Globe, label: 'Country Guide', path: '/countries' },
    { id: 'community', icon: Users, label: 'Community', path: '/community' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
    { id: 'help', icon: HelpCircle, label: 'Help Center', path: '/help' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50">
        <div className="flex items-center justify-between h-full px-4">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <a href="/" className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-xl">Adventus.io</span>
            </a>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <button className="bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 flex items-center gap-2">
              <PlusCircle size={20} />
              <span>Add Student</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MessageCircle size={20} />
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
              >
                <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">RP</span>
                </div>
                <span className="text-sm font-medium">Richard Pokhrel</span>
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border">
                  <a href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                    <User size={16} />
                    <span>Profile</span>
                  </a>
                  <a href="/logout" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600">
                    <User size={16} />
                    <span>Logout</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Layout Container */}
      <div className="flex pt-16 min-h-screen">
        {/* Side Navigation */}
        <nav 
          className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-sm transition-all duration-300 ease-in-out ${
            isExpanded ? 'w-64' : 'w-16'
          }`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="flex flex-col py-4">
            {sideNavItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`flex items-center px-4 py-3 transition-colors relative group ${
                  activeItem === item.id ? 'bg-green-50 text-green-600' : 'hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.id);
                }}
              >
                <item.icon size={20} className={activeItem === item.id ? 'text-green-600' : 'text-gray-600'} />
                
                <span className={`ml-3 whitespace-nowrap transition-all duration-300 ${
                  isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'
                }`}>
                  {item.label}
                </span>

                {item.hasSubMenu && isExpanded && (
                  <ChevronRight size={16} className="ml-auto" />
                )}

                {!isExpanded && (
                  <div className="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </a>
            ))}
          </div>
        </nav>
       
      </div>
    </div>
  );
};

export default AdvancedNavigation;