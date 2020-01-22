This app is a demo app for using DatoCMS contents via GraphQL api on a ReactJS app.

## Setup the Project

### Deploy on DatoCMS

Set up a DatoCMS project, with schema and data, to have a starting ground:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=datocms/react-demo)

it will automatically clone and setup the project for you.

### `Set DatoCMS API token env variable`

Once you have set up a DatoCMS project with the button above, edit the `.env_sample` file and add your REACT_APP_DATO_API_TOKEN. Then rename it to `.env` (check the webpack.config.js to see how .env is used).

You can find your API token in the `Settings > API tokens` section.

## Run & Build

The first time run `yarn` to install dependencies.

Develop: `yarn start`

Build:`yarn build`

The build is created in the `build` folder, directly deployable on Surge, Netifly, etc.

## Test your GraphQL queries at

`https://graphql.datocms.com/graphiql?apitoken=${REACT_APP_DATO_API_TOKEN}`
