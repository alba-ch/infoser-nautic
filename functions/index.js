const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const { loadConfig } = require('@medusajs/framework/utils');
const { createMedusaContainer } = require('@medusajs/framework');

admin.initializeApp();

// Initialize Medusa
const app = express();

exports.api = functions.https.onRequest(async (req, res) => {
  // Load Medusa configuration
  const config = loadConfig(process.env.NODE_ENV || 'development', {
    projectConfig: {
      databaseUrl: process.env.DATABASE_URL,
      http: {
        storeCors: process.env.STORE_CORS || '*',
        adminCors: process.env.ADMIN_CORS || '*',
        authCors: process.env.AUTH_CORS || '*',
        jwtSecret: process.env.JWT_SECRET || 'supersecret',
        cookieSecret: process.env.COOKIE_SECRET || 'supersecret',
      }
    }
  });

  try {
    // Create Medusa container
    const { container } = await createMedusaContainer(config);
    
    // Get the API router from Medusa
    const apiRouter = container.resolve('apiRouter');
    
    // Use the API router for all requests
    app.use('/api', apiRouter);
    
    // Handle the request
    return app(req, res);
  } catch (error) {
    console.error('Error initializing Medusa:', error);
    res.status(500).send('Internal Server Error');
  }
});