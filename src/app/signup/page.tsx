import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
            <div className="w-20 h-14 mb-6">
                <Image src="/logo.png" alt="Logo" width={600} height={600} className="w-full h-full object-contain" />
            </div>
            <h1 className="sm:text-4xl text-3xl font-medium text-center px-4 text-gray-800 mb-6">
                Create Your Account
            </h1>
            <form className="w-full max-w-[400px] space-y-5 text-gray-600 px-4">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    className="w-full focus:outline-none border rounded-md px-4 py-3 bg-white"
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="w-full focus:outline-none border rounded-md px-4 py-3 bg-white"
                />
                <input 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Confirm Password" 
                    className="w-full focus:outline-none border rounded-md px-4 py-3 bg-white"
                />
                <p className="px-5 text-center sm:text-sm text-xs text-gray-500">
                    By signing up, you agree to our Privacy Policy and Terms of Use.
                </p>
                <input 
                    type="submit" 
                    className="w-full bg-black text-white py-3 rounded-md cursor-pointer hover:bg-gray-900" 
                    value="SIGN UP"
                />
            </form>
            <p className="text-gray-600 mt-6">
                Already have an account? <Link href="/signin" className="underline text-gray-900">Sign In</Link>
            </p>
        </div>
    );
};

export default SignUp;
