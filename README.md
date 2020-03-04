# <img src="https://user-images.githubusercontent.com/13893942/74079704-aceead80-4a00-11ea-90ce-a1235973518c.png" width="150" alt="500"/>

### Playing Instructions

[See Player's Guide for more details](https://github.com/kirbyjs/500/blob/master/docs/PLAYERS_GUIDE.md)

### Contribution
#### Starting Locally

1. `$ docker-compose up`
    - This will spin up the local aws environment so that we can get a production like environment locally.
1. `$ yarn run start`
    - This will start the webpack-dev-server and will hot-reload the application

#### Updating the lambdas
1. After a change is made run: `$ yarn run build:lambdas`
    - The lambdas are bind mounted to the host machine, so there is no need to restart any services.

#### Note on lambda logging
:notebook: There is no output logs for the lambda right out of the box. To enable this run: 

```bash
sh ./scripts/local/listen-to-lambda-logs.sh [actions|websocketDisconnection] # Note "actions" or "websocket" are the lambdas that exist in this repo. 
```

***Logs do have to exist*** from the lambda before starting that script. It _will_ also pick up previous logs that occurred. 
