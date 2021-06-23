import { VerbConjugation } from "./../types/index";
import { ConjugationPayload } from "@/types";
let verbTypeGlobal: string;
let hasT = false; // TODO: This should be set during input parsing

export const amToLat = (str: string): string => {
    switch (str) {
        case "ሀ":
        case "ሃ":
        case "ሐ":
        case "ሓ":
        case "ኀ":
        case "ኃ":
        case "ኻ":
            return "ha";
        case "ሁ":
        case "ሑ":
        case "ኁ":
        case "ኹ":
            return "hu";
        case "ሂ":
        case "ኂ":
        case "ሒ":
        case "ኺ":
            return "hi";
        case "ሄ":
        case "ሔ":
        case "ኄ":
        case "ኼ":
            return "hie";
        case "ህ":
        case "ሕ":
        case "ኅ":
        case "ኽ":
            return "h";
        case "ሆ":
        case "ሖ":
        case "ኆ":
        case "ኾ":
            return "ho";
        case "ኸ":
            return "he";
        case "ለ":
            return "le";
        case "ሉ":
            return "lu";
        case "ሊ":
            return "li";
        case "ላ":
            return "la";
        case "ሌ":
            return "lie";
        case "ል":
            return "l";
        case "ሎ":
            return "lo";
        case "ሏ":
            return "lwa";
        case "ዃ":
        case "ሗ":
        case "ኋ":
            return "hwa";
        case "መ":
            return "me";
        case "ሙ":
            return "mu";
        case "ሚ":
            return "mi";
        case "ማ":
            return "ma";
        case "ሜ":
            return "mie";
        case "ም":
            return "m";
        case "ሞ":
            return "mo";
        case "ሟ":
            return "mwa";
        case "ሠ":
        case "ሰ":
            return "se";
        case "ሡ":
        case "ሱ":
            return "su";
        case "ሢ":
        case "ሲ":
            return "si";
        case "ሣ":
        case "ሳ":
            return "sa";
        case "ሤ":
        case "ሴ":
            return "sie";
        case "ሥ":
        case "ስ":
            return "s";
        case "ሦ":
        case "ሶ":
            return "so";
        case "ሧ":
        case "ሷ":
            return "swa";
        case "ረ":
            return "re";
        case "ሩ":
            return "ru";
        case "ሪ":
            return "ri";
        case "ራ":
            return "ra";
        case "ሬ":
            return "rie";
        case "ር":
            return "r";
        case "ሮ":
            return "ro";
        case "ሯ":
            return "rwa";
        case "ሸ":
            return "śe";
        case "ሹ":
            return "śu";
        case "ሺ":
            return "śi";
        case "ሻ":
            return "śa";
        case "ሼ":
            return "śie";
        case "ሽ":
            return "ś";
        case "ሾ":
            return "śo";
        case "ሿ":
            return "śwa";
        case "ቀ":
            return "qe";
        case "ቁ":
            return "qu";
        case "ቂ":
            return "qi";
        case "ቃ":
            return "qa";
        case "ቄ":
            return "qie";
        case "ቅ":
            return "q";
        case "ቆ":
            return "qo";
        case "ቋ":
            return "qwa";
        case "በ":
            return "be";
        case "ቡ":
            return "bu";
        case "ቢ":
            return "bi";
        case "ባ":
            return "ba";
        case "ቤ":
            return "bie";
        case "ብ":
            return "b";
        case "ቦ":
            return "bo";
        case "ቧ":
            return "bwa";
        case "ቨ":
            return "ve";
        case "ቩ":
            return "vu";
        case "ቪ":
            return "vi";
        case "ቫ":
            return "va";
        case "ቬ":
            return "vie";
        case "ቭ":
            return "v";
        case "ቮ":
            return "vo";
        case "ቯ":
            return "vwa";
        case "ተ":
            return "te";
        case "ቱ":
            return "tu";
        case "ቲ":
            return "ti";
        case "ታ":
            return "ta";
        case "ቴ":
            return "tie";
        case "ት":
            return "t";
        case "ቶ":
            return "to";
        case "ቷ":
            return "twa";
        case "ቸ":
            return "će";
        case "ቹ":
            return "ću";
        case "ቺ":
            return "ći";
        case "ቻ":
            return "ća";
        case "ቼ":
            return "ćie";
        case "ች":
            return "ć";
        case "ቾ":
            return "ćo";
        case "ቿ":
            return "ćwa";
        case "ነ":
            return "ne";
        case "ኑ":
            return "nu";
        case "ኒ":
            return "ni";
        case "ና":
            return "na";
        case "ኔ":
            return "nie";
        case "ን":
            return "n";
        case "ኖ":
            return "no";
        case "ኗ":
            return "nwa";
        case "ኘ":
            return "ńe";
        case "ኙ":
            return "ńu";
        case "ኚ":
            return "ńi";
        case "ኛ":
            return "ńa";
        case "ኜ":
            return "ńie";
        case "ኝ":
            return "ń";
        case "ኞ":
            return "ńo";
        case "ኟ":
            return "ńwa";
        case "አ":
        case "ኣ":
        case "ዐ":
        case "ዓ":
            return "a";
        case "ኡ":
        case "ዑ":
            return "u";
        case "ኢ":
        case "ዒ":
            return "i";
        case "ኤ":
        case "ዔ":
            return "ie";
        case "እ":
        case "ዕ":
            return "";
        case "ኦ":
        case "ዖ":
            return "o";
        case "ከ":
            return "ke";
        case "ኩ":
            return "ku";
        case "ኪ":
            return "ki";
        case "ካ":
            return "ka";
        case "ኬ":
            return "kie";
        case "ክ":
            return "k";
        case "ኮ":
            return "ko";
        case "ኳ":
            return "kwa";
        case "ወ":
            return "we";
        case "ዉ":
            return "wu";
        case "ዊ":
            return "wi";
        case "ዋ":
            return "wa";
        case "ዌ":
            return "wie";
        case "ው":
            return "w";
        case "ዎ":
            return "wo";
        case "ዘ":
            return "ze";
        case "ዙ":
            return "zu";
        case "ዚ":
            return "zi";
        case "ዛ":
            return "za";
        case "ዜ":
            return "zie";
        case "ዝ":
            return "z";
        case "ዞ":
            return "zo";
        case "ዟ":
            return "zwa";
        case "ዠ":
            return "że";
        case "ዡ":
            return "żu";
        case "ዢ":
            return "żie";
        case "ዣ":
            return "ż";
        case "ዤ":
            return "żie";
        case "ዥ":
            return "ż";
        case "ዦ":
            return "żo";
        case "ዧ":
            return "żwa";
        case "የ":
            return "je";
        case "ዩ":
            return "ju";
        case "ዪ":
            return "ji";
        case "ያ":
            return "ja";
        case "ዬ":
            return "jie";
        case "ይ":
            return "j";
        case "ዮ":
            return "jo";
        case "ደ":
            return "de";
        case "ዱ":
            return "du";
        case "ዲ":
            return "di";
        case "ዳ":
            return "da";
        case "ዴ":
            return "die";
        case "ድ":
            return "d";
        case "ዶ":
            return "do";
        case "ዷ":
            return "dwa";
        case "ጀ":
            return "De";
        case "ጁ":
            return "Du";
        case "ጂ":
            return "Di";
        case "ጃ":
            return "Da";
        case "ጄ":
            return "Die";
        case "ጅ":
            return "D";
        case "ጆ":
            return "Do";
        case "ጇ":
            return "Dwa";
        case "ገ":
            return "ge";
        case "ጉ":
            return "gu";
        case "ጊ":
            return "gi";
        case "ጋ":
            return "ga";
        case "ጌ":
            return "gie";
        case "ግ":
            return "g";
        case "ጎ":
            return "go";
        case "ጓ":
            return "gwa";
        case "ጠ":
            return "Te";
        case "ጡ":
            return "Tu";
        case "ጢ":
            return "Ti";
        case "ጣ":
            return "Ta";
        case "ጤ":
            return "Tie";
        case "ጥ":
            return "T";
        case "ጦ":
            return "To";
        case "ጧ":
            return "Twa";
        case "ጨ":
            return "Će";
        case "ጩ":
            return "Ću";
        case "ጪ":
            return "Ći";
        case "ጫ":
            return "Ća";
        case "ጬ":
            return "Ćie";
        case "ጭ":
            return "Ć";
        case "ጮ":
            return "Ćo";
        case "ጯ":
            return "Ćwa";
        case "ጰ":
            return "Pe";
        case "ጱ":
            return "Pu";
        case "ጲ":
            return "Pi";
        case "ጳ":
            return "Pa";
        case "ጴ":
            return "Pie";
        case "ጵ":
            return "P";
        case "ጶ":
            return "Po";
        case "ጷ":
            return "Pwa";
        case "ጸ":
        case "ፀ":
            return "Ce";
        case "ጹ":
        case "ፁ":
            return "Cu";
        case "ጺ":
        case "ፂ":
            return "Ci";
        case "ጻ":
        case "ፃ":
            return "Ca";
        case "ጼ":
        case "ፄ":
            return "Cie";
        case "ጽ":
        case "ፅ":
            return "C";
        case "ጾ":
        case "ፆ":
            return "Co";
        case "ጿ":
            return "Cwa";
        case "ፈ":
            return "fe";
        case "ፉ":
            return "fu";
        case "ፊ":
            return "fi";
        case "ፋ":
            return "fa";
        case "ፌ":
            return "fie";
        case "ፍ":
            return "f";
        case "ፎ":
            return "fo";
        case "ፏ":
            return "fwa";
        case "ፐ":
            return "pe";
        case "ፑ":
            return "pu";
        case "ፒ":
            return "pi";
        case "ፓ":
            return "pa";
        case "ፔ":
            return "pie";
        case "ፕ":
            return "p";
        case "ፖ":
            return "po";
        case "ፗ":
            return "pwa";
        default:
            return "";
    }
};

