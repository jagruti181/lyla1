var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'Service','ngRoute']);

phonecatControllers.controller('home',
 function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Home");
        $scope.template = TemplateService;
        TemplateService.slider = "views/slider.html";
        TemplateService.content = "views/content.html";
        $scope.homeactive = "active";
        $scope.loginlogouttext="Login";
        $scope.visible=false;
        $scope.ishome="homeclass";
        $scope.onhome="onhome";
        $scope.demo="demodemo";
        $scope.showaccount=function(){
            $scope.visible=true;
        };
        $scope.hideaccount=function(){
            $scope.visible=false;
        };
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.alldate=data;
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
//newsletter
        var newslettersaved=function(data, status){
            if(data=="true")
            {
                $scope.msgg="Thank You For Subscribe";
            }
            else
            {
                $scope.msgg="Thank You For Subscribe";
            }
        };
        $scope.newsletter=function(uemail){
            if(!uemail)
            {
                alert("Please Enter Email");
            }else{
            console.log($scope.alldate);
            MainJson.newsletter("",uemail,"").success(newslettersaved);
            }
        };
//newsletter
//cart badge
            var totalcart=function(data, status){
                $scope.badge=data;
            };
             MainJson.gettotalcart().success(totalcart);
//cart badge
        $scope.$on("$includeContentLoaded", function () {
            TemplateService.firsttimeloaded();
            $(".zoomContainer").remove();
            $(".pulseanimation").hover(function () {
                $(this).addClass("animated pulse");
            }, function () {
                $(this).removeClass("animated pulse");
            });

            $(".tadaanimation").hover(function () {
                $(this).addClass("animated tada");
            }, function () {
                $(this).removeClass("animated tada");
            });
        });
        $scope.myInterval = 5000;
        var slides = $scope.slides = [{
            image: "img/slide.jpg"
        }, {
            image: "img/slide2.jpg"
        }];


 });

phonecatControllers.controller('cart',
 function ($scope, TemplateService, MainJson, $rootScope, $location) {
      $(".zoomContainer").remove();
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Cart");
        TemplateService.content = "views/cart.html";
        TemplateService.slider = "";
     $scope.cart=[];
        $scope.loginlogouttext="Login";
//authenticate
        
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.loginlogouttext=data.email;
            $scope.uid=data.id;
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
     $scope.newquantity = [];
        var showcart=function(data, status){
            console.log(data);
            $scope.cart = data;
            console.log("Values in cart");
            console.log($scope.cart[0].qty);
            console.log($scope.cart.length);
            
            for (var i = 0; i < $scope.cart.length; i++) {
            $scope.newquantity[i] = $scope.cart[i].qty;
            
        }
            console.log("values in newquantity");
            console.log($scope.newquantity);
        };
        MainJson.getcart().success(showcart);
        var getsubtotal=function(data, status){
            $scope.subtotal=data;
        };
        MainJson.totalcart().success(getsubtotal);
//separating cart
         $scope.postcart=function(){
             $scope.cart = MainJson.getcart();
            $scope.id=$scope.cart[0].id;
            $scope.name=$scope.cart[0].name;
            $scope.price=$scope.cart[0].price;
            $scope.quantity=$scope.cart[0].quantity;
            for(var i= 1;i<$scope.cart.length;i++)
            {
            $scope.id+=","+$scope.cart[i].id;
            $scope.name+=","+$scope.cart[i].name;
            $scope.price+=","+$scope.cart[i].price;
            $scope.quantity+=","+$scope.cart[i].quantity;
            }
             
            
         }
//separating cart
//add to cart
         var getsubtotal=function(data, status){
            $scope.subtotal=data;
        };
         var cartt=function(data, status){
            console.log(data);
             MainJson.totalcart().success(getsubtotal);
        };
        $scope.addtocart = function (id, name, price, quantity) {
            // console.log(id+name+price+quantity);
            MainJson.addtocart(id, name, price, quantity).success(cartt);
        };
//addto cart
        
        $scope.deletecart = function (id) {
            $scope.subtotal = MainJson.deletecart(id);
        };
        $scope.savecart = function (id, quantity) {
            $scope.returntwo = MainJson.savecart($scope.uid,id, quantity);
            $scope.subtotal=$scope.returntwo.subtotal;
        };

 });

