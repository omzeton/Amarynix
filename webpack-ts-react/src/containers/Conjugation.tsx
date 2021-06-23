import React, { useEffect } from "react";

import { ConjugationSummary } from "./ConjugationSummary";
import { ConjugationTable } from "./ConjugationTable";

import { GeminationInfo } from "@/types";
import conjugateVerb from "@/helpers/conjugateVerb";

export const Conjugation = ({ geminationInfo }: { geminationInfo: Map<number, GeminationInfo> }) => {
    useEffect(() => {
        conjugateVerb(geminationInfo);
    }, [geminationInfo]);

    return (
        <div className='conjugation'>
            <ConjugationSummary />
            <ConjugationTable />
        </div>
    );
};
