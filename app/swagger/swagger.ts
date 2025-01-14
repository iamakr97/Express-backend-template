import userRoute from './userRoute.json';

const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "Express API Documentation",
      version: "1.0.0",
      description: "API documentation for the Express project",
      contact: {
        email: "iamakr.dev@gmail.com",
        },
    },
    servers: [
        {
        url: "http://localhost:5000/api",
        description: "Development server",
        },
    ],
    paths: {
        ...userRoute,
    },
};
  
  export default swaggerDocument;
  