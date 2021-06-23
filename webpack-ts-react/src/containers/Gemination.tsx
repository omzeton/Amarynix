import { GeminationInfo } from "@/types";
import React from "react";

export const Gemination = ({
    geminateLetter,
    geminationInfo,
    conjugateVerb,
}: {
    geminateLetter: ({ index, val }: { index: number; val: boolean }) => void;
    geminationInfo: Map<number, GeminationInfo>;
    conjugateVerb: () => void;
}) => {
    return (
        <div className='gemination'>
            <p>Please select a letter that has gemination.</p>
            <div className='gemination__blocks-wrapper'>
                {[...geminationInfo].map((_, index) => {
                    const { el, geminated } = geminationInfo.get(index)!;
                    return (
                        <div key={index} className={["gemination__block", geminated ? "gemination__block--active" : ""].join(" ")} onClick={() => geminateLetter({ index, val: !geminated })}>
                            <p className='gemination__letter'>{el}</p>
                        </div>
                    );
                })}
            </div>
            <button onClick={conjugateVerb} className='gemination__button'>
                Go
            </button>
        </div>
    );
};
