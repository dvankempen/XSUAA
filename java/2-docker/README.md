# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Using Spring and Docker container.  This sample shows how we deploy a ready-made container to Cloud Foundry as alternative to using a buildpack

Business Logic App:
- application descriptor: pom.xml
- main:  Application.java

Local deployment: 
- build file: Dockerfile
- build command: docker build -t <repository>/<image> .
- run command: docker run -p 8080:8080 <repository>/<image>

Docker deployment:
- command: docker push <repository>/<image>l:<tag>    

Cloud Foundry deployment: 
- command: cf push
- application manifest: manifest.yml
