FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./tsconfig.json

RUN npm install

# COPY . ./

ADD ./src ./src
ADD ./public ./public

EXPOSE 3000
CMD ["npm", "start"]
