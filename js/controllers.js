var smartcart = {};

var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'Service', 'ngRoute', 'ngDialog']);
phonecatControllers.controller('home',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        ////$scope.firstloadclass = TemplateService.firstload;

        $scope.template = TemplateService;
        TemplateService.slider = "views/slider.html";
        TemplateService.meta = "Fashion Accessories and Jewellery from London  | Lyla Loves";
        TemplateService.title = "Fashion Jewellery London and Accessories";
        TemplateService.metadescription = "Bring your outfit to life with fashion accessories and jewellery from London for women by Lyla Loves! Shop for necklaces, bracelets, earrings, midi rings and more!";
        TemplateService.keywords = "fashion jewellery online, dainty jewellery, jewellery london, fashion necklaces for women, bracelets for women, earrings for women, midi rings, accessories for women";
        TemplateService.header = "views/headerhome.html";
        TemplateService.navigation = "views/navigationhome.html";
        TemplateService.content = "views/content.html";

        $scope.homeactive = "active";
        $scope.loginlogouttext = "Login";
        $scope.visible = false;
        $scope.ishome = "homeclass";
        $scope.onhome = "onhome";
        $scope.demo = "demodemo";
        $scope.hititle = "Jewellery London - Picks of the Week";

        addanalytics("Home Screen");
        addevent("ButtonTap", " Login");
        //$scope.init = function () {
        //        ngDialog.open({ template: 'popup.html' });
        //    };


        //start get country from geo location
        //        $scope.country = false;
        //        console.log("hello im in home controller");
        //        var showlocationdata = function (data, status) {
        //            console.log("in location success");
        //            console.log(data);
        //            var address = data.results[0].address_components;
        //            for (var i = 0; i < address.length; i++) {
        //                if (address[i].types.indexOf("country") >= 0) {
        //                    $scope.country = address[i].short_name;
        //                    
        //
        //
        //                    var countries = ['AL', 'AD', 'AM', 'AT', 'BY', 'BE', 'BA', 'BG', 'CH', 'CY', 'CZ', 'DE',
        //  'DK', 'EE', 'ES', 'FO', 'FI', 'FR', 'GE', 'GI', 'GR', 'HU', 'HR',
        //  'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MC', 'MK', 'MT', 'NO', 'NL', 'PL',
        //  'PT', 'RO', 'RU', 'SE', 'SI', 'SK', 'SM', 'TR', 'UA', 'VA' ];
        //
        //                    if(countries.indexOf($scope.country) >= 0)
        //                    {
        //                        $scope.country="EUROPE";
        //                    }
        //                    console.log("Country ////////////////////////");
        //                    //case1 : short name: GB
        //                    console.log($scope.country);
        //                    if($scope.country=="GB")
        //                    {
        //                        currency="GBP";
        //                    }
        //                    else if($scope.country=="EUROPE")
        //                    {
        //                        currency="EURO";
        //                    }
        //                    else 
        //                    {
        //                        currency="USD";
        //                    }
        //                    console.log("Currency: "+currency);
        //                    break;
        //                }
        //            }
        //            MainJson.storecountry($scope.geocountry);
        //        };
        //
        //        function showPosition2(position) {
        //            var latlon = position.coords.latitude + "," + position.coords.longitude;
        //            console.log("Positions:.........");
        //            console.log(position);
        //            $scope.coords = position.coords;
        //            lat = position.coords.latitude;
        //            long = position.coords.longitude;
        //            locationdata = lat + "," + long;
        //
        //            MainJson.getmap(locationdata).success(showlocationdata);
        //        }
        //
        //        if (navigator.geolocation) {
        //            navigator.geolocation.getCurrentPosition(showPosition2, showError);
        //        } else {
        //            x.innerHTML = "Geolocation is not supported by this browser.";
        //        }


        //get get country from geo location

        $scope.showaccount = function() {
            $scope.visible = true;
        };
        $scope.hideaccount = function() {
            $scope.visible = false;
        };
        $scope.showslideset1 = 0;
        $scope.slidesetnext = function(value) {
            console.log("Next Clicked");
            $scope.showslideset1 = 1;
            console.log($scope.showslideset1);
        };
        $scope.slidesetprev = function(value) {
            console.log("Prev Clicked");
            $scope.showslideset1 = 0;
        };
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.alldate = data;
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);

        var slidersuccess = function(data, status) {
            $scope.sliders = data;
            console.log($scope.sliders);
        };
        MainJson.getallslider().success(slidersuccess);
        //authenticate
        //newsletter
        var newslettersaved = function(data, status) {
            if (data == "true") {
                $scope.msgg = "Thank You For Subscribe";
            } else {
                $scope.msgg = "Thank You For Subscribe";
            }
        };
        $scope.newsletter = function(uemail) {
            if (!uemail) {
                alert("Please Enter Email");
            } else {
                console.log($scope.alldate);
                MainJson.newsletter("", uemail, "").success(newslettersaved);
            }
        };
        //newsletter
        //cart badge
        var totalcart = function(data, status) {
            $scope.badge = data;
        };
        MainJson.gettotalcart().success(totalcart);
        //cart badge
        $scope.$on("$includeContentLoaded", function() {
            TemplateService.firsttimeloaded();
            $(".zoomContainer").remove();
            $(".pulseanimation").hover(function() {
                $(this).addClass("animated pulse");
            }, function() {
                $(this).removeClass("animated pulse");
            });

            $(".tadaanimation").hover(function() {
                $(this).addClass("animated tada");
            }, function() {
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
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        $(".zoomContainer").remove();
        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "";
        TemplateService.changetitle("Cart");
        TemplateService.content = "views/cart.html";
        TemplateService.slider = "";
        $scope.cart = [];
        $scope.loginlogouttext = "Login";
        $scope.hititle = "Cart";
        //authenticate
        addanalytics("Cart Screen");
        addevent("ButtonTap", " Cart");

        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = data.email;
                $scope.uid = data.id;
            }
        };
        MainJson.authenticate().success(authenticate);
        //check coupons
        $scope.discountamount = 0;

        function calcdiscountamount() {
            var data = MainJson.getcoupondetails();
            var subtotal = parseFloat($scope.subtotal);
            console.log(data);
            if (data.coupontype == '1') {
                if (data.discountpercent != '0') {
                    console.log("ABC");
                    $scope.ispercent = parseFloat(data.discountpercent);
                    $scope.discountamount = (subtotal * $scope.ispercent / 100);
                } else {
                    $scope.isamount = parseFloat(data.discountamount);
                    console.log("ABCD");
                    $scope.discountamount = $scope.isamount;
                }
            }
            if (data.coupontype == '2') {
                console.log($scope.cart);

                var totallength = 0;
                _.each($scope.cart, function(cart) {
                    totallength += parseInt(cart.qty);
                });
                var xproducts = parseInt(data.xproducts);
                var yproducts = parseInt(data.yproducts);
                var itter = Math.floor(totallength / xproducts) * yproducts;
                console.log("ITTER " + itter);
                var newcart = _.sortBy($scope.cart, function(cart) {
                    cart.price = parseFloat(cart.price);
                    cart.qty2 = parseInt(cart.qty);
                    return parseFloat(cart.price);
                });
                //newcart=_.each(newcart, function(cart){  cart.price=parseFloat(cart.price);cart.qty=parseFloat(cart.qty); });
                console.log(newcart);
                $scope.discountamount = 0;
                for (var i = 0; i < itter; i++) {
                    if (newcart[i].qty2 != 0) {
                        newcart[i].qty2--;
                        $scope.discountamount += newcart[i].price;
                    }

                }
            }
            if (data.coupontype == '4') {
                console.log("FREE DELIVERY APPLIED");
                $scope.isfreedelivery = "Free Delivery";
                $scope.discountamount = 0;
            }
        };



        var coupondetails = {};
        $scope.ispercent = 0;
        $scope.isamount = 0;
        $scope.isfreedelivery = 0;
        $scope.discountamount = 0;
        var couponsuccess = function(data, status) {
            if (data == 'false') {
                $scope.validcouponcode = 0;
            } else {
                console.log("Show it");
                $scope.validcouponcode = 1;

                MainJson.setcoupondetails(data);
                calcdiscountamount();

            }
        }



        $scope.checkcoupon = function(couponcode) {
            console.log(couponcode);
            MainJson.getdiscountcoupon(couponcode).success(couponsuccess);
        };


        //authenticate
        $scope.newquantity = [];
        var showcart = function(data, status) {
            console.log(data);
            $scope.cart = data;
            console.log("Values in cart");
            // console.log($scope.cart[0].qty);
            console.log($scope.cart.length);

            for (var i = 0; i < $scope.cart.length; i++) {
                $scope.newquantity[i] = $scope.cart[i].qty;

            }
            console.log("values in newquantity");
            console.log($scope.newquantity);
        };
        MainJson.getcart().success(showcart);
        var getsubtotal = function(data, status) {
            $scope.subtotal = data;
            calcdiscountamount();
        };
        MainJson.totalcart().success(getsubtotal);
        //separating cart
        $scope.postcart = function() {
            $scope.cart = MainJson.getcart();
            $scope.id = $scope.cart[0].id;
            $scope.name = $scope.cart[0].name;
            $scope.price = $scope.cart[0].price;
            $scope.quantity = $scope.cart[0].quantity;
            for (var i = 1; i < $scope.cart.length; i++) {
                $scope.id += "," + $scope.cart[i].id;
                $scope.name += "," + $scope.cart[i].name;
                $scope.price += "," + $scope.cart[i].price;
                $scope.quantity += "," + $scope.cart[i].quantity;
            }


        }
        //separating cart
        //add to cart
        var getsubtotal = function(data, status) {
            $scope.subtotal = data;
        };
        var cartt = function(data, status) {
            console.log(data);
            MainJson.gettotalcart().success(MainJson.gettotalproductsincart);
            MainJson.totalcart().success(getsubtotal);
            smartcart.change();
        };
        $scope.addtocart = function(id, name, price, quantity, index) {
            // console.log(id+name+price+quantity);
            $scope.cart[index].subtotal = price * quantity;
            MainJson.addtocart(id, name, price, quantity).success(cartt);

        };
        //addto cart

        $scope.addproductcart = function(id, name, price, quantity, index) {
            console.log(id + name + price + quantity);
            quantity = parseInt(quantity) + 1;
            $scope.newquantity[index] = quantity;
            $scope.cart[index].subtotal = price * quantity;
            MainJson.addtocart(id, name, price, quantity).success(cartt);
        };
        $scope.subproductcart = function(id, name, price, quantity, index) {
            console.log(id + name + price + quantity);
            quantity = parseInt(quantity) - 1;
            $scope.newquantity[index] = quantity;
            $scope.cart[index].subtotal = price * quantity;
            MainJson.addtocart(id, name, price, quantity).success(cartt);
        };


        var deletefromcart = function() {
            MainJson.gettotalcart().success(MainJson.gettotalproductsincart);
            MainJson.totalcart().success(getsubtotal);
            console.log("Subtotal should change");
        };
        var savefromcart = function() {
            MainJson.gettotalcart().success(MainJson.gettotalproductsincart);
            MainJson.totalcart().success(getsubtotal);
            console.log("Subtotal should change on save");
        };
        $scope.deletecart = function(id) {
            //console.log(cart);
            for (var i = 0; i < $scope.cart.length; i++) {
                if ($scope.cart[i].id == id) {
                    $scope.cart.splice(i, 1);
                }
            }
            //console.log(cart);
            $scope.subtotal = 0;
            console.log($scope.cart);
            for (var i = 0; i < $scope.cart.length; i++) {
                $scope.subtotal += parseInt($scope.cart[i].qty) * parseFloat($scope.cart[i].price);
            }

            MainJson.deletecartfromsession(id).success(deletefromcart);

        };
        $scope.savecart = function(id, quantity) {
            $scope.returntwo = MainJson.savecart($scope.uid, id, quantity).success(savefromcart);
            $scope.subtotal = $scope.returntwo.subtotal;
        };

    });

