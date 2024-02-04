import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount((prevCounter) => prevCounter+1)
        setCount((prevCounter) => prevCounter+1)
        setCount((prevCounter) => prevCounter+1)
        setCount((prevCounter) => prevCounter+1)

    }

    return (
        <div>
            <button
                type="button"
                className="mt-4 rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={handleClick}
            >
                {count}
            </button>
        </div>
    );
}

export default Counter;
