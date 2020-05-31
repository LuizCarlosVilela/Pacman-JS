var Ghost = function(x, y, cor){

    this.xi = x;
    this.yi = y;
    
    this.x = x;
    this.y = y;
    this.cor = cor;
    this.direcaoAtaual = Direcao.naoDefinida;

    this.desenhar = function(ctx){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x * largura, this.y * largura, largura, largura);
    }
}

Ghost.cores = new Array();
Ghost.cores.push("rgba( 85, 238, 85, 0.85)");
Ghost.cores.push("rgba( 85, 238, 238, 0.85)");
Ghost.cores.push("rgba( 238, 238, 85, 0.85)");
Ghost.cores.push("rbga( 238, 85, 85, 0.85)");
Ghost.cores.push("rbga( 238, 85, 238, 0.85");