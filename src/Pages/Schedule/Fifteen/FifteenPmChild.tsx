import React from 'react';

const FifteenPmChild = ({ fifteenPMslots, setSlotPm }: any) => {
    return (
        <>
            <span onClick={() => setSlotPm(fifteenPMslots)}
                className="cursor-pointer inline-block rounded border border-primary py-3 w-56 text-center text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
                {fifteenPMslots}
            </span>
        </>
    );
};

export default FifteenPmChild;