# NavBar

### Define Navbar component using

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
        ></NavBar>
    );
}

export default App;
```

> Note: The above react app implementation structure is from create-react-app
