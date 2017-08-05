angular.module('myApp', ['ngMaterial', 'ui.router'])

.run(["$rootScope", "$state", function ($rootScope, $state) {
	console.log("Acabei de acessar o site ");

	$rootScope.isLogedIn = false;

	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
		console.log("Indo para a pagina: ", toState.name);


		if (toState.authenticate && !$rootScope.isLogedIn) {
			console.log("Precisa Autenticar");
            alert("Acesso Restrito! Precisa Autenticar!");
			event.preventDefault();
			$state.go('login');
		}

	})

}])



.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$stateProvider


	// Página Home
		.state('home', {
		url: '/home',
		templateUrl: 'components/home/home.html',
		controller: 'homeCtrl as vm'
	})



    
    
    
    
    
    
    
	// Página Login
	.state('login', {
		url: '/login',
		templateUrl: 'components/login/login.html',
		controller: 'loginCtrl as vm'
	})



	// Página Acesso Restrito
	.state('restrito', {
		url: '/restrito',
		authenticate: true,
		templateUrl: 'components/restrito/restrito.html',
		controller: 'restritoCtrl as vm'
	})




	$urlRouterProvider.otherwise('/home');

}]);