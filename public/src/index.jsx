const React = require('react')
const ReactDOM = require('react-dom')
const api = require('./api')
const Main = require('./main')
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const App = () => (
    <Main api={api} />
);

ReactDOM.render(<App />, document.getElementById('root'))