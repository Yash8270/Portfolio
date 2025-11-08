import React from 'react';
import {
  LayoutDashboard,
  Code,
  Smartphone,
  Camera,
} from 'lucide-react';

// --- Icon Components Map ---
// We define a simple map to render icons dynamically
export const iconMap = {
  UIUX: <LayoutDashboard className="w-8 h-8 text-blue-400" />,
  React: <Code className="w-8 h-8 text-blue-400" />,
  Mobile: <Smartphone className="w-8 h-8 text-blue-400" />,
  Photography: <Camera className="w-8 h-8 text-blue-400" />,
  CustomWeb: <Code className="w-8 h-8 text-blue-400" />,
  MobileApp: <Smartphone className="w-8 h-8 text-blue-400" />,
};