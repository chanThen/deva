var app = angular.module('myApp')
app.controller('index',function($scope,userServices){  
	function init() {
		$scope.email;
		$scope.pwd;
		var value = {};
	};

	/*$scope.value;*/
	$scope.login = function login (){
		userServices.login($scope.email,$scope.pwd);
		$scope.value = JSON.parse(sessionStorage.getItem("value"));
		console.log("value",$scope.value.name);
	}
	console.log($scope.login);
	
	$scope.signup = function(){
		userServices.signup();
	}	
		
	init();
})

app.controller('signIn',function($scope,userServices){
		$scope.user;
		$scope.email;
		$scope.pwd;
		$scope.address;
		$scope.submit = function(){
			userServices.submit($scope.user,$scope.email,$scope.pwd,$scope.address);
		}
})

app.controller('categoryCtrl' ,function ($scope,$http,$state,userServices) {
	   			var init = function init() {
	   			$scope.category={};
	   			userServices.getCategoryTable(Sucess);
	   		};
		 
	   			function Sucess(payload){
	   			$scope.category = payload.data;
		        console.log($scope.category);
			 }
	   			init();
	   		$scope.getproductListById = function getproductListById(id){
	   		$state.go('dashBoard.products',{id:id});	
	   		}
})
app.controller('brandCtrl', function ( $scope,$http,$state,userServices) {
			var init = function init() {
			$scope.brand={};
			userServices.getbrandTable(Sucess);
		};
 
			function Sucess(payload){
			$scope.brand = payload.data;
			console.log($scope.brand);
		}
			init();
	
			$scope.getProductById = function getProductById(brandid){
				$state.go("dashBoard.brandproducts",{brandid :brandid});
	}
	
	
})
app.controller ('productCtrl', function($scope,$http,$state,userServices){
			 var init = function init(){
				 $scope.product = {};
				 $scope.pid={};
				 $scope.pid = $state.params.id;
				 
				 console.log($scope.pid);
				 userServices.getproducts(Success);
		};
			 function Success(payload){
				   $scope.product = payload.data;
	    }
			 init();
			 $scope.getProducts = function getProducts(){
				 $state.go("dashBoard.products");
	}
			 $scope.add = function add(product_id){

				   var userdetails = sessionStorage.getItem('value');
				   var data = JSON.parse(userdetails);
				   var userId = JSON.parse(data.userid);
				   userServices.addTowishlist(userId,product_id);
			 }

})
app.controller ('brandproductCtrl', function($scope,$http,$state,userServices){
			 var init = function init(){
				 $scope.brandproduct = {};
				 $scope.bid={};
				 $scope.bid = $state.params.brandid;
				 console.log($scope.bid);
				 userServices.getbrandproducts(Success);
		};
			 function Success(payload){
				   $scope.brandproduct = payload.data;
	    }
			 init();
			 $scope.getbrandProducts = function getbrandProducts(){
				 $state.go("dashBoard.brandproducts");
	}
});