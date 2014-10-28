<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="firstapp">

<head ng-controller="headerctrl">
    <title ng-bind="'Lyla Loves - '+template.title">Lyla Loves</title>
    <script>
        var hostname = window.location.hostname;
        if (hostname == "lylaloves.co.uk") {
            console.log(hostname);
            window.location.replace("http://www.lylaloves.co.uk/");
        } else {
            console.log("other " + hostname);
        }
    </script>
    <script>
//        (function (a, b) {
//            if ((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))) window.location = b
//        })(navigator.userAgent || navigator.vendor || window.opera, 'http://www.lylaloves.co.uk/mobile');
    </script>
    <script type="text/javascript">
        var _clt = _clt || [];
        _clt["custId"] = "{{email}}";
        _clt["siteId"] = "40606bc583";
        _clt["ref"] = encodeURIComponent(document.referrer);
        (function () {
            var cl = document.createElement('script');
            cl.type = 'text/javascript';
            cl.async = true;
            cl.src = 'https:' == document.location.protocol ? 'https://lib.canopylabs.com:8889/js/cl_ga4.js' : 'http://lib.canopylabs.com:8888/js/cl_ga4.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(cl, s);
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
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-55688126-1', 'auto');
        ga('send', 'pageview');
    </script>


</head>

<body>
    <div class="top-bar barheight">

        <div class="row">
            <div class="col-xs-3">


                <div class="input-group headsearch" ng-controller="search">
                    <span class="input-group-addon icon"><span class="glyphicon glyphicon-search"></span></span>
                    <input type="text" class="form-control inputbox" ng-model="searchpro" placeholder="Search" ng-change="search(searchpro)">
                </div>
            </div>
            <div class="col-xs-7 padder" ng-controller="newsletter">
                <p style="text-align:center;">Sign up for our newsletter and get free delivery on your first order! &nbsp;&nbsp;&nbsp;
                    <input type="email" class="form-control newsletteremail" ng-model="uemail" placeholder="" required> <a style="color:black;" class="btn btn-primary" ng-click="newsletter(uemail)">GO</a>
                </p>
            </div>

            <div class="col-xs-2">

                <div class="pull-right" style="margin-right:15px;" ng-controller="badge">

                    <a href="#/Login" class="fadeInRight wow topicon" ng-class="firstloadclass wow">
                        <img src="img/account.png">
                    </a>

                    <a href="#" class="badge newbadge" ng-show="template.totalproducts!=0">{{template.totalproducts}}</a>
                    <a href="#/cart" class="topicon {{template.cartclicked}}">
                        <img src="img/cart.png">
                    </a>

                    <a href="#/wishlist" class="fadeInRight wow topicon" ng-class="firstloadclass wow">
                        <img src="img/wishlist.png">
                    </a>



                    <!--a href="https://twitter.com/ZibaCollection" target="_blank" class="fadeInRight wow" myfirstloadclass data-wow-delay="0.3s">
                    <img src="img/twitter.png" class="socialicons tadaanimation">
                </a>
                <a href="http://pinterest.com/zibacollection/" target="_blank" class="fadeInRight wow" myfirstloadclass data-wow-delay="0.4s">
                    <img src="img/pinterest.png" class="socialicons tadaanimation">
                </a>
                <a href="http://instagram.com/zibacollection" target="_blank" class="wow fadeInRight" data-wow-delay="0.5s">
                    <img src="img/insta.png" class="socialicons tadaanimation">
                </a>
                <a href="https://www.facebook.com/pages/Ziba-Collection/284068054986182" target="_blank" class="wow fadeInRight" data-wow-delay="0.6s">
                    <img src="img/facebook.png" class="socialicons tadaanimation">
                </a>
                <a href="http://zibaacc.tumblr.com/" target="_blank" class="fadeInRight wow" myfirstloadclass data-wow-delay="0.7s">
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

    <script type="text/javascript">
        (function (d, t) {
            if (window.location.hash != '#gleam' && ('' + document.cookie).match(/(^|;)\s*GleamaaA2s=X($|;)/)) {
                return;
            }
            var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            g.src = "https://js.gleam.io/aaA2s/ol.js";
            s.parentNode.insertBefore(g, s);
        }(document, "script"));
    </script>



    <!--script for geo location-->

    <script>
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            var latlon = position.coords.latitude + "," + position.coords.longitude;
            console.log(position.coords);
        }

        function showError(error) {
            switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
            }

        }

        function showError(error) {
            switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
            }
        }
    </script>


</body>

</html>


