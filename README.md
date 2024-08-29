# Aquarela SSO UI Components

This package contains UI components used in Aquarela's Single Sign-On (SSO) system. It's an internal library designed to maintain consistency and ease of use across Aquarela's SSO-related projects.

**IMPORTANT:** While this package is publicly accessible, it is intended for private use within Aquarela's ecosystem. Universal compatibility is not guaranteed, and bugs may be present.
**Note:** Some components in this library are based on [shadcn/ui](https://github.com/shadcn-ui/ui). The license of shadcn/ui also applies to those components.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Updating Tailwind Config](#updating-tailwind-config)
- [Support](#support)
- [License](#license)

## Prerequisites

- Node.js (v14 or later)
- We highly recommend using [Bun](https://bun.sh/) for faster and more efficient package management.

## Installation

### Step 1: Install Necessary Peer Dependencies

Before installing the Aquarela SSO UI Components package, ensure you have the necessary peer dependencies installed:

With `npm`:

```bash
npm install  react react-dom  clsx lucide-react tailwind-merge class-variance-authority @radix-ui/react-slot --save
npm install tailwindcss tailwindcss-animate --save-dev
```

Or with `Bun` (recommended):

```bash
bun add  react react-dom  clsx lucide-react tailwind-merge class-variance-authority @radix-ui/react-slot
bun add tailwindcss tailwindcss-animate -D
```

### Step 2: Install the Aquarela SSO UI Components Package

With `npm`:

```bash
npm install @aquarela/sso-ui-components
```

Or with `Bun` (recommended):

```bash
bun add @aquarela/sso-ui-components
```

## Usage

You can import and use the components in your React application as shown below:

```javascript
import { Button } from "@aquarela/sso-ui-components";

function App() {
  return (
    <div>
      <Button variant="default">Login</Button>
      <Button variant="google">Sign in with Google</Button>
    </div>
  );
}
```

## Updating Tailwind Config

To update your `tailwind.config.ts` file with the latest configuration from the `@aquarela/sso-ui-components` package, run the following command:

```bash
node ./node_modules/@aquarela/sso-ui-components/utils/replace-tailwind.config.js
```

## Support

For any issues or support, please contact the Aquarela development team internally.

## License

This package is intended for internal use within Aquarela's ecosystem. Please consult with the Aquarela development team regarding any licensing inquiries.

```

```
