# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Query SAP HANA Cloud using SAP HANA client (local)

Business Logic App:
- application descriptor: package.json
- main: server.js
- dependencies: @sap/hana-client 
- start command: node server.js

Cloud Foundry deployment: 
- application manifest: manifest.yml
- command: cf push myapp --random-route