export const inputToRad = (newInput: string) => {
    let newArr,
        radicals = [],
        prev,
        rT,
        hasT;

    newArr = newInput.split("");

    // Remove initial 'M'
    if (newArr[0] == "m") {
        newArr.shift();
    }
    // If 'MA' store 'A' as first radical
    if (newArr[0] == "a") {
        radicals.push(newArr[0]);
        newArr.shift();
    } else {
        newArr.shift();
    }

    // After Me/Ma next letter is a radical + gemination
    if (newArr[0] === newArr[1]) {
        radicals.push(newArr[0] + newArr[1]);
        newArr.shift();
        newArr.shift();
    } else {
        radicals.push(newArr[0]);
        newArr.shift();
    }

    // Check for vowel attached to that radical
    switch (newArr[0]) {
        case "a":
        case "e":
        case "y":
        case "u":
        case "o":
            if (radicals[0] == "a") {
                radicals[1] += newArr[0];
                newArr.shift();
            } else {
                radicals[0] += newArr[0];
                newArr.shift();
            }
            break;
        case "i":
            if (radicals[0] == "a") {
                if (newArr[1] == "e") {
                    radicals[1] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[1] += "i";
                    newArr.shift();
                }
            } else {
                if (newArr[1] == "e") {
                    radicals[0] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[0] += "i";
                    newArr.shift();
                }
            }
            break;
    }

    // Next letter is new radical
    prev = newArr[0];
    radicals.push(newArr[0]);
    newArr.shift();

    // Check for gemination
    if (newArr.length !== 0) {
        if (newArr[0] == prev) {
            radicals[1] += newArr[0];
            newArr.shift();
        }
    }

    // Check for vowel attached to that radical
    switch (newArr[0]) {
        case "a":
        case "e":
        case "y":
        case "u":
        case "o":
            radicals[1] += newArr[0];
            newArr.shift();
            break;
        case "i":
            if (radicals[0] == "a") {
                if (newArr[1] == "e") {
                    radicals[0] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[0] += "i";
                    newArr.shift();
                }
            } else {
                if (newArr[1] == "e") {
                    radicals[1] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[1] += "i";
                    newArr.shift();
                }
            }
            break;
    }

    // Next letter is a radical
    radicals.push(newArr[0]);
    newArr.shift();

    // Check for vowel attached to that radical
    switch (newArr[0]) {
        case "a":
        case "e":
        case "y":
        case "u":
        case "o":
            radicals[2] += newArr[0];
            newArr.shift();
            break;
        case "i":
            if (radicals[0] == "a") {
                if (newArr[1] == "e") {
                    radicals[0] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[0] += "i";
                    newArr.shift();
                }
            } else {
                if (newArr[1] == "e") {
                    radicals[1] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[1] += "i";
                    newArr.shift();
                }
            }
            break;
    }

    // Check for gemination
    if (newArr.length !== 0) {
        radicals.push(newArr[0]);
        newArr.shift();
    }

    for (let i = 0; i <= radicals.length; i++) {
        if (radicals[i] == undefined) {
            radicals.splice(i, 1);
        }
    }

    // Check for final -at
    if (
        // radicals[radicals.length - 2][radicals[1].length - 1] == "a" &&
        radicals[radicals.length - 1] == "t"
    ) {
        rT = true;
        hasT = true;
        radicals.pop();
    } else {
        rT = false;
        hasT = false;
    }

    if (hasT) {
        radicals.push("t");
    }

    return radicals;
};

