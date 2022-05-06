const { alpha_equivalence, interpret, stringify } = require('javascripts/main.js');
const { AC_functionJ, AS_functionJ, AR_functionJ, CC_functionJ, CS_functionJ, initial_functionJ, final_functionJ, step_functionJ, configuration_functionJ, finite_string_functionJ, enumerate_functionJ, reverse_functionJ } = require('javascripts/transition.js');

let TEXT_J = '{ "S1": { "0": ["S1", "0", "R"], "1": ["S1", "1", "R"], "B": ["S2", "B", "L"] }, "S2": { "0": ["S3", "1", "L"], "1": ["S2", "0", "L"], "B": ["S3", "1", "L"] }, "S3": { "0": ["S3", "0", "L"], "1": ["S3", "1", "L"], "B": ["SH", "B", "R"] }}'
let RULESET = JSON.parse(TEXT_J);

function get_input_alphabet(string) {
	let input_alphabet;
	if (string.length) {
		input_alphabet = new Set();
		for (let character of string) {
			input_alphabet.add(character);
		}
		return [...input_alphabet];
	} 
	return [];
}

// convert a string into a Scott encoding term
const finite_tests = [
	["hi"],
]

// add character to Scott encoding term
const AC_tests = [
	["h", "i", "hi"],
	["i", "", "i"],
	["h", "hh", "hhh"],
	["h", "", "h"],
	["0", "0", "00"],
	["1", "hi", "1hi"]
]

// add string to Scott encoding term
const AS_tests = [
	["h", "i", "hi"],
	["h", "i", "hi"],
	["", "i", "i"],
	["i", "", "i"],
	["h", "hh", "hhh"],
	["h", "", "h"],
	["", "hh", "hh"],
	["heeeeeel", "o", "heeeeeelo"],
	["he", "llo", "hello"],
	["", "", ""]
]

// add reverse of string to Scott encoding term
const AR_tests = [
	["h", "i", "hi"],
	["h", "i", "hi"],
	["heeeeeel", "o", "leeeeeeho"],
	["eh", "llo", "hello"],
	["", "i", "i"],
	["h", "hh", "hhh"],
	["h", "", "h"],
	["", "hh", "hh"],
	["101", "llo", "101llo"],
	["", "", ""]
]

// enumerate a list and return a single object
const enumerate_tests = [
	["a", "ab"],
	["b", "ab"],
	["c", "abcdef"],
	["z", "abcdefghijklmnopqrstuvwxyz"]
]

// convert an enumeration term from one list/alphabet to another
const CC_tests = [
	["c", "abdefc", "abdefc", "c"],
	["b", "abdefc", "b", "b"],
	["d", "abdefc", "abdefc", "d"],
	["g", "abdefc", "", ""],
	["c", "c", "", ""],
	["B", "B0", "0", ""]
]

// convert a Scott encoding term from one list/alphabet to another
const CS_tests = [
	["a", "ba", "a"],
	["abc", "a", "a"],
	["hello", "heo", "heo"],
	["c", "abdefc", "c"],
	["b", "abdefc", "b"],
	["d", "abdefc", "d"],
	["g", "abdefc", ""],
	["c", "", ""],
	["", "abdefc", ""],
	["", "", ""],
	["1", "0", ""],
	["1", "0B", ""],
	["0", "0B", "0"],
	["B", "0B", "B"],
	["t", "0B", ""],
	["", "hi", ""]
]

// testing initial configuration (IC) term using Lemma 6 of "The weak lambda calculus as a reasonable machine"
const IC_tests = [
	[[['B', '1', '0'], 'B', ['S1', 'SH'], 'SH', 'SH', RULESET], ''],
	[[['B', 'h', 'e'], 'B', ['S1', 'SH'], 'SH', 'SH', RULESET], ''],
	[[['B', 'h', 'e', 't'], 'B', ['S1', 'SH'], 'SH', 'SH', RULESET], ''],
	[[['B', 'h'], 'B', ['S1'], 'S1', 'S1', RULESET], 'hhhhhhhhhhhh'],
	[[['B', '1', '0'], 'B', ['SH', 'S1', 'S2', 'S3'], 'S1', 'SH', RULESET], '1010101'],
]

