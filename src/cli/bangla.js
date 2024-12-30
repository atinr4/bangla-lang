#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Lexer = require('../compiler/lexer');
const Parser = require('../compiler/parser');
const Transformer = require('../compiler/transformer');
const CodeGenerator = require('../compiler/code_generator');

class BanglaCompiler {
    static compile(inputFile, outputFile) {
        try {
            // Validate file extension
            if (path.extname(inputFile) !== '.bong') {
                throw new Error('Input file must have .bong extension');
            }

            const sourceCode = fs.readFileSync(inputFile, 'utf-8');

            const lexer = new Lexer(sourceCode);
            const tokens = lexer.tokenize();

            const parser = new Parser(tokens);
            const ast = parser.parse();

            const transformer = new Transformer(ast);
            const transformedAST = transformer.transform();

            const codeGenerator = new CodeGenerator(transformedAST);
            const generatedCode = codeGenerator.generate();

            fs.writeFileSync(outputFile, generatedCode);

            console.log(`Successfully compiled ${inputFile} to ${outputFile}`);
        } catch (error) {
            console.error('Compilation Error:', error);
            process.exit(1);
        }
    }
}

// CLI Interface
const [, , inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
    console.error('Usage: bangla <input.bong> <output.js>');
    process.exit(1);
}

BanglaCompiler.compile(inputFile, outputFile);