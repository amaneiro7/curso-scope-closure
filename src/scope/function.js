function greeting() {
    let userName = 'Ana'; // Scope, solo puede ser inicializada dentro de la funcion 
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }
}

greeting();

console.log(userName); // como se asigno dentro de la funcion, no puede ser inicializada por fuera de la funcion