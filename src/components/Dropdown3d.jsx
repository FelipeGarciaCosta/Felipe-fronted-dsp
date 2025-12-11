import React, { useState } from 'react';

export default function Dropdown3D() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Toggle Menu
      </button>

      <div
        className={`absolute left-0 top-full mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg
          transition-transform duration-500 origin-top-left
          ${open ? 'opacity-100 rotateY-0 pointer-events-auto' : 'opacity-0 rotateY-90 pointer-events-none'}
        `}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <ul className="flex flex-col">
          {['Catálogo', 'Pedidos', 'Albaranes', 'Facturas', 'Clientes', 'Presupuestos', 'Contactos'].map((item) => (
            <li key={item}>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => {
                  alert(`Ir a ${item}`);
                  setOpen(false);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
