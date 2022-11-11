FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install db-migrate-pg \
  && git clone https://github.com/vishnubob/wait-for-it.git \
  && npm install

COPY . /usr/src/app/

RUN 

CMD ["npm", "run", "start"]