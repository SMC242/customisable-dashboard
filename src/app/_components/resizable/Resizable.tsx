"use client";
import React from "react";
import clsx from "clsx";

import useResizeObserver from "@/app/_components/resizable/useResizableObserver";

export type ResizableProps = React.PropsWithChildren<{
    resizeDirections?: "x" | "y" | "both";
}>;

export default function Resizable({
    resizeDirections = "both",
    children,
}: ResizableProps) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useResizeObserver(containerRef);

    const styles = clsx(
        "overflow-auto",
        resizeDirections == "both" && "resize",
        resizeDirections == "x" && "resize-x",
        resizeDirections == "y" && "resize-y"
    );

    return (
        <div className={styles} ref={containerRef}>
            <div className="h-full w-full">{children}</div>
        </div>
    );
}
