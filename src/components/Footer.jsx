import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <p className="text-white text-center text-sm">
        Realizado por{' '}
        <a
          href="https://cia-dsp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline-offset-2 hover:underline"
        >
          DSP 2000
        </a>{' '}
        | Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
