import './index.css';

import './components/FormInput';
import './components/MessageForm';
import './components/MessagesDisplay';

var md = document.getElementById("md");
var mf = document.getElementById("mf");
mf.attachDisplay(md);
