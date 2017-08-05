(function () {

	"use strict"
	angular.module("myApp").controller("PostoDetailCtrl", ['$stateParams', PostoDetailCtrl]);

	function PostoDetailCtrl($stateParams) {
		console.log($stateParams._id);
		var vm = this;
	}
})();