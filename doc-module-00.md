## Preparing a your Lab environment

- This module is for configuring your dev environment
- We will show the set up process of Cloud9 Env and Node Develpoment environment.
- Cloud 9 is recommended as your dev IDE for studying this workshop

## 1. Using Cloud9

### 1.1. Create your Cloud9 environments

##### Launch your instance

1.  Specify Environment name : "YOUR INITIAL-workshop"

![ec2 instance](./imgs/00/01.png)

2.  Select "Create a new instance"
3.  Select "t2.small"

![ec2 instance](./imgs/00/02.png) 4. Review and launching your environment

##### Open your environment

![ec2 instance](./imgs/00/03.png)

### 1.2 Update your environment

- Follow Step 1 in "Node.js Sample for AWS Cloud9"

ref : https://docs.aws.amazon.com/cloud9/latest/user-guide/sample-nodejs.html

### 1.3 Update your environment (optional reference)

1.  Check node version and check the location of Node

```
$ node -v
v10.7.0

$ which node
~/.nvm/versions/node/v10.7.0/bin/node
```

2.  Initialise Node project packages, accept all defaults by hitting **enter** 10 times

```
$ npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (environment)
version: (1.0.0)
description:
entry point: (hello.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /home/ec2-user/environment/package.json:

{
  "name": "server",
  "version": "1.0.0",
  "description": "___        ______     ____ _                 _  ___           / \\ \\      / / ___|   / ___| | ___  _   _  __| |/ _ \\         / _ \\ \\ /\\ / /\\___ \\  | |   | |/ _ \\| | | |/ _` | (_) |   "main": "hello.js",
  "dependencies": {
    "nodemon": "^1.18.3"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

2.  Install express and nodemon

```
$ npm install --save-dev nodemon
```

5.  Install AWS CLI and cofigure it
    https://docs.aws.amazon.com/cli/latest/userguide/installing.html

### 1.4 Install docker

```
sudo yum install docker
docker --help
```

### 1.5 Install all other tools

1.  curl
2.
3.  Install ECS-CLI (optional)
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_installation.html

```

```
