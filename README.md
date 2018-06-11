This app is a Demo app for using DatoCMS contents via GraphQL api on a ReactJS app.

## Stack
- webpack
- react
- scss

## Setup the Project

### `Clone this repository`

First colone this repo
`git clone git@github.com:datocms/react-demo.git`

#### `Set DatoCMS API token env variable`

Edit the `.env_sample` file and add your DATO_API_KEY, then rename it to `.env` (check the webpack.config.js to see how .env is used)
You can find your [DatoCMS](https://datocms.com) API token in the Admin area > API tokens section:

![DatoCMS API token](https://www.datocms.com/static/api-token-5afae851cb5efd1ea2abfc41741d7b96-95c66.png "DatoCMS API token")

## Run & Build
first time run `yarn` to install dependencies.

Develop: `yarn dev`

Build:`yarn build`

this create the build inthe `dist` folder.
Deployable directly on surge, or netifly.

## you can test your GraphQL at
`const url = https://graphql.datocms.com/graphiql?apitoken=${DATO_API_TOKEN}`
