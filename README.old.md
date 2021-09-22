# goit-react-hw-04-movies

1. npx create-react-app .

2. npm start

3. npm run build

---

- new

---

## NETLIFY

настройка проекта.
https://drive.google.com/file/d/1_mFfA_jdOfTgtwOtEE6hsuo6U95hZU45/view

1. create file netlify.toml

[build] publish = "build"

[[redirects]] from = "/\*" to = "/index.html" status = 200

---

2.  npm install netlify-cli -g

3.  netlify login

4.  add to scripts "scripts": { add...

---

"predeploy": "npm run build", "deploy": "netlify deploy -p"

---

}

5.

- npm run deploy
- (create & configure a new site + enter)
- team (enter)
- zhm-goit-react-hw-04-movies

- netlify open --site

6. add to host new version deploy

---

standart setings PROECT

---

- eslint npm install --save-dev prettier eslint

- lint-staged npx mrm@2 lint-staged

- add to jsone "lint-staged": { "_.{js,jsx}": "eslint --cache --fix",
  "_.{js,css,md,jsx}": "prettier --write" }

- create .prettierrc.json .prettierrc.json

{ "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi": true,
"singleQuote": true, "trailingComma": "all", "bracketSpacing": true,
"jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always" }

---

liba

1. css liba https://emotion.sh/docs/introduction npm i @emotion/styled
   @emotion/react

2. prop-types https://www.npmjs.com/package/prop-types npm i prop-types

3.To create a random id https://www.npmjs.com/package/uuid#version-4 npm i uuid

4.toast tostiky https://react-hot-toast.com/docs npm i react-hot-toast

5. react-spinner-loader https://github.com/mhnpd/react-loader-spinner npm
   install react-loader-spinner --save

6. Lightbox modalka https://basiclightbox.electerious.com npm install
   basiclightbox

7. axios https://www.npmjs.com/package/axios npm i axios

Ключ API (v3 auth) 5d1f3e81f4c80e6e958c33832d40a637

Пример API-запроса
https://api.themoviedb.org/3/movie/550?api_key=5d1f3e81f4c80e6e958c33832d40a637

Ключ доступа к API (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDFmM2U4MWY0YzgwZTZlOTU4YzMzODMyZDQwYTYzNyIsInN1YiI6IjYxNGIzODhlMmRmZmQ4MDA0NWQwNGNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w_qjv81Dt7RcT0gYDJkLCrnRwmYGiJhTk9B25kAhkv0
