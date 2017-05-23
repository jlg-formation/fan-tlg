import './style.scss';

import 'angular';
import './tl-router/tl-router.ts';


declare const angular: angular.IAngularStatic;

const app = angular.module('main', ['tl-router']);

app.directive('tlHeader', () => {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/tl-header.html'
	};
});

app.directive('tlBody', () => {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/tl-body.html'
	};
});

app.directive('tlFooter', () => {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/tl-footer.html'
	};
});
