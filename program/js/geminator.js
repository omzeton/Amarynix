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

function queryGemination(str) {
  geminationArea.style.display = "block";
  let child = blocksArea.lastElementChild;
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
    element.addEventListener("click", function() {
      this.classList.toggle("active");
    });
    blocksArea.appendChild(element);
  }
  return output;
}

function amToLat(str) {
    let output;
    switch (str) {case "ሀ":case "ሃ":case "ሐ":case "ሓ":case "ኀ":case "ኃ":case "ኻ":output = "ha";break;case "ሁ":case "ሑ":case "ኁ":case "ኹ":output = "hu";break;case "ሂ":case "ኂ":case "ሒ":case "ኺ":output = "hi";break;case "ሄ":case "ሔ":case "ኄ":case "ኼ":output = "hie";break;case "ህ":case "ሕ":case "ኅ":case "ኽ":output = "h";break;case "ሆ":case "ሖ":case "ኆ":case "ኾ":output = "ho";break;case "ኸ":output = "he";break;case "ለ":output = "le";break;case "ሉ":output = "lu";break;case "ሊ":output = "li";break;case "ላ":output = "la";break;case "ሌ":output = "lie";break;case "ል":output = "l";break;case "ሎ":output = "lo";break;case "ሏ":output = "lwa";break;case "ዃ":case "ሗ":case "ኋ":output = "hwa";break;case "መ":output = "me";break;case "ሙ":output = "mu";break;case "ሚ":output = "mi";break;case "ማ":output = "ma";break;case "ሜ":output = "mie";break;case "ም":output = "m";break;case "ሞ":output = "mo";break;case "ሟ":output = "mwa";break;case "ሠ":case "ሰ":output = "se";break;case "ሡ":case "ሱ":output = "su";break;case "ሢ":case "ሲ":output = "si";break;case "ሣ":case "ሳ":output = "sa";break;case "ሤ":case "ሴ":output = "sie";break;case "ሥ":case "ስ":output = "s";break;case "ሦ":case "ሶ":output = "so";break;case "ሧ":case "ሷ":output = "swa";break;case "ረ":output = "re";break;case "ሩ":output = "ru";break;case "ሪ":output = "ri";break;case "ራ":output = "ra";break;case "ሬ":output = "rie";break;case "ር":output = "r";break;case "ሮ":output = "ro";break;case "ሯ":output = "rwa";break;case "ሸ":output = "śe";break;case "ሹ":output = "śu";break;case "ሺ":output = "śi";break;case "ሻ":output = "śa";break;case "ሼ":output = "śie";break;case "ሽ":output = "ś";break;case "ሾ":output = "śo";break;case "ሿ":output = "śwa";break;case "ቀ":output = "qe";break;case "ቁ":output = "qu";break;case "ቂ":output = "qi";break;case "ቃ":output = "qa";break;case "ቄ":output = "qie";break;case "ቅ":output = "q";break;case "ቆ":output = "qo";break;case "ቋ":output = "qwa";break;case "በ":output = "be";break;case "ቡ":output = "bu";break;case "ቢ":output = "bi";break;case "ባ":output = "ba";break;case "ቤ":output = "bie";break;case "ብ":output = "b";break;case "ቦ":output = "bo";break;case "ቧ":output = "bwa";break;case "ቨ":output = "ve";break;case "ቩ":output = "vu";break;case "ቪ":output = "vi";break;case "ቫ":output = "va";break;case "ቬ":output = "vie";break;case "ቭ":output = "v";break;case "ቮ":output = "vo";break;case "ቯ":output = "vwa";break;case "ተ":output = "te";break;case "ቱ":output = "tu";break;case "ቲ":output = "ti";break;case "ታ":output = "ta";break;case "ቴ":output = "tie";break;case "ት":output = "t";break;case "ቶ":output = "to";break;case "ቷ":output = "twa";break;case "ቸ":output = "će";break;case "ቹ":output = "ću";break;case "ቺ":output = "ći";break;case "ቻ":output = "ća";break;case "ቼ":output = "ćie";break;case "ች":output = "ć";break;case "ቾ":output = "ćo";break;case "ቿ":output = "ćwa";break;case "ነ":output = "ne";break;case "ኑ":output = "nu";break;case "ኒ":output = "ni";break;case "ና":output = "na";break;case "ኔ":output = "nie";break;case "ን":output = "n";break;case "ኖ":output = "no";break;case "ኗ":output = "nwa";break;case "ኘ":output = "ńe";break;case "ኙ":output = "ńu";break;case "ኚ":output = "ńi";break;case "ኛ":output = "ńa";break;case "ኜ":output = "ńie";break;case "ኝ":output = "ń";break;case "ኞ":output = "ńo";break;case "ኟ":output = "ńwa";break;case "አ":case "ኣ":case "ዐ":case "ዓ":output = "a";break;case "ኡ":case "ዑ":output = "u";break;case "ኢ":case "ዒ":output = "i";break;case "ኤ":case "ዔ":output = "ie";break;case "እ":case "ዕ":output = "";break;case "ኦ":case "ዖ":output = "o";break;case "ከ":output = "ke";break;case "ኩ":output = "ku";break;case "ኪ":output = "ki";break;case "ካ":output = "ka";break;case "ኬ":output = "kie";break;case "ክ":output = "k";break;case "ኮ":output = "ko";break;case "ኳ":output = "kwa";break;case "ወ":output = "we";break;case "ዉ":output = "wu";break;case "ዊ":output = "wi";break;case "ዋ":output = "wa";break;case "ዌ":output = "wie";break;case "ው":output = "w";break;case "ዎ":output = "wo";break;case "ዘ":output = "ze";break;case "ዙ":output = "zu";break;case "ዚ":output = "zi";break;case "ዛ":output = "za";break;case "ዜ":output = "zie";break;case "ዝ":output = "z";break;case "ዞ":output = "zo";break;case "ዟ":output = "zwa";break;case "ዠ":output = "że";break;case "ዡ":output = "żu";break;case "ዢ":output = "żie";break;case "ዣ":output = "ż";break;case "ዤ":output = "żie";break;case "ዥ":output = "ż";break;case "ዦ":output = "żo";break;case "ዧ":output = "żwa";break;case "የ":output = "je";break;case "ዩ":output = "ju";break;case "ዪ":output = "ji";break;case "ያ":output = "ja";break;case "ዬ":output = "jie";break;case "ይ":output = "j";break;case "ዮ":output = "jo";break;case "ደ":output = "de";break;case "ዱ":output = "du";break;case "ዲ":output = "di";break;case "ዳ":output = "da";break;case "ዴ":output = "die";break;case "ድ":output = "f";break;case "ዶ":output = "do";break;case "ዷ":output = "dwa";break;case "ጀ":output = "dźe";break;case "ጁ":output = "dźu";break;case "ጂ":output = "dźi";break;case "ጃ":output = "dźa";break;case "ጄ":output = "dźie";break;case "ጅ":output = "dź";break;case "ጆ":output = "dźo";break;case "ጇ":output = "dźwa";break;case "ገ":output = "ge";break;case "ጉ":output = "gu";break;case "ጊ":output = "gi";break;case "ጋ":output = "ga";break;case "ጌ":output = "gie";break;case "ግ":output = "g";break;case "ጎ":output = "go";break;case "ጓ":output = "gwa";break;case "ጠ":output = "Te";break;case "ጡ":output = "Tu";break;case "ጢ":output = "Ti";break;case "ጣ":output = "Ta";break;case "ጤ":output = "Tie";break;case "ጥ":output = "T";break;case "ጦ":output = "To";break;case "ጧ":output = "Twa";break;case "ጨ":output = "Će";break;case "ጩ":output = "Ću";break;case "ጪ":output = "Ći";break;case "ጫ":output = "Ća";break;case "ጬ":output = "Ćie";break;case "ጭ":output = "Ć";break;case "ጮ":output = "Ćo";break;case "ጯ":output = "Ćwa";break;case "ጰ":output = "Pe";break;case "ጱ":output = "Pu";break;case "ጲ":output = "Pi";break;case "ጳ":output = "Pa";break;case "ጴ":output = "Pie";break;case "ጵ":output = "P";break;case "ጶ":output = "Po";break;case "ጷ":output = "Pwa";break;case "ጸ":case "ፀ":output = "Ce";break;case "ጹ":case "ፁ":output = "Cu";break;case "ጺ":case "ፂ":output = "Ci";break;case "ጻ":case "ፃ":output = "Ca";break;case "ጼ":case "ፄ":output = "Cie";break;case "ጽ":case "ፅ":output = "C";break;case "ጾ":case "ፆ":output = "Co";break;case "ጿ":output = "Cwa";break;case "ፈ":output = "fe";break;case "ፉ":output = "fu";break;case "ፊ":output = "fi";break;case "ፋ":output = "fa";break;case "ፌ":output = "fie";break;case "ፍ":output = "f";break;case "ፎ":output = "fo";break;case "ፏ":output = "fwa";break;case "ፐ":output = "pe";break;case "ፑ":output = "pu";break;case "ፒ":output = "pi";break;case "ፓ":output = "pa";break;case "ፔ":output = "pie";break;case "ፕ":output = "p";break;case "ፖ":output = "po";break;case "ፗ":output = "pwa";break;
    }
    return output;
  }

