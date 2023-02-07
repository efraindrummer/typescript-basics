export let name = "Efrain";
export const age: number = 35;
export const isValid: boolean = true;


name = 'melisa';
//name = 123;
//name = true;

export const templateString = `Esto es un string
multilinea
que puede tener
"" sobre
'' simple
inyectar valores ${name}
expresiones ${1 + 1}
numeros ${age}
booleanos ${isValid}
`;

console.log(templateString);
