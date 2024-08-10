# Jaggery

## Your frontend sweetner for all your backend projects

### Install

* Clone this repo
* Install using npm or yarn with the command

```bash
npm install https://github.com/riojosdev/jaggery.git

# or

yarn add https://github.com/riojosdev/jaggery.git
```

### Usage

* To use Jaggery components in your project, you need to import respective commponents and define them accordingly

**Example:**

```js
import { Button } from 'jaggery'
const MyButton = () => {
  return <Button>Jaggery Button</<Button>
};
```

**Example using `create-react-app`:**

After installing jaggery as a dependency, in your `App.tsx` run the code below

```js
import React from 'react';
import { Button } from 'jaggery';

function App() {
  return (
        <Button
          backgroundColor='black'
          color='red'
          // style={{ padding: 20 }} WRONG !! DO NOT USE STYLE DIRECTLY, IT REWRITES ALL EXISTING JAGGERY DEFINED STYLES
          onClick={ () => alert('Cha-Ching!')}
        >
          Hello Jaggery
        </Button>
  );
}

export default App;
```

## about

### why

to have better performance by using highly supported ui/ux components that are minimalistic themed designs, which promotes humane and mindful behaviour

Jaggery will focus on implementing attractive mindful patterns to help build the indieweb, but also not sacrificing on the sweetness
