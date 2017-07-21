The top-level `v-if` causes an error on the `v-else` side if `vue-loader#optimizeSSR` is `true`.

# Version

- vue 2.4.2
- vue-loader 13.0.2

# Steps to reproduce

1. Clone this repo
2. `yarn install && yarn build && yarn start`
3. Visit `http://localhost:8080` - Error
4. Set `optimizeSSR` to `false` at `build/webpack.base.config.js`
5. `yarn build && yarn start`
6. Visit `http://localhost:8080` - OK