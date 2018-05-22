## Stack
- webpack
- react
- scss

## Envinroment
check the webpack config to see how .env is used

`.env.dev` or your `process.env` variables must have:

```
DATO_API_TOKEN=xxxxxxxxxxxxxxx
GOOGLE_API_KEY=xxxxxxxxxxxxxxx
```

## Run & Build
first time run `yarn` to install dependencies.

Develop: `yarn dev`

Build:`yarn build`

this create the build inthe `dist` folder.
Deployable directly on surge, or netifly.
