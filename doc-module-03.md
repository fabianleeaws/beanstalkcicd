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
FROM node:6

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
```

**Note**: You can specify multiple container ports, but Elastic Beanstalk uses only the first one to connect your container to the host's reverse proxy and route requests from the public Internet.

Reference: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker_image.html

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