// Lemma 7 of "The weak lambda calculus as a reasonable machine"
const FC_tests = [
	[[['B', 'S', '1'], 'B', ['S1'], 'S1', 'S1', RULESET], ['B', '1', '', 'S1']],
	[[['B', 'a', 'b'], 'B', ['SH'], 'SH', 'SH', RULESET], ['', 'B', '', 'SH']],
	[[['B', '1', '0'], 'B', ['S1'], 'S1', 'S1', RULESET], ['10', '0', '11111111', 'S1']],
	[[['B', 'h', 'e', 'l', 'o'], 'B', ['S1'], 'S1', 'S1', RULESET], ['he', 'l', 'llo', 'S1']]
]

// Lemma 8 of "The weak lambda calculus as a reasonable machine"
const SC_tests = [
	[[['B', 'f'], 'B', ['SH'], 'SH', 'SH', RULESET], 'f'],
	[[['B', '0'], 'B', ['SH'], 'SH', 'SH', RULESET], '0'],
	[[['B', '1', '0'], 'B', ['SH', 'S1', 'S2', 'S3'], 'S1', 'SH', RULESET], '010']
]

// --------------- FINITE STRING TEST ---------------
// (λ[x_1].(λ[x_2].(λy.[x_1](λ[x_1].(λ[x_2].(λy.[x_2](λ[x_1].(λ[x_2].(λy.y)))))))))
test.each(finite_tests)('%s == %s', (expected) => {
  let alphabet = get_input_alphabet(expected);
  let term = stringify(interpret(finite_string_functionJ(expected, alphabet)));
  expect(reverse_functionJ(term, alphabet)).toEqual(expected);
})

// --------------- ENUMERATE TEST ---------------
test.each(enumerate_tests)('%s == %s', (string, expected) => {
	let alphabet = get_input_alphabet(expected);
	let term = enumerate_functionJ(alphabet, alphabet.indexOf(string));
})

// --------------- AC TEST ---------------
test.each(AC_tests)('%s + %s = %s', (character, string, expected) => {
  let alphabet = get_input_alphabet(expected);
  let final_term = stringify(interpret(AC_functionJ(alphabet) + enumerate_functionJ(alphabet, alphabet.indexOf(character)) + finite_string_functionJ(string, alphabet)));
  let expected_term = stringify(interpret(finite_string_functionJ(expected, alphabet)));
  expect(reverse_functionJ(final_term, alphabet)).toEqual(reverse_functionJ(expected_term, alphabet));
})

// --------------- AS TEST ---------------
test.each(AS_tests)('%s + %s = %s', (string1, string2, expected) => {
  let alphabet = get_input_alphabet(expected);
  let final_term = stringify(interpret(AS_functionJ(alphabet) + finite_string_functionJ(string1, alphabet) + finite_string_functionJ(string2, alphabet)));
  let expected_term = stringify(interpret(finite_string_functionJ(expected, alphabet))); 
  expect(reverse_functionJ(final_term, alphabet)).toEqual(reverse_functionJ(expected_term, alphabet));
})

//  --------------- AR TEST ---------------
test.each(AR_tests)('%s + %s = %s', (string1, string2, expected) => {
  let alphabet = get_input_alphabet(expected);
  let final_term = stringify(interpret( AR_functionJ(alphabet) + finite_string_functionJ(string1, alphabet) + finite_string_functionJ(string2, alphabet)));
  expect(reverse_functionJ(final_term, alphabet)).toEqual(expected);
})

//  --------------- CC TEST ---------------
test.each(CC_tests)('%s + %s = %s', (char1, string1, string2, expected) => {
  let alphabet1 = get_input_alphabet(string1);
  let alphabet2 = get_input_alphabet(string2);
  let final_term = stringify(interpret(CC_functionJ(alphabet1, alphabet2) + enumerate_functionJ(alphabet1, alphabet1.indexOf(char1)))); 
  let expected_term = stringify(interpret(finite_string_functionJ(expected, alphabet2)));
  expect(final_term).toEqual(expected_term);
})

// --------------- CS TEST ---------------
test.each(CS_tests)('%s + %s = %s', (string1, string2, expected) => {
  let initial_alphabet = ['B', 'S'];
  let new_alphabet = ['B'];
  let string = 'BSSSSSSSSSSSSSS'
  let final_term = stringify(interpret(CS_functionJ(initial_alphabet, new_alphabet) + finite_string_functionJ('BSSSSSSSSSSSSSS', initial_alphabet)));
  
  let expected_term = stringify(interpret(finite_string_functionJ(string, new_alphabet)));
  expect(final_term).toEqual(expected_term);
})

