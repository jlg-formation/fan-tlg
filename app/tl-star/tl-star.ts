import 'angular';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-star', []);

class TlStarCtrl {

	constructor() {
		console.log('TlStarCtrl', arguments);
	}

	public getImageName(i: number): string {
		if (i <= 3) {
			return yellowStarUrl;
		}
		return whiteStarUrl;

	}
}
declare const require;
const tlStarUrl = require('./tl-star.html');
const yellowStarUrl = require('./img/yellow_star.png');
const whiteStarUrl = require('./img/white_star.png');

app.directive('tlStar', () => {
	return {
		restrict: 'E',
		templateUrl: tlStarUrl,
		controller: TlStarCtrl,
		controllerAs: '$ctrl',
	};
});

