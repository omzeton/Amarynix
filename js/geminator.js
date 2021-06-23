// ******** DOM ******** //

const inputDOM = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const blocksArea = document.getElementById("blocks");
const submitGem = document.getElementById("gemination-submit");
const geminationArea = document.querySelector(".gemination-blocks-area");
const outputVerb = document.getElementById("output-verb");
const outPer = document.getElementById("output-perfectum");
const outJus = document.getElementById("output-jussivus");
const outGer = document.getElementById("output-gerundivum");
const outCon = document.getElementById("output-contingent");
const outputPage = document.querySelector(".output-page");

// perfectum
const perfS1 = document.getElementsByClassName("2-2")[0].firstChild;
const perfS2M = document.getElementsByClassName("2-3")[0].firstChild;
const perfS2F = document.getElementsByClassName("2-4")[0].firstChild;
const perfS3M = document.getElementsByClassName("2-5")[0].firstChild;
const perfS3F = document.getElementsByClassName("2-6")[0].firstChild;
const perfP1 = document.getElementsByClassName("2-7")[0].firstChild;
const perfP2 = document.getElementsByClassName("2-8")[0].firstChild;
const perfP3 = document.getElementsByClassName("2-9")[0].firstChild;
// gerundivum
const gerS1 = document.getElementsByClassName("3-2")[0].firstChild;
const gerS2M = document.getElementsByClassName("3-3")[0].firstChild;
const gerS2F = document.getElementsByClassName("3-4")[0].firstChild;
const gerS3M = document.getElementsByClassName("3-5")[0].firstChild;
const gerS3F = document.getElementsByClassName("3-6")[0].firstChild;
const gerP1 = document.getElementsByClassName("3-7")[0].firstChild;
const gerP2 = document.getElementsByClassName("3-8")[0].firstChild;
const gerP3 = document.getElementsByClassName("3-9")[0].firstChild;
// contingent
const contS1 = document.getElementsByClassName("4-2")[0].firstChild;
const contS2M = document.getElementsByClassName("4-3")[0].firstChild;
const contS2F = document.getElementsByClassName("4-4")[0].firstChild;
const contS3M = document.getElementsByClassName("4-5")[0].firstChild;
const contS3F = document.getElementsByClassName("4-6")[0].firstChild;
const contP1 = document.getElementsByClassName("4-7")[0].firstChild;
const contP2 = document.getElementsByClassName("4-8")[0].firstChild;
const contP3 = document.getElementsByClassName("4-9")[0].firstChild;
// imperativus
const impS2M = document.getElementsByClassName("5-3")[0].firstChild;
const impS2F = document.getElementsByClassName("5-4")[0].firstChild;
const impP2 = document.getElementsByClassName("5-8")[0].firstChild;
// jussivus
const jusS1 = document.getElementsByClassName("6-2")[0].firstChild;
const jusS3M = document.getElementsByClassName("6-5")[0].firstChild;
const jusS3F = document.getElementsByClassName("6-6")[0].firstChild;
const jusP1 = document.getElementsByClassName("6-7")[0].firstChild;
const jusP2 = document.getElementsByClassName("6-9")[0].firstChild;

let verbTypeGlobal;

/* ******** HELPER FUNCTIONS ******** */

function queryGemination(str) {
    let child = blocksArea.lastElementChild;
    if (str.length > 6 || (str[0] !== "መ" && str[0] !== "ማ")) {
        window.alert("Invalid input.");
        geminationArea.style.display = "none";
        while (child) {
            blocksArea.removeChild(child);
            child = blocksArea.lastElementChild;
        }
    } else {
        geminationArea.style.display = "block";
        while (child) {
            blocksArea.removeChild(child);
            child = blocksArea.lastElementChild;
        }
        const output = str.split("");

        for (let i = 0; i < output.length; i++) {
            const element = document.createElement("span");
            const letter = document.createTextNode(output[i]);
            element.appendChild(letter);
            element.classList.add("block");
            element.addEventListener("click", function () {
                this.classList.toggle("active");
            });
            blocksArea.appendChild(element);
        }
        return output;
    }
}

function latToConsonants(str) {
    let output = [],
        temp = "";
    for (let i = 0; i < str.length; i++) {
        temp += str[i];
        switch (str[i + 1]) {
            case "i":
                if (str[i + 2] === "e") {
                } else {
                }
                break;
            case "a":
            case "u":
            case "e":
            case "y":
            case "o":
            case str[i]:
                break;
            default:
                output.push(temp);
                temp = "";
        }
    }
    return output;
}

