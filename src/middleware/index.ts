import express from 'express';
import { corsConfig } from '@config/cors.js';
import { securityConfig } from '@/config/security.js';
import { morganConfig } from '@/config/morgan.js';
import { errorHandler } from '@/middleware/error.middleware.js';
import { notFoundHandler } from '@middleware/not-found.middleware.js';

export const setupMiddleware = (app: express.Application) => {
  app.use(securityConfig.helmet);
  app.use(securityConfig.compression);

  app.use(corsConfig);
  app.use(morganConfig);

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
};

export const setupErrorHandlers = (app: express.Application) => {
  app.use(notFoundHandler);
  app.use(errorHandler);
};
