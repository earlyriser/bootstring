var App = angular.module('App', []);


/*
1 English 565,004,000 27%
2 Chinese 509,965,000 25%
3 Spanish 164,969,000   8%
4 Japanese  99,182,000    5%
5 Portuguese  82,587,000    4%
6 German  75,423,000    4%
7 Arabic  65,365,000    3%
8 French  59,779,000    3%
9 Russian 59,700,000    3%
10  Korean  39,440,000    2%
*/ 
App.controller('LangCtrl', function($scope, $http) {
  $scope.langs = {'en':'English','es':'Spanish', 'fr':"French"};
  $scope.english = null;
  $scope.other = [];
  $scope.selectedLang = 'es';

  $scope.changeCurrent = function (lang){
    $scope.selectedLang = lang;
    $http.get('javascripts/i18n/'+$scope.selectedLang+'.json')
         .then(function(res){
            $scope.other = res.data;              
    });     
  }

  $http.get('javascripts/i18n/en.json')
       .then(function(res){
          $scope.english = res.data;              
  });        

  $http.get('javascripts/i18n/map.js')
       .then(function(res){
          $scope.map = res.data;   

          console.log ( $scope.map);           
  });   

  $scope.changeCurrent( $scope.selectedLang );

});