import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="border-b-4 p-3 flex justify-between items-center">
            <span className="font-bold">
                AppName
            </span>
            <Navigation/>
        </header>
    )
}
