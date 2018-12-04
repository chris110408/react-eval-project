FROM node:10.10.0

# set working directory
RUN mkdir /usr/src/app

# install and cache app dependencies
copy . /usr/src/app

WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
# open port 3000
EXPOSE 3000
# start app
CMD ["npm", "start"]

