let usuario= prompt("Ingrese su usuario");
let contraseña= prompt("Ingrese Contraseña");

if(usuario =="Admin" && contraseña=="1234"){
    alert("Bienvenido a Pulperia de Beto&Clau. Haga su pedido!")
    let pedido= prompt("Que vas a pedir? Para finalizar, ingresa 0")

while (pedido != 0) {
    alert("Ingresaste " + pedido)
    pedido= prompt("Algo mas?")
    
}
}
else{
    alert("Usuario o contraseña incorrectas")
}

