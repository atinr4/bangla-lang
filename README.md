# বাংলা (Bangla) Programming Language

## 🌟 Overview

বাংলা (Bangla) is a unique programming language inspired by Bengali culture and linguistics, designed to make programming more accessible and enjoyable for Bengali speakers and enthusiasts.

## 🚀 Features

- **Bengali-inspired Syntax**: Write code using Bengali keywords and characters
- **Unicode Support**: Full support for Bengali characters
- **Transpiled to JavaScript**: Compiles to standard JavaScript for wide compatibility
- **Cultural Representation**: Brings programming closer to Bengali linguistic roots

## 📦 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (Node Package Manager)

### Install Globally
```bash
npm install -g bangla-lang
```

### Local Installation
```bash
git clone https://github.com/atinr4/bangla-lang.git
cd bangla-lang
npm install
npm link
```

## 🖥️ Usage

### Compile a Bangla Script
```bash
bangla input.bong output.js
```

## 📝 Language Syntax Examples

### Variable Declaration
```bangla
জ্ঞান নাম = "রাজ"
জ্ঞান বয়স = ২৫
```

### Function Definition
```bangla
ফাংশন যোগ(ক, খ) {
    ফেরত ক + খ
}
```

### Class Declaration
```bangla
শ্রেণি ব্যক্তি {
    নির্মাণ(নাম) {
        এই.নাম = নাম
    }

    পরিচয়() {
        মুদ্রণ("আমি " + এই.নাম)
    }
}
```

## 🌈 Keyword Translations

| Bengali Keyword | English Equivalent | Purpose |
|----------------|-------------------|---------|
| জ্ঞান | let | Variable Declaration |
| ফাংশন | function | Function Definition |
| শ্রেণি | class | Class Declaration |
| যদি | if | Conditional Statement |
| অন্যথা | else | Alternative Condition |
| ফেরত | return | Return Statement |
| মুদ্রণ | print | Output Function |

## 🛠️ Compiler Architecture

The Bangla compiler follows these stages:
1. **Lexical Analysis**: Tokenize Bengali source code
2. **Parsing**: Create Abstract Syntax Tree (AST)
3. **Transformation**: Convert Bangla AST to JavaScript AST
4. **Code Generation**: Generate JavaScript code

### Lexical Analysis
- Handles Bengali Unicode characters
- Recognizes Bengali-specific keywords
- Converts Bengali numerals to standard numbers

### Parsing
- Creates an Abstract Syntax Tree (AST)
- Validates syntax according to Bangla language rules
- Prepares for transformation

### Transformation
- Converts Bangla-specific AST to JavaScript-compatible AST
- Handles language-specific constructs
- Prepares for code generation

### Code Generation
- Transforms AST into executable JavaScript
- Maintains original code structure
- Generates source maps for debugging

## 🔍 Advanced Features

### Unicode Support
- Full support for Bengali characters in identifiers
- Unicode-aware lexical analysis
- Transliteration capabilities

### Performance Optimization
- Efficient compilation process
- Minimal overhead in generated JavaScript
- Source map support for debugging

### Error Handling
- Detailed error messages in Bengali and English
- Line and column tracking
- Helpful compilation hints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add tests for new features
- Update documentation
- Respect Bengali linguistic nuances

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

Atin Roy - [GitHub Profile](https://github.com/atinr4)

## 🙏 Acknowledgements

- Bengali Language Enthusiasts
- Open Source Community
- JavaScript Ecosystem
- Unicode Consortium

## 🌍 Future Roadmap

- [ ] Enhanced Unicode Support
- [ ] More Complex Language Constructs
- [ ] IDE/Editor Integration
- [ ] Comprehensive Standard Library
- [ ] Web-based Playground
- [ ] Advanced Type Checking
- [ ] Performance Profiling Tools

## 📚 Learning Resources

- Bengali Programming Tutorials
- Unicode Character Reference
- JavaScript Transpilation Techniques
- Linguistic Programming Concepts

---

**Disclaimer**: This is an experimental language project aimed at cultural and educational exploration.

**Powered by ❤️ and Bengali Innovation**