let usuario= prompt("Ingrese su usuario");
let contraseña= prompt("Ingrese Contraseña");
let miCuenta= parseInt("0");
let asado = parseInt("400");
let pulpon = parseInt("400");
let pfritas = parseInt("150");
let coca = parseInt("80");
let agua = parseInt("60");

if(usuario =="Admin" && contraseña=="1234"){
    alert("Bienvenido a Pulperia de Beto&Clau. Haga su pedido!");
    let pedido= prompt("Que vas a pedir? \n Asado $400 \n Pulpon $400 \n Papas Fritas $150 \n Coca-Cola $80 \n Agua $60 \n 0- Finalizar pedido");
    if(pedido=="Asado"){
        miCuenta= miCuenta + asado;
    }
    if(pedido=="Pulpon"){
        miCuenta= miCuenta + pulpon;
    }
    if(pedido=="Papas Fritas"){
        miCuenta= miCuenta + pfritas;
    }
    if(pedido=="Coca-Cola"){
        miCuenta= miCuenta + coca;
    }
    if(pedido=="Agua"){
        miCuenta= miCuenta + agua;
    }

while (pedido != 0) {
    alert("Ingresaste " + pedido);
    pedido= prompt("Algo mas?");
    
}

if(pedido== "0"){
    alert("El total a pagar es " + miCuenta );
}

if(pedido>="6"){
    alert("Comando incorrecto");
}
}
else{
    alert("Usuario o contraseña incorrectas")
}

