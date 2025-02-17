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
import PDFPreviewAndDownload from '@/components/payment-successful-bharat/pdf-preview/page';

interface JoinFormDetails {
    memberID: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    gender: string;
    dob: string;
    aadharCard: string;
    companyName?: string;
    country: string;
    state: string;
    address: string;
    landmark: string;
    postalCode: string;
    phone: string;
    email: string;
    nomineeName: string;
    relation: string;
    nomineeAadhar: string;
}

interface OrderDetails extends JoinFormDetails {
    paymentId: string;
    timestamp: any;
    status: string;
}

const OrderSuccessPage: React.FC = () => {
    const searchParams = useSearchParams();
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const memberCardData = orderDetails ? {
        "memberID": orderDetails.memberID,
        "name": {
            "firstName": orderDetails.firstName,
            "middleName": orderDetails.middleName,
            "lastName": orderDetails.lastName
        },
        "phone": orderDetails.phone,
        "aadhar": orderDetails.aadharCard,
        "nomineeName": orderDetails.nomineeName,
        "nomineeRelation": orderDetails.relation,
        "nomineeAadhar": orderDetails.nomineeAadhar,
        "address": {
            "street": orderDetails.address,
            "landmark": orderDetails.landmark,
            "state": orderDetails.state,
            "postalCode": orderDetails.postalCode,
            "country": orderDetails.country
        }
    } : null;

    useEffect(() => {
        const orderId = searchParams.get('orderId');
        if (orderId) {
            fetchOrderDetails(orderId);
        }
    }, [searchParams]);

    const fetchOrderDetails = async (orderId: string) => {
        try {
            const docRef = doc(db, 'members', orderId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setOrderDetails(docSnap.data() as OrderDetails);
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

    if (!orderDetails) {
        return <div className="flex justify-center items-center min-h-screen">Order not found</div>;
    }

    return (
        <div>
            <HeaderBar />
            <NavBar bg_color='' />
            <div className='font-sans bg-gray-100 p-10'>
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden ">
                    <div className="bg-orange-400 text-white text-center py-6">
                        <h1 className="text-2xl font-bold">Welcome to Bharat Self Care Team</h1>
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

                        <p className="text-lg mt-4">Dear <span className="font-semibold">{orderDetails.firstName}</span>,</p>
                        <p className="mt-2">We are delighted to confirm your registration with the Bharat Self Care Team. Your membership has been successfully activated.</p>

                        <div className="bg-white p-4 mt-4 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-bold text-[#ff7722] border-b-2 border-orange-400 pb-2">Member Information</h2>
                            <table className="w-full mt-2 text-gray-700">
                                <tbody>
                                    <tr><td className="font-semibold w-1/3 py-1">Member ID</td><td>{orderDetails.memberID}</td></tr>
                                    <tr><td className="font-semibold py-1">Registration Date</td><td>{new Date().toLocaleDateString()}</td></tr>
                                    <tr><td className="font-semibold py-1">Full Name</td><td>{orderDetails.firstName} {orderDetails.middleName || ''} {orderDetails.lastName}</td></tr>
                                    <tr><td className="font-semibold py-1">Gender</td><td>{orderDetails.gender}</td></tr>
                                    <tr><td className="font-semibold py-1">Date of Birth</td><td>{orderDetails.dob}</td></tr>
                                    <tr><td className="font-semibold py-1">Aadhar Number</td><td>XXXX-XXXX-{orderDetails.aadharCard.slice(-4)}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-4 mt-4 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-bold text-[#ff7722] border-b-2 border-orange-400 pb-2">Contact Details</h2>
                            <table className="w-full mt-2 text-gray-700">
                                <tbody>
                                    <tr><td className="font-semibold w-1/3 py-1">Email</td><td>{orderDetails.email}</td></tr>
                                    <tr><td className="font-semibold py-1">Phone</td><td>{orderDetails.phone}</td></tr>
                                    <tr><td className="font-semibold py-1">Address</td><td>{orderDetails.address}, {orderDetails.landmark}, {orderDetails.state}, {orderDetails.postalCode}, {orderDetails.country}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-4 mt-4 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-bold text-[#ff7722] border-b-2 border-orange-400 pb-2">Nominee Details</h2>
                            <table className="w-full mt-2 text-gray-700">
                                <tbody>
                                    <tr><td className="font-semibold w-1/3 py-1">Nominee Name</td><td>{orderDetails.nomineeName}</td></tr>
                                    <tr><td className="font-semibold py-1">Relationship</td><td>{orderDetails.relation}</td></tr>
                                    <tr><td className="font-semibold py-1">Nominee Aadhar</td><td>XXXX-XXXX-{orderDetails.nomineeAadhar.slice(-4)}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-4 mt-4 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-bold text-[#ff7722] border-b-2 border-orange-400 pb-2">Payment Details</h2>
                            <table className="w-full mt-2 text-gray-700">
                                <tbody>
                                    <tr><td className="font-semibold w-1/3 py-1">Amount Paid</td><td>₹500.00</td></tr>
                                    <tr><td className="font-semibold py-1">Payment ID</td><td>{orderDetails.paymentId}</td></tr>
                                    {/* <tr><td className="font-semibold py-1">Payment Method</td><td>{orderDetails.pa}</td></tr> */}
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-4">Thank you for joining the Bharat Self Care Team. We look forward to serving you.</p>
                        <div className="mt-6 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
                            <p>For any queries, contact us at <a href="mailto:support@vishwabandhufoundation.org" className="text-[#ff7722] hover:underline">support@vishwabandhufoundation.org</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {memberCardData && <PDFPreviewAndDownload orderDetails={memberCardData}/>}
            <Footer />
        </ div>
    );
};

export default OrderSuccessPage;