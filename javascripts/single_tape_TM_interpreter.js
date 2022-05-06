// Code for creating a single-tape Turing machine interpreter
// Author: Nuno Goncalves (NunoAGoncalves)

const delay = ms => new Promise(res => setTimeout(res, ms));

// the machine head of the Turing machine
class Head {
    constructor(string) {
        let parsed = Head.parse(string);
        let state = parsed[0];
        let location = parsed[1];
        this.update(state, location);
    }

    get status() {
		return [this.state, this.location];
    }

    update(state, location) {
        this.state = state;
        this.location = location;
    }

    static parse(string) {
        let parsed = string.split(" ");
        parsed[1] = parseInt(parsed[1]);
        return parsed;
    }
}

// the Turing machine's tape
class Tape {
    constructor(string) {
        this.tape = Tape.parse(string);
    }

    get status() {
        return this.tape.join(' | ');
    }

    extend_left() {
        this.tape.unshift("B");
    }

    extend_right() {
        this.tape.push("B");
    }

    write(symbol, location) {
        this.tape[location] = symbol;
    }

    static parse(string) {
        return string.split(" ")
    }
}

// the literal machine controlling the rulesets.
class Machine {
    constructor(ruleset, tape, head) {
        this.ruleset = ruleset;
        this.tape = tape;
        this.head = head;
        this.running = false;
    }

    get status() {
		let [head_state, head_location] = this.head.status;
		return ['CURRENT STATE: ' + head_state, this.tape.status + '<br>' + '&#8200;'.repeat(parseInt(head_location) * 6) + '^']
    }

    shift_head(move) {
        if (this.head.location == 0 && move == "L") {
            this.tape.extend_left();
        } else if (this.head.location == this.tape.tape.length - 1 && move == "R") {
            this.tape.extend_right();
            this.head.location += 1;
        } else if (move == "L") {
            this.head.location -= 1;
        } else if (move == "R") {
            this.head.location += 1;
        }
    }

    step_lookup() {
        if (this.ruleset[this.head.state] && this.ruleset[this.head.state][this.tape.tape[this.head.location]]) {
            let output = this.ruleset[this.head.state][this.tape.tape[this.head.location]];
            if (output[0] == this.head.state && output[1] == this.tape.tape[this.head.location] && !(output[2] == 'L' || output[2] == 'R')) {
                return false;
            }
            return this.ruleset[this.head.state][this.tape.tape[this.head.location]];
        } else {
            return false;
        }
    }

    step() {
        let new_state = this.step_lookup()[0]
        let new_symbol = this.step_lookup()[1]
        let move = this.step_lookup()[2]
        this.tape.write(new_symbol, this.head.location)
        this.head.state = new_state
        this.shift_head(move)
    }

    async run() {
        this.running = true;
        while (this.step_lookup()) {
            Printer.print_status(this.status, true);
            this.step();
			await delay(1000);
        }
        Printer.print_status(this.status, true);
        Printer.print('FINAL STATE: ' + this.head.state + ' | HALT');
    }
}

// prints the Turing machine processing the tape
class Printer {
    static print(string, flag=false) {
		if (flag) this.clear()
        let div = document.getElementById("TuringMachineState")
		div.innerHTML = string
    }

    static print_status(status, flag=false) {
		if (flag) this.clear();
        let [state, tape] = status;
        let state_div = document.getElementById("TuringMachineState");
		let tape_div = document.getElementById("TuringMachineTape");
		state_div.innerHTML = state;
        tape_div.innerHTML = tape; 
    }

    static clear() {
        let div = document.getElementById("TuringMachineTape");
        div.innerHTML = '';
    }
}

// on click of the Turing machine interpreter button
$('#tape_button').click(function() {
	Printer.clear();
	
    // prepares the Turing machine by assigning the ruleset, tape and head
	let ruleset = JSON.parse($("form")[0]['ruleset'].value);
	let tape = new Tape($("form")[0]['tape'].value);
	let head = new Head($("form")[0]['head'].value);
	
    // creates an input_alphabet, tape_alphabet and states set for translating the Turing machine in the lambda calculus
	let input_alphabet = new Set();
	let tape_alphabet = new Set();
	let states = new Set();

    // adds the blank symbol to the tape_alphabet pre-emptively (it should not be in the input alphabet)
	tape_alphabet.add('B');

    // adds the initial head setting state to the set of states
	states.add(head.state);
	
	// updates state and tape_alphabet by iterating through the ruleset
	for (let state in ruleset) {
		states.add(state);
		for (let symbol in ruleset[state]) {
			states.add(ruleset[state][symbol][0]);
			tape_alphabet.add(ruleset[state][symbol][1]);
		}
	}
	
	// updates tape_alphabet and input_alphaebet by iterating through the tape
	for (let character of tape['tape']) {
		input_alphabet.add(character);
		tape_alphabet.add(character);
	}
	
    // spreads the set out into an array
	tape_alphabet = [...tape_alphabet];
	states = [...states];
	
    // necessary to simulate Turing machines in the lambda calculus
	GLOBAL_TURING_MACHINE_TO_LAMBDA_CALCULUS = [head.state, states, tape_alphabet, ruleset];

    // runs the Turing machine in the Turing machine interpreter
	m = new Machine(ruleset, tape, head);
	m.run()

	event.preventDefault();
})