
let str_ruleset = `{
	"S0A": {
        "@": ["S0A", [["@", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]], 
		"0": ["S0A", [["0", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["S0A", [["1", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["S0A", [[">", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],		
        "λ": ["S0A", [["λ", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"B": ["S1A", [["B", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
    "S1A": {
        "@": ["S1A", [["@", "R"], ["@", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "F_@", "", 0]], 
        "0": ["S1A", [["0", "R"], ["0", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"],  "", "", 0]], 
		"1": ["S1A", [["1", "R"], ["1", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"],  "", "", 0]],
		">": ["S1A", [[">", "R"], [">", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "S_@", "", 0]],
        "λ": ["S1B", [["λ", "_"], ["", "_"],  ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"B": ["HALT", [["", "_"], ["", "_"],  ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
    "S1B": {
        "@": ["S1B", [["@", "R"], ["", "_"], ["@", "R"], ["", "_"], ["", "_"], ["", "_"], "", "F_@", 0]], 
		"0": ["S1B", [["0", "R"], ["", "_"], ["0", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["S1B", [["1", "R"], ["", "_"], ["1", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["S1B", [[">", "R"], ["", "_"], [">", "R"], ["", "_"], ["", "_"], ["", "_"], "", "S_@", 0]],		
        "λ": ["S1B", [["λ", "R"], ["", "_"], ["λ", "R"], ["", "_"], ["", "_"], ["", "_"], "", "A_λ", 0]],
		"B": ["HALT", [["", "_"], ["", "_"],  ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
    "S1C": {
        "@": ["S1C", [["@", "R"], ["", "_"], ["@", "R"], ["", "_"], ["", "_"], ["", "_"], "", "F_@", 0]], 
		"0": ["S1C", [["0", "R"], ["", "_"], ["0", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["S1C", [["1", "R"], ["", "_"], ["1", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["S1C", [[">", "R"], ["", "_"], [">", "R"], ["", "_"], ["", "_"], ["", "_"], "", "S_@", 0]],		
        "λ": ["S1C", [["λ", "R"], ["", "_"], ["λ", "R"], ["", "_"], ["", "_"], ["", "_"], "", "A_λ", 0]],
		"B": ["HALT", [["", "_"], ["", "_"],  ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"S1D": {
        "@": ["S1D", [["@", "R"], ["", "_"], ["", "_"], ["@", "R"], ["", "_"], ["", "_"], "", "F_@", 0]], 
		"0": ["S1D", [["0", "R"], ["", "_"], ["", "_"], ["0", "R"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["S1D", [["1", "R"], ["", "_"], ["", "_"], ["1", "R"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["S1D", [[">", "R"], ["", "_"], ["", "_"], [">", "R"], ["", "_"], ["", "_"], "", "S_@", 0]],		
        "λ": ["S1D", [["λ", "R"], ["", "_"], ["", "_"], ["λ", "R"], ["", "_"], ["", "_"], "", "A_λ", 0]],
		"B": ["S2A", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"S1E": {
        "@": ["S1E", [["@", "R"], ["", "_"], ["", "_"], ["@", "R"], ["", "_"], ["", "_"], "", "F_@", 0]], 
		"0": ["S1E", [["0", "R"], ["", "_"], ["", "_"], ["0", "R"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["S1E", [["1", "R"], ["", "_"], ["", "_"], ["1", "R"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["S1F", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "S_@", 0]],		
        "λ": ["S1F", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "A_λ", 0]],
		"B": ["S2A", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"S1F": {
        "@": ["S1F", [["@", "R"], ["", "_"], ["", "_"], ["", "_"], ["@", "R"], ["", "_"], "", "F_@", 0]], 
		"0": ["S1F", [["0", "R"], ["", "_"], ["", "_"], ["", "_"], ["0", "R"], ["", "_"], "", "", 0]],
		"1": ["S1F", [["1", "R"], ["", "_"], ["", "_"], ["", "_"], ["1", "R"], ["", "_"], "", "", 0]],
		">": ["S1F", [[">", "R"], ["", "_"], ["", "_"], ["", "_"], [">", "R"], ["", "_"], "", "S_@", 0]],		
        "λ": ["S1F", [["λ", "R"], ["", "_"], ["", "_"], ["", "_"], ["λ", "R"], ["", "_"], "", "A_λ", 0]],
		"B": ["S2A", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"S2A": {
        "@": ["S2A", [["@", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]], 
		"0": ["S2A", [["0", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["S2A", [["1", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["S2A", [[">", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],		
        "λ": ["S2B", [["", "_"], ["", "_"], ["λ", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"B": ["S2A", [["", ""], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"S2B": {
        "@": ["S2B", [["", ""], ["", "_"], ["@", "R"], ["", "_"], ["", "_"], ["@", "R"], "", "F_@", 0]], 
		"0": ["S2B", [["", ""], ["", "_"], ["0", "R"], ["", "_"], ["", "_"], ["0", "R"], "", "", 0]],
		"1": ["S2B", [["", ""], ["", "_"], ["1", "R"], ["", "_"], ["", "_"], ["1", "R"], "", "", 0]],
		">": ["S2B", [["", ""], ["", "_"], [">", "R"], ["", "_"], ["", "_"], [">", "R"], "", "S_@", 0]],		
        "λ": ["S2B", [["", ""], ["", "_"], ["λ", "R"], ["", "_"], ["", "_"], ["λ", "R"], "", "A_λ", 0]],
		"B": ["S2B", [["", ""], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"COPY": {
        "@": ["COPY", [["", ""], ["", "_"], ["", "_"], ["@", "R"], ["", "_"], ["@", "R"], "", "", 0]], 
		"0": ["COPY", [["", ""], ["", "_"], ["", "_"], ["0", "R"], ["", "_"], ["0", "R"], "", "", 0]],
		"1": ["COPY", [["", ""], ["", "_"], ["", "_"], ["1", "R"], ["", "_"], ["1", "R"], "", "", 0]],
		">": ["COPY", [["", ""], ["", "_"], ["", "_"], [">", "R"], ["", "_"], [">", "R"], "", "", 0]],		
        "λ": ["COPY", [["", ""], ["", "_"], ["", "_"], ["λ", "R"], ["", "_"], ["λ", "R"], "", "", 0]],
		"B": ["COPY", [["", ""], ["", "_"], ["", "_"], ["B", "_"], ["", "_"], ["B", "_"], "", "", 0]]
    },
	"CLEAR0": {
        "@": ["CLEAR1", [["@", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]], 
		"0": ["CLEAR1", [["0", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["CLEAR1", [["1", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["CLEAR1", [[">", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],		
        "λ": ["CLEAR1", [["λ", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"B": ["CLEAR0", [["", "R"],  ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"CLEAR1": {
        "@": ["CLEAR1", [["@", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]], 
		"0": ["CLEAR1", [["0", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["CLEAR1", [["1", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["CLEAR1", [[">", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],		
        "λ": ["CLEAR1", [["λ", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"B": ["CLEAR2", [["", "L"],  ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"CLEAR2": {
        "@": ["CLEAR2", [["B", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]], 
		"0": ["CLEAR2", [["B", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["CLEAR2", [["B", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["CLEAR2", [["B", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],		
        "λ": ["CLEAR2", [["B", "L"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"B": ["CLEAR2", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"S3PREREDEX": {
        "@": ["S3PREREDEX", [["@", "R"], ["@", "R"], ["", "_"], ["", "_"], ["", "_"], ["", ""], "", "", 0]], 
		"0": ["S3PREREDEX", [["0", "R"], ["0", "R"], ["", "_"], ["", "_"], ["", "_"], ["", ""], "", "", 0]],
		"1": ["S3PREREDEX", [["1", "R"], ["1", "R"], ["", "_"], ["", "_"], ["", "_"], ["", ""], "", "", 0]],
		">": ["S3PREREDEX", [[">", "R"], [">", "R"], ["", "_"], ["", "_"], ["", "_"], ["", ""], "", "", 0]],		
        "λ": ["S3PREREDEX", [["λ", "R"], ["λ", "R"], ["", "_"], ["", "_"], ["", "_"], ["", ""], "", "", 0]],
		"B": ["S3PREREDEX", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"S3REDUCT": {
        "@": ["S3REDUCT", [["@", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["@", "R"], "", "", 0]], 
		"0": ["S3REDUCT", [["0", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["0", "R"], "", "", 0]],
		"1": ["S3REDUCT", [["1", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["1", "R"], "", "", 0]],
		">": ["S3REDUCT", [[">", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], [">", "R"], "", "", 0]],		
        "λ": ["S3REDUCT", [["λ", "R"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["λ", "R"], "", "", 0]],
		"B": ["S3REDUCT", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"S3POSTREDEX": {
        "@": ["S3POSTREDEX", [["@", "R"], ["", "_"], ["", "_"], ["", "_"], ["@", "R"], ["@", "R"], "", "", 0]], 
		"0": ["S3POSTREDEX", [["0", "R"], ["", "_"], ["", "_"], ["", "_"], ["0", "R"], ["0", "R"], "", "", 0]],
		"1": ["S3POSTREDEX", [["1", "R"], ["", "_"], ["", "_"], ["", "_"], ["1", "R"], ["1", "R"], "", "", 0]],
		">": ["S3POSTREDEX", [[">", "R"], ["", "_"], ["", "_"], ["", "_"], [">", "R"], [">", "R"], "", "", 0]],		
        "λ": ["S3POSTREDEX", [["λ", "R"], ["", "_"], ["", "_"], ["", "_"], ["λ", "R"], ["λ", "R"], "", "", 0]],
		"B": ["S3POSTREDEX", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    },
	"COPY_FUNCTIONAL": {
        "@": ["COPY_FUNCTIONAL", [["", "_"], ["@", "R"], ["@", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]], 
		"0": ["COPY_FUNCTIONAL", [["", "_"], ["0", "R"], ["0", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"1": ["COPY_FUNCTIONAL", [["", "_"], ["1", "R"], ["1", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		">": ["COPY_FUNCTIONAL", [["", "_"], [">", "R"], [">", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],		
        "λ": ["COPY_FUNCTIONAL", [["", "_"], ["λ", "R"], ["λ", "R"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]],
		"B": ["S1A", [["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], ["", "_"], "", "", 0]]
    }
}`