function amharization(str) {
    let arr = latToConsonants(str);
    let amharic = latToAm(arr);
    return amharic;
}

function latToAm(rads) {
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
                outppt += "ፑ";
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
}

function amToLat(str) {
    let output;
    switch (str) {
        case "ሀ":
        case "ሃ":
        case "ሐ":
        case "ሓ":
        case "ኀ":
        case "ኃ":
        case "ኻ":
            output = "ha";
            break;
        case "ሁ":
        case "ሑ":
        case "ኁ":
        case "ኹ":
            output = "hu";
            break;
        case "ሂ":
        case "ኂ":
        case "ሒ":
        case "ኺ":
            output = "hi";
            break;
        case "ሄ":
        case "ሔ":
        case "ኄ":
        case "ኼ":
            output = "hie";
            break;
        case "ህ":
        case "ሕ":
        case "ኅ":
        case "ኽ":
            output = "h";
            break;
        case "ሆ":
        case "ሖ":
        case "ኆ":
        case "ኾ":
            output = "ho";
            break;
        case "ኸ":
            output = "he";
            break;
        case "ለ":
            output = "le";
            break;
        case "ሉ":
            output = "lu";
            break;
        case "ሊ":
            output = "li";
            break;
        case "ላ":
            output = "la";
            break;
        case "ሌ":
            output = "lie";
            break;
        case "ል":
            output = "l";
            break;
        case "ሎ":
            output = "lo";
            break;
        case "ሏ":
            output = "lwa";
            break;
        case "ዃ":
        case "ሗ":
        case "ኋ":
            output = "hwa";
            break;
        case "መ":
            output = "me";
            break;
        case "ሙ":
            output = "mu";
            break;
        case "ሚ":
            output = "mi";
            break;
        case "ማ":
            output = "ma";
            break;
        case "ሜ":
            output = "mie";
            break;
        case "ም":
            output = "m";
            break;
        case "ሞ":
            output = "mo";
            break;
        case "ሟ":
            output = "mwa";
            break;
        case "ሠ":
        case "ሰ":
            output = "se";
            break;
        case "ሡ":
        case "ሱ":
            output = "su";
            break;
        case "ሢ":
        case "ሲ":
            output = "si";
            break;
        case "ሣ":
        case "ሳ":
            output = "sa";
            break;
        case "ሤ":
        case "ሴ":
            output = "sie";
            break;
        case "ሥ":
        case "ስ":
            output = "s";
            break;
        case "ሦ":
        case "ሶ":
            output = "so";
            break;
        case "ሧ":
        case "ሷ":
            output = "swa";
            break;
        case "ረ":
            output = "re";
            break;
        case "ሩ":
            output = "ru";
            break;
        case "ሪ":
            output = "ri";
            break;
        case "ራ":
            output = "ra";
            break;
        case "ሬ":
            output = "rie";
            break;
        case "ር":
            output = "r";
            break;
        case "ሮ":
            output = "ro";
            break;
        case "ሯ":
            output = "rwa";
            break;
        case "ሸ":
            output = "śe";
            break;
        case "ሹ":
            output = "śu";
            break;
        case "ሺ":
            output = "śi";
            break;
        case "ሻ":
            output = "śa";
            break;
        case "ሼ":
            output = "śie";
            break;
        case "ሽ":
            output = "ś";
            break;
        case "ሾ":
            output = "śo";
            break;
        case "ሿ":
            output = "śwa";
            break;
        case "ቀ":
            output = "qe";
            break;
        case "ቁ":
            output = "qu";
            break;
        case "ቂ":
            output = "qi";
            break;
        case "ቃ":
            output = "qa";
            break;
        case "ቄ":
            output = "qie";
            break;
        case "ቅ":
            output = "q";
            break;
        case "ቆ":
            output = "qo";
            break;
        case "ቋ":
            output = "qwa";
            break;
        case "በ":
            output = "be";
            break;
        case "ቡ":
            output = "bu";
            break;
        case "ቢ":
            output = "bi";
            break;
        case "ባ":
            output = "ba";
            break;
        case "ቤ":
            output = "bie";
            break;
        case "ብ":
            output = "b";
            break;
        case "ቦ":
            output = "bo";
            break;
        case "ቧ":
            output = "bwa";
            break;
        case "ቨ":
            output = "ve";
            break;
        case "ቩ":
            output = "vu";
            break;
        case "ቪ":
            output = "vi";
            break;
        case "ቫ":
            output = "va";
            break;
        case "ቬ":
            output = "vie";
            break;
        case "ቭ":
            output = "v";
            break;
        case "ቮ":
            output = "vo";
            break;
        case "ቯ":
            output = "vwa";
            break;
        case "ተ":
            output = "te";
            break;
        case "ቱ":
            output = "tu";
            break;
        case "ቲ":
            output = "ti";
            break;
        case "ታ":
            output = "ta";
            break;
        case "ቴ":
            output = "tie";
            break;
        case "ት":
            output = "t";
            break;
        case "ቶ":
            output = "to";
            break;
        case "ቷ":
            output = "twa";
            break;
        case "ቸ":
            output = "će";
            break;
        case "ቹ":
            output = "ću";
            break;
        case "ቺ":
            output = "ći";
            break;
        case "ቻ":
            output = "ća";
            break;
        case "ቼ":
            output = "ćie";
            break;
        case "ች":
            output = "ć";
            break;
        case "ቾ":
            output = "ćo";
            break;
        case "ቿ":
            output = "ćwa";
            break;
        case "ነ":
            output = "ne";
            break;
        case "ኑ":
            output = "nu";
            break;
        case "ኒ":
            output = "ni";
            break;
        case "ና":
            output = "na";
            break;
        case "ኔ":
            output = "nie";
            break;
        case "ን":
            output = "n";
            break;
        case "ኖ":
            output = "no";
            break;
        case "ኗ":
            output = "nwa";
            break;
        case "ኘ":
            output = "ńe";
            break;
        case "ኙ":
            output = "ńu";
            break;
        case "ኚ":
            output = "ńi";
            break;
        case "ኛ":
            output = "ńa";
            break;
        case "ኜ":
            output = "ńie";
            break;
        case "ኝ":
            output = "ń";
            break;
        case "ኞ":
            output = "ńo";
            break;
        case "ኟ":
            output = "ńwa";
            break;
        case "አ":
        case "ኣ":
        case "ዐ":
        case "ዓ":
            output = "a";
            break;
        case "ኡ":
        case "ዑ":
            output = "u";
            break;
        case "ኢ":
        case "ዒ":
            output = "i";
            break;
        case "ኤ":
        case "ዔ":
            output = "ie";
            break;
        case "እ":
        case "ዕ":
            output = "";
            break;
        case "ኦ":
        case "ዖ":
            output = "o";
            break;
        case "ከ":
            output = "ke";
            break;
        case "ኩ":
            output = "ku";
            break;
        case "ኪ":
            output = "ki";
            break;
        case "ካ":
            output = "ka";
            break;
        case "ኬ":
            output = "kie";
            break;
        case "ክ":
            output = "k";
            break;
        case "ኮ":
            output = "ko";
            break;
        case "ኳ":
            output = "kwa";
            break;
        case "ወ":
            output = "we";
            break;
        case "ዉ":
            output = "wu";
            break;
        case "ዊ":
            output = "wi";
            break;
        case "ዋ":
            output = "wa";
            break;
        case "ዌ":
            output = "wie";
            break;
        case "ው":
            output = "w";
            break;
        case "ዎ":
            output = "wo";
            break;
        case "ዘ":
            output = "ze";
            break;
        case "ዙ":
            output = "zu";
            break;
        case "ዚ":
            output = "zi";
            break;
        case "ዛ":
            output = "za";
            break;
        case "ዜ":
            output = "zie";
            break;
        case "ዝ":
            output = "z";
            break;
        case "ዞ":
            output = "zo";
            break;
        case "ዟ":
            output = "zwa";
            break;
        case "ዠ":
            output = "że";
            break;
        case "ዡ":
            output = "żu";
            break;
        case "ዢ":
            output = "żie";
            break;
        case "ዣ":
            output = "ż";
            break;
        case "ዤ":
            output = "żie";
            break;
        case "ዥ":
            output = "ż";
            break;
        case "ዦ":
            output = "żo";
            break;
        case "ዧ":
            output = "żwa";
            break;
        case "የ":
            output = "je";
            break;
        case "ዩ":
            output = "ju";
            break;
        case "ዪ":
            output = "ji";
            break;
        case "ያ":
            output = "ja";
            break;
        case "ዬ":
            output = "jie";
            break;
        case "ይ":
            output = "j";
            break;
        case "ዮ":
            output = "jo";
            break;
        case "ደ":
            output = "de";
            break;
        case "ዱ":
            output = "du";
            break;
        case "ዲ":
            output = "di";
            break;
        case "ዳ":
            output = "da";
            break;
        case "ዴ":
            output = "die";
            break;
        case "ድ":
            output = "d";
            break;
        case "ዶ":
            output = "do";
            break;
        case "ዷ":
            output = "dwa";
            break;
        case "ጀ":
            output = "De";
            break;
        case "ጁ":
            output = "Du";
            break;
        case "ጂ":
            output = "Di";
            break;
        case "ጃ":
            output = "Da";
            break;
        case "ጄ":
            output = "Die";
            break;
        case "ጅ":
            output = "D";
            break;
        case "ጆ":
            output = "Do";
            break;
        case "ጇ":
            output = "Dwa";
            break;
        case "ገ":
            output = "ge";
            break;
        case "ጉ":
            output = "gu";
            break;
        case "ጊ":
            output = "gi";
            break;
        case "ጋ":
            output = "ga";
            break;
        case "ጌ":
            output = "gie";
            break;
        case "ግ":
            output = "g";
            break;
        case "ጎ":
            output = "go";
            break;
        case "ጓ":
            output = "gwa";
            break;
        case "ጠ":
            output = "Te";
            break;
        case "ጡ":
            output = "Tu";
            break;
        case "ጢ":
            output = "Ti";
            break;
        case "ጣ":
            output = "Ta";
            break;
        case "ጤ":
            output = "Tie";
            break;
        case "ጥ":
            output = "T";
            break;
        case "ጦ":
            output = "To";
            break;
        case "ጧ":
            output = "Twa";
            break;
        case "ጨ":
            output = "Će";
            break;
        case "ጩ":
            output = "Ću";
            break;
        case "ጪ":
            output = "Ći";
            break;
        case "ጫ":
            output = "Ća";
            break;
        case "ጬ":
            output = "Ćie";
            break;
        case "ጭ":
            output = "Ć";
            break;
        case "ጮ":
            output = "Ćo";
            break;
        case "ጯ":
            output = "Ćwa";
            break;
        case "ጰ":
            output = "Pe";
            break;
        case "ጱ":
            output = "Pu";
            break;
        case "ጲ":
            output = "Pi";
            break;
        case "ጳ":
            output = "Pa";
            break;
        case "ጴ":
            output = "Pie";
            break;
        case "ጵ":
            output = "P";
            break;
        case "ጶ":
            output = "Po";
            break;
        case "ጷ":
            output = "Pwa";
            break;
        case "ጸ":
        case "ፀ":
            output = "Ce";
            break;
        case "ጹ":
        case "ፁ":
            output = "Cu";
            break;
        case "ጺ":
        case "ፂ":
            output = "Ci";
            break;
        case "ጻ":
        case "ፃ":
            output = "Ca";
            break;
        case "ጼ":
        case "ፄ":
            output = "Cie";
            break;
        case "ጽ":
        case "ፅ":
            output = "C";
            break;
        case "ጾ":
        case "ፆ":
            output = "Co";
            break;
        case "ጿ":
            output = "Cwa";
            break;
        case "ፈ":
            output = "fe";
            break;
        case "ፉ":
            output = "fu";
            break;
        case "ፊ":
            output = "fi";
            break;
        case "ፋ":
            output = "fa";
            break;
        case "ፌ":
            output = "fie";
            break;
        case "ፍ":
            output = "f";
            break;
        case "ፎ":
            output = "fo";
            break;
        case "ፏ":
            output = "fwa";
            break;
        case "ፐ":
            output = "pe";
            break;
        case "ፑ":
            output = "pu";
            break;
        case "ፒ":
            output = "pi";
            break;
        case "ፓ":
            output = "pa";
            break;
        case "ፔ":
            output = "pie";
            break;
        case "ፕ":
            output = "p";
            break;
        case "ፖ":
            output = "po";
            break;
        case "ፗ":
            output = "pwa";
            break;
    }
    return output;
}

