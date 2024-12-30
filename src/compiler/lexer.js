class Lexer {
    constructor(input) {
        this.input = input;
        this.tokens = [];
        this.position = 0;

        // Bengali Keywords
        this.keywords = {
            'জ্ঞান': 'KEYWORD_VARIABLE',
            'ফাংশন': 'KEYWORD_FUNCTION',
            'শ্রেণি': 'KEYWORD_CLASS',
            'যদি': 'KEYWORD_IF',
            'অন্যথা': 'KEYWORD_ELSE',
            'ফেরত': 'KEYWORD_RETURN',
            'মুদ্রণ': 'KEYWORD_PRINT',
            'এই': 'KEYWORD_THIS',
            'নির্মাণ': 'KEYWORD_CONSTRUCTOR',
            'পরিচয়': 'KEYWORD_METHOD'
        };

        // Bengali Numerals
        this.bengaliNumerals = {
            '০': 0, '১': 1, '২': 2, '৩': 3, '৪': 4,
            '৫': 5, '৬': 6, '৭': 7, '৮': 8, '৯': 9
        };
    }

    tokenize() {
        while (this.position < this.input.length) {
            const char = this.input[this.position];

            // Handle Bengali Unicode characters
            if (this.isBengaliCharacter(char)) {
                this.handleBengaliIdentifier();
                continue;
            }

            // Handle Bengali Numerals
            if (this.isBengaliNumeral(char)) {
                this.handleBengaliNumber();
                continue;
            }

            // Handle whitespace and comments
            if (/\s/.test(char)) {
                this.position++;
                continue;
            }

            // Handle operators
            if (this.isBengaliOperator(char)) {
                this.handleBengaliOperator();
                continue;
            }

            this.position++;
        }

        return this.tokens;
    }

    isBengaliCharacter(char) {
        // Unicode range for Bengali characters
        const bengaliUnicodeRange = /[\u0980-\u09FF]/;
        return bengaliUnicodeRange.test(char);
    }

    isBengaliNumeral(char) {
        return Object.keys(this.bengaliNumerals).includes(char);
    }

    isBengaliOperator(char) {
        const bengaliOperators = ['+', '-', '*', '/', '=', '>', '<'];
        return bengaliOperators.includes(char);
    }

    handleBengaliIdentifier() {
        let identifier = '';
        while (this.isBengaliCharacter(this.input[this.position])) {
            identifier += this.input[this.position];
            this.position++;
        }

        const tokenType = this.keywords[identifier] || 'IDENTIFIER';
        this.tokens.push({
            type: tokenType,
            value: identifier
        });
    }

    handleBengaliNumber() {
        let number = '';
        while (this.isBengaliNumeral(this.input[this.position])) {
            number += this.bengaliNumerals[this.input[this.position]];
            this.position++;
        }

        this.tokens.push({
            type: 'NUMBER',
            value: parseInt(number)
        });
    }

    handleBengaliOperator() {
        const operators = {
            '+': 'PLUS',
            '-': 'MINUS',
            '*': 'MULTIPLY',
            '/': 'DIVIDE',
            '=': 'ASSIGN',
            '>': 'GREATER_THAN',
            '<': 'LESS_THAN'
        };

        const char = this.input[this.position];
        this.tokens.push({
            type: operators[char],
            value: char
        });
        this.position++;
    }
}

module.exports = Lexer;