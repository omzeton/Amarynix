/*

Let's pretend that this indeed is a list of all possible forms an
amharic verb can morf into. Here are the most important qualities...

// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \\

1. me- nger
r = 3
Nothing weird. GEM-OFF

2. me- felleg
r = 3
Nothing weird. GEM-ON

3. me- qret
r = 2
Ending t. GEM-OFF

4. me- leyyet
r = 2
Ending t. GEM-ON

5. me- smat
r = 2
Ending at. GEM-OFF

6. me- lekkat
r = 2
Ending at. GEM-ON

7. me- qom
r = 2
Dwa rdzenie, w pierwszym -o. GEM-OFF

8. me- hied
r = 2
Dwa rdzenie, w pierwszym -ie. GEM-OFF

9. me- sam
r = 2
Dwa rdzenie, w pierwszym -a. GEM-OFF [może być też samo 'a', np w 'ale']

10. me- barek
r = 3
Trzy rdzenie, w pierwszym -a. GEM-OFF

11. me- mesker
r = 4
Cztery rdzenie. GEM-OFF

12. me- zengat
r = 3
Trzy rdzenie, ending -at. GEM-OFF

// ^^^^^^^^^^^^^^^^^^^^^^^ jasne ^^^^^^^^^^^^^^^^^^^^^^^ \\
// \/\/\/\/\/\/\/\/\/\/\/\/ niejasne \/\/\/\/\/\/\/\/\/ \\

10. me- barek
r = 3
Trzy rdzenie, w pierwszym -a. GEM-OFF

Różnica między 10 a 2:
10 w pierwszej rdzennej jest zawsze -a
2 

// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \\


// %%%%%%%%%%%%%%%%%%%%%%% problemy %%%%%%%%%%%%%%%%%%%%%%% \\

2. Czasem w pierwszym rdzeniu pojawia się o wtedy nie doklejać 'e'
3. Prefiksy a, as, aste.

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% \\

*/

const inputDOM = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const outputVerb = document.getElementById("output-verb");
const outputClass = document.getElementById("output-class");
const rad1 = document.getElementById("r-1");
const rad2 = document.getElementById("r-2");
const rad3 = document.getElementById("r-3");
const rad4 = document.getElementById("r-4");
const radT = document.getElementById("r-t");
const outPer = document.getElementById("output-perfectum");
const outJus = document.getElementById("output-jussivus");
const outGer = document.getElementById("output-gerundivum");
const outCon = document.getElementById("output-contingent");
const prefOutput = document.getElementById("pref");
let prefixes = document.getElementsByName("prefix");
let input, output, hasT, radical3, pref, verbTypeGlobal;

// output grid

// perfectum
const perfS1 = document.getElementsByClassName('2-2')[0].firstChild;
const perfS2M = document.getElementsByClassName('2-3')[0].firstChild;
const perfS2F = document.getElementsByClassName('2-4')[0].firstChild;
const perfS3M = document.getElementsByClassName('2-5')[0].firstChild;
const perfS3F = document.getElementsByClassName('2-6')[0].firstChild;
const perfP1 = document.getElementsByClassName('2-7')[0].firstChild;
const perfP2 = document.getElementsByClassName('2-8')[0].firstChild;
const perfP3 = document.getElementsByClassName('2-9')[0].firstChild;
// jussivus
const jusS1 = document.getElementsByClassName('3-2')[0].firstChild;
const jusS2M = document.getElementsByClassName('3-3')[0].firstChild;
const jusS2F = document.getElementsByClassName('3-4')[0].firstChild;
const jusS3M = document.getElementsByClassName('3-5')[0].firstChild;
const jusS3F = document.getElementsByClassName('3-6')[0].firstChild;
const jusP1 = document.getElementsByClassName('3-7')[0].firstChild;
const jusP2 = document.getElementsByClassName('3-8')[0].firstChild;
const jusP3 = document.getElementsByClassName('3-9')[0].firstChild;
// contingent
const contS1 = document.getElementsByClassName('4-2')[0].firstChild;
const contS2M = document.getElementsByClassName('4-3')[0].firstChild;
const contS2F = document.getElementsByClassName('4-4')[0].firstChild;
const contS3M = document.getElementsByClassName('4-5')[0].firstChild;
const contS3F = document.getElementsByClassName('4-6')[0].firstChild;
const contP1 = document.getElementsByClassName('4-7')[0].firstChild;
const contP2 = document.getElementsByClassName('4-8')[0].firstChild;
const contP3 = document.getElementsByClassName('4-9')[0].firstChild;
// gerundivum
const gerS2M = document.getElementsByClassName('5-3')[0].firstChild;
const gerS2F = document.getElementsByClassName('5-4')[0].firstChild;
const gerP2 = document.getElementsByClassName('5-8')[0].firstChild;
// imperativus
const impS1 = document.getElementsByClassName('6-2')[0].firstChild;
const impS3M = document.getElementsByClassName('6-5')[0].firstChild;
const impS3F = document.getElementsByClassName('6-6')[0].firstChild;
const impP1 = document.getElementsByClassName('6-7')[0].firstChild;
const impP2 = document.getElementsByClassName('6-9')[0].firstChild;

