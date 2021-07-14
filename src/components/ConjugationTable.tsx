import { VerbConjugation } from "@/types";
import React from "react";

export const ConjugationTable = ({ conjugationData, toggleAlphabets }: { conjugationData: VerbConjugation; toggleAlphabets: () => void }) => {
    return (
        <>
            <div className='conjugation__table'>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'></div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>Perfectum</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>Gerundivum</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>Contingent</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>Imperativus</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>Jussivus</p>
                    </div>
                </div>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content conjugation__content--amharic'>እኔ</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.perfectum.firstSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.gerundivum.firstSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.contingent.firstSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.imperativus.firstSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.jussivus.firstSingular}</p>
                    </div>
                </div>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content conjugation__content--amharic'>አንተ</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.perfectum.secondMasculineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.gerundivum.secondMasculineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.contingent.secondMasculineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.imperativus.secondMasculineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.jussivus.secondMasculineSingular}</p>
                    </div>
                </div>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content conjugation__content--amharic'>አንቺ</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.perfectum.secondFeminineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.gerundivum.secondFeminineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.contingent.secondFeminineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.imperativus.secondFeminineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.jussivus.secondFeminineSingular}</p>
                    </div>
                </div>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content conjugation__content--amharic'>እሱ</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.perfectum.thirdMasculineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.gerundivum.thirdMasculineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.contingent.thirdMasculineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.imperativus.thirdMasculineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.jussivus.thirdMasculineSingular}</p>
                    </div>
                </div>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content conjugation__content--amharic'>እሷ</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.perfectum.thirdFeminineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.gerundivum.thirdFeminineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.contingent.thirdFeminineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.imperativus.thirdFeminineSingular}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.jussivus.thirdFeminineSingular}</p>
                    </div>
                </div>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content conjugation__content--amharic'>እኛ</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.perfectum.firstPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.gerundivum.firstPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.contingent.firstPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.imperativus.firstPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.jussivus.firstPlural}</p>
                    </div>
                </div>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content conjugation__content--amharic'>እናንተ</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.perfectum.secondPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.gerundivum.secondPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.contingent.secondPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.imperativus.secondPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.jussivus.secondPlural}</p>
                    </div>
                </div>
                <div className='conjugation__row'>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content conjugation__content--amharic'>እነሱ</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.perfectum.thirdPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.gerundivum.thirdPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.contingent.thirdPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.imperativus.thirdPlural}</p>
                    </div>
                    <div className='conjugation__cell'>
                        <p className='conjugation__content'>{conjugationData.jussivus.thirdPlural}</p>
                    </div>
                </div>
            </div>
            <button
                className='conjugation__alpha-toggle'
                onClick={() => {
                    toggleAlphabets();
                }}
            >
                Toggle alphabets
            </button>
        </>
    );
};
