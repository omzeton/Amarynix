const inputDOM = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const outputVerb = document.getElementById("output-verb");
const outputClass = document.getElementById("output-class");
const outPer = document.getElementById("output-perfectum");
const outJus = document.getElementById("output-jussivus");
const outGer = document.getElementById("output-gerundivum");
const outCon = document.getElementById("output-contingent");
let prefixes = document.getElementsByName("prefix");
let input, output, hasT, radical3, pref, verbTypeGlobal;

// output grid

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

/* ******** */

prefixes = Array.prototype.slice.call(prefixes);

pref = prefixes.find(input => {
  if (input.checked) {
    return input;
  }
});

/* RADICALS */
/* ******** */

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

  return radicals;
}

/* TYPES */
/* ******** */

function identifyType(rads) {
  let length = hasT ? rads.length - 1 : rads.length;

  /*
	Radical numbers and types
	2 = [3, 4, 5, 6, 7, 8, 9]
	3 = [1, 2, 10, 12]
	4 = [11]
  */

  console.log(rads);

  switch (rads.join("")) {
    case "gemmet":
      return 2;
    case "mot":
      return 7;
    case "amar":
      verbTypeGlobal = "mamar";
      return "mamar";
    case "śat":
      verbTypeGlobal = "meśat";
      return "meśat";
    case "tew":
        verbTypeGlobal = "metew";
      return "metew";
    case "mTat":
      verbTypeGlobal = "memTat";
      return 5;
    case "alet":
      verbTypeGlobal = "malet";
      return 3;
    case "śenat":
        verbTypeGlobal = "meśenat";
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
    case "metew":
      output = "teww";
      break;
    case "mamar":
      output = "amaree";
      break;
    case "meśat":
      output = "śa";
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
    case "metew":
      output = "tew";
      break;
    case "mamar":
      output = "amar";
      break;
    case "meśat":
      output = "śa";
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
    case "metew":
      output = "tytt";
      break;
    case "mamar":
      output = "amrr";
      break;
    case "meśat":
      output = "śa";
      break;
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
    case "metew":
      output = "tew";
      break;
    case "mamar":
      output = "amar";
      break;
    case "meśat":
      output = "śa";
      break;
  }

  return output;
}

/* FULL CONJUGATION */
/* ******** */

function conjugateAllPersons(p, j, g, c) {
  // Remember the output was already converted to 3rd person singular!

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

  // Perfectum
  perfS1.innerHTML = P + "hu";
  perfS2M.innerHTML = P + "h";
  perfS2F.innerHTML = P + "ś";
  perfS3M.innerHTML = P + "e";
  perfS3F.innerHTML = P + "eć";
  perfP1.innerHTML = P + "n";
  perfP2.innerHTML = P + "aćhu";
  perfP3.innerHTML = P + "u";
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
    impS2M.innerHTML = J;
    impS2F.innerHTML = J + "i"; // Jak na końcu jest "a" np w melekkat - lekka, to powinno być w imp lekki?
    impP2.innerHTML = J + "u"; // A tu lekku? czy lekka i lekka?
  } else {
    impS2M.innerHTML = "meTna";
    impS2F.innerHTML = "meTni";
    impP2.innerHTML = "meTnu";
  }

  console.log(verbTypeGlobal);

  // Jussivus
  if (verbTypeGlobal === "malet") {
    jusS1.innerHTML = "jyl";
    jusS3M.innerHTML = "tyl";
    jusS3F.innerHTML = "lyl";
    jusP1.innerHTML = "jylu";
    jusP2.innerHTML = "ynnyl";
  }
  if (verbTypeGlobal === "malet") {
    gerS1.innerHTML = "tyććie";
    impS2F.innerHTML = "tey";
  } else if (verbTypeGlobal === "meśat") {
    perfS3M.innerHTML = "śa";
    gerS3M.innerHTML = "śto"
    gerS3F.innerHTML = "śta"
    jusS3M.innerHTML = "jyśa"
  } else {
    jusS1.innerHTML = "jy" + J;
    jusS3M.innerHTML = "ty" + J;
    jusS3F.innerHTML = "ly" + J;
    jusP1.innerHTML = "jy" + J + "u";
    jusP2.innerHTML = "ynny" + J;
  }
}

/* +++++ --- +++++ */

function conjugate(newInput) {
  outputVerb.innerHTML = newInput;
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

submitBtn.addEventListener("click", () => {
  input = inputDOM.value;
  conjugate(input);
});

window.addEventListener("keydown", e => {
  if (13 == e.keyCode) {
    input = inputDOM.value;
    conjugate(input);
  }
});

for (let i = 0; i < prefixes.length; i++) {
  prefixes[i].addEventListener("click", () => {
    input = inputDOM.value;
    pref = prefixes.find(input => {
      if (input.checked) {
        return input;
      }
    });
    conjugate(input);
  });
}

conjugate("mefelleg");

/*

malet
ale/ylal/bylo/bel/malet

*meśen
śena/śene/śiene

*meśeś

amare
p: amare
g: amro
c: yamr
i: mer
j: ymer

tewe
p: tewe
g: tyto
c: jytewal
i: tew
j: jytew

meśat
p: śa
g: śyto
c: jyśal
i: śa
j: jyśa

*/
