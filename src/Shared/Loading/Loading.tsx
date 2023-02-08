import React from 'react';

import { Oval } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <Oval
                height={80}
                width={80}
                color="#0098da"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#0098da"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
};

export default Loading;