phonecatControllers.controller('logout ',
    function($scope, TemplateService, MainJson, $location) {


        //######################authentication######################
        var logout = function(data, status) {
            //console.log(data);
            $scope.loginlogouttext = "Login";
            $scope.isloggedin = 0;
            $location.url("/home");
        };
        MainJson.logout().success(logout);
        //######################authentication######################

        addanalytics("Logout Screen");

        addevent("ButtonTap", " Logout");
    });





phonecatControllers.controller('login',
    function($scope, TemplateService, MainJson, $rootScope, $routeParams, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Login");
        TemplateService.content = "views/login.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        addanalytics("Login Screen");
        addevent("ButtonTap", " Login");

        var cartt = function(data, status) {
            MainJson.gettotalcart().success(MainJson.gettotalproductsincart);
            smartcart.change();
        };

        var cartdata = function(data, status) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                MainJson.addtocart(data[i].id, data[i].name, data[i].price, data[i].quantity).success(cartt);;
            }
        };
        var authenticate = function(data, status) {
            MainJson.getusercart(data.id).success(cartdata);
            if (data != "false") {
                $scope.loginlogouttext = "Logout";


            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        var emailsend = function(data, status) {
            console.log(data);
            alert("Email send to you");
        };
        var getsignup = function(data, status) {
            if (data != "false") {
                $scope.msgr = "Registred Successful";
                $location.url("/home");
                MainJson.signupemail(data.email).success(emailsend);
            } else {
                $scope.msgr = "Error In Registration";
            }
        };
        $scope.signup = function(register) {
            console.log(register);
            MainJson.registeruser(register.firstname, register.lastname, register.email, register.password).success(getsignup);
        };
        var getlogin = function(data, status) {
            if (data != "false") {
                $scope.msg = "Login Successful";
                $location.url("/home");
            } else {
                $scope.msg = "Invalid Email Or Password";
            }
        };
        $scope.userlogin = function(login) {
            console.log(login);
            MainJson.loginuser(login.email, login.password).success(getlogin);
        };


    });


phonecatControllers.controller('loginwishlist',
    function($scope, TemplateService, MainJson, $rootScope, $routeParams, $location) {
        addanalytics("Login-wishlist Screen");
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Login");
        TemplateService.content = "views/login.html";
        TemplateService.slider = "";
        TemplateService.lightboximage = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        $scope.alert2 = "Login or signup for wishlist";

        addevent("ButtonTap", " Wishlist");

        var cartt = function(data, status) {
            MainJson.gettotalcart().success(MainJson.gettotalproductsincart);
            smartcart.change();
        };

        var cartdata = function(data, status) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                MainJson.addtocart(data[i].id, data[i].name, data[i].price, data[i].quantity).success(cartt);;
            }
        };
        var authenticate = function(data, status) {
            MainJson.getusercart(data.id).success(cartdata);
            if (data != "false") {
                $scope.loginlogouttext = "Logout";


            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        var emailsend = function(data, status) {
            console.log(data);
            alert("Email send to you");
        };
        var getsignup = function(data, status) {
            if (data != "false") {
                $scope.msgr = "Registred Successful";
                $location.url("/home");
                MainJson.signupemail(data.email).success(emailsend);
            } else {
                $scope.msgr = "Error In Registration";
            }
        };
        $scope.signup = function(register) {
            console.log(register);
            MainJson.registeruser(register.firstname, register.lastname, register.email, register.password).success(getsignup);
        };
        var getlogin = function(data, status) {
            if (data != "false") {
                $scope.msg = "Login Successful";
                $location.url("/wishlist");
            } else {
                $scope.msg = "Invalid Email Or Password";
            }
        };
        $scope.userlogin = function(login) {
            console.log(login);
            MainJson.loginuser(login.email, login.password).success(getlogin);
        };


    });




