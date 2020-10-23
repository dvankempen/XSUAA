# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Code sample using an application router with cfenv to parse the VCAP environment variables and xssec, body-parser, and passport for authorization. No database call. 

Business Logic:
- main: server.js
- dependencies: @sap/xsenv, @sap/xssec, body-parser, passport, express
- start command: package.json

App Router:
- routes: xs-app.json
- dependencies: @sap/approuter
- start command: package.json

Security:
- XSUAA security descriptor: xs-security.json

Cloud Foundry deployment: 
- application manifest: manifest.yml
- command: cf push -f manifest.yml