function inputToRad(newInput, all) {
    let newArr,
        radicals = [],
        prev,
        rT;

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
                    newArr.shit();
                }
            } else {
                if (newArr[1] == "e") {
                    radicals[0] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[0] += "i";
                    newArr.shit();
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
                    newArr.shit();
                }
            } else {
                if (newArr[1] == "e") {
                    radicals[1] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[1] += "i";
                    newArr.shit();
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
                    newArr.shit();
                }
            } else {
                if (newArr[1] == "e") {
                    radicals[1] += "ie";
                    newArr.shift();
                    newArr.shift();
                } else {
                    radicals[1] += "i";
                    newArr.shit();
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

    console.log({ radicals });

    return radicals;
}

function identifyType(rads) {
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
    }
}

/* ******** CONJUGATIONS ******** */
/* PERFECTUM */

function toPerfectum(input, verbType) {
    let output,
        firstVowel = input[0] === "a" ? "" : "e";

    console.log(verbType);

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
}

/* JUSSIVUS */

function toJussivus(input, verbType) {
    let output,
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
}

/* GERUNDIVUM */

function toGerundivum(input, verbType) {
    let output,
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
}

/* CONTINGENT */

function toContingent(input, verbType) {
    let output,
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
}

function conjugateAllPersons(p, j, g, c) {
    let P = p,
        G = g,
        J = j,
        C = c;

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
        perfS1.innerHTML = P + "ahu";
        perfS2M.innerHTML = P + "ah";
        perfS2F.innerHTML = P + "aś";
        perfS3M.innerHTML = P + "e";
        perfS3F.innerHTML = P + "ać";
        perfP1.innerHTML = P + "an";
        perfP2.innerHTML = P + "aćhu";
        perfP3.innerHTML = P + "u";
    } else {
        perfS1.innerHTML = P + "hu";
        perfS2M.innerHTML = P + "eh";
        perfS2F.innerHTML = P + "eś";
        perfS3M.innerHTML = P + "e";
        perfS3F.innerHTML = P + "eć";
        perfP1.innerHTML = P + "en";
        perfP2.innerHTML = P + "aćhu";
        perfP3.innerHTML = P + "u";
    }
    // Gerundivum
    gerS1.innerHTML = G + "ie";
    gerS2M.innerHTML = G + "eh";
    gerS2F.innerHTML = G + "eś";
    gerS3M.innerHTML = G + "o";
    gerS3F.innerHTML = G + "a";
    gerP1.innerHTML = G + "en";
    gerP2.innerHTML = G + "aćhu";
    gerP3.innerHTML = G + "ew";
    // Contingent
    contS1.innerHTML = "y" + C + "allew";
    contS2M.innerHTML = "ty" + C + "alleh";
    contS2F.innerHTML = "ty" + C + "yalleś";
    contS3M.innerHTML = "jy" + C + "al";
    contS3F.innerHTML = "ty" + C + "alleć";
    contP1.innerHTML = "ynny" + C + "allen";
    contP2.innerHTML = "ty" + C + "alaćhu";
    contP3.innerHTML = "jy" + C + "allu";
    // Imperativus
    if (verbTypeGlobal !== "memTat") {
        if (J[J.length - 1] === "a") {
            J = J.split("");
            J.pop();
            J = J.join("");
            impS2M.innerHTML = J + "a";
            impS2F.innerHTML = J + "i";
            impP2.innerHTML = J + "u";
        } else {
            impS2M.innerHTML = J;
            impS2F.innerHTML = J + "i";
            impP2.innerHTML = J + "u";
        }
    } else {
        impS2M.innerHTML = "meTna";
        impS2F.innerHTML = "meTni";
        impP2.innerHTML = "meTnu";
    }
    // Jussivus
    if (verbTypeGlobal !== "malet") {
        jusS1.innerHTML = "jy" + J;
        jusS3M.innerHTML = "ty" + J;
        jusS3F.innerHTML = "ly" + J;
        jusP1.innerHTML = "jy" + J + "u";
        jusP2.innerHTML = "ynny" + J;
    } else {
        jusS1.innerHTML = "jyl";
        jusS3M.innerHTML = "tyl";
        jusS3F.innerHTML = "lyl";
        jusP1.innerHTML = "jylu";
        jusP2.innerHTML = "ynnyl";
    }
}

