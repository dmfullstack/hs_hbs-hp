FROM mhart/alpine-node-auto

RUN apk update && apk add git openssh-client

RUN mkdir -p /app
WORKDIR /app
COPY package.json .

RUN npm install

COPY . .
CMD ["npm", "run", "serve"]
