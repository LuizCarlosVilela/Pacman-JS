var Ghost = function(x, y, cor){

    this.xi = x;
    this.yi = y;
    
    this.x = x;
    this.y = y;
    this.cor = cor;
    this.direcaoAtual = Direcao.naoDefinida;

    this.desenhar = function(ctx){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x * largura, this.y * largura, largura, largura);
    }


    this.listaDirecoes = new Array();
    this.checarDirecoes = function() {

        this.listaDirecoes.length = 0;
        if (this.direcaoAtual != Direcao.naoDefinida) {
            this.listaDirecoes.push(this.direcaoAtual);
        }
        if (this.direcaoAtual != Direcao.cima && this.direcaoAtual !=
            Direcao.baixo) {
            this.listaDirecoes.push(Direcao.cima);
            this.listaDirecoes.push(Direcao.baixo);
        }
        if (this.direcaoAtual != Direcao.esquerda && this.direcaoAtual !=
            Direcao.direita) {
            this.listaDirecoes.push(Direcao.esquerda);
            this.listaDirecoes.push(Direcao.direita);
        }

        var i = 0;
        while (i < this.listaDirecoes.length) {
            var remover = false;

            switch (this.listaDirecoes[i]) {
                case Direcao.cima:
                    if (this.y <= 1) {
                        remover = true;
                    } 
                    else {
                        if (Cenario.mapa[this.y - 1][this.x] == Cenario.parede) {
                            remover = true;
                        }
                    }
                    break;

                case Direcao.baixo:
                    if (this.y >= ny - 2) {
                            remover = true;
                    } 
                    else {
                        if (Cenario.mapa[this.y + 1][this.x] == Cenario.parede) {
                        remover = true;
                        }
                    }
                    break;

                case Direcao.esquerda:
                    if (this.x <= 1) {
                        remover = true;
                    } 
                    else {
                        if (Cenario.mapa[this.y][this.x - 1] == Cenario.parede) {
                        remover = true;
                        }
                    }
                    break; 
                case Direcao.direita:
                    if (this.x >= nx - 2) {
                        remover = true;
                    } 
                    else {
                        if (Cenario.mapa[this.y][this.x + 1] == Cenario.parede) {
                            remover = true;
                        }
                    }
                    break;
                } 
                if (remover) {
                    this.listaDirecoes.splice(i, 1);
                } else {
                    i++;
                }
            } //Fim do WHILE
        } //Fim da função checarDirecoes()
                        

    this.mover = function(){
        this.checarDirecoes();
        var movimento = Direcao.naoDefinida;
        var aleatorio = Math.random();

        Ghost.chanceMovIgual = 0.50;

        if(aleatorio < Ghost.chanceMovIgual || this.listaDirecoes.lenght == 1){
            movimento = this.listaDirecoes[0];
        }
        else{
            chanche = (1 - Ghost.chanceMovIgual) / (this.listaDirecoes.lenght -1);

            for(ca = 1; ca < this.listaDirecoes.lenght; ca++){

                if(aleatorio < Ghost.chanceMovIgual + (ca *chance)){
                    movimento = this.listaDirecoes[ca];
                    break;
                }
            }
        }

        this.direcaoAtual = movimento;

        switch(movimento){
            case Direcao.cima:
                this.y--;
                break;
            case Direcao.baixo:
                this.y++;
                break;
            case Direcao.esquerda:
                this.x--;
                break;
            case Direcao.direita:
                this.x++;
                break;
            default:
                break; 
        }
    }

}

Ghost.cores = new Array();
Ghost.cores.push("rgba( 85, 238, 85, 0.85)");
Ghost.cores.push("rgba( 85, 238, 238, 0.85)");
Ghost.cores.push("rgba( 238, 238, 85, 0.85)");
Ghost.cores.push("rbga( 238, 85, 85, 0.85)");
Ghost.cores.push("rbga( 238, 85, 238, 0.85");