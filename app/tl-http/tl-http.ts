import 'angular';

declare const angular: angular.IAngularStatic;

const app = angular.module('tl-http', []);

class TlHttpCtrl {
	/* @ngInject */


	constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
		// console.log('TlStarCtrl', arguments);




	}

	public start() {
		console.log('start', arguments);
		this.$http.get('ws/s1').then((response) => {
			console.log('response', response);

			const promises = [this.$http.get('ws/s2').then((s2Response) => {
				console.log('s2Response', s2Response);
				return this.$http.get('ws/s5');
			}), this.$http.get('ws/s3'), this.$http.get('ws/s4')];
			return this.$q.all(promises);
		}).then((responses) => {
			console.log('responses', responses);
			return this.$http.get('ws/s6');

		}).catch((error) => { console.error('error', error); });

	}

}

app.controller('TlHttpCtrl', TlHttpCtrl);

