import 'angular';
import 'angular-ui-router';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-router', ['ui.router']);

app.config(($stateProvider) => {
	'ngInject';
	console.log('tl-router config xx');

	$stateProvider.state({
		name: 'home',
		url: '/',
		templateUrl: './tl-router/tmpl/home.html'
	});
	$stateProvider.state({
		name: 'products',
		url: '/products',
		templateUrl: './tl-router/tmpl/products.html'
	});
	$stateProvider.state({
		name: 'services',
		url: '/services',
		templateUrl: './tl-router/tmpl/services.html'
	});
	$stateProvider.state({
		name: 'contact',
		url: '/contact',
		templateUrl: './tl-router/tmpl/contact.html'
	});
});