phonecatControllers.controller('logout',
   function ($scope, TemplateService, MainJson, $location) {
        
        //######################authentication#####################3
        var logout=function(data, status){
            //console.log(data);
            $scope.loginlogouttext="Login";
            $scope.isloggedin=0;
            $location.url("/home");
        };
        MainJson.logout().success(logout);
        //######################authentication#####################3
});





phonecatControllers.controller('login',
    function ($scope, TemplateService, MainJson, $rootScope, $routeParams, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Login");
        TemplateService.content = "views/login.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var cartdata=function(data, status){
            console.log(data);
            for (var i = 0; i < data.length; i++) {
            MainJson.addtocart(data[i].id, data[i].name, data[i].price, data[i].quantity);
            }
        };
        var authenticate=function(data, status){
            MainJson.getusercart(data.id).success(cartdata);
          if(data!="false")
          {
            $scope.loginlogouttext="Logout";
            
              
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
        var emailsend=function(data, status){
            console.log(data);
            alert("Email send to you");
        };
        var getsignup=function(data,status){
            if(data!="false")
            {
                $scope.msgr="Registred Successful";
                 $location.url("/home");
               MainJson.signupemail(data.email).success(emailsend);
            }
            else
            {
                $scope.msgr="Error In Registration";
            }
        };
        $scope.signup=function(register){
            console.log(register);
            MainJson.registeruser(register.firstname,register.lastname,register.email,register.password).success(getsignup);
        };
        var getlogin=function(data, status){
            if(data!="false")
            {
                $scope.msg="Login Successful";
                 $location.url("/home");
            }
            else
            {
                $scope.msg="Invalid Email Or Password";
            }
        };
        $scope.userlogin=function(login){
            console.log(login);
            MainJson.loginuser(login.email,login.password).success(getlogin);
        };
        
        
});
phonecatControllers.controller('xoxo',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Login");
        $scope.homeactive = "active";
        TemplateService.content = "views/xoxo.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.alldata=data;
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate


});

phonecatControllers.controller('contact',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Login");
        $scope.homeactive = "active";
        TemplateService.content = "views/contact.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.alldata=data;
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
//contact
        var contact=function(data, status){
            console.log(data);
            $scope.msg="YOUR REVIEW IS SAVED SUCCESSFULY";
        };
        $scope.usercontact=function(data){
            MainJson.usercontact("",data.name,data.email,data.phone,data.comment).success(contact);
        };
//contact

});


phonecatControllers.controller('contact2',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
      
    
        var contact=function(data, status){
            console.log(data);
            $scope.msg="YOUR REVIEW IS SAVED SUCCESSFULY";
        };
        $scope.usercontact=function(data){
            MainJson.usercontact("",data.name,data.email,data.phone,data.comment).success(contact);
        };
//contact

});

phonecatControllers.controller('wholesaler',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Wholesaler");
        $scope.homeactive = "active";
        TemplateService.content = "views/wholesaler.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.alldata=data;
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
//register
        var getwholesalersignup=function(data,status){
            if(data!="false")
            {
                $scope.msgr="Registred Successful";
               
            }
            else
            {
                $scope.msgr="Error In Registration";
            }
        };
        $scope.wholesalersignup=function(register){
            console.log(register);
            MainJson.registerwholesaler(register.firstname,register.lastname,register.phone,register.email,register.password).success(getwholesalersignup);
        };
//register

});


phonecatControllers.controller('profile',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Your Profile");
        $scope.homeactive = "active";
        TemplateService.content = "views/profile.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate

});