export const identifyType = (rads: string[]) => {
    let length = hasT ? rads.length - 1 : rads.length;

    /*
      Radical numbers and types
      2 = [3, 4, 5, 6, 7, 8, 9]
      3 = [1, 2, 10, 12]
      4 = [11]
    */

    switch (rads.join("")) {
        case "gemmet":
            return 2;
        case "mot":
            return 7;
        case "amar":
            return "mamar";
        case "śat":
            return "meśat";
        case "tew":
            return "metew";
        case "mTat":
            verbTypeGlobal = "memTat";
            return 5;
        case "alet":
            verbTypeGlobal = "malet";
            return 3;
        case "śenat":
            return "meśenat";
    }

    if (length === 2) {
        if (hasT) {
            if (rads[1][0] == rads[1][1]) {
                if (rads[1][rads[1].length - 1] == "a") {
                    return 6;
                } else {
                    return 4;
                }
            } else {
                if (rads[1][rads[1].length - 1] == "a") {
                    return 5;
                } else {
                    return 3;
                }
            }
        } else {
            if (rads[0][rads[0].length - 1] == "o") {
                return 7;
            } else if (rads[0] == "a" || rads[0][rads[0].length - 1] == "a") {
                return 9;
            } else {
                return 8;
            }
        }
    } else if (length === 3) {
        if (
            (rads[0][rads[1].length - 1] == "e" || rads[0][rads[1].length - 1] == undefined) &&
            (rads[1][rads[1].length - 1] == "e" || rads[1][rads[1].length - 1] == undefined) &&
            (rads[2][rads[1].length - 1] == "e" || rads[2][rads[1].length - 1] == undefined)
        ) {
            if (rads[1][0] == rads[1][1]) {
                return 2;
            } else {
                return 1;
            }
        } else if (rads[0][1] == "a") {
            return 10;
        } else {
            return 12;
        }
    } else if (length === 4) {
        return 11;
    } else {
        return 0;
    }
};

