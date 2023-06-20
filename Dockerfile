FROM node:7.4.0
RUN mkdir -p /usr/src/prototyping_kit
COPY ./assets /usr/src/prototyping_kit
WORKDIR /usr/src/prototyping_kit
RUN chmod -R a+x /usr/src/prototyping_kit
RUN npm install
RUN npm rebuild node-sass
EXPOSE 3000
CMD [ "npm", "start" ]