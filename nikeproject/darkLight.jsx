import React, {useState} from 'react';
import {MdDarkMode} from "react-icons/md";
import {WiDaySunny} from "react-icons/wi";


export default function DarkLight() {
    const [theme, setTheme] = useState('dark');

    function handleTheme() {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            setTheme('light');
        }
    }

    return (
        <>
            {theme === 'light' ? (
                <button className='rounded p-1' onClick={() => handleTheme()}>
                    <WiDaySunny/>
                </button>
            ) : (
                <button className='rounded p-1' onClick={() => handleTheme()}>
                    <MdDarkMode/>
                </button>
            )}
        </>
    );
}