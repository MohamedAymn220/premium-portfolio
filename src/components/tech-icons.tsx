import type { ComponentType } from "react";

import {
  Database,
  Gauge,
  Layers3,
  Network,
  RefreshCw,
  ShieldCheck,
  Webhook,
} from "lucide-react";
import {
  SiBootstrap,
  SiCss,
  SiDjango,
  SiDocker,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPythonanywhere,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

export type TechIconType = ComponentType<{ className?: string }>;

export type TechInfo = {
  icon: TechIconType;
  color: string;
  glow: string;
  border: string;
};

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function makeTech(icon: TechIconType, color: string): TechInfo {
  return {
    icon,
    color,
    glow: hexToRgba(color, 0.2),
    border: hexToRgba(color, 0.45),
  };
}

const techIconMap: Record<string, TechInfo> = {
  Python: makeTech(SiPython, "#3776AB"),
  Django: makeTech(SiDjango, "#44B78B"),
  "Django REST Framework": makeTech(SiDjango, "#44B78B"),
  Flask: makeTech(SiFlask, "#C5C7CA"),
  "REST API Design": makeTech(Webhook, "#10B981"),
  "MVC/MVT Architecture": makeTech(Layers3, "#6366F1"),
  "Authentication & RBAC": makeTech(ShieldCheck, "#F59E0B"),
  PostgreSQL: makeTech(SiPostgresql, "#4169E1"),
  SQLite: makeTech(SiSqlite, "#03A9DC"),
  "Schema Design & Normalization": makeTech(Network, "#8B5CF6"),
  "Query Optimization": makeTech(Gauge, "#14B8A6"),
  "JavaScript (ES6+)": makeTech(SiJavascript, "#F7DF1E"),
  HTML5: makeTech(SiHtml5, "#E34F26"),
  CSS3: makeTech(SiCss, "#1572B6"),
  "Bootstrap 5": makeTech(SiBootstrap, "#7952B3"),
  "Tailwind CSS": makeTech(SiTailwindcss, "#38BDF8"),
  AJAX: makeTech(RefreshCw, "#06B6D4"),
  Git: makeTech(SiGit, "#F05032"),
  GitHub: makeTech(SiGithub, "#E2E8F0"),
  Docker: makeTech(SiDocker, "#2496ED"),
  Postman: makeTech(SiPostman, "#FF6C37"),
  PythonAnywhere: makeTech(SiPythonanywhere, "#1B9AAA"),
  Java: makeTech(SiOpenjdk, "#ED8B00"),
  SQL: makeTech(Database, "#3B82F6"),
};

const fallbackTech: TechInfo = makeTech(Webhook, "#10B981");

export function getTechInfo(skill: string): TechInfo {
  return techIconMap[skill] ?? fallbackTech;
}
