"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Admin credentials
        const adminEmail = "admin@example.com";
        const adminPassword = "admin123";

        if (email === adminEmail && password === adminPassword) {
            // Redirect to Admin Dashboard
            router.push("/admin");
        } else {
            alert("Invalid credentials! Please try again.");
        }
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
            <div className="w-20 h-14 mb-6">
                <Image src="/logo.png" alt="Logo" width={600} height={600} className="w-full h-full object-contain" />
            </div>
            <h1 className="sm:text-4xl text-3xl font-medium text-center px-4 text-gray-800 mb-6">
                Sign in to Your Account
            </h1>
            <form className="w-full max-w-[400px] space-y-5 text-gray-600 px-4" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full focus:outline-none border rounded-md px-4 py-3 bg-white"
                    required
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full focus:outline-none border rounded-md px-4 py-3 bg-white"
                    required
                />
                <input 
                    type="submit" 
                    className="w-full bg-black text-white py-3 rounded-md cursor-pointer hover:bg-gray-900" 
                    value="SIGN IN"
                />
            </form>
            <p className="text-gray-600 mt-6">
                Don&rsquo;t have an account? <Link href="/signup" className="underline text-gray-900">Sign Up</Link>
            </p>
        </div>
    );
};

export default SignIn;
