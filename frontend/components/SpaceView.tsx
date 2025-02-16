import React from "react";
import { useState } from "react";
import Image from "next/image";
import Loading from "./Loading";

interface SpaceViewProps {
    space: {
        spaceID: number;
        name: string;
        thumbnail: string;
    };
}

export default function SpaceView({ space }: SpaceViewProps) {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading(true);
        console.log(`Clicked on space ${space.spaceID}`);
    };
    if(loading) {
        return <Loading/>
    }
    return (
        <div onClick={handleClick}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
            <Image 
                src={space.thumbnail} 
                alt={space.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
            />
            </div>
        <div className="p-2">
        <h3 className="font-medium text-gray-900 mb-2">{space.name}</h3>
        </div>
    </div>
    );
}