function isNumber(n) { 
	return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

class M_HEAD {
    constructor(location) {
		this.location = location
    }

    get status() {
		return this.location;
    }

    update(location) {
        this.location = location;
    }
}

class M_TAPE {
    constructor(string) {
        this.tape = M_TAPE.parse(string);
    }

    get status() {
        return this.tape.join(' | ');
    }
	
	clear() {
		this.tape = M_TAPE.parse('B B B B');
	}
	
    extendLeft() {
        this.tape.unshift("B");
    }

    extendRight() {
        this.tape.push("B");
    }

    write(symbol, location) {
        this.tape[location] = symbol;
    }

    static parse(string) {
        return string.split(" ")
    }
}

class M_MACHINE {
    constructor(ruleset, tape) {
        this.ruleset = ruleset;
		this.state = 'S1A';
        this.tape = [tape, new M_TAPE('B B B B'), new M_TAPE('B B B B'), new M_TAPE('B B B B'), new M_TAPE('B B B B'), new M_TAPE('B B B B'), [], [], 0];
        this.head = [new M_HEAD(0), new M_HEAD(0), new M_HEAD(0), new M_HEAD(0), new M_HEAD(0), new M_HEAD(0)];
		this.tape_index = 0;
    }

    get status() {
		let status_list = [];
		status_list.push('CURRENT STATE: ' + this.state);
		for (let i = 0; i < 6; i++) {
			status_list.push(this.tape[i].status + '<br>' + '&thinsp;'.repeat(parseInt(this.head[i].location) * 4) + '^');
		}
		for (let i = 6; i < 8; i++) {
			status_list.push('[' + this.tape[i] + ']');	
		}
		status_list.push(this.tape[8]);
		
		return status_list;	
    }

    shiftHead(move, i) {
        if (this.head[i].location == 0 && move == "L") {
            this.tape[i].extendLeft();
        } else if (this.head[i].location == this.tape[i].tape.length - 1 && move == "R") {
            this.tape[i].extendRight();
            this.head[i].location += 1;
        } else if (move == "L") {
            this.head[i].location -= 1;
        } else if (move == "R") {
            this.head[i].location += 1;
        }
    }

	stepLookup() { 
        if (this.ruleset[this.state] && this.ruleset[this.state][this.tape[this.tape_index].tape[this.head[this.tape_index].location]]) {
            return this.ruleset[this.state][this.tape[this.tape_index].tape[this.head[this.tape_index].location]]
        } else if (isNumber(this.tape[this.tape_index].tape[this.head[this.tape_index].location])) {
			let [new_state, new_symbols] = structuredClone(this.ruleset[this.state]['0'])
			let numerical_symbol = this.tape[this.tape_index].tape[this.head[this.tape_index].location]
			for (let i = 0; i < 6; i++) {
				if ((new_symbols[i][0] === '0')) {
					new_symbols[i][0] = numerical_symbol;
				}
			}
			return [new_state, new_symbols]
        } else {
			return false			
		}
    }
	
	stepLookup_integer(symbol) { 
        if (this.ruleset[this.state] && this.ruleset[this.state][symbol]) {
            return this.ruleset[this.state][symbol]
        } else {
            return false
        }
    }

    step() {
		let new_state = this.stepLookup()[0]
		let new_symbols = this.stepLookup()[1] // new_symbols	
		
		console.log(new_state)
		console.log(new_symbols)
		
		// PSEUDO-STATE LOOKUP -------------------------------------
		
		switch(this.state) {
			case 'S0A':
				// SUBROUTINE FOR SETTING THE STACKTERM AND STACKREDEX EMPTY
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B')  {
					this.tape[6] = [];
					this.tape[7] = [];
				}
				break;		
			case 'S1B':
				// SUBROUTINE FOR CHECKING WHETHER THE STACKTERM IS EMPTY AFTER READING >
				if (new_symbols[7] === 'S_@' && !(this.tape[7].includes('F_@'))) {
					this.tape[7] = [];
					new_state = 'S1C';
				}
				break;
			case 'S1C':
				// SUBROUTINE FOR CHECKING THE TOP OF THE STACKTERM AND SYMBOL
				let temp = this.tape[this.tape_index].tape[this.head[this.tape_index].location];
				if ((temp === 'λ' || temp === '>') && this.tape[6][0] === 'F_@') {
					this.state = 'S1D';
					this.shiftHead('L', 1);
					this.tape[1].write('B',  this.head[1].location)
					return;
				} else if (!isNumber(temp))  {
					this.state = 'COPY_FUNCTIONAL';
					this.tape_index = 2; // FUNCTIONAL
					this.head[this.tape_index].update(0);
					return;
				}
				break;
			case 'S1D':
				// SUBROUTINE FOR CHECKING WHETHER THE STACKTERM IS EMPTY AFTER READING >
				if (new_symbols[7] === 'S_@' && !(this.tape[7].includes('F_@'))) {
					this.tape[7] = [];
					new_state = 'S1E';
				}
				break;
				
			case 'S2A':
				// SUBROUTNIE FOR RESETTING THE POSITION OF EACH TAPE TO THE BEGINNING
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B') {
					for (let i = 0; i < 5; i++) {
						this.head[i].update(0);
					}
					this.tape_index = 2; // FUNCTIONAL
					return;
				}
				break;
				
			case 'S2B':
				// SUBROUTINE FOR CHECKING WHETHER 
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === '>') {
					if (parseInt(this.tape[this.tape_index].tape[this.head[this.tape_index].location + 1]) === this.tape[8]) {
						this.state = 'COPY';
						this.tape_index = 3;
						return;
					}
				}
				else if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B') {
					this.state = 'CLEAR0'
					this.tape_index = 0;
					return;
				}
				break;
				
			case 'COPY':
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B') {
					this.state = 'S2B'
					this.head[this.tape_index].update(0);
					this.shiftHead('R', 2);
					this.shiftHead('R', 2);
					this.tape_index = 2; // FUNCTIONAL
					return;
				}
				break;
				
			case 'CLEAR2':
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B') {
					this.state = 'S3PREREDEX'
					this.shiftHead('R', 0);
					this.tape_index = 1; // PREREDEX
					this.head[this.tape_index].update(0);
					return;
				}
				break;
			
			case 'S3PREREDEX':
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B') {
					this.state = 'S3REDUCT'
					this.tape_index = 5; // REDUCT
					this.head[this.tape_index].update(0);
					return;
				}
				break;
				
			case 'S3REDUCT':
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B') {
					this.state = 'S3POSTREDEX'
					this.head[this.tape_index].update(0);
					this.tape_index = 4; // POSTREDEX
					return;
				}
				break;
			
			case 'S3POSTREDEX':
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B') {
					for (let i = 1; i < 6; i++) {
						this.tape[i].clear();
						this.head[i].update(0)
					}
					this.state = 'S0A';
					this.tape_index = 0; // CURRENT
					this.shiftHead('L', 0);
					return;
				}
				break;
			
			case 'COPY_FUNCTIONAL':
				// SUBROUTINE FOR 
				if (this.tape[this.tape_index].tape[this.head[this.tape_index].location] === 'B') {
					this.state = 'S1A';
					this.head[this.tape_index].update(0);
					this.tape_index = 0; // CURRENT
					this.tape[2].clear();
					return;
				}
				break;
		}
		
		// STANDARD LOOKUP  -------------------------------------
		
		for (let i = 0; i < 6; i++) {
			if (!(new_symbols[i][0] === '')) {
				this.tape[i].write(new_symbols[i][0], this.head[i].location)
			}
			this.shiftHead(new_symbols[i][1], i);
		}
		
		// STACK MANIPULATIONS -------------------------------------
		
		// STACKTERM
		
		if (new_symbols[6] === 'F_@') {
			this.tape[6].push('F_@');
		} else if (new_symbols[6] === 'A_λ') {
			this.tape[6].push('A_λ');
		} else if (new_symbols[6] === 'S_@') {
			while (this.tape[6].length !== 0 && this.tape[7][this.tape[6].length - 1] !== "F_@") {
				this.tape[6].pop()
			}
			if (this.tape[6].length !== 0) {
				this.tape[6].pop()
				this.tape[6].push('S_@')
			}
		}
		
		// STACKREDEX 
		
		if (new_symbols[7] === 'F_@') {
			this.tape[7].push('F_@');
		} else if (new_symbols[7] === 'A_λ') {
			this.tape[7].push('A_λ');
		} else if (new_symbols[7] === 'S_@') {
			while (this.tape[7].length !== 0 && this.tape[7][this.tape[7].length - 1] !== "F_@") {
				this.tape[7].pop()
			}
			if (this.tape[7].length !== 0) {
				this.tape[7].pop()
				this.tape[7].push('S_@')
			}
		}
		
		// COUNTER MANIPULATIONS -------------------------------------
		
		this.tape[8] = this.tape[7].filter(x => x === 'A_λ').length;

		// -------------------------------------		
		
		this.state = new_state;
		
    }

    async run() {
        while (this.stepLookup()) {
            M_PRINTER.print_status(this.status, true);
            this.step();
			await delay(10);
        }
		
		M_PRINTER.print_status(this.status, true);
    }
}

