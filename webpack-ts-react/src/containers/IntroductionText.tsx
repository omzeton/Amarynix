import React, { KeyboardEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import convertToAmharic from "@/helpers/convertToAmharic";

export const IntroductionText = ({ submitVerb }: { submitVerb?: Dispatch<SetStateAction<string>> }) => {
    const [inputValue, setInputValue] = useState("");
    const verbInput = useRef<HTMLInputElement>(null);

    const inputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        const textSelection = window.getSelection()?.toString();
        if (event.code === "Enter" && submitVerb) {
            submitVerb(inputValue);
        }
        if (event.code === "Backspace") {
            // TODO: Remove text by selection
            // Currently it removes more than selected part
            if (textSelection) {
                setInputValue(previousValue => previousValue.split(textSelection).join(""));
            }
            if (inputValue.length > 0) {
                setInputValue(previousValue => previousValue.slice(0, previousValue.length - 1));
            }
        }
        if (event.code === "Space") {
            setInputValue(previousValue => previousValue + " ");
        }
        const output = convertToAmharic(event, verbInput.current!);
        if (output) setInputValue(output);
    };

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
                    <input
                        readOnly
                        ref={verbInput}
                        onKeyDown={event => {
                            inputHandler(event);
                        }}
                        value={inputValue}
                        className='splash__input'
                        type='text'
                        placeholder='ፈልግ'
                    />
                    <button className='splash__button'>conjugate</button>
                </div>
                <div className='splash__error'>
                    <p className='splash__error-message'>Please provide a valid input.</p>
                </div>
            </div>
        </div>
    );
};
