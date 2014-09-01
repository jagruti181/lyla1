var adminurl='http://localhost/lyla/index.php/json/';
var service = angular.module('Service', []);
service.factory('MainJson',function($http)
{
    
    var cart=[];
    var returntwo=[];
    var subtotal=0;
    
    
	 /*{
		placeorder: function(firstname,lastname,email,company,billingaddress,billingcity,billingstate,billingpincode,billingcountry,phone,fax,shippingaddress,shippingcity,shippingstate,shippingpincode,shippingcountry,id,status) {
		 	return $http.post(adminurl+'placeorder?user='+id+'&firstname='+firstname+'&lastname='+lastname+'&email='+email+'&phone='+phone+'&status='+status+'&fax='+fax+'&company='+company+'&billingaddress='+billingaddress+'&billingcity='+billingcity+'&billingstate='+billingstate+'&billingpincode='+billingpincode+'&billingcountry='+billingcountry+'&shippingaddress='+shippingaddress+'&shippingstate='+shippingstate+'&shippingpincode='+shippingpincode+'&shippingcountry='+shippingcountry,{});
		},*/
       return {
		placelimitedemail: function(limited) {
            return $http({
                url: adminurl+'placelimitedemail',
                method: "POST",
               data: {'limited':limited}
            });
		},
		placelimited: function(limited) {
            return $http({
                url: adminurl+'placelimited',
                method: "POST",
               data: {'limited':limited}
            });
		},
		placeorder: function(form) {
            return $http({
                url: adminurl+'placeorder',
                method: "POST",
               data: {'form':form}
            });
		},
		seach: function(search) {
		 	return $http.post(adminurl+'searchbyname?search='+search,{});
		},
		showwishlist: function(user) {
		 	return $http.post(adminurl+'showwishlist?user='+user,{});
		},
		signupemail: function(email) {
		 	return $http.post(adminurl+'signupemail?email='+email,{});
		},
		orderemail: function(email,orderid) {
		 	return $http.post(adminurl+'orderemail?email='+email+'&orderid='+orderid,{});
		},
		logout: function() {
		 	return $http.post(adminurl+'logout',{});
		},
		usercontact: function(id,name,email,phone,comment) {
		 	return $http.post(adminurl+'usercontact?id='+id+'&name='+name+'&email='+email+'&phone='+phone+'&comment='+comment,{});
		},
		newsletter: function(id,email,status) {
		 	return $http.post(adminurl+'newsletter?id='+id+'&email='+email+"&status="+status,{});
		},
		addtowishlist: function(user,product) {
		 	return $http.post(adminurl+'addtowishlist?user='+user+'&product='+product,{});
		},
		authenticate: function() {
		 	return $http.post(adminurl+'authenticate',{});
		},
		registeruser: function(firstname,lastname,email,password) {
		 	return $http.post(adminurl+'registeruser?firstname='+firstname+'&lastname='+lastname+'&email='+email+'&password='+password,{});
		},
		registerwholesaler: function(firstname,lastname,phone,email,password) {
		 	return $http.post(adminurl+'registewholesaler?firstname='+firstname+'&lastname='+lastname+'&phone='+phone+'&email='+email+'&password='+password,{});
		},
		loginuser: function(email,password) {
		 	return $http.post(adminurl+'loginuser?email='+email+'&password='+password,{});
		},
        getnavigation: function() {
		 	return $http.post(adminurl+'getnavigation');
		},
		getproductdetails: function(product,category) {
		 	return $http.get(adminurl+'getproductdetails',{params:{product:product}});
		},
		getproductbycategory: function(category) {
		 	return $http.get(adminurl+'getproductbycategory',{params:{category:category}});
		},
		getusercart: function(user) {
		 	return $http.get(adminurl+'getusercart?user='+user,{});
		},
        addtocart: function(id,name,price,quantity) {
            return $http.post(adminurl+'addtocart?product='+id+'&productname='+name+"&quantity="+quantity+"&price="+price,{});
          /*
            price=parseFloat(price);
            quantity=parseInt(quantity);
            if(isNaN(quantity))
            {
                return;
            }
            var isedit=-1;
            for(var i=0;i<cart.length;i++){
                if(cart[i].id==id)
                {
                    isedit=i;
                }
                
            }
            if(isedit==-1)
            {
		 	    cart.push({id:id,name:name,price:price,quantity:quantity});
                
            }
            else 
            {
                cart[isedit].quantity+=quantity;
            }
            console.log(cart);
            subtotal=this.calcsubtotal();
            return subtotal;
           */ 
		},
        getcart: function () {
            return $http.get(adminurl+'showcart',{});
            //return cart;
        },
        gettotalcart: function () {
            return $http.get(adminurl+'totalitemcart',{});
            //return cart;
        },
        totalcart: function () {
            return $http.get(adminurl+'totalcart',{});
            //return cart;
        },
        deletecart: function (id) {
            for(var i=0;i<cart.length;i++){
                if(cart[i].id==id)
                {
                    cart.splice(i,1);
                }
                
            }
            subtotal=this.calcsubtotal();
            return subtotal;
        },
        savecart: function (uid,id,quantity) {
            console.log(cart);
            for(var i=0;i<cart.length;i++){
                if(cart[i].id==id)
                {
                    cart[i].quantity=quantity;
                    console.log(cart[i].name);
                    returntwo.state=$http.post(adminurl+'addtocart?user='+uid+'&product='+id+"&quantity="+cart[i].quantity,{});
                }
                
            }
            console.log(cart);
            returntwo.subtotal=this.calcsubtotal();
            return returntwo;
        },
        calcsubtotal:function() {
            subtotal=0;
            for(var i=0;i<cart.length;i++){
               subtotal+= cart[i].price*cart[i].quantity;
            }
            console.log(subtotal);
            return subtotal;
            
        }
	}
});


