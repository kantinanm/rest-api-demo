# rest-api-demo
Restful-API  Service(Demo)

### Features
sample restful-api with express and mysql 
# How to install
Use powershell or cmd and type by order, please see below.
- `git clone https://github.com/kantinanm/rest-api-demo.git`
- `cd rest-api-demo`
- > install package dependency in this project.
    `npm install`
- > create config.js and modify value.
  `cp config.js.default config.js` 
  > In windows use command `copy config.js.default config.js` 
  > at config.js file to modify value, 
  ```javascript
  const config = {
    host: '', // ip or name host machine(db) mysql
    user: '', // user for database
    password: '', //password for database
    database: '' //database name
  };
- `npm run start`


# Test URL
http://localhost:3000