export const toPerfectum = (input: string[], verbType: number | string) => {
    let output = "",
        firstVowel = input[0] === "a" ? "" : "e";

    switch (verbType) {
        case 1:
            output = input[0] + firstVowel + input[1][0] + input[1] + input[2] + "e";
            break;
        case 2:
            output = input[0] + input[1] + input[2] + "e";
            break;
        case 3:
            output = input[0] + firstVowel + input[1][0] + input[1];
            break;
        case 4:
        case 6:
            output = input[0] + input[1];
            break;
        case 5:
            output = input[0] + "e" + input[1][0] + input[1];
            break;
        case 7:
        case 8:
        case 9:
            output = input[0] + input[1] + "e";
            break;
        case 10:
            output = input[0] + input[1][0] + input[1] + input[2] + "e";
            break;
        case 11:
            output = input[0] + input[1] + "e" + input[2][0] + input[2] + input[3] + "e";
            break;
        case 12:
            output = input[0] + input[1] + "e" + input[2][0] + input[2];
            break;
    }

    return output;
};

export const toJussivus = (input: string[], verbType: number | string) => {
    let output = "",
        firstVowel = input[0] === "a" ? "" : "y";

    switch (verbType) {
        case 1:
            output = input[0] + firstVowel + input[1] + input[2];
            break;
        case 12:
            output = input[0] + input[1] + input[2];
            break;
        case 2:
            output = input[0] + input[1][0] + input[1][1] + "y" + input[2];
            break;
        case 3:
            output = input[0] + firstVowel + input[1][0];
            break;
        case 4:
            output = input[0][0] + firstVowel + input[1][0] + input[1][1];
            break;
        case 5:
            output = input[0] + firstVowel + input[1];
            break;
        case 6:
        case 9:
            output = input[0] + input[1];
            break;
        case 7:
            output = input[0][0] + "u" + input[1];
            break;
        case 8:
            output = input[0][0] + "i" + input[1];
            break;
        case 10:
            output = input[0] + input[1][0] + input[2];
            break;
        case 11:
            output = input[0] + input[1] + input[2][0] + "y" + input[3];
            break;
    }

    return output;
};

