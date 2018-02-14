FROM node:8

EXPOSE 3001

ENV PORT 3001

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

run rm -rf node_modules/
RUN npm install
ENTRYPOINT ["npm"]
CMD ["start"]
