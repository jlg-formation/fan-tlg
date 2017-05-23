import 'angular';
import 'angular-ui-router';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-router', ['ui.router']);

declare const require;
const tlHomeUrl = require('./tmpl/home.html');
// ça ne marche pas mais j'ai quand meme essayé
// import * as tlHomeUrl from './tmpl/home.html';
const tlProductsUrl = require('./tmpl/products.html');
const tlServicesUrl = require('./tmpl/services.html');
const tlContactUrl = require('./tmpl/contact.html');

app.config(($stateProvider, $urlRouterProvider) => {
	'ngInject';
	console.log('tl-router config xxyz');

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
		templateUrl: tlServicesUrl
	});
	$stateProvider.state({
		name: 'contact',
		url: '/contact',
		templateUrl: tlContactUrl
	});
	$urlRouterProvider.otherwise('/');
});
