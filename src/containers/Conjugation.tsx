import React, { useEffect, useState } from "react";

import { ConjugationTable } from "../components/ConjugationTable";
import { VerbConjugation, GeminationInfo } from "@/types";
import conjugateVerb from "@/helpers/conjugateVerb";
import { initConjugationState, toggleAlphabets } from "@/helpers";

export const Conjugation = ({ geminationInfo }: { geminationInfo: Map<number, GeminationInfo> }) => {
    const [conjugationData, setConjugationData] = useState<VerbConjugation>(initConjugationState);
    const [isAmharic, toggleIsAmharic] = useState(false);

    useEffect(() => {
        setConjugationData(conjugateVerb(geminationInfo));
    }, [geminationInfo]);

    const switchAlphabets = () => {
        if (!isAmharic) {
            setConjugationData(toggleAlphabets({ dir: "AM", prevState: conjugationData }));
            toggleIsAmharic(prevState => !prevState);
        } else {
            setConjugationData(conjugateVerb(geminationInfo));
            toggleIsAmharic(prevState => !prevState);
        }
    };

    return (
        <div className='conjugation'>
            <ConjugationTable conjugationData={conjugationData} toggleAlphabets={switchAlphabets} />
        </div>
    );
};