export const toGerundivum = (input: string[], verbType: number | string) => {
    let output = "",
        firstVowel = input[0] === "a" ? "" : "e";

    switch (verbType) {
        case 1:
            output = input[0] + firstVowel + input[1][0] + input[2] + "o";
            break;
        case 2:
        case 4:
        case 6:
            output = input[0] + input[1][0] + input[1][1] + "y" + input[2] + "o";
            break;
        case 3:
            output = input[0] + firstVowel + input[1][0] + input[2] + "o";
            break;
        case 5:
            output = input[0] + "e" + input[1][0] + input[2] + "o";
            break;
        case 7:
            output = input[0][0] + "u" + input[1] + "o";
            break;
        case 8:
            output = input[0][0] + "i" + input[1] + "o";
            break;
        case 9:
            output = input[0][0] + firstVowel + input[1] + "o";
            break;
        case 10:
            output = input[0] + input[1][0] + input[2] + "o";
            break;
        case 11:
        case 12:
            output = input[0] + input[1] + input[2][0] + "y" + input[3] + "o";
            break;
        case "malet":
            output = "byll";
    }

    return output;
};

export const toContingent = (input: string[], verbType: number | string) => {
    let output = "",
        firstVowel = input[0] === "a" ? "" : "e";

    switch (verbType) {
        case 1:
            output = input[0][0] + firstVowel + input[1][0] + input[2] + "allew";
            break;
        case 2:
            output = input[0] + input[1][0] + input[1][1] + "y" + input[2] + "allew";
            break;
        case 3:
            output = input[0][0] + firstVowel + input[1][0] + "allew";
            break;
        case 4:
            output = input[0][0] + input[1][0] + input[1][1] + "allew";
            break;
        case 5:
            output = input[0][0] + "e" + input[1] + "llew";
            break;
        case 6:
            output = input[0] + input[1] + "llew";
            break;
        case 7:
        case 8:
            output = input[0] + input[1] + "allew";
            break;
        case 9:
            output = input[0] === "a" ? input[0][0] + input[1][0] + "allew" : input[0][0] + "y" + input[1][0] + "allew";
            break;
        case 10:
            output = input[0] + input[1][0] + input[1][0] + "y" + input[2] + "allew";
            break;
        case 11:
            output = input[0] + input[1][0] + "e" + input[2][0] + input[2][0] + "y" + input[3][0] + "allew";
            break;
        case 12:
            output = input[0] + input[1][0] + "e" + input[2][0] + input[2] + "llew";
            break;
        case "malet":
            output = "l";
            break;
    }

    return output;
};

