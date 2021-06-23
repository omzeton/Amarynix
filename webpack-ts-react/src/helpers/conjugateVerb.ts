import { conjugateAllPersons } from "./index";
import { amToLat, inputToRad, identifyType, toGerundivum, toPerfectum, toContingent, toJussivus } from ".";

import { GeminationInfo, VerbConjugation } from "@/types";

export default (geminationMap: Map<number, GeminationInfo>): VerbConjugation => {
    let input = "";
    for (const [_, value] of geminationMap) {
        const latinSyllable = amToLat(value.el);
        if (value.geminated) input += latinSyllable[0];
        input += latinSyllable;
    }

    const radicals = inputToRad(input);
    const verbType = identifyType(radicals);

    const perfectum = toPerfectum(radicals, verbType);
    const gerundivum = toGerundivum(radicals, verbType);
    const contingent = toContingent(radicals, verbType);
    const jussivus = toJussivus(radicals, verbType);

    const fullConjugation = conjugateAllPersons({
        perfectum,
        gerundivum,
        contingent,
        jussivus,
    });

    return fullConjugation;
};
