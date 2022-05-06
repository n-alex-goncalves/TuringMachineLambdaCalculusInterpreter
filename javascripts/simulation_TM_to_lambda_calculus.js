// Code for simulating Turing machines in the weak lambda calculus.
// Author: Nuno Goncalves (NunoAGoncalves)

var GLOBAL_TURING_MACHINE_TO_LAMBDA_CALCULUS;
var INPUT_ALPHABET;

function enumerate_function(list, index) {	
	if (index < 0) {
		throw 'ENUMERATE FUNCTION ERROR: Item not in list [' + list + '] !'; 
	}
	let term = '';
	let l = list.length;
	for (let i = 1; i < l + 1; i++) {
		term = term + 'λ[x_' + i + '].';
	}
	return '(' + term + '[x_' + (index + 1) + ']' + ')';
}

function finite_string_function(string, alphabet) {
	
	let prefix = ''
	let l = alphabet.length
	for (let i = 1; i < l + 1; i++) {
		prefix = prefix + 'λ[x_' + i + '].';
	}
	
	if (!string.length) {
		return '(' + prefix + 'λy.y' + ')'
	}
	
	let cur;
	let term = '';
	let stack = [];
	
	stack.push([string]);
	
	while (stack.length) {	
		cur = stack.pop();
		if (cur[0].length == 0) {
			return '(' + term + prefix + 'λy.y' + ')' + ')'.repeat(string.length); 
		}
		if (alphabet.includes(cur[0][0]) == false) { 
			throw 'FINITE STRING FUNCTION ERROR: Element in string is not in alphabet'; 
		}
		term = term + prefix + 'λy.[x_' + (alphabet.indexOf(cur[0][0]) + 1) + ']' + '('
		stack.push([cur[0].substring(1)]);	
	}
	
}

function reverse_finite_string_function(string, alphabet) {
	let res = string.match(/(?<=\.)\[(.*?)\]/g);
	let output = '';
	if (res == null) {
		return output; 
	}
	let index;
	for (let i = 0; i < res.length; i++) {
		index = res[i].match(/\d+/)[0] - 1
		if (index < alphabet.length) {
			output = output + alphabet[index]			
		}
	}
	return output;
}

function AC(alphabet) {
	let term = 'λa.λu.a'
	let prefix = ''
	for (let i = 1; i < alphabet.length + 1; i++) {
		prefix = prefix + 'λ[x_' + i + '].' 
	}
	let M;
	for (let i = 1; i < alphabet.length + 1; i++) {
		M = 'λu.' + prefix + 'λw.[x_' + i + ']u';
		term = term + '(' + M + ')';
 	}
	return '(' + term + 'u' + ')'
}

function AS(alphabet) {
	let term = 'H(λx.λu.λv.u'
	let prefix = '';
	for (let i = 1; i < alphabet.length + 1; i++) {
		prefix = prefix + 'λ[x_' + i + '].' 
	}
	let N;
	for (let i = 1; i < alphabet.length + 1; i++) {
		N = 'λu.λv.(λh.' + prefix + 'λg.[x_' + i + ']h)(xuv)'
		term = term + '(' + N + ')';
	}
	term = term + '(λw.w)v' + ')';
	return '(' + term + ')';
}

function AR(alphabet) {
	let term = 'H(λx.λu.λv.u';
	let prefix = '';
	for (let i = 1; i < alphabet.length + 1; i++) {
		prefix = prefix + 'λ[x_' + i + '].' 
	}	
	let P;
	for (let i = 1; i < alphabet.length + 1; i++) {
		P = 'λu.λv.xu(' + prefix + 'λh.[x_' + i + ']v)'; 
		term = term + '(' + P + ')';
	}
	term = term + '(λw.w)v' + ')';
	return '(' + term + ')';
}

function CC(initial_alphabet, new_alphabet) {
	let term = 'λa.a';
	let M;
	for (let i = 1; i < initial_alphabet.length + 1; i++) {
		if (new_alphabet.includes(initial_alphabet[i - 1])) {
			M = finite_string_function(initial_alphabet[i - 1], new_alphabet);
		} else {
			M = finite_string_function('', new_alphabet);
		}
		term = term + M;
	}
	return '(' + term + ')';
}

function CS(initial_alphabet, new_alphabet) {
	let term = 'H(λx.λu.u';
	let prefix = ''
	for (let i = 1; i < new_alphabet.length + 1; i++) {
		prefix = prefix + 'λ[x_' + i + '].'
	}
	let N;
	for (let i = 1; i < initial_alphabet.length + 1; i++) {
		if (new_alphabet.includes(initial_alphabet[i - 1])) {
			index = new_alphabet.indexOf(initial_alphabet[i - 1]) + 1
			N = 'λu.(λv.' + prefix + 'λh.[x_' + index + ']v)(xu)';
		} else {
			N = 'λu.xu';
		}
		term = term + '(' + N + ')';
	}
	term = term + finite_string_function('', new_alphabet) + ')'
	return '(' + term + ')';
}

function configuration_term(left_string, head, right_string, cur_state, states, tape_alphabet) {
	return '(' + 'λx.x' + finite_string_function(left_string.split('').reverse().join(''), tape_alphabet) + enumerate_function(tape_alphabet, tape_alphabet.indexOf(head)) + finite_string_function(right_string, tape_alphabet) + enumerate_function(states, states.indexOf(cur_state)) + ')'
}

