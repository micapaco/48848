grammar Analizador;

// Reglas parser (sintaxis)
programa  : usuario* ;

usuario   : USUARIO IDENTIFICADOR LLAVE_IZQ atributo* LLAVE_DER ;

atributo  : IDENTIFICADOR ASIGNACION valor PUNTOYCOMA ;

valor     : NUMERO 
          | CADENA 
          | BOOLEANO ;

// Reglas lexer (léxicas)
USUARIO : 'usuario' ;

BOOLEANO : 'verdadero' | 'falso' ;

IDENTIFICADOR : LETRA (LETRA | DIGITO)* ;

NUMERO : DIGITO+ ;

CADENA : '"' CARACTER* '"' ;

LLAVE_IZQ : '{' ;
LLAVE_DER : '}' ;
PUNTOYCOMA : ';' ;
ASIGNACION : '=' ;

// Fragmentos internos
fragment CARACTER : LETRA | DIGITO | ' ' | SIMBOLO ;

fragment LETRA : [a-zA-Z] ;

fragment DIGITO : [0-9] ;

fragment SIMBOLO : '.' | ',' | '!' | '?' | ':' | ';' |'"';

// Ignorar espacios, tabs y saltos de línea
WS: [ \t\n\r\f]+ -> skip ;
