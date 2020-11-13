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

To connect to the SAP Cloud Platform, set the API endpoint and login. You can use the cf target command to view or set the Cloud Foundry Org ans Space.
```
cf api https://api.cf.eu10.hana.ondemand.com
cf l[ogin] --sso
cf t[arget]
```
To publish the app use the push command. 
```
cf push myapp --random-route
```

[![Business Logic App | cf push](https://img.youtube.com/vi/DGi3Kf9imyE/0.jpg)](https://youtu.be/DGi3Kf9imyE "Business Logic App | cf push")

### Tutorial Video - Service Instances: SAP HANA Cloud and HDI Containers ### 
In this fourth video of the series, we cover how we can bind our Business Logic App to a Service Instance. There are many services available on the SAP Cloud Platform, Cloud Foundry environment. For our app, we will be using the SAP HANA Cloud service (trial) and the SAP HANA Schemas and HDI Container service.  

To view the available services use the cf marketplace command and use the -s <service name> for additional information like the available plans. 
```
cf m[arketplace]
cf m -s hana-cloud-trial
cf m -s hana
```
[![Service Instances | cf push](https://img.youtube.com/vi/kSCdTjMkwlU/0.jpg)](https://youtu.be/kSCdTjMkwlU "Service Instances | SAP HANA Cloud & HDI Containers")
  
### Tutorial Video - Approuter and XSUAA Service ### 
In this fifth video of the series, we show how we can create and configure an instance of the XSUAA service and how to add an approuter to our app to serve as endpoint.   

```
# query the marketplace for the xsuaa service
cf m -s xsuaa
# create an instance using security descriptor file (choose one)
cf create-service xsuaa application myxsuaa -c xs-security.json
cf create-service xsuaa application myxsuaa -c '{"xsappname":"myapp", "tenant-mode":"dedicated"}'
# query service configuration
cf service myxsuaa
```

[![Approuter and XSUAA Service](https://img.youtube.com/vi/mMwwJsHtdko/0.jpg)](https://youtu.be/mMwwJsHtdko "Approuter and XSUAA Service")


### Tutorial Video - XSUAA and Authentication ### 
In this sixth video of the series, we explore authentication using XSUAA service with some code changes to the business logic of our services app.

[![XSUAA and Authentication](https://img.youtube.com/vi/60HCsvszt2M/0.jpg)](https://youtu.be/60HCsvszt2M "XSUAA and Authentication")

### Tutorial Video - XSUAA and Authorization ### 
n this seventh video of the series, we explore authorizarion using XSUAA service with some code changes to the business logic of our services app and to the front-end, the app router. 

[![XSUAA and Authorization](https://img.youtube.com/vi/hfKkclnhVHQ/0.jpg)](https://youtu.be/hfKkclnhVHQ "XSUAA and Authorization")









