# ProspectDesk

**A self-hosted prospecting CRM for managing business leads, outreach activities, follow-ups, and sales opportunities.**

ProspectDesk is a full-stack CRM application built to organize business prospecting in one place. It helps track potential clients, categorize businesses by niche, manage outreach activities, schedule follow-ups, and monitor opportunities through a sales pipeline.

The project focuses on practical product development, relational data modeling, production-oriented containerization, and maintainable application architecture.

> **Project status:** Personal portfolio project. Designed for local-first use and self-hosted deployment.

## Key Features

- **Prospect Management** — Create, update, search, filter, and organize business prospects.
- **Niche Management** — Manage business categories dynamically instead of relying on hardcoded options.
- **Business Audits** — Record research and audit information for potential clients.
- **Outreach Tracking** — Keep records of communication activities and follow-up schedules.
- **Sales Pipeline** — Track prospects as they move through configurable pipeline stages.
- **Follow-up Management** — Keep upcoming follow-ups visible to support consistent outreach.
- **Lightweight Deal Tracking** — Record and monitor potential business opportunities.
- **CSV Import & Export** — Transfer prospect data using a structured CSV workflow, with import validation and duplicate handling.
- **Responsive Interface** — Support desktop and mobile screen sizes.
- **User Feedback States** — Provide loading indicators, success/error notifications, and protection against duplicate submissions.

## Technology Stack

| Layer | Technology |
|---|---|
| Application | Next.js App Router |
| Language | TypeScript |
| ORM | Prisma |
| Database | MySQL 8.4 |
| Deployment | Docker, Docker Compose |
| Runtime | Node.js |
| Reverse Proxy Integration | Nginx Proxy Manager |
| Edge / Domain Routing | Cloudflare Tunnel |

## Architecture

ProspectDesk uses a containerized application and database setup.

```text
Browser
   |
   v
Cloudflare Tunnel
   |
   v
Nginx Proxy Manager
   |
   v
ProspectDesk (Next.js)
   |
   v
Prisma ORM
   |
   v
MySQL 8.4
```

The application and database run as separate Docker Compose services. MySQL uses a persistent Docker volume, while the application connects to the database through the Compose network.

For self-hosted deployment, the application can join an existing external Docker network used by Nginx Proxy Manager. This allows reverse-proxy routing without publishing the application's port on every network interface or exposing MySQL to the proxy network.

## Engineering Decisions

- **Relational data model:** Use Prisma and MySQL to manage related prospects, niches, pipeline stages, activities, and opportunities.
- **Database migrations:** Use committed Prisma migrations to evolve the schema without routinely recreating existing data.
- **Containerized deployment:** Package the application and database as separate services with explicit configuration and restart policies.
- **Persistent storage:** Keep database files in a named Docker volume so application container rebuilds do not inherently erase stored records.
- **Operational safety:** Keep environment-specific credentials outside source control and avoid committing database dumps or real prospect data.
- **Input and workflow validation:** Handle duplicate prospects, invalid import rows, and unsuccessful operations with explicit feedback.
- **Maintainability:** Separate application concerns and document setup, migrations, backups, and troubleshooting.

## Getting Started

### Prerequisites

- Docker Engine
- Docker Compose v2

For local development without Docker, install Node.js 20 or newer, npm, and MySQL 8 or newer.

### Run with Docker Compose

1. Clone the repository and enter the project directory.

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd prospectdesk
   ```

2. Create the Docker environment file.

   ```bash
   cp .env.docker.example .env.docker
   ```

3. Replace the example database passwords in `.env.docker` with strong, unique values. Never commit this file.

4. Start the application.

   ```bash
   docker compose --env-file .env.docker up -d --build
   ```

5. Open the application locally:

   `http://localhost:3000`

   For a server deployment behind Nginx Proxy Manager, configure the desired hostname to forward to the application container on port `3000`.

### Useful Commands

```bash
# View service status
docker compose --env-file .env.docker ps

# Follow application logs
docker compose --env-file .env.docker logs -f app

# View database logs
docker compose --env-file .env.docker logs -f mysql

# Restart the application
docker compose --env-file .env.docker restart app

# Stop services without deleting persistent database data
docker compose --env-file .env.docker stop
```

## Local Development

1. Create a local environment file from `.env.example`.
2. Configure `DATABASE_URL` for a MySQL database you control.
3. Install dependencies and generate Prisma Client.

   ```bash
   npm install
   npm run prisma:generate
   ```

4. Apply development migrations to your development database.

   ```bash
   npm run prisma:migrate
   ```

5. Optionally seed fictional development data.

   ```bash
   npm run prisma:seed
   ```

6. Start the development server.

   ```bash
   npm run dev
   ```

Open `http://localhost:3000`.

For production databases, use `npx prisma migrate deploy` rather than development migration or database-reset commands.

## Quality Checks

Run the available project checks before submitting changes or deploying:

```bash
npm run typecheck
npm test
npm run build
```

Run `npm run lint` once ESLint is configured for the project's current Next.js version.

## Data Management and Security

- Store credentials in environment files that are excluded from version control.
- Back up the MySQL database regularly.
- Keep production data separate from fictional seed data.
- Review database migrations before applying schema changes to an existing database.
- Avoid deleting Docker volumes when stopping or rebuilding the application.
- Treat prospect and contact information as confidential business data.

## Current Scope and Limitations

ProspectDesk is a personal portfolio project, not a production multi-tenant CRM.

The current scope does not include authentication, role-based access control, multi-user collaboration, automated web scraping, or external API integrations. It should not be exposed as an unrestricted public service containing real prospect data without appropriate access controls.

## Roadmap

Potential improvements include:

- Authentication and role-based access control.
- Automated testing for key prospect and pipeline workflows.
- More advanced prospect qualification and reporting.
- Integration with communication and scheduling tools.
- Automated deployment and monitoring.

## License

Add a license before redistributing this project. Until a license is specified, do not assume others have permission to reuse or redistribute the code.