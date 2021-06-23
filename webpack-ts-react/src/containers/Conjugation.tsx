import React from "react";

import { ConjugationSummary } from "./ConjugationSummary";
import { ConjugationTable } from "./ConjugationTable";

export const Conjugation: React.FC = () => {
    return (
        <div className='conjugation'>
            <ConjugationSummary />
            <ConjugationTable />
        </div>
    );
};
