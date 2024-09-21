# Challenge Eldar

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Para empezar

Ejecutar `npm install` para instalar las dependencias necesarias.

## Local Dev

Ejecutar `ng serve` para iniciar la aplicacion en modo desarrollo. Url por defecto `http://localhost:4200/`. 

## FrameWork requerido

Framework que se solicito utilizar para el challenge [PrimeNg](https://primeng.org/installation). 

## Api sugerida

La api utilizada en la aplicacion es [JsonPlaceholder](https://jsonplaceholder.typicode.com/). 

## Manejo de estado global

Se utilizo el framework [NgRx](https://ngrx.io/guide/store). 

## Usuarios

admin: {username: admin, role: admin}
user: {username: user, role: user}
El password de ambos no se esta controlando. Solo se valida que la longitud minima sea 6 caracteres.

Ejemplo:
  username: admin
  password: 12345678

## Roles

El rol de admin puede crear,editar y eliminar Posts y TODOs.

El rol de user solo puede ver, en el caso de la seccion TODOs puede cambiar el estado.

## Sobre la Aplicacion

1. Es responsive.
2. Cuanta con una funcion para cambiar el tema de oscuro a claro.
3. Por el momento tiene dos secciones, Posts y TODOs.
