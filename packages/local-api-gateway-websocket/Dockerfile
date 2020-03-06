FROM node:12-alpine

ENV AWS_ACCESS_KEY_ID=fake
ENV AWS_SECRET_ACCESS_KEY=fake
ENV AWS_DEFAULT_REGION=us-east-1

WORKDIR /app
COPY package.json ./
RUN yarn install

COPY . .

EXPOSE 7676
CMD ["npm", "start"]
