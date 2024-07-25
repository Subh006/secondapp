var app = angular.module('getDetail',[]);

app.controller('getDetailController',["$scope","$http",($scope,$http)=>{

    // $scope.employees=[
    //     {
    //         eid:101,
    //         ename:"Subhajeet Mohanty",
    //         salary:28000,
    //         dept:"ASE"
    //     },
    //     {
    //         eid:102,
    //         ename:"Subhankar Mohanty",
    //         salary:65000,
    //         dept:"SD"
    //     }
    // ]


    
    $http.get("http://localhost:6199/employees").then((response)=>{
        $scope.employees=response.data;
    })


}]);
