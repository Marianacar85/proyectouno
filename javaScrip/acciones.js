/**Dirección */
document.getElementById("boton1").onmousemove= function(){
    console.log("Mostrar dirección")
    document.getElementById("direccion1").innerHTML="Vivo en: Av. Las Rosas 15987"
}
document.getElementById("boton1").onmouseout= function(){
    console.log("direccion")
    document.getElementById("direccion1").innerHTML=""
}
/**Teléfono */
document.getElementById("boton2").onmousemove= function(){
    console.log("Mostrar nr de teléfono")
    document.getElementById("telefono").innerHTML="Mi teléfono es: +54381998877"
}
document.getElementById("boton2").onmouseout= function(){
    console.log("Dejar de mostrar nr de teléfono")
    document.getElementById("telefono").innerHTML=""
}
/**Dirección de e-mail */
document.getElementById("boton3").onmousemove= function(){
    console.log("Mostrar correo electrónico")
    document.getElementById("e-mail").innerHTML="Mi e_mail es: mariana@gmail.com"
}
document.getElementById("boton3").onmouseout= function(){
    console.log("Dejar de mostrar correo")
    document.getElementById("e-mail").innerHTML=""
}
/**cambio  saludo incial */
document.getElementById("saludo").onmousemove= function(){
    console.log("Cambiar Título")
    document.getElementById("saludo").innerHTML="Querés saber mas sobre mi???"
}
document.getElementById("saludo").onmouseout= function(){
    console.log()
    document.getElementById("saludo").innerHTML="Bienvenid@s!!!"
}
 /**Boton genera cambio en info sobre mi */
document.getElementById("boton4").onclick= function miId(){
    console.log()

document.getElementById("boton5").innerHTML="Mi nombre es Mariana"

document.getElementById("boton4").onclick= function(){
    console.log()

document.getElementById("boton5").innerHTML="Tengo 25 años"

document.getElementById("boton4").onclick= function(){
    console.log()

document.getElementById("boton5").innerHTML="Soy Estudiante!!"

document.getElementById("boton4").onclick= function (){
    miId();
}

}
}
}


