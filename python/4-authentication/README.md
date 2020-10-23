# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Code sample using an application router with cfenv to parse the VCAP environment variables.

Business Logic App:
- main: server.py
- dependencies: Flask. cfenv, hdbcli 
- start command: python server.py

App Router:
- routes: xs-app.json
- dependencies: @sap/approuter 
- start command: package.json

Security:
- XSUAA security descriptor: xs-security.json

Cloud Foundry deployment: 
- application manifest: manifest.yml
- command: cf push -f manifest.yml
