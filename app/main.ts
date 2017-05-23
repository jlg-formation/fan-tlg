/// <reference path="../node_modules/@types/angular/index.d.ts" />

import 'angular';

declare const angular: angular.IAngularStatic;

const app = angular.module('main', []);

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