/* ******** */


prefixes = Array.prototype.slice.call(prefixes);

pref = prefixes.find(input => {
  if (input.checked) {
    return input;
  }
});

prefOutput.innerHTML = pref.value;

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

  // Update final T in the view
  if (rT) {
    rT = "-t";
  } else {
    rT = "x";
  }

  // Case there are 4 radicals in total
  if (radicals.length == 4) {
    rad1.innerHTML = radicals[0];
    rad2.innerHTML = radicals[1];
    rad3.innerHTML = radicals[2];
    rad4.innerHTML = radicals[3];
    radT.innerHTML = rT;

    if (radicals[2] !== "a") {
      radical3 = radicals[2];
    } else {
      radical3 = false;
    }
  }

  // Case there are 3 radicals in total
  if (radicals.length == 3) {
    rad1.innerHTML = ".";
    rad2.innerHTML = radicals[0];
    rad3.innerHTML = radicals[1];
    rad4.innerHTML = radicals[2];
    radT.innerHTML = rT;

    if (radicals[1] !== "a") {
      radical3 = radicals[1];
    } else {
      radical3 = false;
    }
  }

  // Case there are 2 radicals in total
  if (radicals.length == 2) {
    rad1.innerHTML = ".";
    rad2.innerHTML = ".";
    rad3.innerHTML = radicals[0];
    rad4.innerHTML = radicals[1];
    radT.innerHTML = rT;

    if (radicals[0] !== "a") {
      radical3 = radicals[0];
    } else {
      radical3 = false;
    }
  }

  if (hasT) {
    radicals.push("t");
  }

  console.log(`Has -T? ${hasT}`);

  return radicals;
}

/* TYPES */
/* ******** */

function identifyType(rads) {
  let type = null,
    vowel,
    length = hasT ? rads.length - 1 : rads.length;

  /*
	Radical numbers and types
	2 = [3, 4, 5, 6, 7, 8, 9]
	3 = [1, 2, 10, 12]
	4 = [11]
  */

  console.log(rads);

  if ( rads[0] === "ge" && rads[1] === "mme" && rads[2] === "t" ) {
    return 2;
  }
  if ( rads[0] === "mo" && rads[1] === "t" ) {
    return 7;
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
    verbTypeGlobal = 11;
    return 11;
  }
}

/* PERFECTUM */
/* ******** */

function toPerfectum(input, verbType) {
  let output,
    firstVowel = input[0] === 'a' ? '' : 'e';

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
  firstVowel = input[0] === 'a' ? '' : 'y';

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
  firstVowel = input[0] === 'a' ? '' : 'e';

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
  }

  return output;
}

/* CONTINGENT */
/* ******** */

function toContingent(input, verbType) {
  let output,
  firstVowel = input[0] === 'a' ? '' : 'e';

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
  }

  return output;
}

/* +++++ --- +++++ */

function conjugate(newInput) {
  outputVerb.innerHTML = newInput;
  let inputRads = inputToRad(newInput);
  let type = identifyType(inputRads);
  console.log(type);

  let perfectum = toPerfectum(inputRads, type);
  let jussivus = toJussivus(inputRads, type);
  let gerundivum = toGerundivum(inputRads, type);
  let contingent = toContingent(inputRads, type);

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
    prefOutput.innerHTML = pref.value;
    conjugate(input);
  });
}

