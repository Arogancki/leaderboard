# Leaderboard

Application to store players scores in mongodb collection.

## Prerequisites

Node.js 12.13.0 LTS or newer  
Docker 18.09 or newer (for running in docker)  
Docker-Compose 1.25.4 (for running in docker)

## Preparing

```
npm install
```

## Running

### Locally

run mongodb

```
docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```

populate with dummy data

```
npm run testData
```

start server

```
npm run clean:dist
npm run build:dist
npm run prod
```

### Docker

```
 docker-compose up
```

## API

### Put score

Put player score

```js
method: "PUT",
route: "/api/1v/score",
body: {
    player: "string", // player id
    points: "number" // score
}
```

### Get scores

Get scores

```js
method: "GET",
route: "/api/1v/score",
query: {
    page: "number",
    pageSize: "number"
}
```

## todo:

testy
swagger
