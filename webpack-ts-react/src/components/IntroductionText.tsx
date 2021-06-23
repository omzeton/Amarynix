import React from "react";

export const IntroductionText: React.FC = () => {
    return (
        <div className='splash'>
            <div className='splash__heading-wrapper'>
                <h2 className='splash__header'>amharic verb conjugator</h2>
                <h3 className='splash__subheader'>
                    የመጀመሪያው አማርኛ ቃለ-መጠይቅ በድር ላይ.
                    <br />
                    first amharic verb conjugator on the web.
                </h3>
            </div>
            <div className='splash__form'>
                <div className='splash__button-group'>
                    <input className='splash__input' type='text' placeholder='ፈልግ' />
                    <button className='splash__button'>conjugate</button>
                </div>
                <div className='splash__error'>
                    <p className='splash__error-message'>Please provide a valid input.</p>
                </div>
            </div>
        </div>
    );
};
