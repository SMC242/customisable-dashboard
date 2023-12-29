"use client";
import React from "react";
import { ResizableContext } from "@/app/_components/resizable/ResizableContext";

export type ResizableGroupProps = React.PropsWithChildren<{}>;

export default function ResizableGroup({ children }: ResizableGroupProps) {
    const [observer, setObserver] = React.useState<ResizeObserver | null>(null);
    React.useEffect(() => {
        const obs = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                console.log("width", width);
                console.log("height", height);
            }
        });
        setObserver(obs);
    }, []);

    return (
        <ResizableContext.Provider value={{ observer }}>
            <div>{children}</div>
        </ResizableContext.Provider>
    );
}
