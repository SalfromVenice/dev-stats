import { createRoot } from 'react-dom/client';
import '../../assets/stylesheets/application.css';
import { App } from '../App';
import '../javascript/application';

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(<App />);
}
