# Venues (VueJs + Foursquare)

## Getting Started

This SPA is built with VueJs and Foursquare api.
Vue CLI is used to bootstrap the application.

Extra npm packages:
* Axios (Http client)
* Bootstrap (UI)
* Nprogress (Request loading)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Environment
On .env are application environment variables for api base url, client_id, client_secret, versioning.
```
VUE_APP_API_BASE_URL=https://api.foursquare.com/v2
VUE_APP_API_CLIENT_ID=xxxxxxx..
VUE_APP_API_CLIENT_SECRET=xxxxxxxx...
VUE_APP_API_VERSIONING=20200101
```
VUE_APP_API_VERSIONING format is YYYYMMDD which is required from foursquare api as a request parameter.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