function conjugate(newInput) {
    console.log({ newInput });
    outputPage.style.display = "flex";

    // Latin to Amharic transition
    outputVerb.innerHTML = newInput;

    let arr = latToConsonants(newInput);
    let amharic = latToAm(arr);
    console.log(amharic);

    let inputRads = inputToRad(newInput);
    let type = identifyType(inputRads);

    let perfectum = toPerfectum(inputRads, type);
    let jussivus = toJussivus(inputRads, type);
    let gerundivum = toGerundivum(inputRads, type);
    let contingent = toContingent(inputRads, type);

    conjugateAllPersons(perfectum, jussivus, gerundivum, contingent);

    outPer.innerHTML = perfectum;
    outJus.innerHTML = jussivus;
    outGer.innerHTML = gerundivum;
    outCon.innerHTML = contingent;
}

let alpha = "lat",
    outGlob;

function switchAlphabets() {
    if (alpha === "lat") {
        alpha = "am";
        outputVerb.innerHTML = amharization(outputVerb.innerHTML);
        outPer.innerHTML = amharization(outPer.innerHTML);
        outJus.innerHTML = amharization(outJus.innerHTML);
        outGer.innerHTML = amharization(outGer.innerHTML);
        outCon.innerHTML = amharization(outCon.innerHTML);
        perfS1.innerHTML = amharization(perfS1.innerHTML);
        perfS2M.innerHTML = amharization(perfS2M.innerHTML);
        perfS2F.innerHTML = amharization(perfS2F.innerHTML);
        perfS3M.innerHTML = amharization(perfS3M.innerHTML);
        perfS3F.innerHTML = amharization(perfS3F.innerHTML);
        perfP1.innerHTML = amharization(perfP1.innerHTML);
        perfP2.innerHTML = amharization(perfP2.innerHTML);
        perfP3.innerHTML = amharization(perfP3.innerHTML);
        gerS1.innerHTML = amharization(gerS1.innerHTML);
        gerS2M.innerHTML = amharization(gerS2M.innerHTML);
        gerS2F.innerHTML = amharization(gerS2F.innerHTML);
        gerS3M.innerHTML = amharization(gerS3M.innerHTML);
        gerS3F.innerHTML = amharization(gerS3F.innerHTML);
        gerP1.innerHTML = amharization(gerP1.innerHTML);
        gerP2.innerHTML = amharization(gerP2.innerHTML);
        gerP3.innerHTML = amharization(gerP3.innerHTML);
        contS1.innerHTML = amharization(contS1.innerHTML);
        contS2M.innerHTML = amharization(contS2M.innerHTML);
        contS2F.innerHTML = amharization(contS2F.innerHTML);
        contS3M.innerHTML = amharization(contS3M.innerHTML);
        contS3F.innerHTML = amharization(contS3F.innerHTML);
        contP1.innerHTML = amharization(contP1.innerHTML);
        contP2.innerHTML = amharization(contP2.innerHTML);
        contP3.innerHTML = amharization(contP3.innerHTML);
        impS2M.innerHTML = amharization(impS2M.innerHTML);
        impS2F.innerHTML = amharization(impS2F.innerHTML);
        impP2.innerHTML = amharization(impP2.innerHTML);
        jusS1.innerHTML = amharization(jusS1.innerHTML);
        jusS3M.innerHTML = amharization(jusS3M.innerHTML);
        jusS3F.innerHTML = amharization(jusS3F.innerHTML);
        jusP1.innerHTML = amharization(jusP1.innerHTML);
        jusP2.innerHTML = amharization(jusP2.innerHTML);
    } else {
        alpha = "lat";
        conjugate(outGlob);
    }
}

// ******** EVENT LISTENERS ******** //

submitGem.addEventListener("click", function () {
    const block = document.getElementById("blocks").childNodes;
    let output = "";

    for (let i = 0; i < block.length; i++) {
        let letter = amToLat(block[i].innerHTML);
        if (block[i].classList.contains("active")) {
            output += letter[0];
            output += letter;
        } else {
            output += letter;
        }
    }
    outGlob = output;
    conjugate(output);
});

submitBtn.addEventListener("click", () => {
    queryGemination(inputDOM.value.toString());
});

window.addEventListener("keydown", e => {
    if (13 == e.keyCode) {
        let d;
        queryGemination(inputDOM.value.toString());
    }
});
