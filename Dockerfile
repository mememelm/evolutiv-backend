# BUILD STAGE
FROM node:14-buster-slim as builder

WORKDIR /app

# Copy package.json for caching node_modules
COPY package.json /app/
# COPY package-lock.json /app/
COPY . .
COPY .env.example .env

# Install packages
RUN npm install

RUN npm start

EXPOSE 3000