// Script to add environment variables to Vercel
// Run this with: node add-env-vars.js

const { execSync } = require('child_process');

const envVars = [
  { name: 'NODE_ENV', value: 'production' },
  { name: 'PORT', value: '5000' },
  { name: 'CLIENT_URL', value: 'https://adamazam-2024.vercel.app' },
  { name: 'SUPABASE_URL', value: 'https://inuzmvgfqhgptygmtcsh.supabase.co' },
  { name: 'SUPABASE_ANON_KEY', value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImludXptdmdmcWhncHR5Z210Y3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0MDA5MTgsImV4cCI6MjA3Njk3NjkxOH0.co0Bm51dFmNzNghC5xJfNs6zzPgmurd-MU_irxzLFHg' },
  { name: 'SUPABASE_SERVICE_ROLE_KEY', value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImludXptdmdmcWhncHR5Z210Y3NoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTQwMDkxOCwiZXhwIjoyMDc2OTc2OTE4fQ.REPLACE_WITH_REAL_SERVICE_ROLE_KEY' },
  { name: 'JWT_SECRET', value: 'adamazam_super_secret_jwt_key_2024_very_long_and_secure' },
  { name: 'REACT_APP_API_URL', value: '/api' }
];

console.log('Adding environment variables to Vercel...\n');

envVars.forEach((envVar, index) => {
  try {
    console.log(`${index + 1}. Adding ${envVar.name}...`);
    execSync(`vercel env add ${envVar.name} ${envVar.value}`, { stdio: 'inherit' });
    console.log(`✅ ${envVar.name} added successfully\n`);
  } catch (error) {
    console.log(`❌ Failed to add ${envVar.name}: ${error.message}\n`);
  }
});

console.log('Environment variables setup complete!');
console.log('Now redeploy your project: vercel --prod');
