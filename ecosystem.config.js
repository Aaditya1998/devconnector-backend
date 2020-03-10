module.exports = {
  apps: [{
    name: 'devconnector',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-66-197-195.ap-south-1.compute.amazonaws.com',
      key: '~/.ssh/key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Aaditya1998/devconnector-backend.git',
      path: '/home/ubuntu/devconector',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
