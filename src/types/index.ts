export interface VerbSubmitHandler {
    submitVerb: (value: string) => void;
}

export interface GeminationInfo {
    el: string;
    geminated: boolean;
}

export interface ConjugationTable {
    firstSingular: string;
    secondMasculineSingular: string;
    secondFeminineSingular: string;
    thirdMasculineSingular: string;
    thirdFeminineSingular: string;
    firstPlural: string;
    secondPlural: string;
    thirdPlural: string;
}

export interface VerbConjugation {
    [key: string]: ConjugationTable;
}

export interface ConjugationPayload {
    perfectum: string;
    gerundivum: string;
    contingent: string;
    jussivus: string;
}
