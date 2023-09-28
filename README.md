This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Requirements

To store data locally, you have to start a PostgreSQL Server that will store the data. 

You can either run one locally in any way you like or you utilise the Docker Compose-File that's present in this project.
For that, please start the container:

```bash
# In daemon mode
docker-compose up -d

# Directly in your terminal
docker-compose up
```

Afterwards, you have to provide some information on how to connect to the PostgreSQL Database. For this, you can create
a `.env` file which will be automatically ingested by the application. 

The following would be sufficient content for that file if you use the docker-compose file:

```shell
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/holi?schema=public"
```

You can also use any other means to provide this information, but it is required by NextJS to configure the 
database connectivity.

### Running the DEV-Server

After you have provided the environment configuration, you can start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
