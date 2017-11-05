var app = angular.module("myApp",['ui.router'])
	app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/indexhome");
	$stateProvider
	.state('indexhome',{
		url:'/indexhome',
		templateUrl:'views/indexhome.html'
	})
	.state('index',{
		url:'/index',
		controller:'index',
		templateUrl:'views/login.html'
	})
	.state('user',{
		url:'/user',
		controller:'signIn',
		templateUrl:'views/registration.html'	
	})
	.state('dashBoard',{
		url:'/dashBoard',
		controller:'index',
		templateUrl:'views/Home.html'	
	})
	.state('dashBoard.category',{
		url:'/category',
		controller:'categoryCtrl',
		templateUrl:'views/category.html'	
	})
	.state('dashBoard.brands',{
		url:'/brands',
		controller:'brandCtrl',
		templateUrl:'views/brands.html'	
	})
	.state('dashBoard.products',{
		url:'/products/:id',
		controller:'productCtrl',
		templateUrl:'views/products.html'	
	})
	.state('dashBoard.brandproducts',{
		url:'/brandproducts/:brandid',
		controller:'brandproductCtrl',
		templateUrl:'views/brandproducts.html'	
	})
	.state('wishlist',{
		url:'/wishlist',
		controller:'wishlistCtrl',
		templateUrl:'views/wishlist.html'	
	})
	
	
})