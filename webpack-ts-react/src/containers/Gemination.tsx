import React from "react";

export const Gemination = ({ letters }: { letters: Array<string> }) => {
    return (
        <div className='gemination'>
            <p>Please select a letter that has gemination.</p>
            {letters.map((el, index) => (
                <div key={index} className='gemination__block'>
                    {el}
                </div>
            ))}
            <button>Go</button>
        </div>
    );
};
