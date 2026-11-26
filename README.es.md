# MusiXtore: Hound Express

[English](README.md) · **Español**

**[Ver demostración](https://houndexpress-project.web.app)**

MusiXtore: Hound Express es un proyecto desarrollado para Hound Express como parte del programa de empresas aliadas de EBAC. Amplía la tienda musical MusiXtore con un módulo de gestión de guías de envío.

La tienda incluye búsqueda en el catálogo, carrito, registro de usuarios de prueba y un proceso de compra simulado. En la sección Guides, se pueden crear guías con un número de rastreo, consultar las guías existentes y actualizar su estado. El frontend en React se conecta a una API REST de Django con PostgreSQL.

El frontend de la demo está alojado en Firebase Hosting y se conecta a la API en Render.

| Carpeta | Qué contiene |
| --- | --- |
| [front-end/](front-end/) | React, Vite, Redux Toolkit y Axios |
| [back-end/](back-end/) | Django REST Framework, PostgreSQL y Docker Compose |

## Levantar el backend

Abre Docker Desktop. Desde la raíz del repositorio, ejecuta:

```bash
cd back-end
cp -n .env.example .env
```

En `back-end/.env`, configura estos valores. El primero es el puerto expuesto en tu computadora y el segundo es el puerto donde escucha Django dentro de Docker.

```dotenv
DOCKER_WEB_PORT_FORWARD=8002
PORT=8002
```

Después, desde `back-end/`, ejecuta:

```bash
docker compose up --build -d web postgres redis
docker compose exec web python manage.py migrate
```

Abre la [API de canciones](http://localhost:8001/api/songs/](http://houndexpress-api.onrender.com/api/songs/)) para comprobar que Django responde. Si el catálogo está vacío, agrega una canción de ejemplo desde el formulario de la API navegable.

## Levantar el frontend

En otra terminal, desde la raíz del repositorio, ejecuta:

```bash
cd front-end
npm ci
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173). El frontend envía las peticiones a `http://localhost:8002/api`. Ejecuta `npm run build` desde `front-end/` para generar la compilación de producción en `dist/`.

## Probar el checkout

1. Agrega una canción al carrito y continúa al pago.
2. Escribe datos de pago ficticios y revisa el pedido.
3. Confirma la compra. Una vez que Django guarda el pedido, la pantalla final muestra las canciones compradas y se vacía el carrito.

Usa datos ficticios al probar el registro y el checkout.
