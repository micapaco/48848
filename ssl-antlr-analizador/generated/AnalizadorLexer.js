// Generated from c:/Users/mikap/ssl-antlr-calculator/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,102,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,52,8,1,1,2,1,2,1,2,5,2,57,8,2,10,2,12,2,
60,9,2,1,3,4,3,63,8,3,11,3,12,3,64,1,4,1,4,5,4,69,8,4,10,4,12,4,72,9,4,1,
4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,88,8,9,1,10,1,
10,1,11,1,11,1,12,1,12,1,13,4,13,97,8,13,11,13,12,13,98,1,13,1,13,0,0,14,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,0,21,0,23,0,25,0,27,10,1,0,4,
2,0,65,90,97,122,1,0,48,57,5,0,33,34,44,44,46,46,58,59,63,63,3,0,9,10,12,
13,32,32,106,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,
0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,27,1,0,0,0,1,29,1,
0,0,0,3,51,1,0,0,0,5,53,1,0,0,0,7,62,1,0,0,0,9,66,1,0,0,0,11,75,1,0,0,0,
13,77,1,0,0,0,15,79,1,0,0,0,17,81,1,0,0,0,19,87,1,0,0,0,21,89,1,0,0,0,23,
91,1,0,0,0,25,93,1,0,0,0,27,96,1,0,0,0,29,30,5,117,0,0,30,31,5,115,0,0,31,
32,5,117,0,0,32,33,5,97,0,0,33,34,5,114,0,0,34,35,5,105,0,0,35,36,5,111,
0,0,36,2,1,0,0,0,37,38,5,118,0,0,38,39,5,101,0,0,39,40,5,114,0,0,40,41,5,
100,0,0,41,42,5,97,0,0,42,43,5,100,0,0,43,44,5,101,0,0,44,45,5,114,0,0,45,
52,5,111,0,0,46,47,5,102,0,0,47,48,5,97,0,0,48,49,5,108,0,0,49,50,5,115,
0,0,50,52,5,111,0,0,51,37,1,0,0,0,51,46,1,0,0,0,52,4,1,0,0,0,53,58,3,21,
10,0,54,57,3,21,10,0,55,57,3,23,11,0,56,54,1,0,0,0,56,55,1,0,0,0,57,60,1,
0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,6,1,0,0,0,60,58,1,0,0,0,61,63,3,23,
11,0,62,61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,8,1,0,0,
0,66,70,5,34,0,0,67,69,3,19,9,0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,
0,70,71,1,0,0,0,71,73,1,0,0,0,72,70,1,0,0,0,73,74,5,34,0,0,74,10,1,0,0,0,
75,76,5,123,0,0,76,12,1,0,0,0,77,78,5,125,0,0,78,14,1,0,0,0,79,80,5,59,0,
0,80,16,1,0,0,0,81,82,5,61,0,0,82,18,1,0,0,0,83,88,3,21,10,0,84,88,3,23,
11,0,85,88,5,32,0,0,86,88,3,25,12,0,87,83,1,0,0,0,87,84,1,0,0,0,87,85,1,
0,0,0,87,86,1,0,0,0,88,20,1,0,0,0,89,90,7,0,0,0,90,22,1,0,0,0,91,92,7,1,
0,0,92,24,1,0,0,0,93,94,7,2,0,0,94,26,1,0,0,0,95,97,7,3,0,0,96,95,1,0,0,
0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,101,6,13,
0,0,101,28,1,0,0,0,8,0,51,56,58,64,70,87,98,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class AnalizadorLexer extends antlr4.Lexer {

    static grammarFileName = "Analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'usuario'", null, null, null, null, "'{'", 
                         "'}'", "';'", "'='" ];
	static symbolicNames = [ null, "USUARIO", "BOOLEANO", "IDENTIFICADOR", 
                          "NUMERO", "CADENA", "LLAVE_IZQ", "LLAVE_DER", 
                          "PUNTOYCOMA", "ASIGNACION", "WS" ];
	static ruleNames = [ "USUARIO", "BOOLEANO", "IDENTIFICADOR", "NUMERO", 
                      "CADENA", "LLAVE_IZQ", "LLAVE_DER", "PUNTOYCOMA", 
                      "ASIGNACION", "CARACTER", "LETRA", "DIGITO", "SIMBOLO", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

AnalizadorLexer.EOF = antlr4.Token.EOF;
AnalizadorLexer.USUARIO = 1;
AnalizadorLexer.BOOLEANO = 2;
AnalizadorLexer.IDENTIFICADOR = 3;
AnalizadorLexer.NUMERO = 4;
AnalizadorLexer.CADENA = 5;
AnalizadorLexer.LLAVE_IZQ = 6;
AnalizadorLexer.LLAVE_DER = 7;
AnalizadorLexer.PUNTOYCOMA = 8;
AnalizadorLexer.ASIGNACION = 9;
AnalizadorLexer.WS = 10;



