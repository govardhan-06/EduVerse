'use client';
import React from "react";
import Image from "next/image";
import { useLoading } from "../context/LoadingContext";
import { useRouter } from "next/navigation";

interface SpaceViewProps {
    space: {
        spaceID: number;
        name: string;
        thumbnail: string;
    };
}

export default function SpaceView({ space }: SpaceViewProps) {
    const { setIsLoading } = useLoading();
    const router = useRouter();
    const handleClick = async () => {
        setIsLoading(true);
        const encodedURL=encodeURIComponent(space.thumbnail);

        await new Promise(resolve => setTimeout(resolve, 500));

        router.push(`/${encodedURL}`);

        setTimeout(() => setIsLoading(false), 250);
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