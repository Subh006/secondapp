var app = angular.module('home',[]);

app.controller('homeController',["$scope",($scope)=>{

    $scope.template="";
    $scope.navigate=(url)=>{
        $scope.template=url;
    }
}]);