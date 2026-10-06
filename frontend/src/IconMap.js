import React from 'react';
import {
  LayoutDashboard,
  Code,
  Smartphone,
  Camera,
  Server,
  Database,
  Brain,
  Cpu,
  Layers,
  Calendar,
  Sparkles,
  Bot,
  Activity,
  FolderGit2
} from 'lucide-react';

// --- Icon Components Map ---
// Dynamically rendered icon mappings for skills and projects
export const iconMap = {
  UIUX: <LayoutDashboard className="w-7 h-7 text-blue-400" />,
  React: <Code className="w-7 h-7 text-blue-400" />,
  Mobile: <Smartphone className="w-7 h-7 text-blue-400" />,
  Photography: <Camera className="w-7 h-7 text-blue-400" />,
  CustomWeb: <Code className="w-7 h-7 text-blue-400" />,
  MobileApp: <Smartphone className="w-7 h-7 text-blue-400" />,
  Server: <Server className="w-7 h-7 text-blue-400" />,
  Database: <Database className="w-7 h-7 text-blue-400" />,
  Brain: <Brain className="w-7 h-7 text-blue-400" />,
  Cpu: <Cpu className="w-7 h-7 text-blue-400" />,
  Chip: <Cpu className="w-7 h-7 text-blue-400" />,
  Layers: <Layers className="w-7 h-7 text-blue-400" />,
  Calendar: <Calendar className="w-7 h-7 text-blue-400" />,
  AI: <Bot className="w-7 h-7 text-blue-400" />,
  'AI Fitness': <Activity className="w-7 h-7 text-blue-400" />,
  PMIS: <Layers className="w-7 h-7 text-blue-400" />,
  '': <Sparkles className="w-7 h-7 text-blue-400" />,
  default: <FolderGit2 className="w-7 h-7 text-blue-400" />
};