// 1 容易
// conjugate('menger');
// conjugate('mefelleg');
// conjugate('meqret');
// conjugate('melejjet');
// conjugate('mesmat');
// conjugate('melekkat');
// conjugate('meqom');
// conjugate('mehied');
// conjugate('mesam');
// conjugate('mebarek');
// conjugate('memesker');
// conjugate('mezengat');

//2 容易
// conjugate('melmed');
// conjugate('mejemmer');
// conjugate('mesTet');
// conjugate('mebejjet');
// conjugate('meblat');
// conjugate('meTeTTat');
// conjugate('mehon');
// conjugate('meCies');
// conjugate('meTal');
// conjugate('memarek');
// conjugate('mesebseb');
// conjugate('mekendat');

//3 中等 A
// conjugate("mader");
// conjugate("masseb");
// conjugate("majet");
// conjugate("mażżet");
// conjugate("mewTat"); // 5 nie ma z a
// conjugate("melekkat"); // 6 nie ma z a
// conjugate("menor"); // 7 nie ma z a
// conjugate("mezieg"); // 8 nie ma z a
// conjugate("medan"); // 9 jest ale ale to by było mal a powinno być malet
// conjugate("medaber"); // 10 nie ma z a
// conjugate("metenfes"); // 11 nie ma z a
// conjugate("medenfat"); // 12 nie ma z a

// //4 难死了
// // /* 没问题 */ conjugate('malef');
// /* 2     */ conjugate('megemmet'); // 无法修改，trzeba zrobić oddzielny case na ten czasownik
// /* 3     */ conjugate('meśśet'); // rozwala system
// // /* 没问题 */conjugate('mażżet');
// // /* 没问题 */conjugate('mewTat');
// // /* 没问题 */conjugate('mesewwat'); 
// /* 7     */ conjugate('memot'); // rozwala system bo t na końcu
// // /* 没问题 */conjugate('meśeT');
// /* 9     */ conjugate('meCien'); // jest z 'ie' czyli grupa 8 a jest 9
// /* 10     */ conjugate('meqaset'); // rozwala system bo t na końcu
// /* 11     */ conjugate('meserret'); // rozwala system bo t na końcu
// // /* 没问题 */conjugate('mebertat');

//4 难死了 整理的

/* 2✓  */ conjugate('megemmet'); // 无法修改，trzeba zrobić oddzielny case na ten czasownik

/* 3✗  */ conjugate('meśeśt'); // rozwala system
// bezokolicznik to መሸሽ
// jak to w ogóle odmieniac jak nie ma t na końcu i to typ 3???

/* 7  */ conjugate('memot'); // rozwala system bo t na końcu

// /* 9  */ conjugate('meCien'); // jest z 'ie' czyli grupa 8 a jest 9

// /* 10 */ conjugate('meqaset'); // rozwala system bo t na końcu

// /* 11 */ conjugate('meserret'); // rozwala system bo t na końcu


// Bender i Fulas - Irregular verbs p. 67 - 69.
/*


መሸሽ - rzeczywiście powinno być meśeśet, ale nie jest
መሽናት - coś o tym, że nie wiadomo do jakiej klasy należy. nie wiem ta książka jest tak idiotycznie napisana że można wyciągnąć o czym oni piszą
መምጣት - ma nieregularny imperativus
መነገድ i "hnt'" - nie wiadomo, ale chyba się inaczej odmieniają. i co to ma być ten drugi czasownik? znaczy 'construst'. może sprawdzić w Kane'e. W tigrynia to ሃነጸ.
አል
ተወ
ሻ
አማረ - cztery bardzo oczywiste i nieregularne! odmienić oddzielnie.
ነው
አለ - alle
ነበር - trzy które faktycznie odstają od reszty
ኖረ
ሆነ - z nimi też coś jest nie tak

Zatem czasowniki które trzeba złapać, odmienić i nie dać przejść przez klasyfikację i inne procedury to:
መሸሽ, መሽናት, መምጣት, መነገድ, ( "hnt'" / ሃነጸ )
አል, ተወ, ሻ, አማረ, ነው, አለ, ነበር, ኖረ, ሆነ <- jakie bezokoliczniki od tych?

*/