class M_PRINTER {
    static print(string, flag=false) {
		if (flag) this.clear()
        let div = document.getElementById(tape_id)
		div.innerHTML = string
    }
	
    static print_status(status_list, flag=false) {
		if (flag) this.clear();
		
		let tape_div = [document.getElementById("M_STATE"), document.getElementById("CURRENT"), document.getElementById("PREREDEX"), document.getElementById("FUNCTIONAL"), document.getElementById("ARGUMENT"), document.getElementById("POSTREDEX"), document.getElementById("REDUCT"), document.getElementById("STACKTERM"), document.getElementById("STACKREDEX"), document.getElementById("COUNTER")];
		
		for (let i = 0; i < 10; i++) {
			tape_div[i].innerHTML = status_list[i]
		}
    }
	
    static clear() {
		let tape_div = [document.getElementById("CURRENT"), document.getElementById("PREREDEX"), document.getElementById("FUNCTIONAL"), document.getElementById("ARGUMENT"), document.getElementById("POSTREDEX"), document.getElementById("REDUCT"), document.getElementById("STACKTERM"), document.getElementById("STACKREDEX"), document.getElementById("COUNTER")];
		for (const tape of tape_div) {
			tape.innerHTML = '';
		}
    }
}

$('#multi_tape_button').click(function() {
	let ruleset = JSON.parse(str_ruleset);
	let tape = new M_TAPE($("form")[1]['tape'].value.trim());
	m = new M_MACHINE(ruleset, tape);
	m.run();
	event.preventDefault();
});