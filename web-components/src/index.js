import './index.css';

import './components/FormInput';
import './components/MessageForm';
import './components/MessagesDisplay';

const md = document.getElementById('md');
const mf = document.getElementById('mf');
mf.attachDisplay(md);
