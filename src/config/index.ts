import DefaultConfig from './default';
import { default as Dev } from './development';
import { default as Pro } from './production';
import { CommonObj } from 'common';

let config: CommonObj = {};

switch (process.env.NODE_ENV) {
  case 'development':
    config = Dev;
    break;

  case 'production':
    config = Pro;
    break;

  default:
    config = Pro;
    break;
}

export default Object.assign(DefaultConfig, config);
