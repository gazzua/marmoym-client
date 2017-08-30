# Marmoym-client
The client agents that would interact with entities of Marmoym products, for example Marmoym-api.

## Marmoym
Description needed. For now, check out [here](https://github.com/tymsai/marmoym-api#how-we-build-our-world).

## Development
There are two things before you start develping: `NODE_ENV` and `PLATFORM`. `NODE_ENV` tells whether you are devleoping or producing the product, like in 'prod' or 'dev'. `PLATFORM` is given for which type of client agent you are handling the product. Strings such as 'mobile' or 'web' could be candidates. Now if you know for what envirionment and platform you are starting to run the application, you can type a command concatenated string of those.

```javascript
npm install
// or yarn start
```

```javascript
npm start:dev:mobile
// or yarn start:dev:mobile
```
