import React, { useState, useEffect } from "react";
import {
  Home,
  Search,
  FileText,
  Globe,
  Users,
  Settings,
  HelpCircle,
  Bell,
  User,
  Menu,
  FileCheck,
  DollarSign,
} from "lucide-react";

const AdvancedNavigation = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Automatically set the active link based on the current path
  const getCurrentPath = () => window.location.pathname;
  const [activeItem, setActiveItem] = useState(getCurrentPath());

  useEffect(() => {
    // Set the active link when the component mounts
    setActiveItem(getCurrentPath());
  }, []);

  const sideNavItems = [
    { id: "/", icon: Home, label: "Home", path: "/" },
    { id: "/course-search", icon: Search, label: "Course Search", path: "/course-search" },
    { id: "/applications", icon: FileText, label: "My Applications", path: "/applications" },
    { id: "/visa", icon: FileCheck, label: "Visa Status", path: "/visa" },
    { id: "/countries", icon: Globe, label: "Country Guide", path: "/countries" },
    { id: "/community", icon: Users, label: "Community", path: "/community" },
    { id: "/settings", icon: Settings, label: "Settings", path: "/settings" },
    { id: "/help", icon: HelpCircle, label: "Help Center", path: "/help" },
    { id: "/finance-management", icon: DollarSign, label: "My Finance", path: "/finance-management" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50 flex items-center justify-between px-4 border-b-2 border-gray-200">
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={20} />
          </button>
          <a href="/" className="text-green-600 font-bold text-xl">
            Adventus.io
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              className="relative p-2 rounded-full hover:bg-gray-100"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-6 w-6" />
            </button>
          </div>
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <User className="h-6 w-6" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </a>
                <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
                <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Side Navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none transition-transform shadow-xl border-r-2 border-gray-200`}
        style={{ height: "100vh" }}
      >
        <nav className="py-20 space-y-2">
          {sideNavItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-50 ${
                activeItem === item.path
                  ? "bg-green-50 text-green-600 border-l-4 border-green-600 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveItem(item.path)} // Update active item on click
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay for Sidebar on Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdvancedNavigation;
