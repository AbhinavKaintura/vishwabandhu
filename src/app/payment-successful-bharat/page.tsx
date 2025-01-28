'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

const Payment_successful: React.FC = () => {

    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            router.push('/'); // Replace with your target route
        }, 5000);

        // Cleanup timers
        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [router]);



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
                <div className="mb-6 flex justify-center">
                    <CheckCircle2 className="h-24 w-24 text-green-500" />
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Payment Successful!
                </h1>

                <p className="text-gray-600 mb-6">
                    Thank you for joining Bharat Self Care Team. Your registration is complete.
                </p>

                <div className="mb-8">
                    <div className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
                        Redirecting in {countdown} seconds...
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment_successful;