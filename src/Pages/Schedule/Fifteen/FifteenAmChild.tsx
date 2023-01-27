import React from 'react';

const FifteenAmChild = ({ fifteenAMslots, setSlot }: any) => {

    return (
        <div>
            <span onClick={() => setSlot(fifteenAMslots)}
                className="cursor-pointer inline-block rounded border border-primary py-3 px-5 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            >
                {fifteenAMslots}
            </span>
        </div>
    );
};

export default FifteenAmChild;