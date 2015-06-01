
var addanalytics = function() {
    
};

var addevent = function() {
    
};

// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ngRoute',
    'ngResource',
    'phonecatControllers',
    'templateservicemod',
    'Service',
    'ui.bootstrap',
    'ImageZoom',
    'directives.skrollr',
    'ui-rangeSlider',
    'infinite-scroll'
]);

firstapp.config(
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/search/:search', {
            templateUrl: 'views/template.html',
            controller: 'searchpage'
        }).
        when('/wishlist', {
            templateUrl: 'views/template.html',
            controller: 'wishlist'
        }).
        when('/xoxo', {
            templateUrl: 'views/template.html',
            controller: 'xoxo'
        }).
        when('/cart', {
            templateUrl: 'views/template.html',
            controller: 'cart'
        }).
        when('/checkout', {
            templateUrl: 'views/template.html',
            controller: 'checkout'
        }).
        when('/lookbook', {
            templateUrl: 'views/template.html',
            controller: 'lookbook'
        }).
        when('/Logout', {
            templateUrl: 'views/template.html',
            controller: 'logout'
        }).
        when('/wholesaler', {
            templateUrl: 'views/template.html',
            controller: 'wholesaler'
        }).
        when('/Login', {
            templateUrl: 'views/template.html',
            controller: 'login'
        }).
        when('/contact', {
            templateUrl: 'views/template.html',
            controller: 'contact'
        }).
        when('/profile', {
            templateUrl: 'views/template.html',
            controller: 'profile'
        }).
        when('/lylaloves', {
            templateUrl: 'views/template.html',
            controller: 'lylaloves'
        }).
        when('/newin', {
            templateUrl: 'views/template.html',
            controller: 'newin'
        }).
        when('/category/:CategoryId', {
            templateUrl: 'views/template.html',
            controller: 'category'
        }).
        when('/just-in', {
            templateUrl: 'views/template.html',
            controller: 'JustInCtrl'
        }).
        when('/product/:ProductId', {
            templateUrl: 'views/template.html',
            controller: 'product'
        }).
        when('/thankyou', {
            templateUrl: 'views/template.html',
            controller: 'thankyou'
        }).
        when('/delivery', {
            templateUrl: 'views/template.html',
            controller: 'delivery'
        }).
        when('/returns', {
            templateUrl: 'views/template.html',
            controller: 'returns'
        }).
        when('/loginwishlist', {
            templateUrl: 'views/template.html',
            controller: 'loginwishlist'
        }).
        when('/jewellery', {
            templateUrl: 'views/template.html',
            controller: 'jewellery'
        }).
        when('/about', {
            templateUrl: 'views/template.html',
            controller: 'about'
        }).

        otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);

    });

firstapp.filter('imagepath', function() {
    return function(input) {
        return "http://www.lylaloves.co.uk/showimage?size=300&image=" + input;
    };
});
firstapp.filter('imagepathbig', function() {
    return function(input) {
        return "http://www.lylaloves.co.uk/showimage?size=800&image=" + input;

    };
});

firstapp.filter('convertprice', function() {
    return function(input) {

        var price = parseFloat(input);
        if (price < 0) {
            return 0;
        }
        var currencyshow = "£";
        for (var i = 0; i < conversionrate.length; i++) {
            if (conversionrate[i].name == currency) {
                //console.log("currency: "+currency+" price ini: "+price+" price new: "+parseFloat(conversionrate[i].conversionrate)*price);
                if (currency == "USD") {
                    currencyshow = "$";
                } else if (currency == "EURO") {
                    currencyshow = "€";
                }
                return currencyshow + " " + (parseFloat(conversionrate[i].conversionrate) * price).toFixed(2);
            }
        }
    };
});


function AccordionDemoCtrl($scope) {
    $scope.oneAtATime = true;
    /*
  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
*/
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
}

function CarouselDemoCtrl($scope) {
    $scope.myInterval = 5000;
    //var slides = $scope.slides = [];
    /*
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    /*
	slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };*/
    /*
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }*/
}

function ScrollCtrl($scope, $location, $anchorScroll) {
    $scope.gotopropertydetails = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('property-details');

        // call $anchorScroll()
        $anchorScroll();
    };
    $scope.gotoflats = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('flat-details');

        // call $anchorScroll()
        $anchorScroll();
    };
    $scope.gotoflats = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('flat-details');

        // call $anchorScroll()
        $anchorScroll();
    };
    $scope.gotolocation = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('location-details');

        // call $anchorScroll()
        $anchorScroll();
    };
    $scope.gotoamenities = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('amenity-details');

        // call $anchorScroll()
        $anchorScroll();
    };
    $scope.gotogallery = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('gallery-details');

        // call $anchorScroll()
        $anchorScroll();
    };
}

firstapp.directive('resizable', function($window) {
    return function($scope) {
        $scope.initializeWindowSize = function() {
            $scope.windowHeight = $window.innerHeight;
            return $scope.windowWidth = $window.innerWidth;
        };
        $scope.initializeWindowSize();
        return angular.element($window).bind('resize', function() {
            $scope.initializeWindowSize();
            return $scope.$apply();
        });
    };
});

