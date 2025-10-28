module.exports = {
  supabase: {
    url: process.env.SUPABASE_URL || 'https://cnmwpaogauwvtezikmln.supabase.co',
    anonKey: process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubXdwYW9nYXV3dnRlemlrbWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NDE2NzAsImV4cCI6MjA3NzIxNzY3MH0.xccZcPiFvpbLbi-dsYvS3f3p4Hqhh-xvHq4_ImaBpGU',
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubXdwYW9nYXV3dnRlemlrbWxuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTY0MTY3MCwiZXhwIjoyMDc3MjE3NjcwfQ.X03Ic-EZETA-nyWfjiE0dVVkcv6gK44KaMzXe96LKlo'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'adamazam_super_secret_jwt_key_2024_very_long_and_secure'
  },
  server: {
    port: process.env.PORT || 5000,
    clientUrl: process.env.CLIENT_URL || 'https://adamazamsite.vercel.app'
  }
};