export const conjugateAllPersons = ({ perfectum, gerundivum, contingent, jussivus }: ConjugationPayload): VerbConjugation => {
    let P: string | string[] = perfectum,
        G: string | string[] = gerundivum,
        J: string | string[] = jussivus,
        C: string | string[] = contingent;

    const conjugationTable: VerbConjugation = {
        perfectum: {
            firstSingular: "",
            secondMasculineSingular: "",
            secondFeminineSingular: "",
            thirdMasculineSingular: "",
            thirdFeminineSingular: "",
            firstPlural: "",
            secondPlural: "",
            thirdPlural: "",
        },
        gerundivum: {
            firstSingular: "",
            secondMasculineSingular: "",
            secondFeminineSingular: "",
            thirdMasculineSingular: "",
            thirdFeminineSingular: "",
            firstPlural: "",
            secondPlural: "",
            thirdPlural: "",
        },
        contingent: {
            firstSingular: "",
            secondMasculineSingular: "",
            secondFeminineSingular: "",
            thirdMasculineSingular: "",
            thirdFeminineSingular: "",
            firstPlural: "",
            secondPlural: "",
            thirdPlural: "",
        },
        jussivus: {
            firstSingular: "",
            secondMasculineSingular: "",
            secondFeminineSingular: "",
            thirdMasculineSingular: "",
            thirdFeminineSingular: "",
            firstPlural: "",
            secondPlural: "",
            thirdPlural: "",
        },
        imperativus: {
            firstSingular: "",
            secondMasculineSingular: "",
            secondFeminineSingular: "",
            thirdMasculineSingular: "",
            thirdFeminineSingular: "",
            firstPlural: "",
            secondPlural: "",
            thirdPlural: "",
        },
    };

    if (P[P.length - 1] !== "a") {
        P = P.split("");
        P.pop();
        P = P.join("");
    }

    G = G.split("");
    G.pop();
    G = G.join("");

    C = C.split("allew")[0];

    console.log(P);

    // Perfectum
    if (P[P.length - 1] === "a") {
        P = P.split("");
        P.pop();
        P = P.join("");
        conjugationTable.perfectum.firstSingular = P + "ahu";
        conjugationTable.perfectum.secondMasculineSingular = P + "ah";
        conjugationTable.perfectum.secondFeminineSingular = P + "aś";
        conjugationTable.perfectum.thirdMasculineSingular = P + "e";
        conjugationTable.perfectum.thirdFeminineSingular = P + "ać";
        conjugationTable.perfectum.firstPlural = P + "an";
        conjugationTable.perfectum.secondPlural = P + "aćhu";
        conjugationTable.perfectum.thirdPlural = P + "u";
    } else {
        conjugationTable.perfectum.firstSingular = P + "hu";
        conjugationTable.perfectum.secondMasculineSingular = P + "eh";
        conjugationTable.perfectum.secondFeminineSingular = P + "eś";
        conjugationTable.perfectum.thirdMasculineSingular = P + "e";
        conjugationTable.perfectum.thirdFeminineSingular = P + "eć";
        conjugationTable.perfectum.firstPlural = P + "en";
        conjugationTable.perfectum.secondPlural = P + "aćhu";
        conjugationTable.perfectum.thirdPlural = P + "u";
    }
    // Gerundivum
    conjugationTable.gerundivum.firstSingular = G + "ie";
    conjugationTable.gerundivum.secondMasculineSingular = G + "eh";
    conjugationTable.gerundivum.secondFeminineSingular = G + "eś";
    conjugationTable.gerundivum.thirdMasculineSingular = G + "o";
    conjugationTable.gerundivum.thirdFeminineSingular = G + "a";
    conjugationTable.gerundivum.firstPlural = G + "en";
    conjugationTable.gerundivum.secondPlural = G + "aćhu";
    conjugationTable.gerundivum.thirdPlural = G + "ew";
    // Contingent
    conjugationTable.contingent.firstSingular = "y" + C + "allew";
    conjugationTable.contingent.secondMasculineSingular = "ty" + C + "alleh";
    conjugationTable.contingent.secondFeminineSingular = "ty" + C + "yalleś";
    conjugationTable.contingent.thirdMasculineSingular = "jy" + C + "al";
    conjugationTable.contingent.thirdFeminineSingular = "ty" + C + "alleć";
    conjugationTable.contingent.firstPlural = "ynny" + C + "allen";
    conjugationTable.contingent.secondPlural = "ty" + C + "alaćhu";
    conjugationTable.contingent.thirdPlural = "jy" + C + "allu";
    // Imperativus
    if (verbTypeGlobal !== "memTat") {
        if (J[J.length - 1] === "a") {
            J = J.split("");
            J.pop();
            J = J.join("");
            conjugationTable.imperativus.secondMasculineSingular = J + "a";
            conjugationTable.imperativus.secondFeminineSingular = J + "i";
            conjugationTable.imperativus.secondPlural = J + "u";
        } else {
            conjugationTable.imperativus.secondMasculineSingular = J;
            conjugationTable.imperativus.secondFeminineSingular = J + "i";
            conjugationTable.imperativus.secondPlural = J + "u";
        }
    } else {
        conjugationTable.imperativus.secondMasculineSingular = "meTna";
        conjugationTable.imperativus.secondFeminineSingular = "meTni";
        conjugationTable.imperativus.secondPlural = "meTnu";
    }
    // Jussivus
    if (verbTypeGlobal !== "malet") {
        conjugationTable.jussivus.firstSingular = "jy" + J;
        conjugationTable.jussivus.secondMasculineSingular = "ty" + J;
        conjugationTable.jussivus.secondFeminineSingular = "ly" + J;
        conjugationTable.jussivus.firstPlural = "jy" + J + "u";
        conjugationTable.jussivus.secondPlural = "ynny" + J;
    } else {
        conjugationTable.jussivus.firstSingular = "jyl";
        conjugationTable.jussivus.secondMasculineSingular = "tyl";
        conjugationTable.jussivus.secondFeminineSingular = "lyl";
        conjugationTable.jussivus.firstPlural = "jylu";
        conjugationTable.jussivus.secondPlural = "ynnyl";
    }

    return conjugationTable;
};

