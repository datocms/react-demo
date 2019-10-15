This app is a Demo app for using DatoCMS contents via GraphQL api on a ReactJS app.

## Stack

- webpack
- react
- scss

## Setup the Project

### `Clone this repository`

First colone this repo
`git clone git@github.com:datocms/react-demo.git`

### Deploy on DatoCMS

Set up a DatoCMS project, with schema and data, to have a starting ground:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=datocms/react-demo)


### `Set DatoCMS API token env variable`

Once you have set up a DatoCMS project with the button above, edit the `.env_sample` file and add your DATO_API_TOKEN. Then rename it to `.env` (check the webpack.config.js to see how .env is used).

You can find your API token in the `Settings > API tokens` section.

## Run & Build

The first time run `yarn` to install dependencies.

Develop: `yarn dev`

Build:`yarn build`

The build is created in the `dist` folder, directly deployable on Surge, Netifly, etc.

## Test your GraphQL queries at

`https://graphql.datocms.com/graphiql?apitoken=${DATO_API_TOKEN}`
