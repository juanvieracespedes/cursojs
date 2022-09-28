let usuario= prompt("Ingrese su usuario");
let contraseña= prompt("Ingrese Contraseña");

if(usuario =="Admin" && contraseña=="1234"){
    alert("Bienvenido a Pulperia de Beto&Clau. Haga su pedido!");
    let pedido= prompt("Que vas a pedir? \n 1- Asado $400 \n 2- Pulpon $400 \n 3- Papas Fritas $150 \n 4- Coca-Cola $80 \n 5- Agua $60 \n 0- Finalizar pedido");
    switch(pedido){
        case "1":
            console.log("Añadiste Asado");
            let Asado= ParseInt("400");
        break;
        case "2":
            console.log("Añadiste Pulpon");
            let Pulpon= ParseInt("400");
        break;
        case "3":
            console.log("Añadiste Papas Fritas");
            let PFritas= ParseInt("150");
        break;
        case "4":
            console.log("Añadiste Coca-Cola");
            let Coca= ParseInt("80");
        break;
        case "5":
            console.log("Añadiste Agua");
            let Agua= ParseInt("60");
        break;
            
    }

while (pedido != 0) {
    alert("Ingresaste " + pedido);
    pedido= prompt("Algo mas?");
    
}

if(pedido== "0"){
    let miCuenta= ParseInt(pedido + pedido)
    alert("El total a pagar es " + miCuenta )
}
}
else{
    alert("Usuario o contraseña incorrectas")
}

