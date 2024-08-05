import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { AiOutlineDollarCircle, AiOutlineShoppingCart, AiOutlineLineChart } from 'react-icons/ai';

const Dashboard = () => {
    const stats = [
        {
            icon: <AiOutlineDollarCircle className="text-3xl text-green-500" />,
            label: 'Total Sales',
            value: '$12,345',

        },
        {
            icon: <AiOutlineShoppingCart className="text-3xl text-blue-500" />,
            label: 'Total Orders',
            value: '1,234',
            last: "+10% from last week"
        },
        {
            icon: <AiOutlineLineChart className="text-3xl text-red-500" />,
            label: 'Profit',
            value: '$4,567',
        },
    ];
    return (
        <>
            <AdminHeader />
            <section>
                <div className='flex'>
                    <div className='w-1/6'>
                        <AdminSidebar />
                    </div>
                    <div className='w-5/6 bg-slate-500'>
                        <div className="p-6 min-h-screen w-[100%]">
                            <h1 className="text-3xl font-semibold mb-6 text-white">Commerce Dashboard</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {stats.map((stat, index) => (
                                    <>

                                        <div key={index} className="bg-white p-4 rounded-lg shadow flex ">
                                            <div className="p-4 bg-gray-100 rounded-full">
                                                {stat.icon}
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-lg font-medium">{stat.label}</p>
                                                <p className="text-xl font-bold">{stat.value}</p>


                                            </div>

                                        </div>

                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard








