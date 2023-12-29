"use client";
import { createContext } from "react";

export type ResizableContext = {
    observer: ResizeObserver | null;
};

export const ResizableContext = createContext<ResizableContext>({
    observer: null,
});
