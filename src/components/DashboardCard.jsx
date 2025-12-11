import React from "react";

const DashboardCard = ({ title, subtitle, Icon, color }) => {
  return (
    <div
      className={`group bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-t hover:from-[rgba(${color.rgb},0.2)] hover:to-transparent`}
    >
      <Icon
        className={`h-12 w-12 text-gray-700 mb-4 transition-colors duration-300 group-hover:text-[${color.hex}]`}
      />
      <h3
        className={`text-xl font-semibold text-gray-700 transition-colors duration-300 group-hover:text-[${color.hexDark}]`}
      >
        {title}
      </h3>
      <p
        className={`text-sm text-gray-500 transition-colors duration-300 group-hover:text-[${color.hex}]`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default DashboardCard;
