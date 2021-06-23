import React from "react";

export const ConjugationSummary: React.FC = () => {
    return (
        <div className='conjugation__summary'>
            <div className='conjugation__left-column'>
                <div className='conjugation__summary-cell'>
                    <p>Input:</p>
                </div>
                <div className='conjugation__summary-cell'>
                    <p>Output</p>
                </div>
                <div className='conjugation__summary-cell'>
                    <p>Perfectum:</p>
                </div>
                <div className='conjugation__summary-cell'>
                    <p>Jussivus:</p>
                </div>
                <div className='conjugation__summary-cell'>
                    <p>Gerundivum:</p>
                </div>
                <div className='conjugation__summary-cell'>
                    <p>Contingent:</p>
                </div>
            </div>
            <div className='conjugation__right-column'>
                <div className='conjugation__summary-cell'>
                    <p>Input</p>
                </div>
                <div className='conjugation__summary-cell'></div>
                <div className='conjugation__summary-cell'>
                    <p>Perfectum</p>
                </div>
                <div className='conjugation__summary-cell'>
                    <p>Jussivus</p>
                </div>
                <div className='conjugation__summary-cell'>
                    <p>Gerundivum</p>
                </div>
                <div className='conjugation__summary-cell'>
                    <p>Contingent</p>
                </div>
            </div>
        </div>
    );
};
