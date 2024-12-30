// file:///Users/atinroy/CascadeProjects/bangla-lang/src/compiler/transformer.js
class Transformer {
    constructor(ast) {
        this.ast = ast;
    }

    transform() {
        // Create a transformed AST that's closer to JavaScript
        const transformedAST = {
            type: 'Program',
            body: this.transformBody(this.ast.body)
        };

        return transformedAST;
    }

    transformBody(body) {
        return body.map(node => {
            switch (node.type) {
                case 'VariableDeclaration':
                    return this.transformVariableDeclaration(node);
                case 'FunctionDeclaration':
                    return this.transformFunctionDeclaration(node);
                case 'ClassDeclaration':
                    return this.transformClassDeclaration(node);
                default:
                    return node;
            }
        });
    }

    transformVariableDeclaration(node) {
        return {
            type: 'VariableDeclaration',
            name: this.convertBengaliToEnglish(node.name),
            value: node.value
        };
    }

    transformFunctionDeclaration(node) {
        return {
            type: 'FunctionDeclaration',
            name: this.convertBengaliToEnglish(node.name),
            params: node.params || []
        };
    }

    transformClassDeclaration(node) {
        return {
            type: 'ClassDeclaration',
            name: this.convertBengaliToEnglish(node.name)
        };
    }

    // Utility method to convert Bengali identifiers to English-friendly names
    convertBengaliToEnglish(bengaliName) {
        // Simple transliteration (can be expanded)
        const transliterationMap = {
            'জ্ঞান': 'knowledge',
            'ফাংশন': 'function',
            'শ্রেণি': 'class',
            'নাম': 'name',
            'বাণী': 'message'
        };

        return transliterationMap[bengaliName] || bengaliName;
    }
}

module.exports = Transformer;