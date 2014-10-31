var todoList = [
{done: true, title : "AngularJS 독서"},
{done: false, title : "공부하기"},
{done: false, title : "개인 프로젝트 구성"}
];


function todoCtrl($scope){

	$scope.appName = 'AngularJS 할일 앱';	
	
	$scope.todoList = todoList;
	
	$scope.addNewTodo = function(newTitle){
		todoList.push({done: false, title : newTitle});
		$scope.newTitle ="";
	};
	
	$scope.archive = function(){
		for(var i = $scope.todoList.length - 1; i >= 0; i--){
			if($scope.todoList[i].done){
				$scope.todoList.splice(i,1);
			}
			
		}
	} ;
	
	$scope.remain = function(){
		var count = 0;
		for(var i = $scope.todoList.length - 1; i >= 0; i--){
			if(!$scope.todoList[i].done){
				count = count + 1;
			}
			
		}
		return count;
		
	};
};


function fruitShopCtrl($scope){
	var menuList = [
		{itemid:1, itemNm: "사과", itemPrice: 2000, itemCount: 0},
		{itemid:2, itemNm: "배", itemPrice: 2300, itemCount: 0},
		{itemid:3, itemNm: "포도", itemPrice: 5000, itemCount: 0},
		{itemid:4, itemNm: "토마토", itemPrice: 3500, itemCount: 0}
		];

$scope.menuList = menuList;
$scope.totalPrice = 0;

$scope.buy = function(){
	
	$scope.totalPrice = 0;
	
	//$scope.totalPrice  = $scope.menuList[1].itemPrice;
	
	
	angular.forEach($scope.menuList, function(menu, idx){
		$scope.totalPrice = $scope.totalPrice + (menu.itemPrice * Number(menu.itemCount));
	});
	
};


var countryList = 
[
{name: '한국', code: 'KR', continent: '아시아'},
{name: '일본', code: 'JP', continent: '아시아'},
{name: '미국', code: 'EN', continent: '북미'}
];

$scope.countryList = countryList;

};
