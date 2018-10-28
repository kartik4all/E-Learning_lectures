app.config(($routeProvider,$locationProvider)=>{



$locationProvider.hashPrefix('');
$routeProvider.when('/',{templateUrl:'views/home.html',controller:'home'})
.when('/browse',{templateUrl:'views/browse.html',controller:'browse'})
.when('/discover',{templateUrl:'views/discover.html',controller:'discover'})
.when('/radio',{templateUrl:'views/radio.html',controller:'myctrl'})
.when('/myMusic',{templateUrl:'views/myMusic.html',controller:'myctrl'})
.otherwise({template:'<h1>U Type Something Wrong...</h1>'});



});