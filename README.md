# Aquarela SSO UI Components

This package contains the UI components used in Aquarela's Single Sign-On (SSO) system. It's an internal library designed to maintain consistency and ease of use across Aquarela's SSO-related projects.

## Installation

To install the package in your project, run:

```bash
npm install @aquarela/sso-ui-components
```

Or if you're using Yarn:

```bash
yarn add @aquarela/sso-ui-components
```

We recommend using [Bun](https://bun.sh/) for faster and more efficient package management:

```bash
bun add @aquarela/sso-ui-components
```

## Usage

Import and use components in your React application:

```jsx
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

## Available Components

- Button

## Development

To start the development server:

```bash
bun run build
```

To run Storybook:

```bash
bun run storybook
```

## Contributing

This is an internal library. Please refer to Aquarela's internal contribution guidelines.

## License

This project is proprietary and confidential. Unauthorized copying, transferring or reproduction of this library, via any medium, is strictly prohibited.

## Configuração do Tailwind

Para usar as configurações personalizadas do Tailwind em seu projeto, importe-as e mescle-as com suas próprias configurações:
