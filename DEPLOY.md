# Simple Medusa Backend Deployment

## Deploy to Render (Easiest Method)

1. Sign up at [Render.com](https://render.com) (free, no credit card required)

2. Deploy directly from GitHub:
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Render will use the `render.yaml` configuration

That's it! Your backend will be deployed with a free PostgreSQL database.

## Alternative: Deploy to Railway

1. Sign up at [Railway.app](https://railway.app)

2. Create a new project and select "Deploy from GitHub repo"

3. Configure the deployment:
   - Root directory: `infoser-store`
   - Build command: `npm install && npm run build`
   - Start command: `npm start`

4. Add a PostgreSQL database from the Railway dashboard

5. Link the database by setting the `DATABASE_URL` environment variable

## Access Your Backend

Your backend will be available at the URL provided by the platform you chose.

## Notes

- Free tiers have limitations (sleep after inactivity, limited resources)
- For production, consider upgrading to a paid plan