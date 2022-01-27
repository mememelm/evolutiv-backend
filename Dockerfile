FROM node:14-buster-slim as builder

## your IQAIR API KEY
ENV IQAIR_KEY=edbaa71a-4e97-48b6-9ca2-97cf4825a197
## IQAIR API ENDPOINT
ENV IQAIR_ENDPOINT=http://api.airvisual.com/v2/nearest_city

WORKDIR /app

# Copy package.json for caching node_modules
COPY package.json /app/
# COPY package-lock.json /app/

# Install packages
RUN npm install

RUN npm start

EXPOSE 3000