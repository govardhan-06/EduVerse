'use client';
import React from "react";
import Image from "next/image";
import { useLoading } from "../context/LoadingContext";

interface SpaceViewProps {
    space: {
        spaceID: number;
        name: string;
        thumbnail: string;
    };
}

export default function SpaceView({ space }: SpaceViewProps) {
    const { setIsLoading } = useLoading();
    const handleClick = () => {
        setIsLoading(true);
        console.log(`Clicked on space ${space.spaceID}`);
    };
    return (
        <div onClick={handleClick}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
            <Image 
                src={space.thumbnail} 
                alt={space.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
            />
            </div>
        <div className="p-2">
        <h3 className="font-medium text-gray-900 mb-2">{space.name}</h3>
        </div>
    </div>
    );
}