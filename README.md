[![GitHub stars](https://img.shields.io/github/issues/DesignString/react-typescript-web-extension-starter?style=social&label=Stars&style=plastic)]()
[![GitHub watchers](https://img.shields.io/github/forks/DesignString/react-typescript-web-extension-starter?style=social&label=Watch&style=plastic)]()
[![GitHub forks](https://img.shields.io/github/stars/DesignString/react-typescript-web-extension-starter?style=social&label=Fork&style=plastic)]()
[![MIT License](https://img.shields.io/github/license/DesignString/react-typescript-web-extension-starter)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![HitCount](https://hits.dwyl.com/DesignString/react-typescript-web-extension-starter.svg?style=flat-square&show=unique)](http://hits.dwyl.com/DesignString/react-typescript-web-extension-starter)

![React TypeScript Web Extension Starter](https://i.imgur.com/lYaoyIV.png)

:desktop_computer: A Web Extension starter kit built with React, TypeScript, Storybook, EsLint, Prettier, Jest, TailwindCSS, &amp; Vite. Compatible with Google Chrome, Mozilla Firefox, Brave, and Microsoft Edge.

![Example Extension Popup](https://i.imgur.com/WTgxCDX.png "Example Extension Popup")

**Getting Started**

Run the following commands to install dependencies and start developing

```
yarn install
yarn dev
```

-   `yarn dev` - run `vite`
-   `yarn storybook` - runs the Storybook server
-   `yarn build` - builds the production-ready unpacked extension
-   `yarn test -u` - runs Jest + updates test snapshots
-   `yarn lint` - runs EsLint
-   `yarn prettify` - runs Prettier

<details>
  <summary>Loading the extension in Google Chrome</summary>

In [Google Chrome](https://www.google.com/chrome/), open up [chrome://extensions](chrome://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Google Chrome](https://i.imgur.com/Y2dQFte.png "Installed Extension in Google Chrome")

</details>

<details>
  <summary>Loading the extension in Brave</summary>

In [Brave](https://brave.com/), open up [brave://extensions](brave://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Brave](https://i.imgur.com/rKsbtcO.png "Installed Extension in Brave")

</details>

<details>
  <summary>Loading the extension in Mozilla Firefox</summary>

In [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/), open up the [about:debugging](about:debugging) page in a new tab. Click the `This Firefox` link in the sidebar. One the `This Firefox` page, click the `Load Temporary Add-on...` button and select the `manfiest.json` from the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Mozilla Firefox](https://i.imgur.com/FKfTw4B.png "Installed Extension in Mozilla Firefox")

</details>

<details>
  <summary>Loading the extension in Microsoft Edge</summary>

In [Microsoft Edge](https://www.microsoft.com/en-us/edge), open up [edge://extensions](edge://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the lower-left corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Microsoft Edge](https://i.imgur.com/ykesx0g.png "Installed Extension in Microsoft Edge")

</details>

**Notes**

-   This project is a [repository template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/) - click the `Use this template` button to use this starter codebase for your next project.

-   Includes ESLint configured to work with TypeScript and Prettier.

-   Recommended to use `Visual Studio Code` with the `Format on Save` setting turned on.

-   Example icons courtesy of [Heroicons](https://heroicons.com/).

-   [Microsoft Edge](https://www.microsoft.com/en-us/edge) is not currently supported.

-   Includes Storybook configured to work with React + TypeScript. Note that it maintains its own `vite.config.js` and `tsconfig.json` files. See example story in `src/components/hello/__tests__/hello.stories.tsx`

-   Includes a custom mock for the [webextension-polyfill](https://github.com/Lusito/webextension-polyfill-ts) package in `src/__mocks__`. This allows you to mock any browser APIs used by your extension so you can develop your components inside Storybook.

**Built with**

-   [React](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Storybook](https://storybook.js.org/)
-   [Jest](https://jestjs.io)
-   [Eslint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Vite](https://vitejs.dev/)
-   [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)

**Misc. References**

-   [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
-   [Firefox Extension Developer Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
-   [Eslint + Prettier + Typescript Guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
