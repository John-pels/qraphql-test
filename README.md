## Project information and guildelines

## GraphQL URL: [link](https://dxohd5.sse.codesandbox.io/)

> **Technology used:**
>
> - React
> - GraphQL / Apollo Client
> - Json-Graphql-Server [link](https://github.com/marmelab/json-graphql-server)
> - Typescript

> ### How to run the app on your local computer
>
> - create an .env file, then copy and paste **REACT_APP_GRAPHQL_URL=https://dxohd5.sse.codesandbox.io** intto it
> - run **yarn install** or **npm install**
> - run **yarn start** or **npm run start**

> ### How to run a production build
>
> - run **yarn build** or **npm run build**
> - run **yarn start** or **npm run start**

> ### Features
>
> - Display all the transactions which are grouped by dates. This was possible with [json-generator](https://json-generator.com/) and [json-graphql-server](https://github.com/marmelab/json-graphql-server).
> - Global Search with keywords by typing the keywords into the form input and hit enter.
> - Filtering by status (paid, unpaid and pending) and types (remita,paystack and flutterwave). The appropriate data get displayed by clicking on each of the filter buttons.

> ### Decisions
>
> Fake GraphQL API: I decided to use json-graphql-server because it was easier setup and get running. I eventually setup a server and hosted it on [codesandbox](https://dxohd5.sse.codesandbox.io/)
>
> - TypeScript: I decided to use it as I enjoy working with typescript on projects because of its awesome features.
>
> - Filtering: I decided to opt for server-side filtering as it's the standard and does not return stale data.

> ### Experience and Optimization
>
> - My experience using the app is quite okay, I like the fact that the filter buttons are concise enough with no ambiguity. Talking about optimization and things to improve, I'll like to add error boundary, create custom hooks for filter actions, and also refactor the code.
