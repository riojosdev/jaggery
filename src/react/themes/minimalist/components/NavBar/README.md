# NavBar

### Define Navbar component using

```js

  import { NavBar } from 'jaggery'

  function App() {
    return (
      <NavBar
          links= {[
            { name: 'home', url: 'https://google.com/'},
            { name: 'about', url: 'https://riojos.in/'},
            { name: 'contact', url: 'https://decodedHTML.com/'},
          ]}
        >
      </NavBar>
    );
  }

  export default App;
```

> Note: The above react app implementation structure is from create-react-app
