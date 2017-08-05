(function () {

	"use strict"
	angular.module("myApp").controller("PostoListctrl", ['PostosSrvc', 'HttpSrvc', PostoListctrl]);

	function PostoListctrl(PostosSrvc, HttpSrvc) {

		var vm = this;


        HttpSrvc.getAll();
        
        

		vm.postos = PostosSrvc.fakeData;


		vm.sortBy = function (propertyName) {

			vm.propertyName = propertyName;
		};


	};

})();