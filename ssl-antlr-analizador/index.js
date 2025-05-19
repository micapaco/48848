import antlr4, { CharStreams, CommonTokenStream } from 'antlr4';
import fs from 'fs';
import readline from 'readline';

import AnalizadorLexer from './generated/AnalizadorLexer.js';
import AnalizadorParser from './generated/AnalizadorParser.js';
import CustomAnalizadorVisitor from './CustomAnalizadorVisitor.js';

async function main() {
    let input;

    // Leer desde archivo o teclado
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch {
        input = await leerCadena();
    }

    const erroresLexicos = [];
    const erroresSintacticos = [];

    // Custom error listener para errores sintácticos
    class CustomErrorListener extends antlr4.error.ErrorListener {
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            erroresSintacticos.push({
                tipo: 'sintáctico',
                linea: line,
                columna: column,
                mensaje: msg,
                lexema: offendingSymbol?.text ?? 'N/A'
            });
        }
    }

    // Crear el lexer y capturar errores léxicos
    const inputStream = CharStreams.fromString(input);
    const lexer = new AnalizadorLexer(inputStream);

    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            erroresLexicos.push({
                tipo: 'léxico',
                linea: line,
                columna: column,
                mensaje: msg,
                lexema : offendingSymbol?.text ?? 'N/A'
            });
        }
    });

    const tokens = lexer.getAllTokens();

    // Tabla de tokens
    if (tokens.length === 0) {
        console.error("No se generaron tokens.");
        return;
    }

    console.log("\nTokens:");
    console.log("----------------------------------------------------");
    console.log("| Lexema              | Token                      |");
    console.log("----------------------------------------------------");
    for (let token of tokens) {
        const type = AnalizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const text = token.text;
        console.log(`| ${text.padEnd(20)} | ${type.padEnd(25)}|`);
    }
    console.log("----------------------------------------------------");

    // Reprocesar entrada para el parser
    const lexer2 = new AnalizadorLexer(CharStreams.fromString(input));
    const tokenStream = new CommonTokenStream(lexer2);
    const parser = new AnalizadorParser(tokenStream);

    // Capturar errores sintácticos
    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener());

    const tree = parser.programa();

    // Mostrar errores, si hay
    if (erroresLexicos.length > 0 || erroresSintacticos.length > 0) {
        const todosLosErrores = erroresLexicos.concat(erroresSintacticos);
        console.error("\nErrores detectados:");
        for (let error of todosLosErrores) {
            console.error(`Error ${error.tipo} en línea ${error.linea}, columna ${error.columna}: ${error.mensaje} (Lexema: ${error.lexema})`);
        }
        return;
    }

    // Sin errores: mostrar árbol e interpretación
    console.log("\nEntrada válida.");
    console.log("\nÁrbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    console.log("\nInterpretación:");
    const visitor = new CustomAnalizadorVisitor();
    visitor.visit(tree);
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question("Ingrese la entrada: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
