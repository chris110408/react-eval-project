# Clear Capital Interview Project - Sr Software Engineer


an API-service  server is located at services/api folder

Web server is located at service/web

### usage


please make sure install Docker.

and run the following command

```
docker-compose up --build

```
the docker will run the API server(local port 8080) and website(local port 8000)
you should able to  see the webpage at http://localhost:8000

without docker please go to services/api folder run

```
npm install
npm start

```
then go to services/web folder run

```
npm install
npm start

```
you should able to  see the webpage at http://localhost:3000



## Architecture

| Name             | Service | Container   | tech                   |
|------------------|---------|-------------|------------------------|
| Web              | Web     |   web       | React,Redux,Saga,Antd  |
| api-service      | API     | api-service | Node,Express           |


##


## WebSite Map

| Pages            | Usage   and   Des                    |
|------------------|-------------------------------------------------|
| Login            | Login                                           |
| UserInfo         | show detail user repos and events info          |
| Analysis         |  provide data analysis and data visualization   |


##

### the structure of the project.

there are tons of ways to structure the react project. I would love to change my preference for the future team. However, if I make the decision will choose the following structure which I used in this project.
##
|                  |  |     |                   |
|------------------|---------|-------------|------------------------|
| page             |                                                |
|     | fns     |  |   (all the key algorithm for model)          |
|     |model     |  |   (all the key algorithm for model)          |
|     |    | actions |  (action sand action creaters )        |
|     |    | saga | (injected to this page)       |
|     |    | reducer | (injected to this page)       |
|     |    | reducer | (I normally use reselector ,did not use it because there      |
|     | styles     |  |   (css)          |
|     | sub-page-components     |  | (only used for this page,may create a folder for it)        |
|     | index    |  |            |

##


### saga, reducers

only root reducer is inited at the beginning, other reducers and sagas are injected when I need them. the main config file is in the config/configure store.js   the rest parts are in the utils folder.


### Data Visualization

Sorry for not using D3. I have not used D3 before. And I used Bizcharts which is developed and supported by Alibaba.
https://github.com/alibaba/BizCharts/



### Algorithm and code style

I am aiming to be a professional functional programmer.
most of the code, I wrote is in the functional style.
I also used the helper tools the ramda.js
https://ramdajs.com
I would also like to able to code in oop style and to use  lodash or underscore If the team need me to use.
I also prefer to use the functional components(---it is faster too)

the recompose(https://github.com/acdlite/recompose) is used in this project for injecting lifecycle and combine functions by using compose

##


### test

Shame on me, Since I only used only 3 days for this project. I only wrote some simple unit test. should write tests for all algorithms, actions and reducers before I submit this code.

the unit test for simple API was wrote by mocha and chai

this is no End to end test, only test manually. I am learning cypress.io now

##

### Login Page

Do not have time to build full LoginPage and handle authorized. You could input an email address and any password to login to the main page

##

###Thank you for offering this opportunity and this project is fun(in the first two days :) )



