import './style.scss';

import 'angular';
import './tl-router/tl-router.ts';


declare const angular: angular.IAngularStatic;

const app = angular.module('main', ['tl-router']);

declare const require;
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
