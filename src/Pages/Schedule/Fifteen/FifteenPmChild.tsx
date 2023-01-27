import React from 'react';

const FifteenPmChild = ({ fifteenPMslots, setSlotPm }: any) => {
    return (
        <div>
            <span onClick={() => setSlotPm(fifteenPMslots)}
                className="cursor-pointer inline-block rounded border border-primary py-3 px-5 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
                {fifteenPMslots}
            </span>
        </div>
    );
};

export default FifteenPmChild;