## Lab 3 : Create & Deploy Your First Docker Image

- Use a Lab-01 source and images to complete this lab.

### 1. Containerising our Node Application

#### 1.1. Create a Dockerfile

1.  Create a **Dockerfile**, and edit it in the IDE

```
$ touch ~/environment/beanstalk-workshop/Dockerfile
```

Add the following configuration to the Dockerfile

```
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]
```

**Note**: The Elastic Beanstalk Node.js platform uses a reverse proxy to relay requests from port 80 on the instance to your application listening on port 8081. Elastic Beanstalk provides a default proxy configuration that you can either extend or override completely with your own configuration.

Reference: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-platform-proxy.html

2.  Create a **.dockerignore** file, and edit it in the IDE

```
$ touch ~/environment/beanstalk-workshop/.dockerignore
```

Add the following configuration:

```
node_modules
npm-debug.log
```

The docker ignore file specifies files & folders to ignore when executing the **COPY** command in the Dockerfile above
