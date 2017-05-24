import 'angular';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-star', []);

declare const require;
const tlStarUrl = require('./tl-star.html');
const yellowStarUrl = require('./img/yellow_star.png');
const whiteStarUrl = require('./img/white_star.png');

class TlStarCtrl {
	/* @ngInject */
	constructor($element) {
		console.log('TlStarCtrl', arguments);
		let html = '';
		for (let i = 0; i < 3; i++) {
			html += `<img src="${yellowStarUrl}" >`;
		}
		for (let i = 3; i < 5; i++) {
			html += `<img src="${whiteStarUrl}" >`;
		}
		$element.html(html);
	}

	public getImageName(i: number): string {
		if (i <= 3) {
			return yellowStarUrl;
		}
		return whiteStarUrl;

	}
}


app.directive('tlStar', () => {
	return {
		restrict: 'E',
		controller: TlStarCtrl,
		controllerAs: '$ctrl',
	};
});

