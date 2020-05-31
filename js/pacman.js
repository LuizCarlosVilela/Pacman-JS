var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var btPausa = document.getElementById("btPausa");
var btNovo = document.getElementById("btNovo");

ctx.fillStyle = "#FF0000";
ctx.fillRect(20, 30, 50,100);

var nx = 0, ny = 0;

function novoJogo(){
    Cenario.mapa = new Array();

    for(i = 0; i < cenarioCriado.length; i++){
        Cenario.mapa.push(cenarioCriado[i].slice(0));
    }
    nx = Cenario.mapa[0].length;
    ny = Cenario.mapa.length;

    canvas.width = nx * largura;
    canvas.height = ny * largura;

    btPausa.disabled = false;
    btPausa.innerHTML = "Iniciar";

    desenharTudo();
}

function desenharTudo(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#9999EE";

    for(y = 0; y < ny; y++){
        for(x = 0; x < nx; x++){
            if(Cenario.mapa[y][x] == Cenario.parede){
                ctx.fillRect(x * largura, y * largura, largura, largura);
            }
            else if (Cenario.mapa[y][x] == Cenario.ponto){
                ctx.fillStyle = "black";
                ctx.fillRect(x * largura, y * largura, largura, largura);
            }
            else if (Cenario.mapa[y][x] == Cenario.poder){
                ctx.fillStyle = "red";
                ctx.fillStyle(x * largura, y * largura, largura, largura);
            }
        }
    }

}
novoJogo();