function initial_configuration_function(initial_state, states, tape_alphabet, input_alphabet) {
	let term = 'H(λx.λu.u'
	let M; 
	for (let i = 1; i < input_alphabet.length + 1; i++) {
		index = tape_alphabet.indexOf(input_alphabet[i - 1])
		M = 'λu.(xu)(λu.λa.λv.λq.(λw.(λx.xu' + enumerate_function(tape_alphabet, index) + 'wq))(' + AC(tape_alphabet) + 'av))';
		term = term + '(' + M + ')';
	}
	N = configuration_term('', 'B', '', initial_state, states, tape_alphabet);
	return '(' + term + N + '))';
}

function final_configuration_function(tape_alphabet, input_alphabet) {
	return '(' + 'λx.x(λu.λa.λv.λq.' + AR(input_alphabet) + '(' + CS(tape_alphabet, input_alphabet) + 'u' + ')' + '(' + AS(input_alphabet) + '(' + CC(tape_alphabet, input_alphabet) + 'a' + ')' + '(' + CS(tape_alphabet, input_alphabet) + 'v' + '))))';
}
		
function step_configuration_function(tape_alphabet, states, ruleset) {
	let term = 'H(λx.λy.y(λu.λa.λv.λq.q' 
	
	let P = '(' + 'λv.λq.λx.x' + finite_string_function('', tape_alphabet) + enumerate_function(tape_alphabet, tape_alphabet.indexOf('B')) + 'vq' + ')';
	let R = '(' + 'λu.λq.λx.xu' + enumerate_function(tape_alphabet, tape_alphabet.indexOf('B')) + finite_string_function('', tape_alphabet) + 'q' + ')';
	
	let P_I = '', R_I = '';
	for (let i = 0, l = tape_alphabet.length; i < l; i++) {
		P_I = P_I + '(' + 'λu.λv.λq.λx.xu' + enumerate_function(tape_alphabet, i) + 'vq' + ')';
		R_I = R_I + '(' + 'λv.λu.λq.λx.xu' + enumerate_function(tape_alphabet, i) + 'vq' + ')';
	}
	
	let lst = [];
	let N, M, cur_state, cur_char;
	for (let i = 0, l = states.length; i < l; i++) {
		M = 'λu.λa.λv.a';
		cur_state = states[i];
		for (let j = 0, m = tape_alphabet.length; j < m; j++) {
			cur_char = tape_alphabet[j];
			if (cur_state === 'SH' || (cur_state in ruleset) == false) {
				N = 'λu.λv.λx.xu' + enumerate_function(tape_alphabet, j) + 'v' + enumerate_function(states, i);
			} else if ((cur_char in ruleset[cur_state]) == false) {
				N = 'λu.λv.x(λz.zu' + enumerate_function(tape_alphabet, tape_alphabet.indexOf(cur_char)) + 'v' + enumerate_function(states, states.indexOf(cur_state)) + ')';
			} else {
				let [new_state, new_char, new_dir] = ruleset[cur_state][tape_alphabet[j]];
				if (new_dir === 'L') {
					N = 'λu.λv.x(u' + P_I + P + '(' + AC(tape_alphabet) + enumerate_function(tape_alphabet, tape_alphabet.indexOf(new_char)) + 'v)' + enumerate_function(states, states.indexOf(new_state)) + ')'; 
				} else if (new_dir === 'R') {
					N = 'λu.λv.x(v' + R_I + R + '(' + AC(tape_alphabet) + enumerate_function(tape_alphabet, tape_alphabet.indexOf(new_char)) + 'u)' + enumerate_function(states, states.indexOf(new_state)) + ')';
				} else {
					N = 'λu.λv.x(λz.zu' + enumerate_function(tape_alphabet, tape_alphabet.indexOf(new_char)) + 'v' + enumerate_function(states, states.indexOf(new_state)) + ')';
				}
			}
			M = M + '(' + N + ')';
		}
		M = M + 'uv';
		lst.push([states[i], M]);
		term = term + '(' + M + ')';
	}

	term = term + 'uav))';
	return ['(' + term + ')', lst];
}


const AC_functionJ = function AC_sub(alphabet) { return AC(alphabet); }
const AS_functionJ = function AS_sub(alphabet) { return AS(alphabet); }
const AR_functionJ = function AR_sub(alphabet) { return AR(alphabet); }
const CC_functionJ = function CC_sub(alphabet1, alphabet2) { return CC(alphabet1, alphabet2); }
const CS_functionJ = function CS_sub(alphabet1, alphabet2) { return CS(alphabet1, alphabet2); }
const initial_functionJ = function intial_sub(initial_state, states, tape_alphabet, input_alphabet) { return initial_configuration_function(initial_state, states, tape_alphabet, input_alphabet); }
const final_functionJ = function final_sub(tape_alphabet, input_alphabet) { return  final_configuration_function(tape_alphabet, input_alphabet); }
const step_functionJ = function step_sub(tape_alphabet, states, ruleset) { return step_configuration_function(tape_alphabet, states, ruleset); }
const configuration_functionJ = function configu_sub(input_string, head, tail, initial_state, states, tape_alphabet) { return configuration_term(input_string, head, tail, initial_state, states, tape_alphabet); }	
const finite_string_functionJ = function finite_sub(string, alphabet) { return finite_string_function(string, alphabet); }	
const enumerate_functionJ = function enumerate_sub(list, index) { return enumerate_function(list, index); }
const reverse_functionJ = function reverse_sub(string, alphabet) { return reverse_finite_string_function(string, alphabet) }
module.exports = {
	AC_functionJ,
	AS_functionJ,
	AR_functionJ,
	CC_functionJ,
	CS_functionJ,
	initial_functionJ,
	final_functionJ,
	step_functionJ,
	configuration_functionJ,
	finite_string_functionJ,
	enumerate_functionJ,
	reverse_functionJ
}