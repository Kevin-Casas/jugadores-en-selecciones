# Jugadores en Selecciones - Mundial 2026

API REST desarrollada con **NestJS** para la gestión de jugadores convocados a selecciones nacionales participantes del Mundial 2026. El proyecto está diseñado para practicar y aprender conceptos fundamentales de desarrollo backend con NestJS, utilizando **TypeORM** para la persistencia de datos y **PostgreSQL** como sistema de gestión de base de datos.

## Tecnologías

| Tecnología | Descripción |
|------------|-------------|
| NestJS | Framework para el desarrollo de aplicaciones backend con Node.js. |
| TypeORM | ORM para la gestión de entidades y acceso a la base de datos. |
| PostgreSQL | Sistema de gestión de base de datos relacional. |
| Swagger | Herramienta para documentación de endpoints. |

## Requisitos

Antes de ejecutar el proyecto, asegúrate de contar con:

- Node.js 22 o superior
- npm 10 o superior
- PostgreSQL 16 o superior

## Instalación

1. Clona el repositorio.

```bash
git clone https://github.com/Kevin-Casas/jugadores-en-selecciones.git
```

2. Accede al directorio del proyecto.

```bash
cd jugadores-en-selecciones
```

3. Instala las dependencias.

```bash
npm install
```

4. Configura las variables de entorno.

Crea un archivo `.env` en la raíz del proyecto con la configuración de tu base de datos. Ejemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password
DB_DATABASE=jugadores_db
```

## Inicio del proyecto

### Modo desarrollo

```bash
npm run start:dev
```

### Modo producción

```bash
npm run start:prod
```

Una vez iniciado el servidor, la API estará disponible en:

```
http://localhost:3000
```

## Entidad Jugador

La entidad principal del proyecto representa a un jugador perteneciente a una selección nacional.

| Campo | Descripción |
|--------|-------------|
| nombre | Nombre completo del jugador. |
| equipo | Equipo al que pertenece. |
| posicion | Posición de juego del jugador. |
| goles | Goles realizados por el jugador. |
| asistencias | Asistencias realizadas por el jugador. |
| tarjetas_rojas | Tarjetas Rojas obtenidas por jugador. |
| tarjetas_amarillas | Tarjetas Amarillas obtenidas por jugador. |
| partidos_jugados | Cantidad de partidos jugados por el Jugador. |

## Objetivos del proyecto

Este proyecto busca servir como práctica para comprender conceptos fundamentales del desarrollo de aplicaciones con NestJS, entre ellos:

- Creación de proyectos con NestJS.
- Organización por módulos.
- Controladores (Controllers).
- Servicios (Services).
- CRUD básico.
- Integración con PostgreSQL mediante TypeORM.
- Definición de entidades.
- Inyección de dependencias.
- Buenas prácticas en la estructura de un proyecto backend.
- Validation Pipes.
- Interceptors.
- Middleware.
- Docker.

## Versiones

### Versión 2.0.0
- Implementación del proyecto base con NestJS.
- Configuración de PostgreSQL mediante TypeORM.
- Creación de la entidad **Jugador**.
- Implementación de operaciones CRUD básicas para jugadores.
- Implementación de excepciones simples para las operaciones CRUD.
- Implementación de Logger Middleware.
- Implementación de Validation Pipes.
- Docker.
- Implementación de Rate Limiting.
- Implementación de Cache con cache-manager.
- Implementación de Swagger.
- Implementación de Helmet
- Implementación de paginación.
- Inclución de campos de datos reales para jugadores.

---
