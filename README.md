# Formula One API

A simple RESTful API for Formula 1 teams and drivers, built with [Fastify](https://www.fastify.io/) and TypeScript.

## Project Structure

```
.env
.gitignore
package.json
tsconfig.json
docs/
src/
  app.ts
  server.ts
  controllers/
    formula-controller.ts
  models/
    interfaces/
      IDriverParams.ts
      IDrivers.ts
      IResponseService.ts
      ITeams.ts
  repositories/
    driver-Repository.ts
    team-Repository.ts
  services/
    driver-service.ts
    team-service.ts
  utils/
    uStatusCode.ts
```

## Description

This project provides endpoints to retrieve information about Formula 1 teams and drivers. It uses in-memory data for demonstration purposes and is organized using a layered architecture:

- **Controllers**: Handle HTTP requests and responses.
- **Services**: Business logic and data processing.
- **Repositories**: Data access layer (currently in-memory arrays).
- **Models/Interfaces**: TypeScript interfaces for type safety.
- **Utils**: Utility functions and enums.

## Endpoints

- `GET /teams` - List all teams
- `GET /teams/:id` - Get a team by ID
- `GET /drivers` - List all drivers
- `GET /drivers/:id` - Get a driver by ID

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```sh
npm install
```

### Running the Project

Development mode:

```sh
npm run start:dev
```

Watch mode (auto-restart on changes):

```sh
npm run start:watch
```

Production build:

```sh
npm run start:dist
```

## Environment Variables

Set the server port in `.env`:

```
PORT=3636
```

## License

This project is for educational purposes.

---

Feel free to contribute