phonecatControllers.controller('xoxo',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Login");
        $scope.homeactive = "active";
        TemplateService.content = "views/xoxo.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.alldata = data;
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        addanalytics("Xoxo Screen");
        addevent("ButtonTap", "Xoxo Button");


    });

phonecatControllers.controller('contact',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.title = "Contact Us | Accessories & Jewellery | Lyla Loves";
        TemplateService.metadescription = "To ask any query related to fashion jewellery or to shop for the latest accessories, get in touch with our experts and get your style right at Lyla Loves.";
        TemplateService.keywords = "fashion jewellery online, jewllery London, necklaces, bracelets, earrings, rings, accessories for women";
        //        TemplateService.changetitle("Login");
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        $scope.homeactive = "active";
        TemplateService.content = "views/contact.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.alldata = data;
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        //contact
        var contact = function(data, status) {
            console.log(data);
            $scope.msg = "YOUR REVIEW IS SAVED SUCCESSFULY";
        };
        $scope.contactsubmit = false;
        $scope.usercontact = function(data) {
            $scope.contactsubmit = true;
            MainJson.usercontact("", data.name, data.email, data.phone, data.comment).success(contact);
        };
        //contact
        addanalytics("Contact Screen");
        addevent("ButtonTap", "Contact Button");

    });


phonecatControllers.controller('contact2',
    function($scope, TemplateService, MainJson, $rootScope, $location) {


        var contact = function(data, status) {
            console.log(data);
            $scope.msg = "YOUR REVIEW IS SAVED SUCCESSFULY";
        };
        $scope.contactsubmit = false;
        $scope.usercontact = function(data) {
            $scope.contactsubmit = true;
            MainJson.usercontact("", data.name, data.email, data.phone, data.comment).success(contact);
        };
        //contact
        addanalytics("Contact2 Screen");
        addevent("ButtonTap", "Contact Button");

    });

phonecatControllers.controller('wholesaler',
    function($scope, TemplateService, MainJson, $rootScope, $location) {


        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Wholesaler");
        $scope.homeactive = "active";
        TemplateService.content = "views/wholesaler.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.alldata = data;
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        //register
        var getwholesalersignup = function(data, status) {
            if (data != "false") {
                $scope.msgr = "Registred Successful";

            } else {
                $scope.msgr = "Error In Registration";
            }
        };
        $scope.wholesalersignup = function(register) {
            console.log(register);
            MainJson.registerwholesaler(register.firstname, register.lastname, register.phone, register.email, register.password).success(getwholesalersignup);
        };
        //register
        addanalytics("Wholesaler Screen");
        addevent("ButtonTap", "Wholesaler Button");

    });


phonecatControllers.controller('profile',
    function($scope, TemplateService, MainJson, $rootScope, $location) {


        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Your Profile");
        $scope.homeactive = "active";
        TemplateService.content = "views/profile.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {

                $scope.loginlogouttext = "Logout";
            } else {
                $location.url("/Login");
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        addanalytics("Profile Screen");
        addevent("ButtonTap", "Profile Button");


    });

phonecatControllers.controller('lylaloves',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.title = "Follow us on Facebook, Twitter, Pinterest & Instagram | Lyla Loves";
        TemplateService.metadescription = "Follow Lyla Loves on Facebook, Twitter, Pinterest, Instagram & Tumblr to stay updated on the latest fashion and style trends for women and win exciting prizes.";
        TemplateService.keywords = "instagram lyla_loves, twitter lyla_loves, facebook lylaloves, pinterest lyla loves";
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        //        TemplateService.changetitle("lylaloves...");
        $scope.homeactive = "active";
        TemplateService.content = "views/lylaloves.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = data.email;
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
        addanalytics("Lylaloves Screen");
        addevent("ButtonTap", "lylaloves Button");

    });
phonecatControllers.controller('jewellery',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.title = "Fashion Jewellery Online | Dainty Jewellery | Lyla Loves ";
        TemplateService.metadescription = "Buy dainty jewellery for women. Or select from a range of fashion jewellery online —necklaces, bracelets, earrings and midi rings at affordable prices at Lyla Loves.";
        TemplateService.keywords = "fashion jewellery online, dainty jewellery, jewellery london, fashion necklaces for women, bracelets for women, earrings for women, midi rings";
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        //        TemplateService.changetitle("lylaloves...");
        $scope.homeactive = "active";
        TemplateService.content = "views/jewellery.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        $scope.hititle = "Lyla Loves -  Fashion Jewellery, Dainty Jewellery";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = data.email;
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
        addanalytics("Jewellery Screen");
        addevent("ButtonTap", "jewellery Button");

    });

phonecatControllers.controller('thankyou',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Thank You");
        $scope.homeactive = "active";
        TemplateService.content = "views/thankyou.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        MainJson.destroycart().success(MainJson.gettotalproductsincart);
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = data.email;
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        addanalytics("Thankyou Screen");
        addevent("ButtonTap", "Thankyou Button");

    });
