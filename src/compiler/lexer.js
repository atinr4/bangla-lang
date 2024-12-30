class Lexer {
    constructor(input) {
        this.input = input;
        this.tokens = [];
        this.position = 0;
        this.line = 1;
        this.column = 1;

        // Comprehensive Unicode support
        this.unicodeCategories = {
            bengaliLetters: /[\u0980-\u09FF]/,
            bengaliNumerals: {
                '০': 0, '১': 1, '২': 2, '৩': 3, '৪': 4,
                '৫': 5, '৬': 6, '৭': 7, '৮': 8, '৯': 9
            },
            supportedScripts: [
                { name: 'Bengali', range: '\u0980-\u09FF' },
                { name: 'Devanagari', range: '\u0900-\u097F' }
            ]
        };

        // Enhanced keyword mapping with Unicode support
        this.keywords = {
            'জ্ঞান': 'VARIABLE_DECLARATION',
            'ফাংশন': 'FUNCTION_DECLARATION',
            'শ্রেণি': 'CLASS_DECLARATION',
            'যদি': 'CONDITIONAL_IF',
            'অন্যথা': 'CONDITIONAL_ELSE',
            'ফেরত': 'RETURN_STATEMENT',
            'মুদ্রণ': 'PRINT_FUNCTION'
        };
    }

    tokenize() {
        while (this.position < this.input.length) {
            const char = this.input[this.position];

            // Advanced Unicode character handling
            if (this.isUnicodeCharacter(char)) {
                this.handleUnicodeToken(char);
                continue;
            }

            // Existing token handling logic
            this.position++;
        }

        return this.tokens;
    }

    isUnicodeCharacter(char) {
        return this.unicodeCategories.bengaliLetters.test(char);
    }

    handleUnicodeToken(char) {
        // Identify token type based on Unicode properties
        if (this.isBengaliNumeral(char)) {
            this.handleBengaliNumeral();
        } else if (this.isIdentifierStart(char)) {
            this.handleBengaliIdentifier();
        } else {
            this.handleSpecialUnicodeCharacter(char);
        }
    }

    isBengaliNumeral(char) {
        return Object.keys(this.unicodeCategories.bengaliNumerals).includes(char);
    }

    handleBengaliNumeral() {
        let number = '';
        while (this.isBengaliNumeral(this.input[this.position])) {
            number += this.unicodeCategories.bengaliNumerals[this.input[this.position]];
            this.position++;
        }

        this.tokens.push({
            type: 'BENGALI_NUMERAL',
            value: parseInt(number),
            line: this.line,
            column: this.column
        });
    }

    isIdentifierStart(char) {
        // More comprehensive identifier start check
        return /[a-zA-Z_\u0980-\u09FF]/.test(char);
    }

    handleBengaliIdentifier() {
        let identifier = '';
        while (this.isIdentifierStart(this.input[this.position])) {
            identifier += this.input[this.position];
            this.position++;
        }

        const tokenType = this.keywords[identifier] || 'BENGALI_IDENTIFIER';
        this.tokens.push({
            type: tokenType,
            value: identifier,
            line: this.line,
            column: this.column
        });
    }

    handleSpecialUnicodeCharacter(char) {
        // Handle special Unicode characters
        const unicodeInfo = this.getUnicodeCharacterInfo(char);
        this.tokens.push({
            type: 'UNICODE_CHARACTER',
            value: char,
            unicode: unicodeInfo,
            line: this.line,
            column: this.column
        });
    }

    getUnicodeCharacterInfo(char) {
        // Provide detailed Unicode character information
        return {
            character: char,
            codePoint: char.codePointAt(0),
            name: this.getUnicodeName(char),
            category: this.getUnicodeCategory(char)
        };
    }

    getUnicodeName(char) {
        // Placeholder for Unicode character name lookup
        // In a real implementation, use a comprehensive Unicode database
        return 'Unknown Character';
    }

    getUnicodeCategory(char) {
        // Determine Unicode character category
        const categories = {
            letter: /\p{L}/u,
            number: /\p{N}/u,
            punctuation: /\p{P}/u,
            symbol: /\p{S}/u
        };

        for (const [category, regex] of Object.entries(categories)) {
            if (regex.test(char)) return category;
        }

        return 'other';
    }

    // Error handling with Unicode context
    reportUnicodeError(message, char) {
        const unicodeInfo = this.getUnicodeCharacterInfo(char);
        throw new Error(`Unicode Error: ${message}
            Character: ${unicodeInfo.character}
            Code Point: U+${unicodeInfo.codePoint.toString(16)}
            Line: ${this.line}, Column: ${this.column}`);
    }
}

module.exports = Lexer;