/*
firstapp.directive('ngElevateZoom', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.attr('data-zoom-image',attrs.zoomImage);
      //$(element).elevateZoom();
        $(element).elevateZoom({ zoomType	 : "inner", cursor: "crosshair" });
    }
  };
});*/

firstapp.directive('ngElevateZoom', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            console.log("Linking")

            //Will watch for changes on the attribute
            attrs.$observe('zoomImage', function() {
                linkElevateZoom();
            })

            function linkElevateZoom() {
                //Check if its not empty
                if (!attrs.zoomImage) return;
                element.attr('data-zoom-image', attrs.zoomImage);
                $(".zoomimg").elevateZoom({
                    zoomType: "lens",
                    lensShape: "round",
                    lensSize: 200
                });
            }

            linkElevateZoom();

        }
    };
});

firstapp.run(function($rootScope) {
    $rootScope.isloaded = 0; //global variable
});
firstapp.directive('myRepeatDirective', function() {
    return function(scope, element, attrs) {
        angular.element(element).css('color', 'blue');
        if (scope.$last) {
            new WOW().init();
        }
    };
});




firstapp.directive('thumbnail', [

    function() {
        return {
            restrict: 'AC',
            link: function(scope, elem, attrs) {
                elem.bind('click', function() {
                    var src = elem.find('img').attr('src');

                    // call your SmoothZoom here
                    angular.element(attrs.options).css({
                        'background-image': 'url(' + src + ')'
                    });
                });
            }
        };
    }
]);



firstapp.directive('zoom', [

    function() {
        return {
            restrict: 'AC',
            scope: {
                //  tiny: "=",
                // small: "=",
                //  big: "=",
                //  title: "=",
            },
            link: function(scope, elem, attrs) {
                //elem.bind('click', function() {
                //  $(this).CloudZoom();
                //});

                //     var options = {}; // This would be your options object.
                //elem.CloudZoom(options);                  // jQuery way.
                //myInstance = new CloudZoom(elem ,options); // 'normal' way.



                //   var str = '<div id="wrap" style="top:0px;z-index:9999;position:relative;">' +
                //    '<a href="' + scope.big + '" class="cloud-zoom" id="zoom1" rel="adjustX: 10, adjustY:-4, softFocus:true" style="position: relative; display: block;">' +
                //    '<img src="' + scope.small + '" alt="" align="left" title="' + title + '" style="display: block;">' +
                //    '<div style="position: absolute; top: 2px; left: 2px; width: 238px; height: 318px; background-image: url(' + small + '); opacity: 0.5; display: none; background-position: initial initial; background-repeat: initial initial;"></div></a><div class="mousetrap" style="background-image: url(http://www.professorcloud.com/mainsite/); z-index: 999; position: absolute; width: 240px; height: 320px; left: 0px; top: 0px; cursor: move;"></div></div>';



                //var $this = $(this);
                //   var src = elem.attr('src');
                var str = '<a href="' + attrs.tiny + '" class="cloud-zoom" rel="adjustX: 10, adjustY:-4" />';
                elem.wrap(str);
                $(".cloud-zoom, .cloud-zoom-gallery").CloudZoom();


            }
        };
    }
]);


firstapp.directive('zoom1',
    function($compile) {
        return {
            restrict: 'AC',
            scope: {
                title: "=",
                tiny: "=",
                small: "=",
                big: "="
            },
            //Template doesn't seem work correctly, leaves a loading message.
            //template: '<a href="{{big}}" class="cloud-zoom" rel="adjustX: 10, adjustY:-4"><img src="{{small}}"/></a>',
            //replace: true,
            link: function(scope, element, attrs) {


                var str = '<a href="' + scope.big + '" class="cloud-zoom" rel="adjustX: 10, adjustY:-4">' +
                    '<img src="' + scope.small + '"/></a>';
                var e = $compile(str)(scope);
                element.replaceWith(e);

                $(".cloud-zoom, .cloud-zoom-gallery").CloudZoom();
            }
        };
    }
);



firstapp.directive('zoom2', ['$compile',
    function($compile) {
        return {
            restrict: 'AC',
            scope: {
                tiny: "=",
                small: "=",
                big: "=",
                title: "="
            },
            //Template doesn't seem work correctly, leaves a loading message.
            //template: '<a href="{{big}}" class="cloud-zoom" rel="adjustX: 10, adjustY:-4"><img src="{{small}}"/></a>',
            //replace: true,
            controller: ["$scope", "$attrs", "$element", "$compile",
                function($scope, $attrs, $element, $compile) {

                    $scope.init = function() {



                        //Create a watch to know when to open the PopOver Text
                        $scope.$watch('tiny + small + big + title', function(newValue, oldValue) {
                            console.log("in watch.");


                            var str = $scope.small + ' <a href="' + $scope.big + '" class="cloud-zoom" rel="adjustX: 10, adjustY:-4">' +
                                '<img src="' + $scope.small + '"/></a>';
                            var e = $compile(str)($scope);

                            $element.html(e);

                            $(".cloud-zoom, .cloud-zoom-gallery").CloudZoom();

                        }, true);

                    }; // end init

                    //set the popover properties
                    $scope.init();

                }
            ]

        };
    }
]);
