/*
 *  PM2 ecosystem: production
 */
module.exports = {
  apps: [
    {
      name: 'unity-catalog',
      env: {
        NODE_ENV: 'production',
      },
      log_date_format: 'YYYY-MM-DDTHH:mm:ss',
      out_file: './var/log/pm2.log',
      script: './dist/server/app.js',
      watch: false,
    }
  ],
};
