## Preparing a your Lab environment

- This module is for configuring your dev environment
- We will show the set up process of Cloud9 Env and Node Develpoment environment.
- Cloud 9 is recommended as your dev IDE for studying this workshop

## 1. Using Cloud9

### 1.1. Create your Cloud9 environments

##### Launch your instance

- Use the Singapore region!

1.  Specify Environment name : "YOUR INITIAL-workshop"

![ec2 instance](./imgs/00/01.png)

2.  Select "Create a new instance"
3.  Select "t2.small"

![ec2 instance](./imgs/00/02.png) 4. Review and launching your environment

##### Open your environment

![ec2 instance](./imgs/00/03.png)

### 1.2 Update your environment

1.  Run the yum update command to help ensure the latest security updates and bug fixes are installed

```
$ sudo yum -y update
```

2.  Run this command to install the latest version of Node.js.

```
$ nvm install 6.14.3
```

reference : "Node.js Sample for AWS Cloud9" https://docs.aws.amazon.com/cloud9/latest/user-guide/sample-nodejs.html

### 1.3 Create a working directory for this workshop

1.  Create folder, and change current directory

```
$ mkdir beanstalk-workshop

$ cd beanstalk-workshop
```

2.  Configure Git credential helper included in the AWS CLI. The credential helper allows Git to use HTTPS and a cryptographically signed version of your IAM user credentials or Amazon EC2 instance role whenever Git needs to authenticate with AWS to interact with AWS CodeCommit repositories.

```
$ git config --global credential.helper '!aws codecommit credential-helper $@'
$ git config --global credential.UseHttpPath true
```

### 1.4 Configure your Node environment

1.  Check node version and check the location of Node

```
$ node -v
v6.14.3

$ which node
~/.nvm/versions/node/v6.14.3/bin/node
```

2.  Run this command to initialise Node project, accept all defaults by hitting **enter** 10 times

```
$ npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (beanstalk-workshop)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository: (https://git-codecommit.ap-southeast-1.amazonaws.com/v1/repos/beanstalk-workshop)
keywords:
author:
license: (ISC)
About to write to /home/ec2-user/environment/beanstalk-workshop/package.json:

{
  "name": "beanstalk-workshop",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://git-codecommit.ap-southeast-1.amazonaws.com/v1/repos/beanstalk-workshop"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

### 1.5 Install Express Framework for Node, we'll be using it to create simple REST APIs

1.  Run this command to install the latest version of Express framework for Node. We'll be using it to create simple REST APIs

```
$ npm install express --save
```

We're done, continue to [Lab 1 : Create a sample Node API](./doc-module-01.md)
