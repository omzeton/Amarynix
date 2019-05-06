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

/* HELPER FUNCTIONS */
/* ******** */

function addPrefix(verb) {
	let arr = [];
	if (verb[0] == 'y' && verb[1] == 'i') {
		arr = verb.split('');
		arr.shift();
		arr.shift();
		return pref.value + arr.join('');
	} else if (verb[0] == 'a' || verb[0] == 'y') {
		arr = verb.split('');
		arr.shift();
		return pref.value + arr.join('');
	} else {
		return pref.value + verb;
	}
};

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

	return radicals;
}

/* VERB CLASS */
/* ******** */

function getClass(radicals) {

	let verbClass = false;
	let arr = radicals;

	if (arr.length == 2 && !hasT) {
		verbClass = 'hø';
	}

	arr = radicals.join('');
	arr = arr.split('');
	let isGeminated = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i + 1]) {
			isGeminated = true;
		}
	}

	if (!verbClass) {
		if (arr[0] !== 'a' && arr[1] == 'a') {
			verbClass = 'C';
		}
	}


	if (!verbClass) {
		if (isGeminated) {
			verbClass = 'B';
		} else {
			verbClass = 'A';
		}
	}


	return verbClass;
}

/* +++++ CONJUGATION +++++ */

/* PERFECTUM */
/* ******** */

function infToPer(newInput) {
	let verb = newInput
	let newArr;
	let thirdRad = radical3;

	if (verbClass == 'hø') {

		// Add 'e'
		for (let i = 0; i < verb.length; i++) {
			if (verb[i] !== 'a') {
				let newArr = verb[i].split('');
				if (newArr[newArr.length - 1] !== 'a' &&
					newArr[newArr.length - 1] !== 'u' &&
					newArr[newArr.length - 1] !== 'e' &&
					newArr[newArr.length - 1] !== 'y' &&
					newArr[newArr.length - 1] !== 'o' &&
					newArr[newArr.length - 1] !== 'i') {
					verb[i] += 'e';
				}
			}

		}
	} else {
		// geminate 3rd radical
		if (verb.length <= 2) {

		} else {

			if (thirdRad) {

				let gem = thirdRad.split('');

				if (gem[0] !== gem[1]) {
					gem.unshift(gem[0]);
				}

				thirdRad = gem.join('');

				verb[verb.length - 2] = thirdRad;
			}
			// Add 'e'
			for (let i = 0; i < verb.length; i++) {

				if (verb[i] !== 'a') {

					let newArr = verb[i].split('');

					if (newArr[newArr.length - 1] !== 'a' &&
						newArr[newArr.length - 1] !== 'u' &&
						newArr[newArr.length - 1] !== 'e' &&
						newArr[newArr.length - 1] !== 'y' &&
						newArr[newArr.length - 1] !== 'o' &&
						newArr[newArr.length - 1] !== 'i') {
						verb[i] += 'e';
					}
				}

			}
		}

	}

	verb = addPrefix(verb.join(''));

	return verb
}

/* JUSSIVUS / IMPERATIVUS */
/* ******** */

function infToJus(newInput) {
	let verb = newInput

	// If verb is of class B or has 4 radicals reduce 3rd vowel to 0
	if (verbClass == 'B' || verb.length == 4) {

		let r = verb[verb.length - 2].split('');

		if (r[r.length - 1] == 'a' ||
			r[r.length - 1] == 'u' ||
			r[r.length - 1] == 'e' ||
			r[r.length - 1] == 'y' ||
			r[r.length - 1] == 'o' ||
			r[r.length - 1] == 'i') {

			r.pop();
			r.push('y');

		} else {

			r.push('y');

		}

		r = r.join('');
		verb[verb.length - 2] = r;

	}

	// If verb is of class A and has initial 'a' reduce it to 0

	if (verbClass == 'A' && verb[0] == 'a') {

		verb[0] = 'y';

	}

	// If verb is hollow switch 'o' to 'u' and 'e' to 'i' and vice versa

	if (verbClass == 'hø') {

		let r = [];

		for (let i = 0; i < verb.length; i++) {

			r = verb[i].split('');

			if (r[r.length - 1] == 'u') {
				r.pop();
				r.push('o');
			} else if (r[r.length - 1] == 'e') {
				r.pop();
				r.push('i');
			} else if (r[r.length - 1] == 'o') {
				r.pop();
				r.push('u');
			} else if (r[r.length - 1] == 'i') {
				r.pop();
				r.push('e');
			}

			r = r.join('');

			verb[i] = r;
		}
	}

	// Jussive afixes

	if (verb[0] !== 'a' && verb[0] !== 'y') {
		verb.unshift('yi');
		// chodzi o 'ይ'
	}

	let r = [];
	r = verb[verb.length - 1].split('');

	if (r[r.length - 1] == 'a' ||
		r[r.length - 1] == 'e' ||
		r[r.length - 1] == 'u' ||
		r[r.length - 1] == 'o' ||
		r[r.length - 1] == 'i') {

		r.pop();
		r.push('u');
	} else {
		r.push('u');
	}

	r = r.join('');
	verb.pop();
	verb.push(r);

	verb = addPrefix(verb.join(''));

	return verb
}

