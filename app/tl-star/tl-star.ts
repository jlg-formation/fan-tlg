import 'angular';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-star', []);

declare const require;
const yellowStarUrl = require('./img/yellow_star.png');
const whiteStarUrl = require('./img/white_star.png');

class TlStarCtrl {
	/* @ngInject */
	constructor($scope: angular.IScope, $element: JQuery, $attrs: angular.IAttributes) {
		console.log('TlStarCtrl', arguments);
		$scope.$watch('n', () => {
			let html = '';
			let note = Number($scope.n) || 3;
			note = (note > 5) ? 5 : note;
			note = (note < 1) ? 1 : note;
			for (let i = 0; i < note; i++) {
				html += `<img src="${yellowStarUrl}" >`;
			}
			for (let i = note; i < 5; i++) {
				html += `<img src="${whiteStarUrl}" >`;
			}
			$element.html(html);
		});

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
		scope: {
			n: '=note'
		},
		controller: TlStarCtrl,
		controllerAs: '$ctrl',
	};
});

