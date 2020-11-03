# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Simple Hello World code sample 

Business Logic App:
- application descriptor: package.json
- main: server.js
- dependencies: express 
- start command: node server.js

Cloud Foundry deployment: 
- command: cf push myapp --random-route -c "node server.js"
