![SAP HANA Academy](https://yt3.ggpht.com/-BHsLGUIJDb0/AAAAAAAAAAI/AAAAAAAAAVo/6_d1oarRr8g/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg)

# Cloud Foundry, UAA and XSUAA | SAP Cloud Platform – Cloud Foundry #

### Tutorial Video Playlist ### 
[SAP Cloud Platform | Cloud Foundry | Security](https://www.youtube.com/playlist?list=PLkzo92owKnVwAlv4joh1M5fhvaq8k0oaY)

## SAP Community Blog Post ##
For the blog post with documentation references, see https://blogs.sap.com/2020/10/08/developing-secure-applications-in-a-multicloud-environment-business-logic/

### Tutorial Video - Introduction ### 
In this first video of the series, we provide an introduction to the topic and cover SAP Cloud Platform security, Cloud Foundry security, and the UAA and XSUAA services. 

[![Cloud Foundry, UAA, and XSUAA](https://img.youtube.com/vi/DGi3Kf9imyE/0.jpg)](https://youtu.be/DGi3Kf9imyE "Cloud Foundry, UAA, and XSUAA")

### Tutorial Video - Business Logic App I ### 
In this second video of the series, we explore the "business logic app". This will be a simple Hello World app, using Node.js and Python, covering local development, dependencies, and start commands. We also show how we can bundle our app inside a Docker container. 

[![Business Logic App](https://img.youtube.com/vi/APbvu4MjB0M/0.jpg)](https://youtu.be/APbvu4MjB0M "Business Logic App")

### Tutorial Video - Business Logic App II ### 
In this third video of the series, we explore our options for deploying our "business logic app" to the cloud and specifically the Cloud Foundry environment. We look at deployment attributes, the manifest.yml attribute deployment file, differences between deploying different development languages (Node, Python, Java) and containers (Diego, Docker).  

[![Business Logic App | cf push](https://img.youtube.com/vi/DGi3Kf9imyE/0.jpg)](https://youtu.be/DGi3Kf9imyE "Business Logic App | cf push")

## Header ##

To connect to the SAP Cloud Platform, set the API endpoint and login. 
```
cf api https://api.cf.eu10.hana.ondemand.com
cf l[ogin]
cf push myapp --random-route
```













