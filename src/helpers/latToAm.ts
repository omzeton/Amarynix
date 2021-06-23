export const latToAm = (rads: string[]): string => {
    let output = "";
    for (let i = 0; i < rads.length; i++) {
        let rad = rads[i];
        if (rad[0] === rad[1]) {
            rad = rad.slice(1);
        }
        switch (rad) {
            case "a":
                output += "አ";
                break;
            case "u":
                output += "ኡ";
                break;
            case "i":
                output += "ኢ";
                break;
            case "ie":
                output += "ኤ";
                break;
            case "y":
                output += "እ";
                break;
            case "o":
                output += "ኦ";
                break;

            case "ha":
                output += "ሀ";
                break;
            case "hu":
                output += "ሁ";
                break;
            case "hi":
                output += "ሂ";
                break;
            case "hie":
                output += "ሄ";
                break;
            case "hy":
            case "h":
                output += "ህ";
                break;
            case "ho":
                output += "ሆ";
                break;

            case "le":
                output += "ለ";
                break;
            case "lu":
                output += "ሉ";
                break;
            case "li":
                output += "ሊ";
                break;
            case "la":
                output += "ላ";
                break;
            case "lie":
                output += "ሌ";
                break;
            case "ly":
            case "l":
                output += "ል";
                break;
            case "lo":
                output += "ሎ";
                break;
            case "lwa":
                output += "ሏ";
                break;

            case "me":
                output += "መ";
                break;
            case "mu":
                output += "ሙ";
                break;
            case "mi":
                output += "ሚ";
                break;
            case "ma":
                output += "ማ";
                break;
            case "mie":
                output += "ሜ";
                break;
            case "my":
            case "m":
                output += "ም";
                break;
            case "mo":
                output += "ሞ";
                break;
            case "mwa":
                output += "ሟ";
                break;

            case "re":
                output += "ረ";
                break;
            case "ru":
                output += "ሩ";
                break;
            case "ri":
                output += "ሪ";
                break;
            case "ra":
                output += "ራ";
                break;
            case "rie":
                output += "ሬ";
                break;
            case "ry":
            case "r":
                output += "ር";
                break;
            case "ro":
                output += "ሮ";
                break;
            case "rwa":
                output += "ሯ";
                break;

            case "se":
                output += "ሰ";
                break;
            case "su":
                output += "ሱ";
                break;
            case "si":
                output += "ሲ";
                break;
            case "sa":
                output += "ሳ";
                break;
            case "sie":
                output += "ሴ";
                break;
            case "sy":
            case "s":
                output += "ስ";
                break;
            case "so":
                output += "ሶ";
                break;
            case "swa":
                output += "ሷ";
                break;

            case "śe":
                output += "ሸ";
                break;
            case "śu":
                output += "ሹ";
                break;
            case "śi":
                output += "ሺ";
                break;
            case "śa":
                output += "ሻ";
                break;
            case "śie":
                output += "ሼ";
                break;
            case "śy":
            case "ś":
                output += "ሽ";
                break;
            case "śo":
                output += "ሾ";
                break;
            case "śwa":
                output += "ሿ";

            case "qe":
                output += "ቀ";
                break;
            case "qu":
                output += "ቁ";
                break;
            case "qi":
                output += "ቂ";
                break;
            case "qa":
                output += "ቃ";
                break;
            case "qie":
                output += "ቄ";
                break;
            case "qy":
                output += "ቅ";
                break;
            case "qo":
                output += "ቆ";
                break;
            case "qwa":
                output += "ቋ";
                break;

            case "be":
                output += "በ";
                break;
            case "bu":
                output += "ቡ";
                break;
            case "bi":
                output += "ቢ";
                break;
            case "ba":
                output += "ባ";
                break;
            case "bie":
                output += "ቤ";
                break;
            case "by":
            case "b":
                output += "ብ";
                break;
            case "bo":
                output += "ቦ";
                break;
            case "bwa":
                output += "ቧ";
                break;

            case "ve":
                output += "ቨ";
                break;
            case "vu":
                output += "ቩ";
                break;
            case "vi":
                output += "ቪ";
                break;
            case "va":
                output += "ቫ";
                break;
            case "vie":
                output += "ቬ";
                break;
            case "vy":
            case "v":
                output += "ቭ";
                break;
            case "vo":
                output += "ቮ";
                break;
            case "vwa":
                output += "ቯ";
                break;

            case "te":
                output += "ተ";
                break;
            case "tu":
                output += "ቱ";
                break;
            case "ti":
                output += "ቲ";
                break;
            case "ta":
                output += "ታ";
                break;
            case "tie":
                output += "ቴ";
                break;
            case "ty":
            case "t":
                output += "ት";
                break;
            case "to":
                output += "ቶ";
                break;
            case "twa":
                output += "ቷ";
                break;

            case "će":
                output += "ቸ";
                break;
            case "ću":
                output += "ቹ";
                break;
            case "ći":
                output += "ቺ";
                break;
            case "ća":
                output += "ቻ";
                break;
            case "ćie":
                output += "ቼ";
                break;
            case "ćy":
            case "ć":
                output += "ች";
                break;
            case "ćo":
                output += "ቾ";
                break;
            case "ćwa":
                output += "ቿ";
                break;

            case "ne":
                output += "ነ";
                break;
            case "nu":
                output += "ኑ";
                break;
            case "ni":
                output += "ኒ";
                break;
            case "na":
                output += "ና";
                break;
            case "nie":
                output += "ኔ";
                break;
            case "ny":
            case "n":
                output += "ን";
                break;
            case "no":
                output += "ኖ";
                break;
            case "nwa":
                output += "ኗ";
                break;

            case "ńe":
                output += "ኘ";
                break;
            case "ńu":
                output += "ኙ";
                break;
            case "ńi":
                output += "ኚ";
                break;
            case "ńa":
                output += "ኛ";
                break;
            case "ńie":
                output += "ኜ";
                break;
            case "ńy":
            case "ń":
                output += "ኝ";
                break;
            case "ńo":
                output += "ኞ";
                break;
            case "ńwa":
                output += "ኟ";
                break;

            case "ke":
                output += "ከ";
                break;
            case "ku":
                output += "ኩ";
                break;
            case "ki":
                output += "ኪ";
                break;
            case "ka":
                output += "ካ";
                break;
            case "kie":
                output += "ኬ";
                break;
            case "ky":
            case "k":
                output += "ክ";
                break;
            case "ko":
                output += "ኮ";
                break;
            case "kwa":
                output += "ኳ";
                break;

            case "we":
                output += "ወ";
                break;
            case "wu":
                output += "ዉ";
                break;
            case "wi":
                output += "ዊ";
                break;
            case "wa":
                output += "ዋ";
                break;
            case "wie":
                output += "ዌ";
                break;
            case "wy":
            case "w":
                output += "ው";
                break;
            case "wo":
                output += "ዎ";
                break;

            case "ze":
                output += "ዘ";
                break;
            case "zu":
                output += "ዙ";
                break;
            case "zi":
                output += "ዚ";
                break;
            case "za":
                output += "ዛ";
                break;
            case "zie":
                output += "ዜ";
                break;
            case "zy":
                output += "ዝ";
                break;
            case "zo":
                output += "ዞ";
                break;
            case "zwa":
                output += "ዟ";
                break;

            case "że":
                output += "ዠ";
                break;
            case "żu":
                output += "ዡ";
                break;
            case "żi":
                output += "ዢ";
                break;
            case "ża":
                output += "ዣ";
                break;
            case "żie":
                output += "ዤ";
                break;
            case "ży":
            case "ż":
                output += "ዥ";
                break;
            case "żo":
                output += "ዦ";
                break;
            case "żwa":
                output += "ዧ";
                break;

            case "je":
                output += "የ";
                break;
            case "ju":
                output += "ዩ";
                break;
            case "ji":
                output += "ዪ";
                break;
            case "ja":
                output += "ያ";
                break;
            case "jie":
                output += "ዬ";
                break;
            case "jy":
            case "j":
                output += "ይ";
                break;
            case "jo":
                output += "ዮ";
                break;

            case "de":
                output += "ደ";
                break;
            case "du":
                output += "ዱ";
                break;
            case "di":
                output += "ዲ";
                break;
            case "da":
                output += "ዳ";
                break;
            case "die":
                output += "ዴ";
                break;
            case "dy":
            case "d":
                output += "ድ";
                break;
            case "do":
                output += "ዶ";
                break;
            case "dwa":
                output += "ዷ";

            case "De":
                output += "ጀ";
                break;
            case "Du":
                output += "ጁ";
                break;
            case "Di":
                output += "ጂ";
                break;
            case "Da":
                output += "ጃ";
                break;
            case "Die":
                output += "ጄ";
                break;
            case "Dy":
            case "D":
                output += "ጅ";
                break;
            case "Do":
                output += "ጆ";
                break;
            case "Dwa":
                output += "ጇ";
                break;

            case "ge":
                output += "ገ";
                break;
            case "gu":
                output += "ጉ";
                break;
            case "gi":
                output += "ጊ";
                break;
            case "ga":
                output += "ጋ";
                break;
            case "gie":
                output += "ጌ";
                break;
            case "gy":
            case "g":
                output += "ግ";
                break;
            case "go":
                output += "ጎ";
                break;
            case "gwa":
                output += "ጓ";

            case "Te":
                output += "ጠ";
                break;
            case "Tu":
                output += "ጡ";
                break;
            case "Ti":
                output += "ጢ";
                break;
            case "Ta":
                output += "ጣ";
                break;
            case "Tie":
                output += "ጤ";
                break;
            case "Ty":
            case "T":
                output += "ጥ";
                break;
            case "To":
                output += "ጦ";
                break;
            case "Twa":
                output += "ጧ";
                break;

            case "Će":
                output += "ጨ";
                break;
            case "Ću":
                output += "ጩ";
                break;
            case "Ći":
                output += "ጪ";
                break;
            case "Ća":
                output += "ጫ";
                break;
            case "Ćie":
                output += "ጬ";
                break;
            case "Ćy":
            case "Ć":
                output += "ጭ";
                break;
            case "Ćo":
                output += "ጮ";
                break;
            case "Ćwa":
                output += "ጯ";
                break;

            case "Pe":
                output += "ጰ";
                break;
            case "Pu":
                output += "ጱ";
                break;
            case "Pi":
                output += "ጲ";
                break;
            case "Pa":
                output += "ጳ";
                break;
            case "Pie":
                output += "ጴ";
                break;
            case "Py":
            case "P":
                output += "ጵ";
                break;
            case "Po":
                output += "ጶ";
                break;
            case "Pwa":
                output += "ጷ";
                break;

            case "Ce":
                output += "ጸ";
                break;
            case "Cu":
                output += "ጹ";
                break;
            case "Ci":
                output += "ጺ";
                break;
            case "Ca":
                output += "ጻ";
                break;
            case "Cie":
                output += "ጼ";
                break;
            case "Cy":
            case "C":
                output += "ጽ";
                break;
            case "Co":
                output += "ጾ";
                break;
            case "Cwa":
                output += "ጿ";
                break;

            case "fe":
                output += "ፈ";
                break;
            case "fu":
                output += "ፉ";
                break;
            case "fi":
                output += "ፊ";
                break;
            case "fa":
                output += "ፋ";
                break;
            case "fie":
                output += "ፌ";
                break;
            case "fy":
            case "f":
                output += "ፍ";
                break;
            case "fo":
                output += "ፎ";
                break;
            case "fwa":
                output += "ፏ";
                break;

            case "pe":
                output += "ፐ";
                break;
            case "pu":
                output += "ፑ";
                break;
            case "pi":
                output += "ፒ";
                break;
            case "pa":
                output += "ፓ";
                break;
            case "pie":
                output += "ኡ";
                break;
            case "py":
            case "p":
                output += "ፕ";
                break;
            case "po":
                output += "ፖ";
                break;
            case "pwa":
                output += "ፗ";
                break;
        }
    }
    return output;
};
