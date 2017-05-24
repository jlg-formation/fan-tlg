import 'angular';
import 'angular-ui-router';
import '../tl-http/tl-http.ts';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-router', ['ui.router', 'tl-http']);

declare const require;
const tlHomeUrl = require('./tmpl/home.html');
// ça ne marche pas mais j'ai quand meme essayé
// import * as tlHomeUrl from './tmpl/home.html';
const tlProductsUrl = require('./tmpl/products.html');
const tlServicesUrl = require('./tmpl/services.html');
const tlContactUrl = require('./tmpl/contact.html');

app.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
	'ngInject';
	console.log('tl-router config xxyz');

	$locationProvider
		.html5Mode(true);

	$stateProvider.state({
		name: 'home',
		url: '/',
		templateUrl: tlHomeUrl
	});

	$stateProvider.state({
		name: 'products',
		url: '/products',
		templateUrl: tlProductsUrl
	});
	$stateProvider.state({
		name: 'services',
		url: '/services',
		templateUrl: tlServicesUrl,
		controller: 'TlHttpCtrl',
		controllerAs: '$ctrl'
	});
	$stateProvider.state({
		name: 'contact',
		url: '/contact',
		templateUrl: tlContactUrl
	});
	$urlRouterProvider.otherwise('/');
});
