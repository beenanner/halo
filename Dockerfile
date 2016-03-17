FROM node:argon


RUN mkdir -p /opt/app
WORKDIR /opt/app

ADD package.json /opt/app/package.json
RUN npm install

COPY ./ /opt/app

EXPOSE 3000
CMD [ "npm", "start" ]
