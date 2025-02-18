'use client';
import Space from "../../components/Space";
import { useParams } from "next/navigation";

export default function SpacePage() {
    const params = useParams();
    const spaceURL = decodeURIComponent(params?.spaceURL as string);
    
    return (
        <Space spaceURL={spaceURL}/>
    );
}