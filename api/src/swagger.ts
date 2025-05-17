import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Tracking Api',
      version: '1.0.0',
    },
  },
  apis: [__dirname + '/controllers/**/*Controller.ts', __dirname + '/controllers/**/*Response.ts']
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiHandler = swaggerUi.serve;
export const swaggerDocs = swaggerUi.setup(swaggerSpec);
