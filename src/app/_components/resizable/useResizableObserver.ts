import React from "react";
import { ResizableContext } from "@/app/_components/resizable/ResizableContext";

/* Attach the ResizeObserver to the container identified by `containerRef`. */
export default function useResizableObserver(
    containerRef: React.RefObject<HTMLElement>
) {
    const { observer } = React.useContext(ResizableContext);

    React.useEffect(() => {
        const container = containerRef.current;
        if (observer && container) observer.observe(containerRef.current!);
        return () => {
            if (observer && containerRef) observer.unobserve(container!);
        };
    }, [observer, containerRef]);
}
