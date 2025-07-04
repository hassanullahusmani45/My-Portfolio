import { createContext, useContext, type ReactNode, useState } from 'react'
import type { MenuType } from '../types/MenyType'

const menuContext = createContext<MenuType | undefined>(undefined)

export const useMenu = () => {
    const context = useContext(menuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider")
    }
    return context;
};


export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [menu, setMenu] = useState("aboutme");

    return (
        <menuContext.Provider value={{ menu, setMenu }}>
            {children}
        </menuContext.Provider>
    )
}

