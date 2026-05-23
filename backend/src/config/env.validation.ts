import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),

  PORT: Joi.number().default(3000),

  FRONTEND_URL: Joi.string().default('http://localhost:5173'),

  DATABASE_URL: Joi.string().required(),
  DIRECT_URL: Joi.string().optional(),

  SUPABASE_URL: Joi.string().uri().required(),
  SUPABASE_SERVICE_ROLE_KEY: Joi.string().required(),

  AZURE_OCR_ENDPOINT: Joi.string().uri().optional(),
  AZURE_OCR_KEY: Joi.string().optional(),

  GOOGLE_DRIVE_FOLDER_ID: Joi.string().optional(),
  GOOGLE_CLIENT_EMAIL: Joi.string().optional(),
  GOOGLE_PRIVATE_KEY: Joi.string().optional(),

  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('7d'),
});