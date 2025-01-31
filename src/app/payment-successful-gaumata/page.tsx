'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import Image from 'next/image';
import logo from '../../../public/RSVBF LOGO.png';
import HeaderBar from '@/components/common/header-bar/page';
import Footer from '@/components/common/footer/page';
import NavBar from '@/components/common/nav-bar/page';
import Link from 'next/link';

interface DonateFormDetails {
    firstName: string;
    middleName?: string;
    lastName: string;
    country?: string;
    city?: string;
    state?: string;
    address?: string;
    landmark?: string;
    postalCode?: string;
    phone: string;
    email: string;
    amount: string;
}

interface donorDetails extends DonateFormDetails {
    paymentId: string;
    timestamp: any;
    status: string;
}

const OrderSuccessPage: React.FC = () => {
    const searchParams = useSearchParams();
    const [donorDetails, setDonorDetails] = useState<donorDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const orderId = searchParams.get('donorId');
        if (orderId) {
            fetchOrderDetails(orderId);
        }
    }, [searchParams]);

    const fetchOrderDetails = async (orderId: string) => {
        try {
            const docRef = doc(db, 'donations', orderId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setDonorDetails(docSnap.data() as donorDetails);
            }
        } catch (error) {
            console.error('Error fetching order details:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    if (!donorDetails) {
        return <div className="flex justify-center items-center min-h-screen">Order not found</div>;
    }

    return (
        <div>
            <HeaderBar />
            <NavBar bg_color='' />
            <div className='font-sans bg-gray-100 p-10'>
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden ">
                    <div className="bg-orange-400 text-white text-center py-6">
                        <h1 className="text-2xl font-bold">Congratulations on Donating to the Gaushala Program</h1>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-200">
                        <div className="flex justify-center">
                            <Image
                                src={logo}
                                alt='logo'
                                className='h-40 w-40'
                            />
                            {/* <img src="https://i.postimg.cc/3N6y3bjW/RSVBF-LOGO.png" alt="Logo" className="h-40" /> */}
                        </div>

                        <p className="text-lg mt-4">Dear <span className="font-semibold">{donorDetails.firstName}</span>,</p>
                        <p className="mt-2">We are delighted to confirm your donation to the Gaushala Program. Your donation has been successfully made.</p>

                        <div className="bg-white p-4 mt-4 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-bold text-[#ff7722] border-b-2 border-orange-400 pb-2">Member Information</h2>
                            <table className="w-full mt-2 text-gray-700">
                                <tbody>
                                    {/* <tr><td className="font-semibold w-1/3 py-1">Member ID</td><td>{donorDetails.memberID}</td></tr> */}
                                    <tr><td className="font-semibold py-1">Registration Date</td><td>{new Date().toLocaleDateString()}</td></tr>
                                    <tr><td className="font-semibold py-1">Full Name</td><td>{donorDetails.firstName} {donorDetails.middleName || ''} {donorDetails.lastName}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-4 mt-4 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-bold text-[#ff7722] border-b-2 border-orange-400 pb-2">Contact Details</h2>
                            <table className="w-full mt-2 text-gray-700">
                                <tbody>
                                    <tr><td className="font-semibold w-1/3 py-1">Email</td><td>{donorDetails.email}</td></tr>
                                    <tr><td className="font-semibold py-1">Phone</td><td>{donorDetails.phone}</td></tr>
                                    <tr><td className="font-semibold py-1">Address</td><td>{donorDetails.address}, {donorDetails.landmark}, {donorDetails.state}, {donorDetails.postalCode}, {donorDetails.country}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-4 mt-4 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-bold text-[#ff7722] border-b-2 border-orange-400 pb-2">Payment Details</h2>
                            <table className="w-full mt-2 text-gray-700">
                                <tbody>
                                    <tr><td className="font-semibold w-1/3 py-1">Amount Paid</td><td>₹{donorDetails.amount}</td></tr>
                                    <tr><td className="font-semibold py-1">Payment ID</td><td>{donorDetails.paymentId}</td></tr>
                                    {/* <tr><td className="font-semibold py-1">Payment Method</td><td>{donorDetails.pa}</td></tr> */}
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-4">Thank you for donating to the Gaushala Program and contributing to the welfare of cows.</p>
                        <div className="mt-6 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
                            <p>For any queries, contact us at <a href="mailto:support@vishwabandhufoundation.org" className="text-[#ff7722] hover:underline">support@vishwabandhufoundation.org</a></p>
                        </div>
                    </div>
                </div>
                <Link href='/'>
                    <button className='block m-auto w-32 bg-orange-500 rounded-lg p-2 mt-10 hover:bg-orange-600 text-white'>Go to Home</button>
                </Link>
            </div>
            <Footer />
        </ div>
    );
};

export default OrderSuccessPage;