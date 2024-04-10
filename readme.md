# Primer Parcial 2023 Arquitectura Orientada a Servicios

## Descripción

Servicio de API REST del primer parcial de la asignatura Arquitectura orientada a servicios (SOA), desarrollado con Node.js , Express y Postgresql.

Esta API permite obtener y almacenar información de productos varios, siempre y cuando el usuario este autenticado, registrando en una base de datos de posgrest. La API cuenta con las siguientes funciones:

* Autorización median Basic Auth
* Paginación
* Validación de parametros de entrada
* Manejador de errores

## Instalación

### Clonar el repositorio:

git clone https://github.com/darwingpacheco/primerParcialArquitecturaOrientadaServicios.git

## Instalación Manual

 npm install

 ## Características

 * Node js
 * NPM

 ## Comandos

 ### Run local:

 npm run dev

 ## Variables de Entorno

###> CONFIG SERVER <###
PORT = 8000
###> CONFIG SERVER <###

###> DB CONNECTION <###
DB_URL_PG=postgres://postgres:admin@localhost:5432/postgres
###> DB CONNECTION <###

###> JWT <###
SECRET_KEY=HhjbNIJSDV2412:
###> JWT <###

## Estructura del Proyecto

src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores 
 |--img\            # Imagenes públicas
 |--middlewares\    # Middleware Personalizados
 |--models\         # Postgrest models (data layer) 
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validator\      # Esquemas de validación
 |--index.js        # Express app


## Endpoints:

### Gestión productos
    
#### Producto
      -- getProduct         (/producto/all)   GET
      -- getProductoUnico   (/producto/:id)   GET
      -- updateProducto     (/product/:id )   PUT
      -- postProducto       (/productO)       POST
      -- deleteProductAll   (/producto/all)   DELETE
      -- deleteProduct      (/producto/:id)   DELETE

#### auth
        -- auth  (/auth)                      GET