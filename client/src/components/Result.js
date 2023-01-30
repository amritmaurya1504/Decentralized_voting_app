import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import img from "../img/Award.gif"

const Result = () => {
    const { account, adminAccount } = useContext(AuthContext)
    const user = "admin";
    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Election Result and Statistics</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Detailed information of Statistical Reports of General Election to Loksabha, State Legislative Assemblies and Bye-Elections.
                        </p>
                    </div>
                    {
                        account === adminAccount && (
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#33c94a] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Click to know winner
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='w-[500px] p-5 m-auto'>
                    <div className='flex justify-between items-center bg-gray-100 px-7 py-5 bg-white drop-shadow-xl rounded-[10px]'>
                        <img className='h-16 absolute top-0 left-[-20px]' src={img} alt="" />
                        <div className=''>
                            <img className='h-24 rounded-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Official_portrait_of_Narendra_Modi%2C_2022_%28cropped%29.jpg" alt="" />
                        </div>
                        <div className=''>
                            <div className='mt-2'>
                                <p><span className='text-xs'>Name : </span> <span className='font-semibold'>Narendra Modi</span> </p>
                                <p>
                                    <span className='text-xs'>Party Name : </span>
                                    <span className='font-semibold'>BJP</span>
                                </p>
                                <p><span className='text-xs'>Age : </span> <span className='font-semibold'>55</span> </p>
                                <p><span className='text-xs'>Votes : </span> <span className='font-semibold'>10/100</span> </p>
                            </div>
                        </div>

                        <img className='h-12 absolute bottom-[-10px] right-0 h-12 rounded-[50px]' src="http://www.pngimagesfree.com/LOGO/B/BJP-Logo/SMALL/BJP-Logo-HD-PNG.png" alt="" />
                    </div>
                </div>
                <hr />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 p-5'>
                    <div className='flex justify-between items-center bg-gray-100 px-7 py-5 bg-white drop-shadow-xl rounded-[10px]'>
                        <div className=''>
                            <img className='h-24 rounded-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/0/09/CM_Nitish_Kumar_Potrait.jpg" alt="" />
                        </div>
                        <div className=''>
                            <div className='mt-2'>
                                <p><span className='text-xs'>Name : </span> <span className='font-semibold'>Nitish Kumar</span> </p>
                                <p>
                                    <span className='text-xs'>Party Name : </span>
                                    <span className='font-semibold'>JDU</span>
                                </p>
                                <p><span className='text-xs'>Age : </span> <span className='font-semibold'>55</span> </p>
                                <p><span className='text-xs'>Votes : </span> <span className='font-semibold'>10/100</span> </p>
                            </div>
                        </div>

                        <img className='h-12 absolute bottom-[-10px] right-0 h-12 rounded-[50px]' src="https://images.oneindia.com/elections/parties/jd_u-logo.png" alt="" />
                    </div>

                    <div className='flex justify-between items-center bg-gray-100 px-7 py-5 bg-white drop-shadow-xl rounded-[10px]'>
                        <div className=''>
                            <img className='h-24 rounded-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Union_Minister_for_Railways%2C_Shri_Lalu_Prasad_addressing_the_Media_to_announce_a_policy_matter_in_New_Delhi_on_September_12%2C_2004.jpg/330px-The_Union_Minister_for_Railways%2C_Shri_Lalu_Prasad_addressing_the_Media_to_announce_a_policy_matter_in_New_Delhi_on_September_12%2C_2004.jpg" alt="" />
                        </div>
                        <div className=''>
                            <div className='mt-2'>
                                <p><span className='text-xs'>Name : </span> <span className='font-semibold'>Lalu Yadav</span> </p>
                                <p>
                                    <span className='text-xs'>Party Name : </span>
                                    <span className='font-semibold'>RJD</span>
                                </p>
                                <p><span className='text-xs'>Age : </span> <span className='font-semibold'>55</span> </p>
                                <p><span className='text-xs'>Votes : </span> <span className='font-semibold'>10/100</span> </p>
                            </div>
                        </div>
                        <img className='absolute bottom-[-10px] right-0 h-12 rounded-[50px]' src="https://cdn130.picsart.com/321070483004211.png" alt="" />

                    </div>
                    <div className='flex justify-between items-center bg-gray-100 px-7 py-5 bg-white drop-shadow-xl rounded-[10px]'>
                        <div className=''>
                            <img className='h-24 rounded-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Official_portrait_of_Mamata_Banerjee.jpg/375px-Official_portrait_of_Mamata_Banerjee.jpg" alt="" />
                        </div>
                        <div className=''>
                            <div className='mt-2'>
                                <p><span className='text-xs'>Name : </span> <span className='font-semibold'>Mamta Banerjee</span> </p>
                                <p>
                                    <span className='text-xs'>Party Name : </span>
                                    <span className='font-semibold'>TMC</span>
                                </p>
                                <p><span className='text-xs'>Age : </span> <span className='font-semibold'>55</span> </p>
                                <p><span className='text-xs'>Votes : </span> <span className='font-semibold'>10/100</span> </p>
                            </div>
                        </div>
                        <img className='absolute bottom-[-10px] right-0 h-12 rounded-[50px]' src="https://themayanagari.com/wp-content/uploads/2021/03/Trinamool_Congress_flag1.png" alt="" />

                    </div>
                    <div className='flex justify-between items-center bg-gray-100 px-7 py-5 bg-white drop-shadow-xl rounded-[10px]'>
                        <div className=''>
                            <img className='h-24 rounded-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rahul_Gandhi_2019_Official_Portrail.jpg/330px-Rahul_Gandhi_2019_Official_Portrail.jpg" alt="" />
                        </div>
                        <div className=''>
                            <div className='mt-2'>
                                <p><span className='text-xs'>Name : </span> <span className='font-semibold'>Rahul Gandhi</span> </p>
                                <p>
                                    <span className='text-xs'>Party Name : </span>
                                    <span className='font-semibold'>INC</span>
                                </p>
                                <p><span className='text-xs'>Age : </span> <span className='font-semibold'>55</span> </p>
                                <p><span className='text-xs'>Votes : </span> <span className='font-semibold'>10/100</span> </p>
                            </div>
                        </div>
                        <img className='absolute bottom-[-10px] right-0 h-12 rounded-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Indian_National_Congress_hand_logo.png/225px-Indian_National_Congress_hand_logo.png" alt="" />

                    </div>
                    <div className='flex justify-between items-center bg-gray-100 px-7 py-5 bg-white drop-shadow-xl rounded-[10px]'>
                        <div className=''>
                            <img className='h-24 rounded-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/0/04/Arvind_Kejriwal_in_Punjab.png" alt="" />
                        </div>
                        <div className=''>
                            <div className='mt-2'>
                                <p><span className='text-xs'>Name : </span> <span className='font-semibold'>Arvind Kejriwal</span> </p>
                                <p>
                                    <span className='text-xs'>Party Name : </span>
                                    <span className='font-semibold'>AAP</span>
                                </p>
                                <p><span className='text-xs'>Age : </span> <span className='font-semibold'>55</span> </p>
                                <p><span className='text-xs'>Votes : </span> <span className='font-semibold'>10/100</span> </p>
                            </div>
                        </div>
                        <img className='absolute bottom-[-10px] right-0 h-12 rounded-[50px]' src="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-1/305045229_413874807518977_3736041416170922424_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=cPAC8pPyt8EAX-7Ka-F&_nc_ht=scontent.fixr3-2.fna&oh=00_AfA7TuwvNtq1c-CMRvAD-r3lEwnSd5ADn_8T97rjRlHTtg&oe=63C5D0F6" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
