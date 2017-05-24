import 'angular';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-star', []);

declare const require;
const yellowStarUrl = require('./img/yellow_star.png');
const whiteStarUrl = require('./img/white_star.png');

class TlStarCtrl {
	/* @ngInject */
	public n: number;

	constructor(private $scope: angular.IScope, $element: JQuery, $attrs: angular.IAttributes, $compile) {
		console.log('TlStarCtrl', arguments);
		this.$scope.$watch('$ctrl.n', () => {
			let html = '';
			let note = Number(this.n) || 3;
			note = (note > 5) ? 5 : note;
			note = (note < 1) ? 1 : note;
			for (let i = 0; i < note; i++) {
				html += `<img ng-click="$ctrl.update(${i + 1})" src="${yellowStarUrl}" >`;
			}
			for (let i = note; i < 5; i++) {
				html += `<img ng-click="$ctrl.update(${i + 1})" src="${whiteStarUrl}" >`;
			}
			$element.html(html);
			$compile($element.contents())($scope);
		});

	}

	public update(note: number) {
		console.log('update', arguments);
		this.n = note;
	}

}


app.component('tlStar', {
	bindings: {
		n: '=?note'
	},
	controller: TlStarCtrl
});

