import { combineReducers } from 'redux';

import playlist from './playlist/reducers';
import player from './player/reducers';

export default combineReducers({ playlist, player });
