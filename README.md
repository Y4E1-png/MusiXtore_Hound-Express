# MusiXtore: Hound Express

**English** · [Español](README.es.md)

**[Live demo](https://houndexpress-project.web.app)**

MusiXtore: Hound Express is a project developed through EBAC’s partner-company program with Hound Express. It extends MusiXtore music store with a shipment management module.

The store includes a searchable song catalog, a shopping cart, test user registration, and a simulated checkout. In the Guides section, users can create shipment records using a tracking number, view existing guides, and update their status. The React frontend connects to a Django REST API backed by PostgreSQL.

The demo frontend is hosted on Firebase Hosting and connects to the API on Render.

| Folder | What it contains |
| --- | --- |
| [front-end/](front-end/) | React, Vite, Redux Toolkit, and Axios |
| [back-end/](back-end/) | Django REST Framework, PostgreSQL, and Docker Compose |

## Run the backend

Start Docker Desktop. From the repository root, run:

```bash
cd back-end
cp -n .env.example .env
```

In `back-end/.env`, set these values. The first is the port exposed on your computer, and the second is the port Django listens on inside Docker.

```dotenv
DOCKER_WEB_PORT_FORWARD=8002
PORT=8000
```

Then, from `back-end/`, run:

```bash
docker compose up --build -d web postgres redis
docker compose exec web python manage.py migrate
```

Open the [songs endpoint](http://houndexpress-api.onrender.com/api/songs/) to check that Django responds. If the catalog is empty, add a sample song using the browsable API form.

## Run the frontend

In a second terminal, from the repository root, run:

```bash
cd front-end
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The frontend sends requests to `http://localhost:8002/api`. Run `npm run build` from `front-end/` to generate the production build in `dist/`.

## Try shipment management

1. Open **Guides** from the navigation menu.
2. Create a guide with a unique test tracking number, such as `DEMO-001`.
3. Find the new guide in the list and open it to update its status.
4. Move it from **Pending** to **In Transit**, then to **Delivered**.

## Try the checkout

1. Add a song to the cart and continue to checkout.
2. Enter fictitious payment details and review the order.
3. Confirm the purchase. After Django saves the order, the confirmation page shows the purchased songs and the cart is cleared.

Use fictitious data when testing registration and checkout.
