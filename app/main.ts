import './style.scss';

declare const require;

const jquery = require('jquery');
// tslint:disable-next-line:no-angle-bracket-type-assertion
(window as any).$ = jquery;
(window as any).jQuery = jquery;

import 'angular';
import './tl-http/tl-http.ts';
import './tl-router/tl-router.ts';
import './tl-star/tl-star.ts';



declare const angular: angular.IAngularStatic;

const app = angular.module('main', ['tl-router', 'tl-star', 'tl-http']);


const tlHeaderUrl = require('./tmpl/tl-header.html');
const tlBodyUrl = require('./tmpl/tl-body.html');
const tlFooterUrl = require('./tmpl/tl-footer.html');

app.directive('tlHeader', () => {
	return {
		restrict: 'E',
		templateUrl: tlHeaderUrl
	};
});

app.directive('tlBody', () => {
	return {
		restrict: 'E',
		templateUrl: tlBodyUrl
	};
});

app.directive('tlFooter', () => {
	return {
		restrict: 'E',
		templateUrl: tlFooterUrl
	};
});