phonecatControllers.controller('newsletter',
    function($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {

        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        $scope.msgg = "Message here..........";

        //authenticate
        var authenticate = function(data, status) {
            console.log(data);
            if (data != "false") {
                $scope.alldate = data;
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        //newsletter
        var newslettersaved = function(data, status) {
            if (data == "true") {
                //alert("Thank you for subscribing.");
                TemplateService.lightboximage = "img/newsletterpopup.jpg";
                console.log("now popup should come.");
            } else {
                //alert("Thank You For Subscribe");
                $location.url("/xoxo");
            }
        };
        $scope.newsletter = function(uemail) {
            if (!uemail) {
                alert("Please Enter Email");
            } else {
                console.log($scope.alldate);
                MainJson.newsletter("", uemail, "").success(newslettersaved);
            }
        };
        //newsletter
        addanalytics("Newsletter Screen");
        addevent("ButtonTap", "Newsletter Button");

    });

phonecatControllers.controller('badge',
    function($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {

        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        $scope.msgg = "Message here..........";
        $scope.check = 0;

        //TO LOGIN OR PROFILE
        $scope.toprofile = function() {
            if ($scope.check == 0) {
                $location.url("/Login");
            } else {
                $location.url("/profile");
            }
        }

        $scope.logout = function() {
            MainJson.logout();
            $scope.check = 0;
        };

        //authenticate
        var authenticate = function(data, status) {
            console.log("hhhhhhhhhhhhhhhhhhh");
            console.log(data);
            if (data != "false") {
                $scope.check = 1;
                $scope.alldate = data;
                $scope.loginlogouttext = "Logout";
            } else {
                $scope.check = 0;
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        var totalcart = function(data, status) {
            console.log(data);
            $scope.template.totalproducts = data;
        };
        MainJson.gettotalcart().success(MainJson.gettotalproductsincart);
        addanalytics("Badge Screen");
        addevent("ButtonTap", "badge Button");

    });


phonecatControllers.controller('search',
    function($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {

        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        $scope.msgg = "Message here..........";

        //authenticate
        var authenticate = function(data, status) {
            console.log(data);
            if (data != "false") {
                $scope.alldate = data;
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        //search
        $scope.search = function(search) {
            $location.url("/search/" + search);
        };

        //search
        addanalytics("Search Screen");
        addevent("ButtonTap", "Search Button");

    });


phonecatControllers.controller('lightbox',
    function($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {

        $scope.removelightbox = function() {
            TemplateService.lightboximage = "";
        };
        addanalytics("Lightbox Screen");
        addevent("ButtonTap", "lightbox Button");
    });




phonecatControllers.controller('searchpage',
    function($scope, $routeParams, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Search");
        $scope.homeactive = "active";
        TemplateService.content = "views/search.html";
        TemplateService.slider = "";
        $scope.firstshow = "firstshow";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = data.email;
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate

        //searching
        $scope.searchresult = $routeParams.search;
        var searching = function(data, status) {
            $scope.find = data;
        };
        MainJson.seach($routeParams.search).success(searching);
        //searching
        addanalytics("Search-page Screen");
        addevent("ButtonTap", "lightbox Button");

    });


phonecatControllers.controller('lookbook',
    function($scope, TemplateService, MainJson, $rootScope, $location) {



        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.title = "Online fashion accessories and jewellery | Lookbook | Lyla Loves";
        TemplateService.metadescription = "The online lookbook by Lyla Loves—showcasing the latest fashionable, and stylish accessories and jewellery for women at affordable prices.";
        TemplateService.keywords = "fashion jewellery, jewellery London, dainty jewellery, geometric jewellery, accessories for women, womens accessories";
        TemplateService.changetitle("lyla Lookbook");
        $scope.homeactive = "active";
        TemplateService.content = "views/lookbook.html";
        TemplateService.slider = "";
        $scope.firstshow = "firstshow";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = data.email;
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        $scope.changeactivelookbook = function(id) {
            $scope.firstshow = "";
            //            console.log(id);
            for (var i = 0; i < $scope.lookbookimages.length; i++) {
                $scope.lookbookimages[i].active = "";
            }
            $scope.lookbookimages[id].active = "active";
            $scope.activeimage = $scope.lookbookimages[id].image;
            $scope.activelookbook = $scope.lookbookimages[id];
        };


        var categorysuccess = function(data, status) {
            $scope.lookbookimages = data.product;
            $scope.changeactivelookbook(0);
        };
        MainJson.getproductbycategory("lookbook").success(categorysuccess);
        addanalytics("Lookbook Screen");
        addevent("ButtonTap", "Lookbook Button");

    });


phonecatControllers.controller('checkout',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Checkout");
        TemplateService.content = "views/checkout.html";

        TemplateService.slider = "";
        $scope.buttonsvalidate = {
            billing: 0,
            shipping: 0,
            payment: 0
        };
        $scope.loginlogouttext = "Login";
        $scope.isloggedin = 0;
        $scope.form = {};
        $scope.form.shipdifferent = 1;
        $scope.billinginfo = 0;
        //$scope.shipdifferent = false;
        $scope.shippinginfo = 0;
        $scope.paywithcard = 0;
        $scope.hidebilling = 1;



        $scope.paymentorderemail = "";
        $scope.paymentorderid = 0;


        $scope.focusout = function() {
            console.log("out focus");
        };
        var paymentcomplete = function(data, status) {
            console.log(data);
            MainJson.orderemail($scope.paymentorderemail, $scope.paymentorderid).success(orderemailsend);
            $location.path('/thankyou');
        };
        var handler = StripeCheckout.configure({
            key: 'pk_live_I1udSOaNJK4si3FCMwvHsY4g',
            //key: 'pk_test_4etgLi16WbODEDr4YBFdcbP0',
            image: 'img/logo.jpg',
            currency: 'GBP',
            token: function(token) {
                MainJson.chargestripe(token.id, $scope.form.email, ($scope.subtotal + $scope.form.shippingcost - $scope.discountamount), ($scope.form.firstname + " " + $scope.form.lastname)).success(paymentcomplete);
                //window.location.href="http://www.lylaloves.co.uk/#/thankyou";
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
            }
        });

        $scope.StipePaymentGen = function(amount) {


            handler.open({
                name: 'Lyla Loves',
                description: 'Total Amount: £ ' + amount,
                amount: amount * 100,

            });

        };



        //discountamount
        $scope.discountamount = 0;

        function calcdiscountamount() {
            var data = MainJson.getcoupondetails();
            var subtotal = parseFloat($scope.subtotal);
            console.log(data);
            if (data.coupontype == '1') {
                if (data.discountpercent != '0') {
                    $scope.ispercent = parseFloat(data.discountpercent);
                    console.log("ABC");
                    $scope.discountamount = (subtotal * $scope.ispercent / 100);
                } else {
                    $scope.isamount = parseFloat(data.discountamount);
                    console.log("ABCD");
                    $scope.discountamount = $scope.isamount;
                }
            }
            if (data.coupontype == '2') {
                console.log($scope.cart);

                var totallength = 0;
                _.each($scope.cart, function(cart) {
                    totallength += parseInt(cart.qty);
                });
                var xproducts = parseInt(data.xproducts);
                var yproducts = parseInt(data.yproducts);
                var itter = Math.floor(totallength / xproducts) * yproducts;
                console.log("ITTER " + itter);
                var newcart = _.sortBy($scope.cart, function(cart) {
                    cart.price = parseFloat(cart.price);
                    cart.qty2 = parseInt(cart.qty);
                    return parseFloat(cart.price);
                });
                //newcart=_.each(newcart, function(cart){  cart.price=parseFloat(cart.price);cart.qty=parseFloat(cart.qty); });
                console.log(newcart);
                $scope.discountamount = 0;
                for (var i = 0; i < itter; i++) {
                    if (newcart[i].qty2 != 0) {
                        newcart[i].qty2--;
                        $scope.discountamount += newcart[i].price;
                    }

                }
            }

            if (data.coupontype == '4') {
                console.log("FREE DELIVERY APPLIED");
                $scope.isfreedelivery = "Free Delivery";
                $scope.discountamount = 0;
            }
        };


        //userloginckeckout
        var getlogin = function(data, status) {
            if (data != "false") {
                //$scope.msg = "Login Successful";
                $location.url("/checkout");
                $scope.isloggedin = 1;
            } else {
                $scope.msg = "Invalid Email Or Password";
            }
        };
        $scope.userloginckeckout = function(login) {
            console.log(login);
            MainJson.loginuser(login.email, login.password).success(getlogin);
        };
        //userloginckeckout

        $scope.continuebilling = function() {
            $scope.billinginfo = 1;
            $scope.buttonsvalidate.billing = 1;
        };

        $scope.continueshipping = function() {

            //$scope.errorvalid="Fill All Information *";
            //alert($scope.form.firstname);
            console.log("first name");
            console.log($scope.form.firstname);

            $scope.allvalidation = [{
                field: $scope.form.firstname,
                validation: ""
            }, {
                field: $scope.form.lastname,
                validation: ""
            }, {
                field: $scope.form.email,
                validation: ""
            }, {
                field: $scope.form.billingaddress,
                validation: ""
            }, {
                field: $scope.form.billingcity,
                validation: ""
            }, {
                field: $scope.form.billingpincode,
                validation: ""
            }, {
                field: $scope.form.billingcountry,
                validation: ""
            }, {
                field: $scope.form.phone,
                validation: ""
            }, {
                field: $scope.form.shipdifferent,
                validation: ""
            }];


            var check = formvalidation();
            console.log(check);
            if (check) {
                $scope.shippinginfo = 1;
                $scope.buttonsvalidate.shipping = 1;
                //$scope.hidebilling = 0;
            }

        };

        $scope.continueshipping1 = function() {

            //$scope.errorvalid="Fill All Information *";
            //alert($scope.form.firstname);
            console.log("first name");
            console.log($scope.form.firstname);

            $scope.allvalidation = [{
                field: $scope.form.firstname,
                validation: ""
            }, {
                field: $scope.form.lastname,
                validation: ""
            }, {
                field: $scope.form.email,
                validation: ""
            }, {
                field: $scope.form.billingaddress,
                validation: ""
            }, {
                field: $scope.form.billingcity,
                validation: ""
            }, {
                field: $scope.form.billingpincode,
                validation: ""
            }, {
                field: $scope.form.billingcountry,
                validation: ""
            }, {
                field: $scope.form.phone,
                validation: ""
            }, {
                field: $scope.form.shippingaddress,
                validation: ""
            }, {
                field: $scope.form.shippingcity,
                validation: ""
            }, {
                field: $scope.form.shippingpincode,
                validation: ""
            }, {
                field: $scope.form.shippingcountry,
                validation: ""
            }];


            var check = formvalidation();
            console.log(check);
            if (check) {
                $scope.shippinginfo = 1;

                $scope.buttonsvalidate.shipping = 1;
                //$scope.hidebilling = 0;
            }

        };

        function formvalidation() {
            var isvalid2 = true;
            for (var i = 0; i < $scope.allvalidation.length; i++) {
                console.log("checking");
                console.log($scope.allvalidation[i].field);
                if ($scope.allvalidation[i].field == "" || !$scope.allvalidation[i].field) {
                    $scope.allvalidation[i].validation = "ng-dirty";
                    isvalid2 = false;
                }
            }
            return isvalid2;
        }

        //authenticate
        var authenticate = function(data, status) {
            console.log(data);
            if (data != "false") {
                $scope.isloggedin = 1;
                $scope.accesslevel = data.accesslevel;
                $scope.status = data.status;
                $scope.id = data.id;
                $scope.email = data.email;
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate

        $scope.newquantity = [];
        var showcart = function(data, status) {
            console.log(data);
            $scope.cart = data;
            console.log($scope.cart[0].qty);
            console.log($scope.cart.length);

            for (var i = 0; i < $scope.cart.length; i++) {
                $scope.newquantity[i] = $scope.cart[i].qty;
                console.log($scope.newquantity[i]);
            }

            calcdiscountamount();
        };
        MainJson.getcart().success(showcart);
        var getsubtotal = function(data, status) {
            console.log(data);
            $scope.subtotal = parseFloat(data);
            calcdiscountamount();

        };


        MainJson.totalcart().success(getsubtotal);
        $scope.showshippingmethods = 0;
        // free
        $scope.free = function(country, subtotal, shipping) {
            console.log("MAaaaza");
            console.log(country);
            console.log(subtotal);
            console.log(shipping);
            var coupondetails = MainJson.getcoupondetails();
            if (coupondetails && MainJson.getcoupondetails().coupontype == "4") {
                console.log("ABC");
                $scope.showshippingmethods = 5;
                $scope.form.shippingcost = 0;
                $scope.form.shippingmethod = 6;
                return 0;
            } else if (shipping == "1") {
                if (country == "United Kingdom") {
                    if (subtotal >= 15) {
                        $scope.showshippingmethods = 1;
                        $scope.form.shippingmethod = 1;
                        $scope.form.shippingcost = 0;
                    } else {
                        $scope.showshippingmethods = 2;
                        $scope.form.shippingmethod = 2;
                        $scope.form.shippingcost = 3;
                    }

                } else {
                    if (subtotal >= 20) {
                        $scope.showshippingmethods = 3;
                        $scope.form.shippingmethod = 4;
                        $scope.form.shippingcost = 0;
                    } else {
                        $scope.showshippingmethods = 4;
                        $scope.form.shippingmethod = 5;
                        $scope.form.shippingcost = 5;
                    }

                }
            }

        };
        $scope.free2 = function(country, subtotal, shipping) {
            console.log(country);
            console.log(subtotal);
            console.log(shipping);
            var coupondetails = MainJson.getcoupondetails();
            if (coupondetails && MainJson.getcoupondetails().coupontype == "4") {
                $scope.showshippingmethods = 5;
                $scope.form.shippingcost = 0;
                $scope.form.shippingmethod = 6;
                return 0;
            } else if (shipping == "2") {
                if (country == "United Kingdom") {
                    if (subtotal >= 15) {
                        $scope.showshippingmethods = 1;
                        $scope.form.shippingmethod = 1;
                        $scope.form.shippingcost = 0;
                    } else {
                        $scope.showshippingmethods = 2;
                        $scope.form.shippingmethod = 2;
                        $scope.form.shippingcost = 3;
                    }

                } else {
                    if (subtotal >= 20) {

                        $scope.showshippingmethods = 3;
                        $scope.form.shippingmethod = 4;
                        $scope.form.shippingcost = 0;
                    } else {
                        $scope.showshippingmethods = 4;
                        $scope.form.shippingmethod = 5;
                        $scope.form.shippingcost = 5;
                    }

                }
            }

        };
        // free
        $scope.form.shippingcost = 0;
        $scope.changeshippingcost = function(value) {
            console.log(value);
            $scope.form.shippingcost = value;
        };



        $scope.deletecart = function(id) {
            $scope.subtotal = MainJson.deletecart(id);

        };
        $scope.savecart = function(id, quantity) {
            $scope.subtotal = MainJson.savecart(id, quantity);
        };
        var orderemailsend = function(data, status) {
            console.log(data);
            //alert("Email send");
        };

        // order id and email after payment

        var orderplaced = function(data, status) {
            console.log("place order returns");
            console.log(data);
            //            $scope.paymentorderemail = $scope.form.email;
            $scope.paymentorderid = data;
            //            MainJson.orderemail($scope.form.email, data).success(orderemailsend);
            //alert("Order Placed");
        };
        $scope.continuepayment = function(form) {
            $scope.paywithcard = 1;
            $scope.buttonsvalidate.payment = 1;
            $scope.form.finalamount = $scope.subtotal;
            $scope.paymentorderemail = $scope.form.email;
            console.log($scope.cart);
            //MainJson.orderitem($scope.cart);
            $scope.form.cart = $scope.cart;
            $scope.form.user = $scope.id;
            $scope.form.status = $scope.status; //MainJson.placeorder(form.firstname,form.lastname,form.email,form.company,form.billingaddress,form.billingcity,form.billingstate,form.billingpincode,form.billingcountry,form.phone,form.fax,form.shippingaddress,form.shippingcity,form.shippingstate,form.shippingpincode,form.shippingcountry,$scope.id,$scope.status).success(orderplaced); 
            MainJson.placeorder(form).success(orderplaced);
        }

        $scope.placeorder = function(form) {
            console.log($scope.cart);
            //MainJson.orderitem($scope.cart);
            $scope.form.cart = $scope.cart;
            $scope.form.user = $scope.id;
            $scope.form.status = $scope.status; //MainJson.placeorder(form.firstname,form.lastname,form.email,form.company,form.billingaddress,form.billingcity,form.billingstate,form.billingpincode,form.billingcountry,form.phone,form.fax,form.shippingaddress,form.shippingcity,form.shippingstate,form.shippingpincode,form.shippingcountry,$scope.id,$scope.status).success(orderplaced); 
            MainJson.placeorder(form).success(orderplaced);
        };

        addanalytics("Checkout Screen");
        addevent("ButtonTap", "Checkout Button");
    });

phonecatControllers.controller('headerctrl',
    function($scope, TemplateService, MainJson) {

        $scope.template = TemplateService;
        $scope.testing = "testing";
        var fillemail = function(data, status) {
            $scope.email = data.email;
        };

        MainJson.authenticate().success(fillemail);
        addanalytics("Header Screen");
        addevent("ButtonTap", "Header Button");

    });
phonecatControllers.controller('slider',
    function($scope, $routeParams, TemplateService, MainJson, $rootScope, $location, ngDialog) {

        $scope.template = TemplateService;


        $scope.placelimited = function(limited) {

            var limitedorder = function(data, status) {
                if (data != "false") {
                    // alert("Order Placed");
                    TemplateService.lightboximage = "img/giveawaypopup.jpg";
                    //$location.url("/xoxo");
                    MainJson.placelimitedemail(limited);
                } else {
                    alert("You Already Subscribed To This Offer");
                }
            };

            if (!limited) {
                alert("Fill All Data");
            } else {

                MainJson.placelimited(limited).success(limitedorder);
            }
        };

        //   $scope.init = function (listing) {
        //
        //            ngDialog.open({
        //                template: 'views/popup.html',
        //                controller: 'slider'
        //            });
        //        };
        addanalytics("Slider Screen");
        addevent("ButtonTap", "Slider Button");
    });

phonecatControllers.controller('category',
    function($scope, $routeParams, TemplateService, MainJson, $rootScope, $location, $anchorScroll) {

        $scope.iscategory = "category";





        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.title = "Find latest collection of fashion jewellery online";
        TemplateService.metadescription = "Grab all the latest arrivals in fashion jewellery online today and find a range of accessories for women at Lyla loves.";
        TemplateService.keywords = "fashion jewellery online, dainty jewellery, jewellery london, accessories for women";
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.content = "views/category.html";
        TemplateService.slider = "";
        $scope.hititle = "Lyla Loves - Fashion Jewellery Online";
        console.log($routeParams.CategoryId);
    
         if ($routeParams.CategoryId == "pendants") {
            console.log("is if");
            TemplateService.title = "Exquisite zodiac, silver and gold pendant necklaces | Lyla Loves ";
            TemplateService.metadescription = "You won't be able to resist our amazing range of pendant necklaces. Shop for silver & gold pendant necklace, dragonfly necklace, zodiac necklace and more at Lyla Loves.";
            TemplateService.keywords = "gold pendant necklace, dragonfly necklace, zodiac necklace, fashion necklaces for women, dainty jewellery, geometric necklace";
            $scope.hititle = "Lyla Loves - Fashion Necklaces for Women";

        }
    
        if ($routeParams.CategoryId == "necklaces") {
            console.log("is if");
            TemplateService.title = "Statement Necklaces | Fashion Necklaces for Women | Lyla Loves ";
            TemplateService.metadescription = "Shop from a stunning range of fashion necklaces for women —gold & silver statement necklaces, layered necklaces, choker necklaces and more at Lyla Loves.";
            TemplateService.keywords = "fashion necklaces for women, silver statement necklace, dragonfly necklace, zodiac necklace, gold necklaces, silver necklaces, pendant necklaces";
            $scope.hititle = "Lyla Loves - Fashion Necklaces for Women";

        }

        if ($routeParams.CategoryId == "bracelets") {
            TemplateService.title = "Stylish gold, silver and leather bracelets for women | Lyla Loves";
            TemplateService.metadescription = "Buy the season's hottest gold and silver bracelets for women. Style your outfit with wrap around bracelets, leather bracelets for women and more from Lyla Loves.";
            TemplateService.keywords = "bracelets for women, silver bracelets for women, wrap around bracelets, leather bracelets for women, adjustable bracelets, bangles";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Lyla Loves - Bracelets for Women";
        }
        if ($routeParams.CategoryId == "earrings") {
            TemplateService.title = "Elegant gold, silver and stud earrings for women | Lyla Loves";
            TemplateService.metadescription = "Shop from an evocative and stunning range of gold, silver and stud earrings for women, along with hoops and more from Lyla Loves. ";
            TemplateService.keywords = "stud earrings for women, gold earrings, silver earrings, dainty jewellery, geometric earrings";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Gold, Silver, Stud Earrings for Women and Ear Cuffs Online";
        }
        if ($routeParams.CategoryId == "earcuffs") {
            TemplateService.title = "Buy ear cuffs online at the best price | Lyla Loves";
            TemplateService.metadescription = "Presenting an exclusive collection of ear cuffs online. Shop from a gorgeous collection of ear cuffs at modest prices only at Lyla Loves. Visit us NOW!";
            TemplateService.keywords = "ear cuffs online, dainty jewellery, ear cuff jewellery, cuff earrings, fashion ear cuffs";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Gold, Silver, Stud Earrings for Women and Ear Cuffs Online";
        }
        if ($routeParams.CategoryId == "rings") {
            TemplateService.title = "Gold stacking rings & silver midi rings for women | Lyla Loves";
            TemplateService.metadescription = "Buy ultimate piece of women's fashion rings from a wide range of gold and silver midi rings, gold stacking rings and many more only at Lyla Loves.";
            TemplateService.keywords = "rings for women, silver midi rings, gold stacking rings, geometric rings, pearl rings.";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Lyla Loves - Gold, Silver Midi Rings, Stacking Rings";
        }
        if ($routeParams.CategoryId == "accessories") {
            TemplateService.title = "Buy the latest fashion accessories for women online | Lyla Loves";
            TemplateService.metadescription = "Get the best trendy fashion accessories for women like bags, mobile cases, scarves and more at Lyla Loves.";
            TemplateService.keywords = "accessories for women, bags for women, scarves for women, mobile phone cases, hair accessories.";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Lyla Loves - Fashion Accessories for Women";
        }
        if ($routeParams.CategoryId == "bags") {
            TemplateService.title = "Shop for handbags, clutches, shoulder bags for women | Lyla Loves";
            TemplateService.metadescription = "Shop today! for a variety of stylish bags for women like clutches, shoulder bags and more at affordable prices from Lyla Loves.";
            TemplateService.keywords = "bags for women, womens accessories, clutch bags, shoulder bags, handbags";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Lyla Loves - Stylish Bags for Women";
        }
        if ($routeParams.CategoryId == "scarves") {
            TemplateService.title = "Shop for printed, ethnic scarves for women | Lyla Loves";
            TemplateService.metadescription = "Find beautiful printed and ethnic scarves for women to suit your style. Choose from a wide range of designs at the best prices from Lyla Loves..";
            TemplateService.keywords = "scarves for women, womens scarf, printed scarves, ethnic scarves";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Lyla Loves - Scarves for Women";
        }
        if ($routeParams.CategoryId == "hair") {
            TemplateService.title = "Buy hair accessories for women online | Lyla Loves";
            TemplateService.metadescription = "Choose from a selection of trendy hair accessories for women at Lyla Loves.";
            TemplateService.keywords = "hair accessories for women, Hair accessory for women, womens hair accessories";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Lyla Loves - Hair Accessories for Women";
        }
        if ($routeParams.CategoryId == "phone-cases") {
            TemplateService.title = "Buy fashionable mobile phone cases | Lyla Loves";
            TemplateService.metadescription = "Find a wide range of fashionable mobile phone cases that suit your style. So order your favorite phone case at Lyla Loves NOW!";
            TemplateService.keywords = "mobile phone cases, phone cases, cell phone cases";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Lyla Loves - Hair Accessories for Women";
        }
        if ($routeParams.CategoryId == "metallic-tattoos") {
            TemplateService.title = "Fashionable jewellery-inspired metallic tattoos | Lyla Loves";
            TemplateService.metadescription = "Choose from our collection of intricate jewellery-inspired metallic tattoos for women. Browse tattoo necklaces, arm bands and more only at Lyla Loves.";
            TemplateService.keywords = "jewellery tattoos, mettalic jewellery tattoos, jewellery mettalic tattoos, jewellery inspired metallic tattoos";
            TemplateService.header = "views/header.html";
            TemplateService.navigation = "views/navigation.html";
            TemplateService.content = "views/category.html";
            TemplateService.slider = "";
            $scope.hititle = "Lyla Loves - Hair Accessories for Women";
        }




        $scope.gototop = function() {
            $location.hash('totop');
            $anchorScroll();
        };
        $scope.loginlogouttext = "Login";
        //get user country
        var getcountry = function(data, status) {
            console.log("get country");
            console.log(data);
        };
        //  MainJson.showcountry().success(getcountry);
        $scope.usercountry = "India";
        //filters
        $scope.filter = MainJson.getfilters();
        $scope.filtercolors = [{
            name: "red",
            active: ""
        }, {
            name: "pink",
            active: ""
        }, {
            name: "black",
            active: ""
        }, {
            name: "white",
            active: ""
        }, {
            name: "grey",
            active: ""
        }, {
            name: "blue",
            active: ""
        }, {
            name: "green",
            active: ""
        }, {
            name: "purple",
            active: ""
        }, {
            name: "yellow",
            active: ""
        }, {
            name: "orange",
            active: ""
        }];

        $scope.filtercolor = function(color) {
            $scope.filter.color = color;
        };

        $scope.filtersave = function(filter) {
            MainJson.setfilter(filter);
            console.log(MainJson.getfilters());
            MainJson.getproductbycategory($routeParams.CategoryId).success(categorysuccess);
        };
        $scope.filterclear = function() {
            $scope.filter = {
                color: "",
                pricemin: 0,
                pricemax: 30
            };
            MainJson.setfilter($scope.filter);
            MainJson.getproductbycategory($routeParams.CategoryId).success(categorysuccess);
        };



        //authenticate
        var authenticate = function(data, status) {
            console.log(data);
            if (data != "false") {
                $scope.loginlogouttext = data.email;
                $scope.accesslevel = data.accesslevel;
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate

        $scope.products = [];
        $scope.productsheight = {};

        $scope.addMoreItems = function() {
            console.log("More Products Added " + $scope.products.length);
            var first = $scope.products.length;
            var addition = 12;
            var sum = first + addition;
            if (sum > $scope.productlist.length) {
                sum = $scope.productlist.length;
            }
            for (var i = first; i < sum; i++) {
                $scope.products.push($scope.productlist[i]);
            }
            $scope.productsheight.height = ($scope.products.length / 4) * 430 + "px";
        };
        var categorysuccess = function(data, status) {
            $scope.products = [];
            $scope.productsheight = {};
            $scope.category = data.category;
            $scope.breadcrumbs = data.breadcrumbs;
            $scope.subcategory = data.subcategory;
            $scope.currentcategory = data.currentcategory;
            $scope.productlist = data.product;
            //            $location.hash($scope.category.name.replace(/ /g, "_"));
            $location.replace();
            console.log(data);
            console.log(data.product);
            $scope.addMoreItems();
        };
        MainJson.getproductbycategory($routeParams.CategoryId).success(categorysuccess);




        $scope.$on('$viewContentLoaded', function() {

            new WOW().init();


            TemplateService.firsttimeloaded();
            $(".zoomContainer").remove();
            $(".pulseanimation").hover(function() {
                $(this).addClass("animated pulse");
            }, function() {
                $(this).removeClass("animated pulse");
            });

            $(".tadaanimation").hover(function() {
                $(this).addClass("animated tada");
            }, function() {
                $(this).removeClass("animated tada");
            });
        });
        addanalytics("Category Screen");
        addevent("ButtonTap", "Category Button");

    });



phonecatControllers.controller('JustInCtrl',
    function($scope, $routeParams, TemplateService, MainJson, $rootScope, $location, $anchorScroll) {

        $scope.iscategory = "category";





        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.title = "The latest in women's accessories and jewellery  | Lyla Loves";
        TemplateService.metadescription = "Grab all the latest arrivals in accessories and jewellery for women online. Browse our large selection of necklaces, rings, bags, scarves and more.";
        TemplateService.keywords = "fashion jewellery online, dainty jewellery, jewellery london, accessories for women";
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.content = "views/category.html";
        TemplateService.slider = "";
        $scope.hititle = "Lyla Loves - Fashion Jewellery Online";

        TemplateService.title = "Fashion Necklaces for Women, Statement Necklaces ";
        TemplateService.metadescription = "Shop from a stunning range of fashion necklaces for women, silver statement necklaces, dragonfly necklaces, zodiac necklaces and much more at Lyla Loves.";
        TemplateService.keywords = "fashion necklaces for women, silver statement necklace, dragonfly necklace, zodiac necklace, gold necklaces, silver necklaces, pendant necklaces";
        $scope.hititle = "Lyla Loves - Fashion Necklaces for Women";




        $scope.gototop = function() {
            $location.hash('totop');
            $anchorScroll();
        };
        $scope.loginlogouttext = "Login";
        //get user country
        var getcountry = function(data, status) {
            console.log("get country");
            console.log(data);
        };
        //  MainJson.showcountry().success(getcountry);
        $scope.usercountry = "India";
        //filters
        $scope.filter = MainJson.getfilters();
        $scope.filtercolors = [{
            name: "red",
            active: ""
        }, {
            name: "pink",
            active: ""
        }, {
            name: "black",
            active: ""
        }, {
            name: "white",
            active: ""
        }, {
            name: "grey",
            active: ""
        }, {
            name: "blue",
            active: ""
        }, {
            name: "green",
            active: ""
        }, {
            name: "purple",
            active: ""
        }, {
            name: "yellow",
            active: ""
        }, {
            name: "orange",
            active: ""
        }];

        $scope.filtercolor = function(color) {
            $scope.filter.color = color;
        };

        $scope.filtersave = function(filter) {
            MainJson.setfilter(filter);
            console.log(MainJson.getfilters());
            MainJson.getproductbycategory($routeParams.CategoryId).success(categorysuccess);
        };
        $scope.filterclear = function() {
            $scope.filter = {
                color: "",
                pricemin: 0,
                pricemax: 30
            };
            MainJson.setfilter($scope.filter);
            MainJson.getproductbycategory($routeParams.CategoryId).success(categorysuccess);
        };



        //authenticate
        var authenticate = function(data, status) {
            console.log(data);
            if (data != "false") {
                $scope.loginlogouttext = data.email;
                $scope.accesslevel = data.accesslevel;
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate

        $scope.products = [];
        $scope.productsheight = {};

        $scope.addMoreItems = function() {
            console.log("More Products Added " + $scope.products.length);
            var first = $scope.products.length;
            var addition = 12;
            var sum = first + addition;
            if (sum > $scope.productlist.length) {
                sum = $scope.productlist.length;
            }
            for (var i = first; i < sum; i++) {
                $scope.products.push($scope.productlist[i]);
            }
            $scope.productsheight.height = ($scope.products.length / 4) * 430 + "px";
        };
        var categorysuccess = function(data, status) {
            $scope.products = [];
            $scope.productsheight = {};
            $scope.category = data.category;
            $scope.breadcrumbs = data.breadcrumbs;
            $scope.subcategory = data.subcategory;
            $scope.currentcategory = data.currentcategory;
            $scope.productlist = data.product;
            //            $location.hash($scope.category.name.replace(/ /g, "_"));
            $location.replace();
            console.log(data);
            console.log(data.product);
            $scope.addMoreItems();
        };
        MainJson.getjustinproducts().success(categorysuccess);




        $scope.$on('$viewContentLoaded', function() {

            new WOW().init();


            TemplateService.firsttimeloaded();
            $(".zoomContainer").remove();
            $(".pulseanimation").hover(function() {
                $(this).addClass("animated pulse");
            }, function() {
                $(this).removeClass("animated pulse");
            });

            $(".tadaanimation").hover(function() {
                $(this).addClass("animated tada");
            }, function() {
                $(this).removeClass("animated tada");
            });
        });
        addanalytics("Just Screen");
        addevent("ButtonTap", "Category Button");

    });






phonecatControllers.controller('product',
    function($scope, $routeParams, TemplateService, MainJson, $timeout, $location) {


        $scope.name = 'World';

        $scope.$on('$viewContentLoaded', function() {
            console.log("This is View Loaded Again ******************************************************");
            setTimeout(function() {
                stButtons.locateElements();
            }, 1000);

        });



        $scope.showslideset1 = 0;
        $scope.slidesetnext = function(value) {
            console.log("Next Clicked");
            $scope.showslideset1 = 1;
            console.log($scope.showslideset1);
        };
        $scope.slidesetprev = function(value) {
            console.log("Prev Clicked");
            $scope.showslideset1 = 0;
        };

        $scope.items = [{
            "src": "http://t3.gstatic.com/images?q=tbn:ANd9GcR1Kp2JmcnxhBOf66aN_JqMWl3h_okOQKFX_kEqwr9mRe5iPomy",
            "alt": "image 001"
        }, {
            "src": "http://t3.gstatic.com/images?q=tbn:ANd9GcQAoT9UmjmunwFTAA19_n1auOFR_JG017_TUru-E91T7nIH8HyU",
            "alt": "image 002"
        }, {
            "src": "http://t2.gstatic.com/images?q=tbn:ANd9GcTfntbVv3pl5wFCe6IdkaMVrme_Au9TD8Z_xE95Ezv6jz8oK4nT",
            "alt": "image 003"
        }, {
            "src": "http://t1.gstatic.com/images?q=tbn:ANd9GcSAOralDJGSVtfirbHG5VdFqG8fTqXMh7C4Xd_aHCy176SKNQqK",
            "alt": "image 004"
        }, {
            "src": "http//fc08.deviantart.net/fs70/f/2012/122/0/c/landscape_wallpaper_by_nickchoubg-d4yaep3.png",
            "alt": "image 005"
        }, ];

        $scope.ZoomItems = [];


        $scope.SelectedItem = $scope.ZoomItems[0];

        $scope.ThumbnailClicked = function(Item) {
            $scope.SelectedItem = Item;

        };


        //        var slidersuccess = function(data, status) {
        //            $scope.sliders = data;
        //            console.log($scope.sliders);
        //        };
        //        MainJson.getallslider().success(slidersuccess);

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        console.log($routeParams.ProductId);
        $scope.template = TemplateService;
        TemplateService.content = "views/product.html";
        $scope.bottommenu = "fixed";
        TemplateService.slider = "";
        $scope.addquantity = 1;
        $scope.addedtocart = "hide";
        $scope.loginlogouttext = "Login";


        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.accesslevel = data.accesslevel;
                $scope.id = data.id;
                $scope.loginlogouttext = data.email;
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        //nextprevious
        var changelocation = function(data) {
            $location.url("/product/" + data.id);
        };
        $scope.next = function(product) {
            MainJson.nextproduct(product, 1).success(changelocation);
        };
        $scope.previous = function(product) {
            MainJson.nextproduct(product, 0).success(changelocation);
        };


        //nestprevious
        $scope.wishlistlogin = false;
        $scope.wishlistadded = false;
        var getwishlist = function(data, status) {
            console.log(data);
            $scope.wish = data;
            $scope.wishlistadded = true;
        };
        $scope.addwishlist = function(id) {
            if ($scope.id) {
                MainJson.addtowishlist(id, $routeParams.ProductId).success(getwishlist);
            } else {
                $scope.wishlistlogin = true;
            }
        };
        var productsuccess = function(data, status) {
            if ($scope.accesslevel == 3) {
                $scope.rate = data.product.wholesaleprice;
            } else {
                $scope.rate = data.product.price;
            }
            $scope.product = data.product;

            $scope.product.quantity = parseInt($scope.product.quantity);
            $scope.breadcrumbs = data.breadcrumbs;
            $scope.productimage = data.productimage;
            $scope.relatedproduct = data.relatedproduct;
            console.log(data);
            $scope.sliders = MainJson.addrecentproduct(data.product, data.productimage[0].image);
            //            $location.hash($scope.product.name.replace(/ /g, "_"));
            $location.replace();
        };
        MainJson.getproductdetails($routeParams.ProductId).success(productsuccess);
        var cartt = function(data, status) {
            console.log(data);
            MainJson.gettotalcart().success(MainJson.gettotalproductsincart);
            smartcart.change();
        };
        $scope.addtocart = function(id, name, price, quantity) {
            // console.log(id+name+price+quantity);
            TemplateService.cartclicked = "animated swing";

            MainJson.addtocart(id, name, price, quantity).success(cartt);
            $scope.addedtocart = "show";
        };
        var addedtowaitinglist = function(data) {
            console.log(data);
            $scope.addedtowaitinglist = true;
        };
        $scope.addedtowaitinglist = false;
        $scope.addtowaitinglist = function(product, email) {
            MainJson.addtowaitinglist(product, email).success(addedtowaitinglist);
        };

        $scope.$on("$includeContentLoaded", function() {

            // stLight.options({publisher: "d145c5ea-9796-4078-8488-dc6407ac1d79", doNotHash: false, doNotCopy: false, hashAddressBar: true});

            TemplateService.firsttimeloaded();
            $(".zoomContainer").remove();
            $(".pulseanimation").hover(function() {
                $(this).addClass("animated pulse");
            }, function() {
                $(this).removeClass("animated pulse");
            });

            $(".tadaanimation").hover(function() {
                $(this).addClass("animated tada");
            }, function() {
                $(this).removeClass("animated tada");
            });
        });
        addanalytics("Product Screen");
        addevent("ButtonTap", "Product Button");

    });

phonecatControllers.controller('delivery',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Delivery");
        $scope.deliveryactive = "active";
        TemplateService.content = "views/delivery.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        addanalytics("Delivery Screen");
        addevent("ButtonTap", "Delivery Button");
    });

phonecatControllers.controller('wishlist',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Wishlist");
        $scope.deliveryactive = "active";
        TemplateService.content = "views/wishlist.html";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate

        var userwishlist = function(data, status) {
            $scope.find = data;
        };
        var authenticate = function(data, status) {
            console.log(data);
            if (data != "false") {
                MainJson.showwishlist(data.id).success(userwishlist)
                $scope.loginlogouttext = "Logout";
            } else {
                $location.path("/loginwishlist");
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        addanalytics("Wishlist Screen");
        addevent("ButtonTap", "Delivery Button");

    });


phonecatControllers.controller('returns',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Returns");
        TemplateService.content = "views/returns.html";
        $scope.returnsactive = "active";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        addanalytics("Returns Screen");

    });
//phonecatControllers.controller('about',
//    function ($scope, TemplateService, MainJson, $rootScope, $location) {
//        //$scope.firstloadclass = TemplateService.firstload;
//        $scope.template = TemplateService;
//        TemplateService.header = "views/header.html";
//        TemplateService.navigation = "views/navigation.html";
//        TemplateService.changetitle("About lyla");
//        TemplateService.content = "views/about.html";
//        $scope.returnsactive = "active";
//        TemplateService.slider = "";
//        $scope.loginlogouttext = "Login";
//        //authenticate
//        var authenticate = function (data, status) {
//            if (data != "false") {
//                $scope.loginlogouttext = "Logout";
//            }
//        };
//        MainJson.authenticate().success(authenticate);
//        //authenticate
//
//    });

phonecatControllers.controller('returns',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        //$scope.firstloadclass = TemplateService.firstload;
        $scope.template = TemplateService;
        TemplateService.header = "views/header.html";
        TemplateService.navigation = "views/navigation.html";
        TemplateService.changetitle("Returns");
        TemplateService.content = "views/returns.html";
        $scope.returnsactive = "active";
        TemplateService.slider = "";
        $scope.loginlogouttext = "Login";
        //authenticate
        var authenticate = function(data, status) {
            if (data != "false") {
                $scope.loginlogouttext = "Logout";
            }
        };
        MainJson.authenticate().success(authenticate);
        //authenticate
        addanalytics("Returns Screen");
        addevent("ButtonTap", "Returns Button");
    });

phonecatControllers.controller('zoomCtrl',
    function($scope) {
        addanalytics("Zoom Screen");
        $scope.switchImage = function(imageSrc) {
            console.log('change image to: ' + imageSrc);
            $scope.imageSrc = imageSrc;
        };
    }
);

phonecatControllers.controller('SmartCartCtrl',
    function($scope, TemplateService, MainJson, $rootScope, $location) {

        var totalitemchange = function(data) {
            $scope.totalitem = data;
        };

        smartcart.change = function() {
            MainJson.gettotalcart().success(totalitemchange);
            MainJson.totalcart().success(totalamountchange);
        };


        var totalamountchange = function(data) {
            $scope.totalamount = data;
            $scope.remainingfordiscount = 15 - $scope.totalamount;
            if ($scope.remainingfordiscount < 0) {
                $scope.remainingfordiscount == 0;
            }
        };
        $scope.$on('$routeChangeStart', function(next, current) {
            smartcart.change();
        });


        MainJson.gettotalcart().success(totalitemchange);
        MainJson.totalcart().success(totalamountchange);

        addanalytics("Smartcart Screen");
        addevent("ButtonTap", "SmartCart Button");
    }
);

function CarouselDemoCtrl($scope) {

}