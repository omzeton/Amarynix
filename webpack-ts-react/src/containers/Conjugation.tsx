import React, { useEffect, useState } from "react";

import { ConjugationSummary } from "./ConjugationSummary";
import { ConjugationTable } from "./ConjugationTable";

import { VerbConjugation, GeminationInfo } from "@/types";
import conjugateVerb from "@/helpers/conjugateVerb";
import { initConjugationState } from "@/helpers";

export const Conjugation = ({ geminationInfo }: { geminationInfo: Map<number, GeminationInfo> }) => {
    const [conjugationData, setConjugationData] = useState<VerbConjugation>(initConjugationState);
    useEffect(() => {
        const output = conjugateVerb(geminationInfo);
        setConjugationData(output);
        console.log(output);
    }, [geminationInfo]);

    return (
        <div className='conjugation'>
            <ConjugationTable conjugationData={conjugationData} />
        </div>
    );
};
