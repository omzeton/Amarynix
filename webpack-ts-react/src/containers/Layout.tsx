import React, { useState } from "react";

import { IntroductionText } from "./IntroductionText";
import { Gemination } from "./Gemination";
import { GeminationInfo } from "@/types";

export const Layout: React.FC = () => {
    const [verb, setVerb] = useState("");
    const [geminationInfo, updateGeminationInfo] = useState<Map<number, GeminationInfo>>(new Map());

    const registerVerb = (verb: string) => {
        setVerb(verb);
        verb.split("").forEach((el, index) => {
            updateGeminationInfo(prevState => {
                return new Map(prevState).set(index, { el, geminated: false });
            });
        });
    };

    const setGemination = ({ index, val }: { index: number; val: boolean }) => {
        const letterInfo = geminationInfo.get(index);
        if (!letterInfo) {
            console.warn("No node with such key: ", letterInfo);
        } else {
            updateGeminationInfo(prevState => {
                return new Map(prevState).set(index, { el: letterInfo.el, geminated: val });
            });
        }
    };

    const conjugateVerb = () => {};

    return (
        <main className='main-wrapper'>
            <IntroductionText submitVerb={registerVerb} />
            {verb && <Gemination geminateLetter={setGemination} geminationInfo={geminationInfo} conjugateVerb={conjugateVerb} />}
        </main>
    );
};
