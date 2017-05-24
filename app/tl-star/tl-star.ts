import 'angular';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-star', []);

class TlStarCtrl {

	constructor() {
		console.log('TlStarCtrl', arguments);
	}
}
declare const require;
const tlStarUrl = require('./tl-star.html');

app.directive('tlStar', () => {
	return {
		restrict: 'E',
		templateUrl: tlStarUrl,
		controller: TlStarCtrl,
	};
});

