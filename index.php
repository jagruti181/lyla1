<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="firstapp">

<head ng-controller="headerctrl">
    <title ng-bind="'Lyla Loves - '+template.title">Lyla Loves</title>
    <script>
        var hostname=window.location.hostname;
        if(hostname=="lylaloves.co.uk")
        {
        console.log(hostname);
        window.location.replace("http://www.lylaloves.co.uk/");
        }
        else
        
        {
        console.log("other "+hostname );
        }
    </script>
    <script type="text/javascript">
        var _clt = _clt || [];
        _clt["custId"] = "{{email}}";
        _clt["siteId"] = "40606bc583";
        _clt["ref"] = encodeURIComponent(document.referrer);
        (function() {
            var cl = document.createElement('script'); cl.type = 'text/javascript'; cl.async = true;
            cl.src = 'https:' == document.location.protocol ? 'https://lib.canopylabs.com:8889/js/cl_ga4.js' : 'http://lib.canopylabs.com:8888/js/cl_ga4.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cl, s);
        })();
    </script>
    

    <link rel="shortcut icon" href="img/logo.jpg" />
    <link href="lib/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="lib/css/animate.css" rel="stylesheet" type="text/css">
    <link href="lib/css/image-zoom.min.css" rel="stylesheet">
    <link href="lib/css/font-awesome.min.css" rel="stylesheet">
    <link href="lib/css/main1.css" rel="stylesheet">
    <link href="lib/range/angular.rangeSlider.css" rel="stylesheet">
    <link href="https://checkout.stripe.com/v3/checkout/button.css" rel="stylesheet">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script src="lib/js/jquery-1.11.1.min.js"></script>
    <script src="lib/js/angular.min.js"></script>
    <script src="lib/js/angular-animate.js"></script>
    <script src="lib/js/angular-route.min.js"></script>
    <script src="lib/js/angular-resource.min.js"></script>

    <!--<script src="lib/js/bootstrap.min.js"></script>-->
    <script src="lib/js/ui-bootstrap-tpls-0.11.0.min.js"></script>
    <script src="lib/js/jquery.bxslider.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/templateservice.js"></script>
    <script src="js/services.js"></script>
    <script src="lib/js/wow.min.js"></script>
    <script src="lib/js/isotope.js"></script>
    <script src="lib/js/main.js"></script>
    <script src="lib/js/image-zoom.js"></script>
    <script src="lib/js/jquery.elevatezoom.min.js"></script>
    <script src="lib/js/skrollr.js"></script>
    <script src="lib/js/skrollr.dir.js"></script>
    <script src="lib/range/angular.rangeSlider.js"></script>
    <script src="lib/js/ng-infinite-scroll.min.js"></script>
    <script src="lib/js/jstorage.js"></script>
    <script src="https://checkout.stripe.com/checkout.js"></script>


</head>

<body>
    <div class="top-bar barheight">

        <div class="row">
            <div class="col-xs-4">


                <div class="input-group headsearch" ng-controller="search">
                    <span class="input-group-addon icon"><span class="glyphicon glyphicon-search"></span></span>
                    <input type="text" class="form-control inputbox" ng-model="searchpro" placeholder="Search" ng-change="search(searchpro)">
                </div>
            </div>
            <div class="col-xs-5 padder" ng-controller="newsletter">
                <p>Sign up for our newsletter! &nbsp;&nbsp;&nbsp;
                    <input type="email" class="form-control newsletteremail" ng-model="uemail" placeholder="" required> <a style="color:black;" class="btn btn-primary" ng-click="newsletter(uemail)">GO</a>
                </p>
            </div>

            <div class="col-xs-3">

                <div class="pull-right" style="margin-right:15px;" ng-controller="badge">

                    <a href="#/Login" class="fadeInRight wow topicon" ng-class="firstloadclass wow">
                        <img src="img/account.png">
                    </a>

                    <a href="#" class="badge newbadge" ng-show="template.totalproducts!=0">{{template.totalproducts}}</a>
                    <a href="#/cart" class="topicon {{template.cartclicked}}" >
                        <img src="img/cart.png">
                    </a>

                    <a href="#/wishlist" class="fadeInRight wow topicon" ng-class="firstloadclass wow">
                        <img src="img/wishlist.png">
                    </a>



                    <!--a href="https://twitter.com/ZibaCollection" target="_blank" class="fadeInRight wow" ng-class="firstloadclass" data-wow-delay="0.3s">
                    <img src="img/twitter.png" class="socialicons tadaanimation">
                </a>
                <a href="http://pinterest.com/zibacollection/" target="_blank" class="fadeInRight wow" ng-class="firstloadclass" data-wow-delay="0.4s">
                    <img src="img/pinterest.png" class="socialicons tadaanimation">
                </a>
                <a href="http://instagram.com/zibacollection" target="_blank" class="wow fadeInRight" data-wow-delay="0.5s">
                    <img src="img/insta.png" class="socialicons tadaanimation">
                </a>
                <a href="https://www.facebook.com/pages/Ziba-Collection/284068054986182" target="_blank" class="wow fadeInRight" data-wow-delay="0.6s">
                    <img src="img/facebook.png" class="socialicons tadaanimation">
                </a>
                <a href="http://zibaacc.tumblr.com/" target="_blank" class="fadeInRight wow" ng-class="firstloadclass" data-wow-delay="0.7s">
                    <img src="img/tumbler.png" class="socialicons tadaanimation">
                </a-->
                </div>



            </div>
        </div>
    </div>
    <div class="barheight"></div>
    <div class="container-fluid-non-responsive">
<!--        <div ng-view skrollr-tag></div>-->
        <div ng-view></div>
    </div>

    <script>
        var issearch = false;
        
        $(document).ready(function () {
            
            
            $(".headsearch .icon").click(function () {

                if (issearch) {
                    issearch = false;
                    $(".headsearch .inputbox").removeClass("showit");
                    $(".headsearch .icon").removeClass("showit");
                } else {
                    issearch = true;
                    $(".headsearch .inputbox").addClass("showit");
                    $(".headsearch .icon").addClass("showit");
                }
            });
        });
    </script>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-54886004-1', 'auto');
        ga('send', 'pageview');

    </script>
    <script type="text/javascript">(function(d, t){
    if(window.location.hash!='#gleam'&&(''+document.cookie).match(/(^|;)\s*Gleamg7NTT=X($|;)/)){return;}
    var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
    g.src = "https://js.gleam.io/g7NTT/ol.js"; s.parentNode.insertBefore(g, s);
}(document, "script"));</script>
    
</body>

</html>


