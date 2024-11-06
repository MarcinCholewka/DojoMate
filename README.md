# DojoMate Karate Tournament Management Application
This is a monorepo application for managing karate tournaments, including fight scheduling and tracking for competitors, coaches, parents, and administrators. The application is built with NestJS for the backend and NextJS for the frontend, organized using TurboRepo.

## Features

- User roles: Admin, Coach, Parent, Competitor
- Competitor management with belt colors and weight classes
- Tournament scheduling and management
- Fight tracking and results recording
- Integration with Prisma ORM for database management

## Prerequisites
Before running the application, ensure you have the following installed:

- Node.js (>=22.x)
- npm (>=10.x)
- PostgreSQL

## Getting Started

### 1. Clone the repository
```bash
git clone git@github.com:MarcinCholewka/DojoMate.git
cd dojomate
```

### 2. Install dependencies
```code
npm install
```

### 3. Configure the environment
### API
Reach to person which can provide this
```code
DATABASE_URL=postgresql******************
```

### WEB
```code
BACKEND_URL=http://localhost:8000
```

### 4. Set up the database
Navigate to the `apps/api` directory and run Prisma migrations to set up the database schema:
```bash
cd apps/api
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the application
Start both the NestJS API server and the NextJS client application using the shared start script:
```bash
npm run dev
```

The API server will start on `http://localhost:8000` and the client application will start on `http://localhost:3000`

### 6. Access the application
- API: `http://localhost:8000`
- Client: `http://localhost:3000`

## Project Structure
```
dojomate
├── apps/
│   ├── api/                    # NestJS backend application
│   │   ├── src/
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   ├── .env
│   │   ├── package.json
│   │   └── ...
│   ├── web/                    # NextJS frontend application
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── public/
│   │   ├── .env
│   │   ├── components.json     # shadcn config file
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   ├── tsconfig.json
│   │   └── ...
├── turbo.json                  # TurboRepo configuration
├── package.json                # Monorepo package.json
└── README.md                   # This file
```

## Scripts
### Monorepo scripts
- `npm run dev`: start both the API server and the client application

## License
This project is licensed under the MIT License
