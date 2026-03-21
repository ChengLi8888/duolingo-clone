import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgresql://neondb_owner:npg_iNuzcV1m4EQh@ep-raspy-cloud-a18x32op-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
});