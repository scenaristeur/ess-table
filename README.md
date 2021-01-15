# Porfolio WebApp
- all data are stored on solid user's POD : https://github.com/solid/solid-spec/
- template : https://scenaristeur.github.io/portfolio/
- source code : https://github.com/scenaristeur/ess-table

# install  @vue/cli@latest
```
npm install -g @vue/cli@latest
```

# ess-table

- https://fr.vuejs.org/v2/examples/tree-view.html
- https://bootstrap-vue.org/docs/components/table
- markdown https://fr.vuejs.org/v2/examples/index.html
- https://fr.vuejs.org/v2/examples/commits.html
- medium like p editable https://stackoverflow.com/questions/53899676/vue-2-contenteditable-with-v-model

# data europe sparql
https://data.europa.eu/euodp/fr/sparql

## Project setup / Cloner le projet
```
git clone https://github.com/scenaristeur/ess-table.git
cd portfolio
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

### Build and publish on gh-pages
first commit : ```git add dist -f && git commit -m "Initial dist subtree commit"```
```
npm run git -- "modif"
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### pwa cache

https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers

https://medium.com/@stephen.trevor.wong/3-steps-to-add-pwa-to-vue-js-in-2020-9f9daa56f9
https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/
https://medium.com/js-dojo/vuejs-pwa-cache-busting-8d09edd22a31
https://www.julienpradet.fr/fiches-techniques/pwa-intercepter-les-requetes-http-et-les-mettre-en-cache/

- test service-worker.js in development
https://medium.com/@stephen.trevor.wong/3-steps-to-add-pwa-to-vue-js-in-2020-9f9daa56f9
modify vue.config.js
```
const publicPath= "./"
```


```
npm run build && cd dist && npx http-server && cd ..
```
