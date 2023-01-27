import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../components/Contexts/AuthProvider/AuthProvider';

const SixtyMins = () => {
    const { setSlot }: any = useContext(AuthContext);
    const { data: sixtyMinsAm, isLoading } = useQuery({
        queryKey: ['sixtyMinsAm'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sixtyMinsAM');
            const data = res.json();
            return data;
        }
    })

    const { data: sixtyMinsPm } = useQuery({
        queryKey: ['sixtyMinsPm'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sixtyMinsPM');
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <div>
            <div className='h-[25rem] md:py-0 py-12 px-2'>
                <h1 className='text-center text-2xl mb-4 text-primary -mt-2'>Please select a time slot </h1>
                <div className='flex justify-center gap-4'>

                    <div className='flex flex-col gap-4 h-[22rem] overflow-y-auto pr-2'>
                        {
                            sixtyMinsAm &&
                            sixtyMinsAm[0].slots.map((sixtyAm: any) => <span onClick={() => setSlot(sixtyAm)} key={sixtyAm._id}
                                className="cursor-pointer inline-block rounded border border-primary py-3 px-5 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
                            >
                                {sixtyAm}
                            </span>)
                        }
                    </div>
                    <div>
                        <div className='flex flex-col gap-4 h-[22rem] overflow-y-auto pr-2 '>

                            {sixtyMinsPm &&
                                sixtyMinsPm[0].slots.map((sixtyPm: any) => <span key={sixtyPm._id}
                                    className="cursor-pointer inline-block rounded border border-primary py-3 px-5 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
                                >
                                    {sixtyPm}
                                </span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default SixtyMins;