function inputToRad(newInput) {
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

  console.log(radicals);

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
      (rads[0][rads[1].length - 1] == "e" ||
        rads[0][rads[1].length - 1] == undefined) &&
      (rads[1][rads[1].length - 1] == "e" ||
        rads[1][rads[1].length - 1] == undefined) &&
      (rads[2][rads[1].length - 1] == "e" ||
        rads[2][rads[1].length - 1] == undefined)
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

/* PERFECTUM */
/* ******** */

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
      output =
        input[0] + input[1] + "e" + input[2][0] + input[2] + input[3] + "e";
      break;
    case 12:
      output = input[0] + input[1] + "e" + input[2][0] + input[2];
      break;
  }

  return output;
}

/* JUSSIVUS */
/* ******** */

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
/* ******** */

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
/* ******** */

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
      output =
        input[0] === "a"
          ? input[0][0] + input[1][0] + "allew"
          : input[0][0] + "y" + input[1][0] + "allew";
      break;
    case 10:
      output = input[0] + input[1][0] + input[1][0] + "y" + input[2] + "allew";
      break;
    case 11:
      output =
        input[0] +
        input[1][0] +
        "e" +
        input[2][0] +
        input[2][0] +
        "y" +
        input[3][0] +
        "allew";
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

function conjugate(newInput) {
    outputVerb.innerHTML = newInput;
    let inputRads = inputToRad(newInput);
    let type = identifyType(inputRads);
  
    let perfectum = toPerfectum(inputRads, type);
    let jussivus = toJussivus(inputRads, type);
    let gerundivum = toGerundivum(inputRads, type);
    let contingent = toContingent(inputRads, type);
  
    outPer.innerHTML = perfectum;
    outJus.innerHTML = jussivus;
    outGer.innerHTML = gerundivum;
    outCon.innerHTML = contingent;
  }

submitGem.addEventListener("click", function() {
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

  // 12's conjugation on click
  conjugate(output);
  //   console.log(output);
});

submitBtn.addEventListener("click", () => {
  queryGemination(inputDOM.value.toString());
});

window.addEventListener("keydown", e => {
  if (13 == e.keyCode) {
    queryGemination(inputDOM.value.toString());
  }
});
