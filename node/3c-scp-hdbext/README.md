# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Query SAP HANA Cloud using SAP HANA client using a service instance of the 'hana' service with plan: HDI containers and schemas. 

Business Logic App:
- application descriptor: package.json
- main: server.js
- dependencies: @sap/hdbext, @sap/xsenv
- start command: node server.js

Cloud Foundry deployment: 
- application manifest: manifest.yml
- command: cf push -f manifest.yml
