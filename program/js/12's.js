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

Różnica między 10 a 1:
W 1 w każdym rdzeniu jest -e
W 10 w pierwszym zawsze jest -a

*/

const inputDOM = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const outputVerb = document.getElementById('output-verb');
const outputClass = document.getElementById('output-class');
const rad1 = document.getElementById('r-1');
const rad2 = document.getElementById('r-2');
const rad3 = document.getElementById('r-3');
const rad4 = document.getElementById('r-4');
const radT = document.getElementById('r-t');
const outPer = document.getElementById('output-perfectum');
const outJus = document.getElementById('output-jussivus');
const outGer = document.getElementById('output-gerundivum');
const outCon = document.getElementById('output-contingent');
const prefOutput = document.getElementById('pref');
let prefixes = document.getElementsByName('prefix');
let input,
	output,
	verbClass,
	hasT,
	radical3,
	pref;

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
		r1,
		r2,
		r3,
		r4,
		rT;

	newArr = newInput.split('');

	// Remove initial 'M'
	if (newArr[0] == 'm') {
		newArr.shift();
	}
	// If 'MA' store 'A' as first radical
	if (newArr[0] == 'a') {
		radicals.push(newArr[0]);
		newArr.shift();
	} else {
		newArr.shift();
	}
	// After Me/Ma next letter is a radical
	radicals.push(newArr[0]);
	newArr.shift();

	// Check for vowel attached to that radical
	switch (newArr[0]) {
		case 'a':
		case 'e':
		case 'y':
		case 'u':
		case 'o':
			if (radicals[0] == 'a') {
				radicals[1] += newArr[0]
				newArr.shift();
			} else {
				radicals[0] += newArr[0]
				newArr.shift();
			}
			break;
		case 'i':
			if (radicals[0] == 'a') {
				if (newArr[1] == 'e') {
					radicals[1] += 'ie';
					newArr.shift();
					newArr.shift();
				} else {
					radicals[1] += 'i';
					newArr.shit();
				}
			} else {
				if (newArr[1] == 'e') {
					radicals[0] += 'ie';
					newArr.shift();
					newArr.shift();
				} else {
					radicals[0] += 'i';
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
		case 'a':
		case 'e':
		case 'y':
		case 'u':
		case 'o':
			radicals[1] += newArr[0];
			newArr.shift();
			break;
		case 'i':
			if (radicals[0] == 'a') {
				if (newArr[1] == 'e') {
					radicals[0] += 'ie';
					newArr.shift();
					newArr.shift();
				} else {
					radicals[0] += 'i';
					newArr.shit();
				}
			} else {
				if (newArr[1] == 'e') {
					radicals[1] += 'ie';
					newArr.shift();
					newArr.shift();
				} else {
					radicals[1] += 'i';
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
		case 'a':
		case 'e':
		case 'y':
		case 'u':
		case 'o':
			radicals[2] += newArr[0];
			newArr.shift();
			break;
		case 'i':
			if (radicals[0] == 'a') {
				if (newArr[1] == 'e') {
					radicals[0] += 'ie';
					newArr.shift();
					newArr.shift();
				} else {
					radicals[0] += 'i';
					newArr.shit();
				}
			} else {
				if (newArr[1] == 'e') {
					radicals[1] += 'ie';
					newArr.shift();
					newArr.shift();
				} else {
					radicals[1] += 'i';
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

	// Check for final t
	if (radicals[radicals.length - 1] == 't') {
		rT = true;
		hasT = true;
		radicals.pop();
	} else {
		rT = false;
		hasT = false;
	}

	// Update final T in the view
	if (rT) {
		rT = '-t'
	} else {
		rT = 'x'
	}

	// Case there are 4 radicals in total
	if (radicals.length == 4) {
		rad1.innerHTML = radicals[0];
		rad2.innerHTML = radicals[1];
		rad3.innerHTML = radicals[2];
		rad4.innerHTML = radicals[3];
		radT.innerHTML = rT;

		if (radicals[2] !== 'a') {
			radical3 = radicals[2];
		} else {
			radical3 = false;
		}
	}

	// Case there are 3 radicals in total
	if (radicals.length == 3) {
		rad1.innerHTML = '.';
		rad2.innerHTML = radicals[0];
		rad3.innerHTML = radicals[1];
		rad4.innerHTML = radicals[2];
		radT.innerHTML = rT;

		if (radicals[1] !== 'a') {
			radical3 = radicals[1];
		} else {
			radical3 = false;
		}
	}

	// Case there are 2 radicals in total
	if (radicals.length == 2) {
		rad1.innerHTML = '.';
		rad2.innerHTML = '.';
		rad3.innerHTML = radicals[0];
		rad4.innerHTML = radicals[1];
		radT.innerHTML = rT;

		if (radicals[0] !== 'a') {
			radical3 = radicals[0];
		} else {
			radical3 = false;
		}
	}

	if (hasT) {
		radicals.push('t');
	}

	return radicals;
}

/* TYPES */
/* ******** */

function showVowelWithRadical(arr, index) {
	let vowel = '',
		newArr = arr[index].split('');

	if (newArr.length == 1) {
		return '';
	} else {
		if (newArr[1] == 'i' && newArr[2] == 'e') {
			return 'ie';
		} else {
			return newArr[1];
		}
	}
}

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

	if (length === 2) {

		if (rads[2] == 't' && rads[0] !== 'a') {
			if (rads[1][0] == rads[1][1]) {
				if (rads[1][rads[1].length-1] == 'a') {
					return 6;
				} else {
					return 4;
				}
			} else {
				if (rads[1][rads[1].length-1] == 'a') {
					return 5;
				} else {
					return 3;
				}
			}

		} else {
			if (rads[0][rads[0].length - 1] == 'o') {
				return 7
			} else if (rads[0] == 'a' || rads[0][rads[0].length - 1] == 'a') {
				return 9
			} else {
				return 8
			}
		}
		// Type 4
		// Type 5
		// Type 6
		// Type 7
		// Type 8
		// Type 9
	} else if (length === 3) {

		if ((rads[0][rads[1].length-1] == 'e' || rads[0][rads[1].length-1] == undefined)
			&&
			(rads[1][rads[1].length-1] == 'e' || rads[1][rads[1].length-1] == undefined)
			&&
			(rads[2][rads[1].length-1] == 'e' || rads[2][rads[1].length-1] == undefined)
			) {
				if (rads[1][0] == rads[1][1]) {
					return 2;
				} else {
					return 1;
				}
		} else if (
			(rads[0][1] == 'a')
			) {
			return 10;
		} else {
			return 12;
		}

		// Type 1
		// Type 2
		// Type 10
		// Type 12
	} else if (length === 4) {
		return 11;
		// Type 11
	}

}

/* +++++ --- +++++ */

function conjugate(newInput) {
	let inputRads = inputToRad(newInput);
	// console.log(inputRads)
	console.log(identifyType(inputRads));
}

conjugate('menger');
conjugate('mefelleg');

conjugate('meqret');
conjugate('meleyyet');
conjugate('mesmat');
conjugate('melekkat');
conjugate('meqom');
conjugate('mehied');
conjugate('mesam');

conjugate('mebarek');

conjugate('memesker');

conjugate('mezengat');



// for (let i = 0; i < prefixes.length; i++) {
// 	prefixes[i].addEventListener('click', () => {
// 		input = inputDOM.value;
// 		pref = prefixes.find(input => {
// 			if (input.checked) {
// 				return input;
// 			}
// 		});
// 		prefOutput.innerHTML = pref.value;
// 		conjugate(input);
// 	});
// }