export const initConjugationState: VerbConjugation = {
    perfectum: {
        firstSingular: "",
        secondMasculineSingular: "",
        secondFeminineSingular: "",
        thirdMasculineSingular: "",
        thirdFeminineSingular: "",
        firstPlural: "",
        secondPlural: "",
        thirdPlural: "",
    },
    gerundivum: {
        firstSingular: "",
        secondMasculineSingular: "",
        secondFeminineSingular: "",
        thirdMasculineSingular: "",
        thirdFeminineSingular: "",
        firstPlural: "",
        secondPlural: "",
        thirdPlural: "",
    },
    contingent: {
        firstSingular: "",
        secondMasculineSingular: "",
        secondFeminineSingular: "",
        thirdMasculineSingular: "",
        thirdFeminineSingular: "",
        firstPlural: "",
        secondPlural: "",
        thirdPlural: "",
    },
    jussivus: {
        firstSingular: "",
        secondMasculineSingular: "",
        secondFeminineSingular: "",
        thirdMasculineSingular: "",
        thirdFeminineSingular: "",
        firstPlural: "",
        secondPlural: "",
        thirdPlural: "",
    },
    imperativus: {
        firstSingular: "",
        secondMasculineSingular: "",
        secondFeminineSingular: "",
        thirdMasculineSingular: "",
        thirdFeminineSingular: "",
        firstPlural: "",
        secondPlural: "",
        thirdPlural: "",
    },
};
