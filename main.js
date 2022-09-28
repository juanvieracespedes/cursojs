let usuario= prompt("Ingrese su usuario");
let contraseña= prompt("Ingrese Contraseña");
let miCuenta= "0";
let cuentaTotal= "0";

if(usuario =="Admin" && contraseña=="1234"){
    alert("Bienvenido a Pulperia de Beto&Clau. Haga su pedido!");
    let pedido= prompt("Que vas a pedir? \n 1- Asado $400 \n 2- Pulpon $400 \n 3- Papas Fritas $150 \n 4- Coca-Cola $80 \n 5- Agua $60 \n 0- Finalizar pedido");
    if(pedido=="1"){
        miCuenta= ParseInt(miCuenta + 400);
    }
    if(pedido=="2"){
        miCuenta= ParseInt(miCuenta + 400);
    }
    if(pedido=="3"){
        miCuenta= ParseInt(miCuenta + 150);
    }
    if(pedido=="4"){
        miCuenta= ParseInt(miCuenta + 80);
    }
    if(pedido=="5"){
        miCuenta= ParseInt(miCuenta + 60);
    }


while (pedido != 0) {
    alert("Ingresaste " + pedido);
    pedido= prompt("Algo mas?");
    
}

if(pedido== "0"){
    cuentaTotal=miCuenta
    alert("El total a pagar es " + cuentaTotal );
}
}
else{
    alert("Usuario o contraseña incorrectas")
}

