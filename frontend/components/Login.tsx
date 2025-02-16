'use client';
import { useState } from "react";
import { useRouter,usePathname } from 'next/navigation';

export default function LoginRegister(){
    const backendURL:string=process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api/v1";
    const router = useRouter();
    const [error, setError] = useState<string>("");

    const pathname=usePathname();
    const isSignUp=pathname.includes("sign-up");
    const signUp_backend=backendURL+"/auth/signup";
    const signIn_backend=backendURL+"/auth/signin";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        const formData = new FormData(e.currentTarget);
        const email:string = formData.get("email") as string;
        const password = formData.get("password") as string;
        try{
            const apiEndpoint=isSignUp?signUp_backend:signIn_backend;
            const response=await fetch(apiEndpoint,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            }
            );

            const data=await response.json();

            if(!response.ok){
                throw new Error(data.message||'An error occured');
            }

            router.push('/')
        }
        catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{isSignUp?'Sign Up' : 'Sign In'}</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit} method="POST">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                name="email"
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                name="password"
                type="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
                required
                />
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                {isSignUp?'Sign Up' : 'Sign In'}
            </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
            {isSignUp?"Already have an account? " : "Don't have an account? "}
            <a href={isSignUp?"/auth/sign-in" : "/auth/sign-up"} className="text-indigo-600 hover:text-indigo-500 font-medium">{isSignUp?'Sign In' : 'Sign Up'}</a>
            </div>
        </div>
        </div>
    );
}