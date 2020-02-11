import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import App from '../../src/ui/app';
import initialize from '../../src/initialize';

initialize(hot(App));
