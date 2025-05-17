FROM node:22-slim

ENV NG_CLI_ANALYTICS=false

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

RUN npm run generate-book-tracking-api-client

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]