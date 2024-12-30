class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.position = 0;
        this.ast = { type: 'Program', body: [] };
    }

    parse() {
        while (this.position < this.tokens.length) {
            const declaration = this.parseDeclaration();
            if (declaration) {
                this.ast.body.push(declaration);
            }
        }
        return this.ast;
    }

    parseDeclaration() {
        const token = this.tokens[this.position];

        switch (token.type) {
            case 'KEYWORD_VARIABLE':
                return this.parseVariableDeclaration();
            case 'KEYWORD_FUNCTION':
                return this.parseFunctionDeclaration();
            case 'KEYWORD_CLASS':
                return this.parseClassDeclaration();
            default:
                this.position++;
                return null;
        }
    }

    parseVariableDeclaration() {
        // Consume 'জ্ঞান' keyword
        this.position++;

        const name = this.tokens[this.position].value;
        this.position++;

        // Consume assignment operator
        this.position++;

        const value = this.tokens[this.position].value;
        this.position++;

        return {
            type: 'VariableDeclaration',
            name,
            value
        };
    }

    parseFunctionDeclaration() {
        // Consume 'ফাংশন' keyword
        this.position++;

        const name = this.tokens[this.position].value;
        this.position++;

        // Parse parameters (simplified)
        const params = [];

        return {
            type: 'FunctionDeclaration',
            name,
            params
        };
    }

    parseClassDeclaration() {
        // Consume 'শ্রেণি' keyword
        this.position++;

        const name = this.tokens[this.position].value;
        this.position++;

        return {
            type: 'ClassDeclaration',
            name
        };
    }
}

module.exports = Parser;