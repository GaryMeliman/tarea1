# Tarea

Tarea numero uno

## Quick Start

### Crear archivo .env

#### Cambiar extención
En el root del proyecto hay un archivo .env.example el cual se debe cambiar a .env.
Dentro de archivo .en se debe cambiar la configuración de la base de datos si se requiere.

```yaml
DB_NAME=ehqGCIGLvY // Nombre de la base de datos
DB_USER=ehqGCIGLvY  // Nombre de usuario de la base de datos
DB_PASS=524N7ttN0s  // Contraseña de la base de datos
DB_HOST=remotemysql.com //Host de la base de datos
```

### Iniciar...

```shell
# instalar deps
npm install

# correr aplicación en modo desarrollo
npm run dev
```

### Uso de la aplicación

Ir a http://localhost:3000/api-explorer para explorar el enpoint creado en un ambiente visual.  
[Abrir swagger](http://localhost:3000/api-explorer)  
Ir a http://localhost:3000/api/v1/examples para ejecutar el endpoint creado directamente.  
[Abrir endpoint](http://localhost:3000/api/v1/examples)
