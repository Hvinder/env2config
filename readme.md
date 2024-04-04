# env2config

`env2config` is a handy npm package that reads environment variables from your project's `.env` file and generates a JavaScript configuration file (Typescript support soon!). This helps with better autocomplete and type safety when working with environment variables in your Node.js project.

## Installation

You can use the handy npx command. No need to install any dependancy 😁

To generate the configuration file, simply run the following command in your project's root directory:

```bash
npx env2config
```

This will create a env.config.js file inside `src/config`. The generated file will export an object containing all the key-value pairs from your .env file, allowing you to import and use with autocomplete.

```typescript
// env.config.js
export const envConfig = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};

module.exports = envConfig;
```

You can then import this `envConfig` object in your application and use it like any other module:

```typescript
import { envConfig } from "./config/env.config.js";

console.log(`Running in ${envConfig.NODE_ENV} environment`);
console.log(`Listening on port ${envConfig.PORT}`);
```

## Configuration

By default, env2config looks for a .env file in the root directory. If your .env file has a different name or is located elsewhere, you can specify its path using the --env-file option:

```bash
npx env2config --env-file=/path/to/my/.env.prod
```

You can also customize the output file name and location using the --output option:

```bash
npx env2config --output=src/config/env.config.js
```

You can choose to exclude certain entries using --exclude-prefixes option:

```bash
npx env2config --exclude-prefixes="['SECRET_']"
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.
