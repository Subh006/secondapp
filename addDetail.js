var app = angular.module('addDetail',[]);

app.controller('addDetailController',["$scope","$http",($scope,$http)=>{

    $scope.employee={};
    

    $scope.addEmployee = ()=>{
        $http.post("http://localhost:6199/employees",$scope.employee).then((response)=>{
            alert(response.data);
        })
        
    };


    
    // $http.get("http://localhost:6199/employees").then((response)=>{
    //     $scope.employees=response.data;
    // })


}]);

