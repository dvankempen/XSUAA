# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Code sample using a service instance of the 'hana' service with plan: HDI containers and schemas. 
Deploy with application manifest to automatically bind the service instance to the application.

Business Logic App:
- main: server.py
- dependencies: Flask 
- start command: python server.py

Cloud Foundry deployment: 
- application manifest: manifest.yml
- command: cf push -f manifest.yml
