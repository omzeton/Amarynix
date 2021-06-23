import { KeyboardEvent } from "react";

const convertEnglishConsonantToAmharic = (keyString: string, isShiftKey: boolean) => {
    let fieldValue;

    if (keyString === "q") {
        fieldValue = 4677;
    } else if (keyString === "h" && isShiftKey === true) {
        fieldValue = 4629;
    } else if (keyString === "k" && isShiftKey === true) {
        fieldValue = 4797;
    } else if (keyString === "w" && isShiftKey === false) {
        fieldValue = 4813;
    } else if (keyString === "r") {
        fieldValue = 4653;
    } else if (keyString === "y") {
        fieldValue = 4845;
    } else if (keyString === "t" && isShiftKey === true) {
        fieldValue = 4901;
    } else if (keyString === "t" && isShiftKey === false) {
        fieldValue = 4725;
    } else if (keyString === "p" && isShiftKey === false) {
        fieldValue = 4949;
    } else if (keyString === "s" && isShiftKey === false) {
        fieldValue = 4661;
    } else if (keyString === "d") {
        fieldValue = 4853;
    } else if (keyString === "f") {
        fieldValue = 4941;
    } else if (keyString === "g") {
        fieldValue = 4877;
    } else if (keyString === "h" && isShiftKey === false) {
        fieldValue = 4613;
    } else if (keyString === "j") {
        fieldValue = 4869;
    } else if (keyString === "k" && isShiftKey === false) {
        fieldValue = 4781;
    } else if (keyString === "l") {
        fieldValue = 4621;
    } else if (keyString === "z" && isShiftKey === false) {
        fieldValue = 4829;
    } else if (keyString === "z" && isShiftKey === true) {
        fieldValue = 4837;
    } else if (keyString === "x" && isShiftKey === false) {
        fieldValue = 4933;
    } else if (keyString === "x" && isShiftKey === true) {
        fieldValue = 4925;
    } else if (keyString === "c" && isShiftKey === false) {
        fieldValue = 4733;
    } else if (keyString === "c" && isShiftKey === true) {
        fieldValue = 4909;
    } else if (keyString === "v") {
        fieldValue = 4717;
    } else if (keyString === "b") {
        fieldValue = 4709;
    } else if (keyString === "n" && isShiftKey === true) {
        fieldValue = 4765;
    } else if (keyString === "n" && isShiftKey === false) {
        fieldValue = 4757;
    } else if (keyString === "m") {
        fieldValue = 4637;
    } else if (keyString === "p" && isShiftKey === true) {
        fieldValue = 4917;
    } else if (keyString === "s" && isShiftKey === true) {
        fieldValue = 4669;
    } else if (keyString === ",") {
        fieldValue = 4963;
    } else if (keyString === '"') {
        fieldValue = 4959;
    }

    if (fieldValue) {
        return String.fromCharCode(fieldValue);
    } else {
        return "";
    }
};

const isRootLetter = (amharicValue: number): boolean => {
    switch (amharicValue) {
        case 4629:
        case 4677:
        case 4741:
        case 4797:
        case 4813:
        case 4653:
        case 4845:
        case 4725:
        case 4901:
        case 4949:
        case 4661:
        case 4853:
        case 4941:
        case 4821:
        case 4877:
        case 4613:
        case 4869:
        case 4781:
        case 4621:
        case 4829:
        case 4933:
        case 4733:
        case 4717:
        case 4709:
        case 4765:
        case 4757:
        case 4637:
        case 4909:
        case 4637:
        case 4917:
        case 4669:
        case 4925:
        case 4645:
        case 4837:
        case 4637: {
            return true;
        }
        default: {
            return false;
        }
    }
};

