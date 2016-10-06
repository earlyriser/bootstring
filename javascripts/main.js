google.charts.load('upcoming', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

  //http://www.statsilk.com/maps/language-distribution-interactive-world-map
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Status'],
    ['United Kingdom',  1],
    ['USA', 1], 
    ['Australia',  1],
    ['Canada',  1],
    ['Ireland',  1],
    ['New Zealand', 1],
    ['Namibia', 1],
    ['South Africa', 1],
    ['Botswana', 1],
    ['South Sudan', 1],
    ['Uganda', 1],
    ['Kenya', 1],
    ['Zimbabwe', 1],
    ['Zambia', 1],
    ['Tanzania', 1],
    ['Nigeria', 1],
    ['Ghana', 1],
    ['Liberia', 1],
    ['Sierra Leone', 1],
    ['Philippines', 1],
    ['Leshotho', 1],
    ['Guyana', 1],
    ['Pakistan', 1],
    
    ['China', 0],
    ['Taiwan', 0],          
    
    ['Argentina',  1],
    ['Bolivia',  1],
    ['Chile',  1],
    ['Colombia',  1],
    ['Costa Rica',  1],
    ['Cuba',  1],
    ['Dominican Republic',  1],
    ['Ecuador',  1],
    ['El Salvador',  1],
    ['Guatemala',  1],
    ['Honduras',  1],
    ['Mexico',  1],
    ['Nicaragua',  1],
    ['Panama',  1],
    ['Paraguay',  1],
    ['Peru',  1],
    ['Puerto Rico',  1],
    ['Uruguay',  1],
    ['Venezuela',  1],
    ['Spain', 1],
    
    //Arabic
    ['Chad', 0],
    ['Algeria',  0],
    ['Bahrain',  0],
    ['Comoros',  0],
    ['Djibouti',  0],
    ['Egypt',  0],
    ['Iraq',  0],
    ['Jordan',  0],
    ['Kuwait',  0],
    ['Lebanon',  0],
    ['Libya',  0],
    ['Mauritania',  0],
    ['Morocco',  0],
    ['Oman',  0],
    ['Palestine',  0],
    ['Qatar',  0],
    ['Saudi Arabia',  0],
    ['Somalia',  0],
    ['Sudan',  0],
    ['Syria',  0],
    ['Tunisia',  0],
    ['United Arab Emirates',  0],
    ['Yemen',  0],
    ['Western Sahara', 0],
    
    ['Brasil',  0],
    ['Portugal',  0],
    ['Angola',  0],
    ['Mozambique',  0],  
    
    ['Japan', 0],
    
    //russian        
    ['Russia', 0],
    ['Belarus', 0],
    ['Kazakhstan', 0],
    
    ['Indonesia', 0],
    ['Malaysia', 0],
    ['Brunei', 0],
    ['Singapore', 0],
    ['Cocos', 0],
    
    ['France', 0],
    ['Luxembourg', 0],
    ['Monaco', 0],
    ['Gabon', 0],
    ['Mauritius', 0],
    ['Senegal', 0],
    ['Ivory Coast', 0],
    ['Mali', 0],
    ['Niger', 0],
    ['Burkina Faso', 0],
    ['Congo', 0],
    ['Democratic Republic of Congo', 0],
    ['Central African Republic', 0],
    ['Cameroon', 0],
    ['Madagascar', 0],
    ['Guinea', 0]
    
    
  ]);

  var options = {
    legend:'none',
    // tooltip:{
    //   trigger: 'none'
    // },
    colorAxis: {colors: ['#eee', 'black', '#5fa5ab']},
    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    defaultColor: '#f5f5f5',
  }

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  
  chart.draw(data, options);
}    



angular.module('App', ['sticky']).controller('LangCtrl', function($scope, $http) {
  $scope.langs = [
    {id:"en",   name:"English",  ready:true},
    {id:"zh",   name:"Chinese",  ready:false},
    {id:"es",   name:"Spanish",  ready:true},
    {id:"ar",   name:"Arabic",  ready:false},
    {id:"pt",   name:"Portuguese",  ready:false},
    {id:"ja",   name:"Japanese",  ready:false},
    {id:"ru",   name:"Russian",  ready:false},
    {id:"ms",   name:"Malay",  ready:false},
    {id:"fr",   name:"French",  ready:false},
    {id:"de",   name:"German",  ready:false}
  ];
  $scope.english = null;
  $scope.other = [];
  $scope.selectedLang = $scope.langs[2];
  $scope.themes = [
    {id:"main_sections", name:"Main sections"},
    {id:"main_actions", name:"Main actions"},
    {id:"navigation", name:"Navigation"},
    {id:"media", name:"Media"},
    {id:"social", name:"Social"},
    {id:"ecommerce", name:"Ecommerce"},
    {id:"time", name:"Time"},
    {id:"asynchronous", name:"Asynchronous"},
    {id:"forms", name:"Forms"},
    {id:"password", name:"Password"},
    {id:"onboarding", name:"Onboarding"},
    {id:"text_editor", name:"Text editor"}
  ]

  $scope.changeCurrent = function (lang){
    if( lang.ready){
      $scope.selectedLang = lang;
      $http.get('javascripts/i18n/'+$scope.selectedLang.id+'.json')
           .then(function(res){
              $scope.other = res.data;              
      });       
    }
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