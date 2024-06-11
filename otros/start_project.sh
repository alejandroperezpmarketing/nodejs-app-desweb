#/bin/bash
cd ./app
npm install -g npm@10.8.0
npm install ol
npm install
npm audit fix --force
npm audit
npm install
#npm run dev
npm build

