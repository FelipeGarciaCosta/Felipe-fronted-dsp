import React from "react";
import {  ShoppingCartIcon, ClipboardListIcon, DocumentIcon, UserIcon,UsersIcon,  MoneyIcon,TagIcon } from "./SVG";
import DashboardCard from "./DashboardCard";

const dashboardItems = [
  {
    title: "Catálogo",
    subtitle: "Consulta",
    Icon: TagIcon,
    color: {
      rgb: "99,102,241", // indigo-500
      hex: "#6366f1",
      hexDark: "#4f46e5", // indigo-700
    },
  },
  {
    title: "Pedidos",
    subtitle: "Consulta, alta y modificación",
    Icon: ShoppingCartIcon,
    color: {
      rgb: "34,197,94", // green-500
      hex: "#22c55e",
      hexDark: "#15803d", // green-700
    },
  },
  {
    title: "Albaranes",
    subtitle: "Consulta",
    Icon: ClipboardListIcon,
    color: {
      rgb: "59,130,246",
      hex: "#3b82f6",
      hexDark: "#1d4ed8",
    },
  },
  {
    title: "Facturas",
    subtitle: "Consulta / Generación PDF",
    Icon: DocumentIcon,
    color: {
      rgb: "202,138,4",
      hex: "#ca8a04",
      hexDark: "#854d0e",
    },
  },
  {
    title: "Clientes",
    subtitle: "Listado y Ficha",
    Icon: UserIcon,
    color: {
      rgb: "236,72,153",
      hex: "#ec4899",
      hexDark: "#be185d",
    },
  },
  {
    title: "Presupuestos",
    subtitle: "Mantenimiento",
    Icon: MoneyIcon,
    color: {
      rgb: "251,191,36",
      hex: "#fbbf24",
      hexDark: "#b45309",
    },
  },
  {
    title: "Contactos",
    subtitle: "Consulta",
    Icon: UsersIcon,
    color: {
      rgb: "139,92,246",
      hex: "#8b5cf6",
      hexDark: "#6d28d9",
    },
  },
];
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {dashboardItems.map((item, index) => (
            <button key={index} onClick={() => alert(`Ir a ${item.title}`)}>
                <DashboardCard key={index} {...item} />
            </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
