FROM node:10.4.1-slim

RUN cd /opt/ && mkdir leaderboard
WORKDIR opt/leaderboard

COPY package.json ./
RUN npm install 

COPY . /opt/leaderboard

RUN npm run clean:dist
RUN npm run build:dist

EXPOSE 8080

CMD npm run prod
