# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Simple Hello World code sample 

More elaborate example using Procfile for start command
Runtime.txt allows to specify required engine version (matching buildpack).
Application dependencies have been vendored (included).

Business Logic App:
- main: web.py
- dependencies: Flask (vendored)
- runtime: runtime.txt
- start command: Procfile

Cloud Foundry deployment: 
- application manifest: manifest.yml
- command: cf push myapp --random-route
