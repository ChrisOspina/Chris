import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useAuth } from '../components/session/AuthContext';

import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';

const Dashboard = () => {
    const [lastScan, setLastScan] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    const { user } = useAuth();
    useEffect(() => {
        const fetchLastScan = async () => {
            try {
                const scansRef = collection(db, 'X-ray');
                const q = query(scansRef, where("p_id", "==", user.uid), orderBy('scan_date', 'desc'), limit(1));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(doc => {
                    setLastScan(doc.data());
                });
            } catch (error) {
                console.error("Error fetching last scan:", error);
            } finally {
                setLoading(false); // Set loading to false when fetching is done
            }
        };

        fetchLastScan();
    }, []);

    if (loading) {
        return <div className='h-full w-full text-white inline-flex justify-center items-center'>Loading...</div>; // Render loading indicator
    }

    return (
        <div className="h-full flex-col inline-flex gap-10 pl-5 pr-5 pt-5">
            <div className='flex-col items-start inline-flex gap-5'>
                <div className="text-center text-white text-4xl font-normal font-['Inter']">Dashboard</div>
            </div>
            <div className="justify-center items-center gap-10 inline-flex p-5">
                <div className="self-stretch flex-col justify-start items-start inline-flex">
                    <div className="flex-col justify-center items-start gap-5 flex w-[200px] h-[300px]">
                        <img
                            className="rounded-[10px] object-cover w-full h-full"
                            src={lastScan ? lastScan.xr_image : "https://via.placeholder.com/200x600"}
                            alt="Placeholder" />
                    </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-5 inline-flex">
                    <div className="w-1/2 self-stretch h-12 justify-between items-center inline-flex">
                        <div className="text-center text-white text-3xl font-normal font-['Inter']">Results</div>
                        <div className="text-customGreen font-normal font-['Inter']">{lastScan ? lastScan.scan_date.toDate().toLocaleString() : ""}</div>
                    </div>
                    <div className="self-stretch flex-col justify-start items-start flex">
                        <div className="text-center text-customPurple text-xl font-normal font-['Inter']">{lastScan ? lastScan.medical_term : ""}</div>
                        <div className="self-stretch text-justify text-white font-normal font-['Inter'] text-wrap w-1/2">{lastScan ? lastScan.medical_term_description : ""}</div>
                    </div>
                    <div className="self-stretch flex-col justify-start items-start flex">
                        <div className="text-center text-white text-xl font-normal font-['Inter']">Doctors Message:</div>
                        <div className="self-stretch text-justify text-white font-normal font-['Inter'] text-wrap w-1/2">{lastScan ? lastScan.doctors_message : ""}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