/* GERUNDIVUM */
/* ******** */

function infToGer(newInput) {
	let verb = newInput
	let newArr;
	let thirdRad = radical3;

	if (hasT) {
		// If 't' at the end add to sum of radicals
		verb.push('t');

		// Remove gemination if there is any
		let gem = verb[verb.length - 2].split('');
		if (gem[0] == gem[1]) {
			gem.shift();
		}
		gem = gem.join('');

		// Count again for 3rd rad
		thirdRad = verb[verb.length - 2];
		// Push new un-geminated part
		verb[verb.length - 2] = gem;
	} else {
		// Remove gemination if there is any
		let gem = verb[verb.length - 2].split('');
		if (gem[0] == gem[1]) {
			gem.shift();
		}
		gem = gem.join('');
		// Push new un-geminated part
		verb[verb.length - 2] = gem;
	}

	thirdRad = verb[verb.length - 2];

	// If verb is hollow 
	if (verbClass == 'hø') {
		// 3rd radical = a -> y
		if (thirdRad) {
			newArr = thirdRad.split('');
			if (newArr[newArr.length - 1] == 'a') {
				newArr.pop();
				newArr.push('y');
			}
		}
		newArr = newArr.join('');
		verb[verb.length - 2] = newArr;
	} else {
		// 3rd radical = x -> y
		if (thirdRad) {
			newArr = thirdRad.split('');
			if (newArr[newArr.length - 1] == 'a' ||
				newArr[newArr.length - 1] == 'y' ||
				newArr[newArr.length - 1] == 'u' ||
				newArr[newArr.length - 1] == 'o' ||
				newArr[newArr.length - 1] == 'i' ||
				newArr[newArr.length - 1] == 'e') {
				newArr.pop();
				newArr.push('y');
			} else {
				newArr.push('y');
			}
		}
		newArr = newArr.join('');
		verb[verb.length - 2] = newArr;
	}

	if (verb.length == 3) {
		// If radical has 3 radicals
		if (verb[0] !== 'a') {
			// All 3 rads receive 'e' in 2nd radical except those with initial a
			let splitArr = verb[verb.length - 3].split('');
			splitArr[1] = "e";
			splitArr = splitArr.join('');
			verb[verb.length - 3] = splitArr;
		}

		let checkU = verb[1].split('');

		if (checkU[checkU.length - 1] == 'u') {
			// If 2nd radical has 'u' change it to 'o'
			checkU[checkU.length - 1] = 'o';
			checkU = checkU.join('');
			verb[1] = checkU;
		}
	}

	if (verb[verb.length - 1] == 'a') {
		// Verbs with final 'a' receive no 'e'
		// There are exceptions
		// !!! CHECK THIS RULE !!!
	}

	verb[verb.length - 1] += 'o';

	verb = addPrefix(verb.join(''));

	return verb
}

/* CONTINGENT */
/* ******** */