// --------------- FINAL CONFIGURATION TEST ---------------
/**
PAPER WAS TECHNICALLY WRONG - AS(tape_alphabet) INSTEAD OF AS(input_alphabet)
CONFIGURATION[0] SHOULD NOT BE REVERSED IN THIS INSTANCE FOR UNIT TESTING
**/
test.each(FC_tests)('%s + %s = %s', (machine_list, configuration) => {	
	let states = machine_list[2];
	let tape_alphabet = machine_list[0];
	let input_alphabet = get_input_alphabet(configuration[0] + configuration[1] + configuration[2]);
	
	let FC = final_functionJ(tape_alphabet, input_alphabet);
	let input_term = configuration_functionJ(configuration[0], configuration[1], configuration[2], configuration[3], states, tape_alphabet);

	// console.log(FC + input_term);
	
	let final_term = stringify(interpret(FC + input_term));
	let expected = stringify(interpret(finite_string_functionJ(configuration[0] + configuration[1] + configuration[2], input_alphabet)));
	expect(reverse_functionJ(final_term, input_alphabet)).toEqual(reverse_functionJ(expected, input_alphabet));
 })


// --------------- INITIAL CONFIGURATION TEST ---------------
/**
INITIAL_STATE WAS NOT IN STATES
INDEX WAS THE INDEX IN THE TAPE_ALPHABET, NOT THE INPUT_ALPHABET
PAPER ASSUMES THAT THE INDICES OF ONE ALPHABET CORRELATE WITH THE INDICES OF ANOTHER (I.E., THE PAPPER IS VAGUE)
FOR SOME REASON, B IS ADDED TO THE END OF RIGHT SIDE
**/
test.each(IC_tests)('', (machine_list, string) => {
	let Δ = get_input_alphabet(string);
	
	let IC = initial_functionJ(machine_list[3], machine_list[2], machine_list[0], Δ);
	let input_term = finite_string_functionJ(string, Δ);
 
	let FC = final_functionJ(machine_list[0], Δ);
	let final_term = stringify(interpret(FC + '(' + IC + input_term + ')'));

	let term1 = stringify(interpret('(' + IC + input_term + ')'));
	let term2 = stringify(interpret(configuration_functionJ('', string[0], string.substring(1), machine_list[3], machine_list[2], machine_list[0])));
	
	expect(term1).toEqual(term2);
	//let output = reverse_functionJ(final_term, Δ)
	//expect(output).toEqual(string);
})

// --------------- STEP CONFIGURATION TEST ---------------
/**
OVERARCHING BRACKET AROUND N AND M CAUSED THE PROGRAM TO REDUCE INTERNALLY, RESULTING IN THE INCORRECT ANSWER
**/
test.each(SC_tests)('%s + %s = %s', (machine_list, string) => {	
	
	let Δ = get_input_alphabet(string);
	
	let ruleset = RULESET;
	let states = machine_list[2];
	
	/**
	for (var state of states) {
		if (state in ruleset === false) {
			ruleset[state] = JSON.parse('{}');
		}
		for (var character of machine_list[0]) {
			if (character in ruleset[state] === false) {
				ruleset[state][character] = [state, character, '_'];
			}
		}
	}
	**/
	
	let SC = step_functionJ(machine_list[0], machine_list[2], ruleset);
	
	let input_term;
	if (string.length < 2) {
		input_term = configuration_functionJ('', string, '', machine_list[3], machine_list[2], machine_list[0]);
	}
	else {
		input_term = configuration_functionJ('', string[0], string.substring(1), machine_list[3], machine_list[2], machine_list[0]);
	}
	
	let FC = final_functionJ(machine_list[0], Δ);

	// console.log(FC + '(' + SC + input_term + ')');
	let final_string = reverse_functionJ(stringify(interpret(FC + '(' + SC + input_term + ')')), Δ);
	
	let expected_configuration = stringify(interpret(configuration_functionJ('', string[0], string.substring(1), machine_list[3], machine_list[2], machine_list[0])));
	let expected_string = reverse_functionJ(stringify(interpret(FC + '(' + expected_configuration + ')')), Δ);
	
	console.log(final_string, expected_string);
	// expect(final_configuration).toEqual(expected_configuration);
})