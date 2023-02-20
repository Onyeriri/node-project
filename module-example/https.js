// using Ecmascript syntax

import send from './request';
import read from './response';

function request(url, data) {
  send(url, data)
  return read();
}