phonecatControllers.controller('lylaloves',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("lylaloves...");
        $scope.homeactive = "active";
        TemplateService.content = "views/lylaloves.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.loginlogouttext=data.email;
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
//        $scope.$on('$includeContentLoaded', function () {
//            console.log("content loaded");
//        
//            var $container = $('#isotope');
//            
//            // init
//            $container.isotope({
//                // options
//                layoutMode: 'masonry',
//                itemSelector: '.item',
//
//            });
//        });

});

phonecatControllers.controller('thankyou',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Thank You");
        $scope.homeactive = "active";
        TemplateService.content = "views/thankyou.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.loginlogouttext=data.email;
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate

});
phonecatControllers.controller('newsletter',
    function ($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {
        $scope.template = TemplateService;
        $scope.msgg="Message here..........";
        
//authenticate
        var authenticate=function(data, status){
            console.log(data);
          if(data!="false")
          {
            $scope.alldate=data;
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
//newsletter
        var newslettersaved=function(data, status){
            if(data=="true")
            {
                alert("Thank you for subscribing.");
            }
            else
            {
                //alert("Thank You For Subscribe");
                $location.url("/xoxo");
            }
        };
        $scope.newsletter=function(uemail){
            if(!uemail)
            {
                alert("Please Enter Email");
            }else{
            console.log($scope.alldate);
            MainJson.newsletter("",uemail,"").success(newslettersaved);
            }
        };
//newsletter

    });

phonecatControllers.controller('search',
    function ($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {
        $scope.template = TemplateService;
        $scope.msgg="Message here..........";
        
//authenticate
        var authenticate=function(data, status){
            console.log(data);
          if(data!="false")
          {
            $scope.alldate=data;
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
//search
        $scope.search=function(search){
             $location.url("/search/"+search);
        };
//search

    });



phonecatControllers.controller('searchpage',
 function ($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Search");
        $scope.homeactive = "active";
        TemplateService.content = "views/search.html";
        TemplateService.slider = "";
        $scope.firstshow = "firstshow";
     $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.loginlogouttext=data.email;
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate

//searching
     $scope.searchresult=$routeParams.search;
     var searching=function(data, status){
         $scope.find=data;
     };
     MainJson.seach($routeParams.search).success(searching);
//searching
});


phonecatControllers.controller('lookbook',
 function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Ziba Lookbook");
        $scope.homeactive = "active";
        TemplateService.content = "views/lookbook.html";
        TemplateService.slider = "";
        $scope.firstshow = "firstshow";
     $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.loginlogouttext=data.email;
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
        $scope.changeactivelookbook = function (id) {
            $scope.firstshow = "";
            console.log(id);
            for (var i = 0; i < $scope.lookbookimages.length; i++) {
                $scope.lookbookimages[i].active = "";
            }
            $scope.lookbookimages[id].active = "active";
            $scope.activeimage = $scope.lookbookimages[id].image;
        };
        $scope.lookbookimages = [{
            id: 1,
            image: "img/lookbook/pro1.jpg"
        }, {
            id: 2,
            image: "img/lookbook/pro2.jpg"
        }, {
            id: 3,
            image: "img/lookbook/pro1.jpg"
        }, {
            id: 4,
            image: "img/lookbook/pro2.jpg"
        }, {
            id: 5,
            image: "img/lookbook/pro1.jpg"
        }, {
            id: 6,
            image: "img/lookbook/pro2.jpg"
        }, {
            id: 7,
            image: "img/lookbook/pro1.jpg"
        }, {
            id: 8,
            image: "img/lookbook/pro2.jpg"
        }];
        $scope.lookbookimages[0].active = "active";
        $scope.activeimage = $scope.lookbookimages[0].image;
});


phonecatControllers.controller('checkout',
 function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Checkout");
        TemplateService.content = "views/checkout.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
        $scope.isloggedin=0;
        $scope.billinginfo=0;
        $scope.shipdifferent=false;
        $scope.shippinginfo=0;
        $scope.form={};
        $scope.continuebilling=function(){
            $scope.billinginfo=1;
        };
        $scope.continueshipping=function(){
            $scope.shippinginfo=1;
        };
        
//authenticate
        var authenticate=function(data, status){
            console.log(data);
          if(data!="false")
          {
            $scope.isloggedin=1;
            $scope.accesslevel=data.accesslevel;
            $scope.status=data.status;
            $scope.id=data.id;
            $scope.email=data.email;
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate

        $scope.newquantity = [];
        var showcart=function(data, status){
            console.log(data);
            $scope.cart = data;
            console.log($scope.cart[0].qty);
            console.log($scope.cart.length);
            
            for (var i = 0; i < $scope.cart.length; i++) {
            $scope.newquantity[i] = $scope.cart[i].qty;
            console.log($scope.newquantity[i]);
        }
        };
        MainJson.getcart().success(showcart);
        var getsubtotal=function(data, status){
            console.log(data);
            
            $scope.subtotal=data;
        };
        MainJson.totalcart().success(getsubtotal);
// free
        $scope.free=function(country){
            if(parseInt($scope.subtotal) >= parseInt(5))
            {
                alert("free");
            }
        };
// free
        $scope.deletecart = function (id) {
            $scope.subtotal = MainJson.deletecart(id);
        };
        $scope.savecart = function (id, quantity) {
            $scope.subtotal = MainJson.savecart(id, quantity);
        };
        var orderemailsend=function(data, status){
            console.log(data);
            alert("Email send");
        };
        var orderplaced=function(data, status){
            console.log("place order returns");
            console.log(data);
            MainJson.orderemail($scope.email,data).success(orderemailsend);
            alert("Order Placed");
        };
     
        
        $scope.placeorder=function(form){
            console.log($scope.cart);
           //MainJson.orderitem($scope.cart);
           $scope.form.cart=$scope.cart;
           $scope.form.user=$scope.id;
           $scope.form.status=$scope.status; //MainJson.placeorder(form.firstname,form.lastname,form.email,form.company,form.billingaddress,form.billingcity,form.billingstate,form.billingpincode,form.billingcountry,form.phone,form.fax,form.shippingaddress,form.shippingcity,form.shippingstate,form.shippingpincode,form.shippingcountry,$scope.id,$scope.status).success(orderplaced); 
            MainJson.placeorder(form).success(orderplaced);
        };
 });

phonecatControllers.controller('headerctrl',
    function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.testing="testing";

    });
phonecatControllers.controller('slider',
    function ($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {
        $scope.template = TemplateService;
        
        $scope.placelimited=function(limited){
            
        var limitedorder=function(data, status){
            if(data!="false")
            {
               // alert("Order Placed");
                $location.url("/xoxo");
                MainJson.placelimitedemail(limited);
            }else{
                alert("You Already Subscribed To This Offer");
            }
        }; 
            
            if(!limited){
               alert("Fill All Data") ;
            }else{
            
        MainJson.placelimited(limited).success(limitedorder);
            }
        };
        

    });

phonecatControllers.controller('category',
    function ($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {

        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.content = "views/category.html";
        TemplateService.slider = "";

        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
            console.log(data);
          if(data!="false")
          {
            $scope.loginlogouttext=data.email;
            $scope.accesslevel=data.accesslevel;
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate


        var categorysuccess = function (data, status) {
            $scope.category = data.category;
            $scope.breadcrumbs = data.breadcrumbs;
            $scope.subcategory = data.subcategory;
            $scope.currentcategory = data.currentcategory;
            $scope.productlist = data.product;
            console.log(data);
            console.log(data.product);
        };
        MainJson.getproductbycategory($routeParams.CategoryId).success(categorysuccess);

        $scope.$on('$viewContentLoaded', function () {

            new WOW().init();


            TemplateService.firsttimeloaded();
            $(".zoomContainer").remove();
            $(".pulseanimation").hover(function () {
                $(this).addClass("animated pulse");
            }, function () {
                $(this).removeClass("animated pulse");
            });

            $(".tadaanimation").hover(function () {
                $(this).addClass("animated tada");
            }, function () {
                $(this).removeClass("animated tada");
            });
        });

    });

phonecatControllers.controller('product',
    function ($scope, $routeParams, TemplateService, MainJson, $timeout, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        console.log($routeParams.ProductId);
        $scope.template = TemplateService;
        TemplateService.content = "views/product.html";
        TemplateService.slider = "";
        $scope.addquantity = 1;
        $scope.addedtocart = "hide";
         $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.accesslevel=data.accesslevel;
            $scope.id=data.id;
            $scope.loginlogouttext=data.email;
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate
//nextprevious
        $scope.next=function(product){
            $scope.num=1;
            $scope.num=parseInt($scope.num);
            $scope.product=parseInt(product);
            $scope.sum=$scope.product+$scope.num;
            
            $location.url("/product/"+$scope.sum);
        };
        $scope.previous=function(product){
            $scope.num=1;
            $scope.num=parseInt($scope.num);
            $scope.product=parseInt(product);
            $scope.sum=$scope.product-$scope.num;
            if(parseInt($scope.sum)<1)
            {
                $location.url("/product/"+parseInt($scope.product+$scope.num));
                
            }else{
            $location.url("/product/"+$scope.sum);
            }
        };
//nestprevious
        var getwishlist=function(data, status){
            console.log(data);
            $scope.wish=data;
        };
        $scope.addwishlist=function(id){
            MainJson.addtowishlist(id,$routeParams.ProductId).success(getwishlist);
        };
        var productsuccess = function (data, status) {
            if($scope.accesslevel==3)
            {
                $scope.rate=data.product.wholesaleprice;
            }
            else
            {
                $scope.rate=data.product.price;
            }
            $scope.product = data.product;
            $scope.breadcrumbs = data.breadcrumbs;
            $scope.productimage = data.productimage;
            $scope.relatedproduct = data.relatedproduct;
            console.log(data);
        };
        MainJson.getproductdetails($routeParams.ProductId).success(productsuccess);
        var cartt=function(data, status){
            console.log(data);
        };
        $scope.addtocart = function (id, name, price, quantity) {
            // console.log(id+name+price+quantity);
            MainJson.addtocart(id, name, price, quantity).success(cartt);
            $scope.addedtocart = "show";
        };

        $scope.$on("$includeContentLoaded", function () {

            // stLight.options({publisher: "d145c5ea-9796-4078-8488-dc6407ac1d79", doNotHash: false, doNotCopy: false, hashAddressBar: true});

            TemplateService.firsttimeloaded();
            $(".zoomContainer").remove();
            $(".pulseanimation").hover(function () {
                $(this).addClass("animated pulse");
            }, function () {
                $(this).removeClass("animated pulse");
            });

            $(".tadaanimation").hover(function () {
                $(this).addClass("animated tada");
            }, function () {
                $(this).removeClass("animated tada");
            });
        });

    });

phonecatControllers.controller('delivery',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Delivery");
        $scope.deliveryactive = "active";
        TemplateService.content = "views/delivery.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate

});

phonecatControllers.controller('wishlist',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Wishlist");
        $scope.deliveryactive = "active";
        TemplateService.content = "views/wishlist.html";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        
        var userwishlist=function(data, status){
            $scope.find=data;
        };
        var authenticate=function(data, status){
            console.log(data);
          if(data!="false")
          {
             MainJson.showwishlist(data.id).success(userwishlist)
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate

});


phonecatControllers.controller('returns',
    function ($scope, TemplateService, MainJson, $rootScope, $location) {
        $scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.changetitle("Returns");
        TemplateService.content = "views/returns.html";
        $scope.returnsactive = "active";
        TemplateService.slider = "";
        $scope.loginlogouttext="Login";
//authenticate
        var authenticate=function(data, status){
          if(data!="false")
          {
            $scope.loginlogouttext="Logout";
          }
        };
        MainJson.authenticate().success(authenticate);
//authenticate

});




phonecatControllers.controller('zoomCtrl',
    function ($scope) {
        $scope.switchImage = function (imageSrc) {
            console.log('change image to: ' + imageSrc);
            $scope.imageSrc = imageSrc;
        };
    }
);

function CarouselDemoCtrl($scope) {

}