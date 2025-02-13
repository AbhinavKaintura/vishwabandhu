'use client';

import Link from 'next/link';

const ViewMembers = () => {
    return (
        <section className="py-10 bg-orange-50 text-center">
            <div className="container mx-auto px-5">
                <h2 className="text-2xl font-bold text-[#7d553c]">Vishwabandhu Family Members</h2>
                <p className="mt-2 text-[#bd6026]">
                    Be a part of a community that supports and uplifts one another. Explore our list of dedicated members.
                </p>
                <div className="mt-6">
                    <Link href="/members" className="px-6 py-3 bg-[#ff7722] text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                        View Members
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ViewMembers;