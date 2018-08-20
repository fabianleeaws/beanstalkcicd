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

#### 2. Edit Application to use Port 8080

1.  Edit **index.js** file

from

```
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Full capacity during deployments!. Server is up on: " + process.env.PORT);
});
app.listen(process.env.PORT, () => {
  console.log("Server is up on: " + process.env.PORT);
});
```

to

```
const express = require("express");
const app = express();
const appPort = 8080;

app.get("/", (req, res) => {
  res.send("Docker node is up on: " + appPort);
});
app.listen(appPort, () => {
  console.log("Server is up on: " + appPort);
});
```

#### 3. Build and Run the Container Locally

1.  Use the **docker build** command to build our image based on our **Dockerfile** above

```
$ docker build -t workshop/node:1.0 .
```

2.  Use the **docker run** command to run the built image as a container

```
$ docker run -p 8080:8080 workshop/node:1.0

> beanstalk-workshop@1.0.0 start /usr/src/app
> node index.js

Server is up on: 8080
```

3.  Open a new terminal

![New Terminal](./imgs/01/01.png)

4.  Run the curl command to test API

```
$ curl localhost:8080

Docker node is up on: 8080
```
