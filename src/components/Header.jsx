import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, SettingsIcon, DownloadIcon, PowerIcon, LogOutIcon, KeyIcon } from './SVG';
import Morlopin from '../img/Morlopin.png';



const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuClick = () => {
  setDropdownOpen(!dropdownOpen);
};
  const handleLogoClick = () => console.log('Ir a inicio');
  const handleSettingsClick = () => console.log('Abrir configuración');
  const handleDownloadClick = () => console.log('Descargar archivo');
  const handleLogoutClick = () => {
    console.log('Cerrar sesión');
    setDropdownOpen2(false);
  };

  // Cerrar al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setDropdownOpen2(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setDropdownOpen2(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="w-full flex justify-between items-center bg-white px-4 py-2 shadow-md fixed top-0 z-50">
      {/* Izquierda */}
      <div className="flex items-center gap-4">
        <button onClick={handleMenuClick} className="p-2 hover:bg-gray-100 rounded" title="Menú">
          <MenuIcon  />

        </button>
        {dropdownOpen && <DropdownMenu isOpen={dropdownOpen} onClose={() => setDropdownOpen(false)} />}

        <div className="relative group">
          <button
            onClick={handleLogoClick}
            className="focus:outline-none"
          >
            <img src={Morlopin} alt="logo" className="h-8 w-auto" />
          </button>

          {/* Tooltip */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300
                  bg-gray-800 text-white text-sm rounded py-1 px-2 
                  whitespace-nowrap z-10 shadow-lg">
            Ir a inicio
          </div>
        </div>
      </div>

      {/* Derecha */}
      <div className="flex items-center gap-4">
        <button onClick={handleSettingsClick} className="p-2 hover:bg-gray-100 rounded" title="Configuración">
          <SettingsIcon />
        </button>
        


        <button onClick={handleDownloadClick} className="p-2 hover:bg-gray-100 rounded" title="Descargar">
          <DownloadIcon />
        </button>

        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen2(!dropdownOpen2)} className="p-2 hover:bg-gray-100 rounded" title="Salir">
            <LogOutIcon />
          </button>

          {/* Dropdown con animación */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transform transition-all duration-200 origin-top-right z-50 ${
              dropdownOpen2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <button
              onClick={handleLogoutClick}
              className="flex items-center gap-2 text-red-500 w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              <KeyIcon />
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// Componente DropdownMenu
const DropdownMenu = ({ isOpen, onClose }) => {
  const items = ['Catálogo', 'Pedidos', 'Albaranes', 'Facturas', 'Clientes', 'Presupuestos', 'Contactos'];

  return (
    <div
      className={`absolute left-1 top-full mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg
          transition-transform duration-500 origin-top-left
          ${isOpen ? 'opacity-100 rotateY-0 pointer-events-auto' : 'opacity-0 rotateY-90 pointer-events-none'}
        `}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {items.map((item) => (
        <button
          key={item}
          onClick={() => {
            console.log(`Ir a ${item}`);
            onClose();
          }}
          className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
        >
          {item}
        </button>
      ))}
    </div>
  );
};


