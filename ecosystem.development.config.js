/*
 *  PM2 ecosystem: development
 */
module.exports = {
  apps: [
    {
      name: 'unity-catalog',
      autorestart: true,
      env: {
        NODE_ENV: 'development',
      },
      ignore_watch: [
        'dist/client',
        'node_modules'
      ],
      log_date_format: 'YYYY-MM-DDTHH:mm:ss',
      max_restarts: 15,
      //out_file: './var/log/pm2.development.log',
      script: 'dist/server/app.js',
      watch: ['dist'],
      watch_delay: 2000,
    }
  ],
};
