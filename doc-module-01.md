## Lab 1 : Create a sample Node REST API

In this module, we create a simple Node REST API with Express test it locally on our Cloud9 environment.

### 1. Create Node REST API

#### 1.1 Download sources

1.  Run this command to download source files for this Lab

```
$ git clone https://github.com/fabianleeaws/beanstalkcicd.git
```

#### 1.2 Copy sample Node code over to current directory

1.  Run cp command

```
$ cp beanstalkcicd/lab-01/hello.js hello.js
```

2.  Check the sample code

```
$ cat hello.js

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world from a Node.js app!");
});
app.listen(process.env.PORT, () => {
  console.log("Server is up on: " + process.env.PORT);
});
```

#### 1.3 Configure Node start script

1.  Add a start command to packages.json

```
$ vi packages.json

{
"name": "environment",
"version": "1.0.0",
"description": "**\_ \_\_\_\_** \_**\_ \_ \_ \_** / \\ \\ / / **_| / _**| | **\_ \_ \_ **| |/ _ \\ / _ \\ \\ /\\ / /\\**_ \\ | | | |/ _ \\| | | |/ _` | (_) | / \_** \\ V V / **_) | | |_**| | (_) | |_| | (_| |\\\_\_, | /_/ \\_\\_/\\_/ |\_**\_/ \\\_\_**|_|\\**\_/ \\**,_|\\\_\_,_| /\_/ -----------------------------------------------------------------",
"main": "hello.js",
"dependencies": {
"express": "^4.16.3"
},
"devDependencies": {
"nodemon": "^1.18.3"
},
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node hello.js"
},
"author": "",
"license": "ISC"
}
```

#### 1.3 Test sample Node REST API

1.  Run this command to host the REST API

```
$ node hello.js
```

2.  Open a new terminal

(./imgs/01/01.png)

3.  Run the curl command to test API

```
$ curl localhost:8080

Hello world from a Node.js app!
```

We're done, continue to [Lab 2 : Deployment with Elastic Beanstalk Command Line Interface (CLI)](./doc-module-02.md)
