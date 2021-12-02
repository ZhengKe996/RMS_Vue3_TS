export const projectDir = `
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.less
│   │   │   └── index.less
│   │   └── img
│   │       ├── head.jpeg
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── base-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── breadcrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── card.vue
│   │   ├── code
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── code.vue
│   │   ├── count-up
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── countup.vue
│   │   ├── delete-message
│   │   │   └── index.ts
│   │   ├── descriptions
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── descriptions.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── echart
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── base-echart.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── form.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── message
│   │   │   └── message.ts
│   │   ├── table
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── table.vue
│   │   └── text-link
│   │       ├── index.ts
│   │       └── src
│   │           └── text-link.vue
│   ├── components
│   │   ├── nav-header
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── nav-header.vue
│   │   │       └── user-info.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── nav-menu.vue
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-content.vue
│   │   ├── page-echarts
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── bar-echart.vue
│   │   │   │   ├── line-echart.vue
│   │   │   │   ├── map-echart.vue
│   │   │   │   ├── pie-echart.vue
│   │   │   │   └── rose-echart.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convert-data.ts
│   │   │       └── coordinate-data.ts
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-modal.vue
│   │   ├── page-search
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-search.vue
│   │   └── statistical-panel
│   │       ├── index.ts
│   │       ├── src
│   │       │   └── statistical-panel.vue
│   │       └── types
│   │          └── index.ts
│   ├── global
│   │   ├── index.ts
│   │   ├── register-element.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── useEchart.ts
│   │   ├── usePageModal.ts
│   │   ├── usePageSearch.ts
│   │   └── usePermission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   ├── login
│   │   │   └── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── index.ts
│   │       │   └── overview
│   │       │       └── index.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── index.ts
│   │       │   └── goods
│   │       │       └── index.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── index.ts
│   │       │   └── list
│   │       │       └── index.ts
│   │       └── system
│   │           ├── department
│   │           │   └── index.ts
│   │           ├── menu
│   │           │   └── index.ts
│   │           ├── role
│   │           │   └── index.ts
│   │           └── user
│   │               └── index.ts
│   ├── service
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   ├── main
│   │   │   ├── analysis.ts
│   │   │   └── main.ts
│   │   ├── request
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   └── types.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── dashboard.ts
│   │   │   ├── main.ts
│   │   │   └── types.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── date-format.ts
│   │   └── map-menus.ts
│   └── views
│       ├── login
│       │   ├── Login.vue
│       │   ├── config
│       │   │   ├── login-account.ts
│       │   │   └── login-phone.ts
│       │   └── cpns
│       │       ├── login-account.vue
│       │       ├── login-panel.vue
│       │       └── login-phone.vue
│       ├── main
│       │   ├── Main.vue
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── index.vue
│       │   │   └── overview
│       │   │       ├── config
│       │   │       │   ├── dependencies.ts
│       │   │       │   ├── dev-dependencies.ts
│       │   │       │   ├── index.ts
│       │   │       │   ├── project-dir.ts
│       │   │       │   └── technology-stacks.ts
│       │   │       └── index.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   ├── config
│       │   │   │   │   ├── content.config.ts
│       │   │   │   │   ├── modal.config.ts
│       │   │   │   │   └── search.config.ts
│       │   │   │   └── index.vue
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   ├── content.config.ts
│       │   │       │   ├── modal.config.ts
│       │   │       │   └── search.config.ts
│       │   │       └── index.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── index.vue
│       │   │   └── list
│       │   │       └── index.vue
│       │   └── system
│       │       ├── department
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── index.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   └── content.config.ts
│       │       │   └── index.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── index.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content.config.ts
│       │           │   ├── modal.config.ts
│       │           │   └── search.config.ts
│       │           └── index.vue
│       └── not-found
│           └── Not-found.vue
├── tsconfig.json
├── vue.config.js
├── yarn-error.log
└── yarn.lock
`
