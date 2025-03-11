'use client'

import { createContext } from "react";
import { useState } from "react";

type Color = string;

interface ColorCodeContextType {
    colorCode: Color | undefined;
    setColorCode: (colorCode: string) => void;
}

export const ColorCodeContext = createContext<ColorCodeContextType | undefined>(undefined);

interface ColorCodeProviderProps {
    children: React.ReactNode;
}

export function ColorCodeProvider({ children }: ColorCodeProviderProps) {
    const [colorCode, setColorCode] = useState<Color | undefined>('#ff0000');

    return (
        <ColorCodeContext.Provider value={{ colorCode, setColorCode }}>
            {children}
        </ColorCodeContext.Provider>
    );
}