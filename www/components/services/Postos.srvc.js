(function () {
	'use strict';

	angular.module("myApp").factory("PostosSrvc", [PostosSrvc]);

	function PostosSrvc() {
		var fakeData = [{
			name: "posto perto de casa",
			address: "endereço do posto perto de casa",
			city: "minha cidade",
			flag: "Bandeira 1",
			_id: "0"
		}, {
			name: "posto longe de casa",
			address: "endereço do posto longe de casa",
			city: "minha cidade",
			flag: "Bandeira 2",
			_id: "1"
		}, {
			name: "posto muito longe de casa",
			address: "endereço do posto muito longe de casa",
			city: "cidade vizinha",
			flag: "Bandeira 3",
			_id: "2"
		}];



		return {
			fakeData: fakeData
		}
	}

})();