const convertToAmharic = (pressEvent: KeyboardEvent<HTMLInputElement>, input: HTMLInputElement): string | void => {
    if (pressEvent.ctrlKey) return;

    let outputValue = "";

    const selection = input.selectionStart!;
    const keyCode = pressEvent.which;
    const keyString = String.fromCharCode(keyCode).toLowerCase();
    const isShiftKey = pressEvent.shiftKey;
    const lastCharPlain = input.value.charCodeAt(selection - 1);

    if (keyCode > 4000 || (keyCode > 34 && keyCode <= 57 && keyCode !== 44) || (keyCode >= 91 && keyCode <= 93) || (keyCode >= 60 && keyCode <= 64) || (keyCode >= 123 && keyCode <= 125)) {
        return;
    }

    if (keyCode !== 16 && keyCode !== 8 && keyCode !== 13 && keyCode !== 0 && keyCode !== 32) {
        const consonantRetVal = convertEnglishConsonantToAmharic(keyString, isShiftKey);

        if (consonantRetVal !== null && consonantRetVal.length > 0) {
            var tempStartPos = selection;
            if (keyString === "h" && isShiftKey === false) {
                var hconsValue = 0;
                if (lastCharPlain === 4629) {
                    hconsValue = 4741;
                } else if (lastCharPlain === 4613) {
                    hconsValue = 4629;
                } else {
                    hconsValue = 4613;
                    tempStartPos = selection + 1;
                }

                outputValue = input.value.substring(0, tempStartPos - 1) + String.fromCharCode(hconsValue) + input.value.substring(selection, input.value.length);
            } else if (keyString === "s" && isShiftKey === false) {
                var tempStartPos = selection;
                var hconsValue = 0;
                if (lastCharPlain === 4661) {
                    hconsValue = 4645;
                } else {
                    hconsValue = 4661;
                    tempStartPos = selection + 1;
                }
                outputValue = input.value.substring(0, tempStartPos - 1) + String.fromCharCode(hconsValue) + input.value.substring(selection, input.value.length);
            } else if (keyString === ",") {
                var tempStartPos = selection;
                var hconsValue = 0;
                if (lastCharPlain === 4963) {
                    hconsValue = 44;
                } else {
                    hconsValue = 4963;
                    tempStartPos = selection + 1;
                }
                outputValue = input.value.substring(0, tempStartPos - 1) + String.fromCharCode(hconsValue) + input.value.substring(selection, input.value.length);
            } else if (keyString === '"') {
                outputValue = input.value + String.fromCharCode(4959); // 135F = Tebbeq
            } else {
                outputValue = input.value.substring(0, selection) + consonantRetVal + input.value.substring(selection, input.value.length);
            }
        }

        const aOffset = -2;
        const eOffset = -5;
        const iOffset = -3;
        const uOffset = -4;
        const oOffset = 1;
        const eeOffset = -1;
        let offset = 0;
        let otherVowelCharacter = 0;
        let vowelCharacter: number;

        if ((keyString === "a" && isShiftKey === false) || keyString === "4") {
            offset = aOffset;
            vowelCharacter = 4768;
            if (lastCharPlain === 4768) {
                otherVowelCharacter = 4816;
            }
        } else if (keyString === "a" && isShiftKey === true) {
            offset = aOffset;
            vowelCharacter = 4771;
            if (lastCharPlain === 4771) {
                otherVowelCharacter = 4819;
            }
        } else if ((keyString === "e" && isShiftKey === false) || keyString === "1") {
            offset = eOffset;
            vowelCharacter = 4773;
            if (lastCharPlain === 4773) {
                otherVowelCharacter = 4821;
            }
        } else if (keyString === "i" || keyString === "3") {
            offset = iOffset;
            vowelCharacter = 4770;
            if (lastCharPlain === 4770) {
                otherVowelCharacter = 4818;
            }
        } else if (keyString === "o" || keyString === "7") {
            offset = oOffset;
            vowelCharacter = 4774;
            if (lastCharPlain === 4774) {
                otherVowelCharacter = 4822;
            }
        } else if (keyString === "u" || keyString === "2") {
            offset = uOffset;
            vowelCharacter = 4769;
            if (lastCharPlain === 4769) {
                otherVowelCharacter = 4817;
            }
        } else if ((keyString === "e" && isShiftKey === true) || keyString === "5") {
            offset = eeOffset;
            vowelCharacter = 4772;
            if (lastCharPlain === 4772) {
                otherVowelCharacter = 4820;
            }
        } else if (keyString === ";") {
            outputValue = input.value + String.fromCharCode(4964);
        } else if (keyString === ":") {
            outputValue = input.value + String.fromCharCode(4961);
        }

        var vowelCharacterChar = String.fromCharCode(vowelCharacter!);
        //var cursorIndex = input.value.indexOf("|");
        //cursor.text = "" + cursorIndex;

        var lastCharEtymology = input.value.charCodeAt(selection - 1);

        if (offset !== 0) {
            //?

            if (input.value.length < 1) {
                outputValue = input.value + vowelCharacterChar;

                //pressEvent.keyCode = 4773;
            } else if (input.value.charCodeAt(selection - 1) === 32 || lastCharPlain === 4959) {
                // if tebeq
                outputValue = input.value + vowelCharacterChar;
            } else if (lastCharEtymology === 4883 || lastCharEtymology === 4683 || lastCharEtymology === 4803 || lastCharEtymology === 4787 || lastCharEtymology === 4747) {
                if (keyString === "e" && isShiftKey === false) lastCharEtymology = lastCharEtymology - 3;
                if (keyString === "i") lastCharEtymology = lastCharEtymology - 1;
                //if ( keyString === "a") lastCharEtymology = lastCharEtymology ;
                if (keyString === "e" && isShiftKey === true) lastCharEtymology = lastCharEtymology + 1;
                if (keyString === "u") lastCharEtymology = lastCharEtymology + 2;

                outputValue = input.value.substring(0, selection - 1) + String.fromCharCode(lastCharEtymology) + input.value.substring(selection, input.value.length);
            } else {
                var lastchar = input.value.charCodeAt(selection - 1) + offset;

                if (otherVowelCharacter > 0) {
                    outputValue = input.value.substring(0, selection - 1) + String.fromCharCode(otherVowelCharacter) + input.value.substring(selection, input.value.length);
                } else if (isRootLetter(lastCharPlain)) {
                    outputValue = input.value.substring(0, selection - 1) + String.fromCharCode(lastchar) + input.value.substring(selection, input.value.length);
                } else {
                    outputValue = input.value.substring(0, selection) + vowelCharacterChar + input.value.substring(selection, input.value.length);
                }
            }
        }

        if (keyString === "w" && isShiftKey === true) {
            var lastchar2 = input.value.charCodeAt(selection - 1);

            if (input.value.length < 1) {
                lastCharModified = 4775;
                outputValue = String.fromCharCode(4775);
            }

            if (!(lastchar2 === 4845 || lastchar2 === 4813 || lastchar2 === 4933 || lastchar2 === 4768 || lastchar2 === 4821)) {
                var lastCharModified;
                if (lastchar2 === 4677 || lastchar2 === 4877 || lastchar2 === 4781) {
                    lastCharModified = lastchar2 + 6;
                } else if (lastchar2 === 4613) {
                    lastCharModified = 4747;
                } else if (lastchar2 === 4797) {
                    lastCharModified = 4803;
                } else if (lastchar2 === 4741) {
                    lastCharModified = 4747;
                } else {
                    lastCharModified = lastchar2 + 2;
                }

                if (isRootLetter(lastchar2)) {
                    outputValue = input.value.substring(0, selection - 1) + String.fromCharCode(lastCharModified) + input.value.substring(selection, input.value.length);
                }
            }
        }

        if (outputValue) return outputValue;
    }

    return;
};

export default convertToAmharic;
