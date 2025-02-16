'use client';
import React from "react";
import { useState, useEffect } from "react";
import SpaceView from "./SpaceView";

const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api/v1";

export default function SpacesSection() {
    const [spaces, setSpaces] = useState([]);
    const [error, setError] = useState('');
    const getSpaces = async () => {
        setError('');
        try {
            const response = await fetch(`${backendURL}/others/spaces`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setSpaces(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch spaces');
        }
    }
    useEffect(()=>{
        getSpaces();
    },[]);
    return (
            <div className="pt-10 pb-12 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                      <h1 className="text-2xl font-bold text-gray-900">Explore Spaces</h1>
                    </div>
            
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {spaces.map((card, index) => (
                        <SpaceView key={index} space={card} />
                      ))}
                    </div>
            </div>
    );
};