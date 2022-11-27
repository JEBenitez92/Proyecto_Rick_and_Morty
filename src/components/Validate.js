const regexEmailUsuario = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,35}$/i;
const regexContraseña = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,10}/

export function validate(useData) {
    const error = {};
//validar usuario:
    if(useData.usuario.length === 0){
        error.usuario= "El campo no puede estar vacio"
    }
    if(useData.usuario.length > 35){
        error.usuario="El nombre de usuario supera los catacteres maximos!!"
    }
    if(!regexEmailUsuario.test(useData.usuario)){
        error.usuario= `Usuario invalido.Compruebe que su usuario:
        -Se un correo electronico.
        -Que el campo no este vacio.
        -Que tenga un maximo de 35 caracteres`
    }
//validar contraseña:
    if(useData.contraseña.length < 6){
        error.contraseña="Contraseña muy corta"
    }
    if(useData.contraseña.length > 10){
        error.contraseña="La contraseña supera los carcteres maximos"
    }
    if(!regexContraseña.test(useData.contraseña)){
        error.contraseña= `Contraseña incorrecta!!
        Recuerde:
        -Debe tener entre 6 y 10 caracteres.
        -Debe tener al menos una letra mayuscula y una minuscula.
        -Debe tener al menos un caracter especial Ej:#,.,*,-
        -Ejemplo de contraseña valida: wMH432595@`
    }
    return error;
}