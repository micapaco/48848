import AnalizadorVisitor from './generated/AnalizadorVisitor.js';

class CustomAnalizadorVisitor extends AnalizadorVisitor {
    constructor() {
        super();
    }

    visitPrograma(ctx) {
        const usuarios = ctx.usuario();
        for (let usuario of usuarios) {
            this.visit(usuario);
        }
    }

    visitUsuario(ctx) {
        const id = ctx.IDENTIFICADOR().getText();
        const atributos = ctx.atributo().map(attr => this.visit(attr));

        console.log(`crearUsuario("${id}", [`);
        for (let { clave, valor } of atributos) {
            console.log(`  { clave: "${clave}", valor: ${valor} },`);
        }
        console.log("]);\n");
    }

    visitAtributo(ctx) {
        const clave = ctx.IDENTIFICADOR().getText();
        const valor = this.visit(ctx.valor());
        return { clave, valor };
    }

    visitValor(ctx) {
        if (ctx.NUMERO()) {
            return Number(ctx.getText());
        }
        if (ctx.CADENA()) {
            return ctx.getText();
        }
        if (ctx.BOOLEANO()) {
            return ctx.getText() === 'verdadero';
        }
        return null;
    }
}

export default CustomAnalizadorVisitor;
