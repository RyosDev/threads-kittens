"use client"
import React, { createContext, useContext, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Íconos de menú y cerrar
const ButtonContext = createContext(false);

export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <header className='w-full sticky top-0 z-50  bg-white text-white'>
      <div className='flex flex-col justify-between items-center p-1'>
        <h1 className='text-xl font-bold text-rose-950'>Hilos y gatitos</h1>
        <ButtonContext.Provider value={visible} >
          <div className='md:hidden'>
            <button
              onClick={() => setVisible(!visible)}
              className='p-1 bg-rose-300 text-white'>
              {visible ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </ButtonContext.Provider>npm install react-icons

        <div className={`${visible ? 'flex flex-col p-6 text-red-600' : 'hidden'} md:hidden`}>
          <ButtonMobile />
        </div>
        <div className='hidden md:flex'>
          <ButtonMenu />
        </div>
      </div>
    </header>
  );
}

function ButtonMobile() {
  return (
    <nav className='flex flex-col items-center space-y-2'>
      <a href='#about' className='hover:underline'>Sobre nosotros</a>
      <a href='#products' className='hover:underline'>Productos</a>
      <a href='#blog' className='hover:underline'>Posts y videos</a>
      <a href='#contact' className='hover:underline'>Contacto</a>
    </nav>
  );
}

function ButtonMenu() {
  return (
    <nav className='flex space-x-4'>
      <a href='#about' className='hover:underline'>Sobre nosotros</a>
      <a href='#products' className='hover:underline'>Productos</a>
      <a href='#blog' className='hover:underline'>Posts y videos</a>
      <a href='#contact' className='hover:underline'>Contacto</a>
    </nav>
  );
}
