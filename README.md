# Jaggery

## Your frontend sweetner for all your backend projects

### Install

* Clone this repo
* Install using npm, yarn or pnpm with the command

```bash
npm install https://github.com/riojosdev/jaggery.git

# or

yarn add https://github.com/riojosdev/jaggery.git

# or 

pnpm install https://github.com/riojosdev/jaggery.git
```

### Usage

* To use Jaggery components in your project, you need to import respective commponents and define them accordingly

**Example:**

```js
import { Button } from 'jaggery'
const MyButton = () => {
  return <Button>Jaggery Button</Button>
};
```

**Example using `create-react-app`:**

After installing jaggery as a dependency, in your `App.tsx` run the code below

```js
import { NavBar } from 'jaggery';

function App() {
    return (
        <NavBar
            links={[
                { name: 'home', url: 'https://example.com/' },
                { name: 'about', url: 'https://example.com/' },
                { name: 'contact', url: 'https://example.com/' }
            ]}
            // define upto 6 links, to maintain responsiveness
        />
    );
}

export default App;
```

> Note: You need to delete your `node_modules` & the package manager lock file (npm => package-lock.json, yarn => yarn.lock, pnpm => pnpm-lock.yaml) to recompile Jaggery with `create-react-app`

## about

### why

to have better performance by using highly supported ui/ux components that are minimalistic themed designs, which promotes humane and mindful behaviour

Jaggery will focus on implementing attractive mindful patterns to help build the indieweb, but also not sacrificing on the sweetness
