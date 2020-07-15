/* eslint-disable strict */
'use strict';

import "@babel/polyfill";
import 'mdn-polyfills/Node.prototype.append';
import 'mdn-polyfills/Node.prototype.remove';
import elemenClosest from 'element-closest';
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";
import 'nodelist-foreach-polyfill';
elemenClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import scrooToService from './modules/scrooToService';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validCostInput from './modules/validCostInput';
import hoverImg from './modules/hoverImg';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

countTimer('04 July 2020');

toggleMenu();

togglePopUp();

scrooToService();

tabs();

slider();

validCostInput();

hoverImg();

calc();

sendForm();
