# Control 3 - 2024 - forma 1, semestre 1

En este control, deberemos de tomar una serie de criterios de aceptación y convertirlos en tests de todo el flujo.
Para poder ejecutar, debe instalar las librerías necesarias:

```
npm install
```

Finalmente ejecutar el script de tests:

```
npm run test
```

Si se fijan, el script de test definido en el archivo `package.json` tiene el siguiente comando:

```
jest --runInBand
```

La opción `--runInBand` permite correr los tests uno después del otro, y eso evita el problema al levantar
el servidor en un determinado puerto, puesto que cada test lo intenta hacer, y si encuentra que el
puerto ya se está usando, los tests se van a caer.

# Enunciado y casos de uso

Ésta API consiste en proveer una plataforma para consultar ciudades en base a 2 tipos de input:

- Ciudad
- País

Para este control, debemos crear los tests unitarios y de integración necesarios para cubrir los
siguientes casos de uso:

```
Dado: Una consulta al servicio
Cuando: realice una solicitud a /api/cities/by_country/:country, tomando en cuenta que :country es un string de largo >= 3, con caracteres compuestos por solo letras y encuentre resultados, independiente del case de :country
Entonces: debe devolver un status 200 y en el body, un arreglo con los objetos que hayan resultado de la búsqueda
```

```
Dado: Una consulta al servicio
Cuando: realice una solicitud a /api/cities/by_country/:country, tomando en cuenta que :country es un string de largo >= 3, con caracteres compuestos por solo letras y NO encuentre resultados, independiente del case de :country
Entonces: debe devolver un status 200 y en el body, un objeto con el siguiente formato:

{
    "message": "No se encontraron ciudades para el país ingresado"
}
```

```
Dado: Una consulta al servicio
Cuando: realice una solicitud a /api/cities/by_country/:country, tomando en cuenta que :country es un string de largo >= 3, con caracteres alfanuméricos o solo númericos, independiente del case de :country
Entonces: debe devolver un status 400 y en el body, un objeto con el siguiente formato:

{
    "message": "Solo se aceptan caracteres no numéricos"
}
```

```
Dado: Una consulta al servicio
Cuando: realice una solicitud a cualquiera de los endpoints que reciban parámetros y el largo sea < 3
Entonces: debe devolver un status 400 y en el body, un objeto con el siguiente formato:

{
    "message": "El país/ciudad ingresado debe tener al menos 3 caracteres"
}
```

Happy coding!
