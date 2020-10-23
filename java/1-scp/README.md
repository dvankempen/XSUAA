# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Using Spring. 

Business Logic App:
- application descriptor: pom.xml
- main:  Application.java

Local deployment: 
- Maven build command: mvnw package
- Gradle build command: gradlew
- Run command: java -jar target/gs-spring-boot-docker-0.1.0.jar

Docker deployment:
- command: docker push <repository>/<image>l:<tag>    

Cloud Foundry deployment: 
- application manifest: manifest.yml
- command: cf push myapp --random-route
