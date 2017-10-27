import preact from 'preact';
import App from './App';
import 'file-loader?name=CNAME!./CNAME';

console.log('hi');

preact.render(<App />, document.getElementById('root'));
