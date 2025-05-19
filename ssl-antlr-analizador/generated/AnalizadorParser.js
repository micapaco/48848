// Generated from c:/Users/mikap/ssl-antlr-calculator/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,10,33,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,1,1,1,1,1,1,1,5,1,19,8,1,10,1,12,1,22,9,1,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,2,0,2,2,4,5,30,0,11,
1,0,0,0,2,14,1,0,0,0,4,25,1,0,0,0,6,30,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,
10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,1,1,0,0,0,13,11,1,0,0,0,14,15,
5,1,0,0,15,16,5,3,0,0,16,20,5,6,0,0,17,19,3,4,2,0,18,17,1,0,0,0,19,22,1,
0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,23,1,0,0,0,22,20,1,0,0,0,23,24,5,7,
0,0,24,3,1,0,0,0,25,26,5,3,0,0,26,27,5,9,0,0,27,28,3,6,3,0,28,29,5,8,0,0,
29,5,1,0,0,0,30,31,7,0,0,0,31,7,1,0,0,0,2,11,20];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'usuario'", null, null, null, null, "'{'", 
                            "'}'", "';'", "'='" ];
    static symbolicNames = [ null, "USUARIO", "BOOLEANO", "IDENTIFICADOR", 
                             "NUMERO", "CADENA", "LLAVE_IZQ", "LLAVE_DER", 
                             "PUNTOYCOMA", "ASIGNACION", "WS" ];
    static ruleNames = [ "programa", "usuario", "atributo", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 8;
	            this.usuario();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usuario() {
	    let localctx = new UsuarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_usuario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(AnalizadorParser.USUARIO);
	        this.state = 15;
	        this.match(AnalizadorParser.IDENTIFICADOR);
	        this.state = 16;
	        this.match(AnalizadorParser.LLAVE_IZQ);
	        this.state = 20;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 17;
	            this.atributo();
	            this.state = 22;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 23;
	        this.match(AnalizadorParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atributo() {
	    let localctx = new AtributoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_atributo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(AnalizadorParser.IDENTIFICADOR);
	        this.state = 26;
	        this.match(AnalizadorParser.ASIGNACION);
	        this.state = 27;
	        this.valor();
	        this.state = 28;
	        this.match(AnalizadorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 52) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.USUARIO = 1;
AnalizadorParser.BOOLEANO = 2;
AnalizadorParser.IDENTIFICADOR = 3;
AnalizadorParser.NUMERO = 4;
AnalizadorParser.CADENA = 5;
AnalizadorParser.LLAVE_IZQ = 6;
AnalizadorParser.LLAVE_DER = 7;
AnalizadorParser.PUNTOYCOMA = 8;
AnalizadorParser.ASIGNACION = 9;
AnalizadorParser.WS = 10;

AnalizadorParser.RULE_programa = 0;
AnalizadorParser.RULE_usuario = 1;
AnalizadorParser.RULE_atributo = 2;
AnalizadorParser.RULE_valor = 3;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_programa;
    }

	usuario = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsuarioContext);
	    } else {
	        return this.getTypedRuleContext(UsuarioContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsuarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_usuario;
    }

	USUARIO() {
	    return this.getToken(AnalizadorParser.USUARIO, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(AnalizadorParser.IDENTIFICADOR, 0);
	};

	LLAVE_IZQ() {
	    return this.getToken(AnalizadorParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(AnalizadorParser.LLAVE_DER, 0);
	};

	atributo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtributoContext);
	    } else {
	        return this.getTypedRuleContext(AtributoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterUsuario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitUsuario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitUsuario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtributoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_atributo;
    }

	IDENTIFICADOR() {
	    return this.getToken(AnalizadorParser.IDENTIFICADOR, 0);
	};

	ASIGNACION() {
	    return this.getToken(AnalizadorParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(AnalizadorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterAtributo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitAtributo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitAtributo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(AnalizadorParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(AnalizadorParser.CADENA, 0);
	};

	BOOLEANO() {
	    return this.getToken(AnalizadorParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.ProgramaContext = ProgramaContext; 
AnalizadorParser.UsuarioContext = UsuarioContext; 
AnalizadorParser.AtributoContext = AtributoContext; 
AnalizadorParser.ValorContext = ValorContext; 
