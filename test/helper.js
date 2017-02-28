var chai = require('chai');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = require('sinon');
global.Player = require('../app/player');
global.Board = require('../app/board');
global.Ship = require('../app/ship');
