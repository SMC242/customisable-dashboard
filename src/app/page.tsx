import Resizable from "./_components/resizable/Resizable";
import ResizableGroup from "./_components/resizable/ResizableGroup";

export default function Home() {
    return (
        <div className="min-h-screen">
            <ResizableGroup>
                <Resizable resizeDirections="x">
                    <div className="bg-red-500">Resizable 1</div>
                </Resizable>
                <Resizable resizeDirections="y">
                    <div className="bg-blue-500">Resizable 2</div>
                </Resizable>
                <Resizable resizeDirections="both">
                    <div className="bg-green-500">Resizable 3</div>
                </Resizable>
            </ResizableGroup>
        </div>
    );
}
