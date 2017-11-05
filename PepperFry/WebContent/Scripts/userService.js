angular.module('myApp')
	.service('userServices',function($state,$http){
this.signup = function(){
		$state.go('user');
};
this.submit = function(user,email,pwd,address){
		var data={
			username : user,
			email : email,
			pwd : pwd,
			cust_address: address,
			
	};
		var url = "http://localhost:8080/PepperFry/rest/user/add";
			$http.post(url, data)
				.then(function successCallback(response) {
					console.log(response.data);
					$state.go('index');
				 
			
				}, function errorCallback(response) {
					alert("Fill the details");
					$state.go('index');
				});
}		
this.login = function(email,pwd){
		var data={
					email : email,
					pwd :pwd
		  };
		var url ="http://localhost:8080/PepperFry/rest/user/auth";
		console.log(url);
		$http.post(url, data)
			.then(function(response) {
				var value = response.data;
				sessionStorage.setItem('value', JSON.stringify(value));
				console.log(response.data);
				console.log(value);
				if(response.status ==200){
					console.log(response.data);
					$state.go('dashBoard.category');
				}else{
					alert("provided credentials are wrong!");
					$state.go('index');
				}
		});
}
this.getCategoryTable = function getCategoryTable(Sucess){
	        var url = "http://localhost:8080/PepperFry/rest/category/getAllCategoryTable";
	        //serviceCall.get();
	         $http.get(url).then(Sucess, function(error){
	         return (error);
	         });         
}
this.getbrandTable = function getbrandTable(Sucess){
	        var url = "http://localhost:8080/PepperFry/rest/brands/getAllBrandTable";
	        //serviceCall.get();
	         $http.get(url).then(Sucess, function(error){
	         return (error);
	         });         
}
this.getproducts = function getproducts(Sucess){
			var url = "http://localhost:8080/PepperFry/rest/Product/getAllProduct";
			//serviceCall.get();
			$http.get(url).then(Sucess, function(error){
			return (error);
			});         
 }
this.getbrandproducts = function getbrandproducts(Sucess){
	var url = "http://localhost:8080/PepperFry/rest/Product/getAllProduct";
	//serviceCall.get();
	$http.get(url).then(Sucess, function(error){
	return (error);
	});         
}

this.addTowishlist = function addTowishlist(userid,product_id) {
	 
	 var url = "http://localhost:8080/PepperFry/rest/wish/getwishlist?cust_id="+userid+"&product_id="+product_id;
	 $http.post(url)
	 .then(function Successcallback(response) {
		 if(response.data == "Success"){
				alert("Added To favourites");
			} else {
				alert("already added To Favourites!!");
			}
	 });
}



});