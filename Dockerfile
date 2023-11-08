FROM node:20-alpine as base

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install
COPY . .
CMD ["yarn", "compile"]