function infToCon(newInput) {
	let verb = newInput

	// Reduce vowel of 3rd radical to 'y' or 0
	let r = verb[verb.length - 2].split('');
	if (r[r.length - 1] == 'a' ||
		r[r.length - 1] == 'u' ||
		r[r.length - 1] == 'e' ||
		r[r.length - 1] == 'y' ||
		r[r.length - 1] == 'o' ||
		r[r.length - 1] == 'i') {

		r.pop();
		r.push('y');

	} else {

		r.push('y');

	}

	r = r.join('');
	verb[verb.length - 2] = r;
	r = [];

	// If 2nd radical is not 'A' then give it 'e' vowel
	if (verb.length >= 3 && verb[verb.length - 3] !== 'a') {
		// If it's only 2 radicals it won't have 2nd radical

		r = verb[verb.length - 3].split('');

		if (r[r.length - 1] == 'a' ||
			r[r.length - 1] == 'u' ||
			r[r.length - 1] == 'e' ||
			r[r.length - 1] == 'y' ||
			r[r.length - 1] == 'o' ||
			r[r.length - 1] == 'i') {

			r.pop();
			r.push('e');

		} else {

			r.push('e');

		}
		r = r.join('');
		verb[verb.length - 3] = r;
		r = [];
	}

	// If it's a class C verb or if it has 4 radicals geminate 
	if (verbClass == 'C' || verb.length == 4) {

		r = verb[verb.length - 2].split('');

		if (r[0] !== r[1]) {
			r.unshift(r[0]);
		}

		r = r.join('');
		verb[verb.length - 2] = r;
		r = [];
	}

	// If verb is hollow and it's a verb with 'a' reduce it to y

	if (verbClass == 'hø' && verb[0] == 'a') {
		verb[0] == 'y';
	}

	// Contingent afixes

	if (verb[0] !== 'a' && verb[0] !== 'y') {
		verb.unshift('y');
	}

	r = verb[verb.length - 1].split('');

	if (r[r.length - 1] == 'a' ||
		r[r.length - 1] == 'e' ||
		r[r.length - 1] == 'u' ||
		r[r.length - 1] == 'o' ||
		r[r.length - 1] == 'i') {

		r.pop();
		r.push('allew');
	} else {
		r.push('allew');
	}

	r = r.join('');
	verb.pop();
	verb.push(r);

	verb = addPrefix(verb.join(''));

	return verb
}

/* +++++ --- +++++ */

function conjugate(newInput) {
	// Show input
	outputVerb.innerHTML = newInput;
	// Set class
	verbClass = getClass(inputToRad(newInput));
	// Show class
	outputClass.innerHTML = verbClass;
	// Conjugate
	let perfectum = infToPer(inputToRad(newInput));
	let jussivus = infToJus(inputToRad(newInput));
	let gerundivum = infToGer(inputToRad(newInput));
	let contingent = infToCon(inputToRad(newInput));

	outPer.innerHTML = perfectum;
	outJus.innerHTML = jussivus;
	outGer.innerHTML = gerundivum;
	outCon.innerHTML = contingent;
}


// Conjugator init


// UNCOMMENT FOR MANUAL INIT
// submitBtn.addEventListener('click', () => {
// 	input = inputDOM.value;
// 	conjugate(input);
// });

// window.addEventListener('keydown', e => {
// 	if (13 == e.keyCode) {
// 		input = inputDOM.value;
// 		conjugate(input);
// 	}
// });

conjugate('meqret');

for (let i = 0; i < prefixes.length; i++) {
	prefixes[i].addEventListener('click', () => {
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

/* +++++ --- +++++ */

/*

12 verbs to try out ( transform to inifinitum )

01 - menger ( neggere ) ✔

02 - mefelleg ( fellege ) ✔

03 - meqret ( qerre ) [tylko perfektum: jest 'qre', powinno być 'qerre']

04 - meleyyet ( leyye ) [powinno być wszędzie le... a jest czasem ly...]

05 - mesmat ( semma ) [tylko perfektum: jest 'sma', powinno być 'semma']

06 - melekkat ( lekka ) [pierwsza rdzenna problemy]

07 - meqom ( qome ) [contingent: jest "qymallew", powinno być "qomallew"]

08 - mehied ( hiede ) [contingent: hiydallew -> hiedallew]

09 - mesam ( same ) ✔

10 - mebarek ( barreke ) [jussivus + gerundivum pierwsza rdzenna]

11 - memesker ( mesekkere ) ✔

12 - mezengat ( zenegga ) [perfectum - zennega -> zenegga]

33% Accuracy 02.04.2019

*/