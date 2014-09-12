<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Json extends CI_Controller 
{
	public function placelimitedemail()
    {
        $limited = json_decode(file_get_contents('php://input'), true);
        print_r($limited['limited']['name']);
        $name=$limited['limited']['name'];
        $email=$limited['limited']['email'];
        $address=$limited['limited']['address'];
        $this->load->library('email');
        $this->email->from('lyla@lylaloves.co.uk', 'Lyla');
        $this->email->to($email);
        $this->email->cc('another@another-example.com');
        $this->email->bcc('them@their-example.com');

        $this->email->subject('Limited Stock');
        $this->email->message('<img src="http://zibacollection.co.uk/lylalovecouk/img/onformsubmit.jpg" width="560px" height="398px">');

        $this->email->send();

         $data["message"]=$this->email->print_debugger();
		$this->load->view("json",$data);
    }
	public function placelimited()
    {
        $limited = json_decode(file_get_contents('php://input'), true);
        $name=$limited['limited']['name'];
        $email=$limited['limited']['email'];
        $address=$limited['limited']['address'];
        $data["message"]=$this->order_model->placelimited($name,$email,$address);
		$this->load->view("json",$data);
    }
	public function signupemail()
    {
        
        $email=$this->input->get('email');
        $this->load->library('email');
        $this->email->from('lyla@lylaloves.co.uk', 'Lyla');
        $this->email->to($email);
        $this->email->cc('another@another-example.com');
        $this->email->bcc('them@their-example.com');

        $this->email->subject('Welcome to Lyla');
        $this->email->message('Hello, You Sign Up successfully...Thank You For Visiting');

        $this->email->send();

         $data["message"]=$this->email->print_debugger();
		$this->load->view("json",$data);
    }
	public function orderemail()
    {
        
        $email=$this->input->get('email');
        $orderid=$this->input->get('orderid');
        $this->load->library('email');
        $this->email->from('lyla@lylaloves.co.uk', 'Lyla');
        $this->email->to($email);
        $this->email->cc('another@another-example.com');
        $this->email->bcc('them@their-example.com');

        $this->email->subject('Order');
        $this->email->message('<img src="http://zibacollection.co.uk/lylalovecouk/img/orderlyla.jpg" width="560px" height="398px">');
      // $this->email->html('<b>hello</b>');

        $this->email->send();

        $data["message"]=$this->email->print_debugger();
		$this->load->view("json",$data);
    }
	function usercontact()
	{
		
		$name=$this->input->get_post('name');
		$email=$this->input->get_post('email');
		$phone=$this->input->get_post('phone');
		$comment=$this->input->get_post('comment');
		$data["message"]=$this->user_model->usercontact($id,$name,$email,$phone,$comment);
		$this->load->view("json",$data);
	}
	/*function orderitem()
	{
        $carts = json_decode(file_get_contents('php://input'), true);
        //print_r($carts['cart']);
        
		$data["message"]=$this->order_model->orderitem($carts['cart']);
		$this->load->view("json",$data);
	}*/
	function placeorder()
	{
        $order = json_decode(file_get_contents('php://input'), true);
        //print_r($order);
		$user=$order['form']['user'];
		$firstname=$order['form']['firstname'];
		$lastname=$order['form']['lastname'];
		$email=$order['form']['email'];
		$phone=$order['form']['phone'];
		$status=$order['form']['status'];
		$company=$order['form']['company'];
		$fax=$order['form']['fax'];
		$billingaddress=$order['form']['billingaddress'];
		$billingcity=$order['form']['billingcity'];
		$billingstate=$order['form']['billingstate'];
		$billingcountry=$order['form']['billingcountry'];
		$shippingaddress=$order['form']['shippingaddress'];
		$shippingcity=$order['form']['shippingcity'];
		$shippingcountry=$order['form']['shippingcountry'];
		$shippingstate=$order['form']['shippingstate'];
		$shippingpincode=$order['form']['shippingpincode'];
		$billingpincode=$order['form']['billingpincode'];
		$carts=$order['form']['cart'];
                $finalamount=$order['form']['finalamount'];
		$data["message"]=$this->order_model->placeorder($user,$firstname,$lastname,$email,$billingaddress,$billingcity,$billingstate,$billingcountry,$shippingaddress,$shippingcity,$shippingcountry,$shippingstate,$shippingpincode,$billingpincode,$phone,$status,$company,$fax,$carts,$finalamount);
        //$data["message"]=$this->order_model->placeorder($user,$firstname,$lastname,$email,$billingaddress,$billingcity,$billingstate,$billingcountry,$shippingaddress,$shippingcity,$shippingcountry,$shippingstate,$shippingpincode,$billingpincode,$phone,$status,$company,$fax);
		$this->load->view("json",$data);
	}
	function getusercart()
	{
		$user=$this->input->get_post('user');
		$data["message"]=$this->order_model->getusercart($user);
		$this->load->view("json",$data);
	}
	function addcartsession()
	{
		
		$cart=$this->input->get_post('cart');
		$data["message"]=$this->order_model->addcartsession($cart);
		$this->load->view("json",$data);
	}
	function addtocart()
	{
		$user=$this->input->get_post('user');
		$product=$this->input->get_post('product');
		$productname=$this->input->get_post('productname');
		$quantity=$this->input->get_post('quantity');
		$price=$this->input->get_post('price');
        $data["message"]=$this->user_model->addtocart($product,$productname,$quantity,$price);
		//$data["message"]=$this->order_model->addtocart($user,$product,$quantity);
		$this->load->view("json",$data);
	}
    
    function showcart() {
        $cart=$this->cart->contents();
        $newcart=array();
        foreach($cart as $item) {
            array_push($newcart,$item);
        }
        $data["message"]=$newcart;
        $this->load->view("json",$data);
    }
    function totalcart() {
        $data["message"]=$this->cart->total();
        $this->load->view("json",$data);
    }
    function totalitemcart() {
        $data["message"]=$this->cart->total_items();
        $this->load->view("json",$data);
    }
    
	function searchbyname()
	{
		$search=$this->input->get_post('search');
		$data["message"]=$this->user_model->searchbyname($search);
		$this->load->view("json",$data);
	}
	function showwishlist()
	{
		$user=$this->input->get_post('user');
		$data["message"]=$this->wishlist_model->showwishlist($user);
		$this->load->view("json",$data);
	}
	function newsletter()
	{
		$id=$this->input->get_post('id');
		$email=$this->input->get_post('email');
		$status=$this->input->get_post('status');
		$data["message"]=$this->user_model->newsletter($id,$email,$status);
		$this->load->view("json",$data);
	}
	function registeruser()
	{
		$firstname=$this->input->get_post('firstname');
		$lastname=$this->input->get_post('lastname');
		$email=$this->input->get_post('email');
		$password=$this->input->get_post('password');
		$data["message"]=$this->user_model->registeruser($firstname,$lastname,$email,$password);
		$this->load->view("json",$data);
	}
	function registewholesaler()
	{
		$firstname=$this->input->get_post('firstname');
		$lastname=$this->input->get_post('lastname');
		$phone=$this->input->get_post('phone');
		$email=$this->input->get_post('email');
		$password=$this->input->get_post('password');
		$data["message"]=$this->user_model->registewholesaler($firstname,$lastname,$phone,$email,$password);
		$this->load->view("json",$data);
	}
    function addtowishlist()
	{
		$user=$this->input->get_post('user');
		$product=$this->input->get_post('product');
		$data["message"]=$this->product_model->addtowishlist($user,$product);
		$this->load->view("json",$data);
	}
    function loginuser()
	{
		$email=$this->input->get_post('email');
		$password=$this->input->get_post('password');
		$data["message"]=$this->user_model->loginuser($email,$password);
		$this->load->view("json",$data);
	}
    public function authenticate()
    {
        $data['message']=$this->user_model->authenticate();
        $this->load->view('json',$data);
    }
    public function logout()
    {
        $this->session->sess_destroy();
        $data['message']=true;
        $this->load->view('json',$data);
    }
    function deletecart() {
    	$id=intval($this->input->get_post("id"));
    	
        $cart=$this->cart->contents();
        $newcart=array();
        foreach($cart as $item) {
        
        	if($item['id'] != $id)
            array_push($newcart,$item);
        }
        $this->cart->destroy();
      $this->cart->insert($newcart);
      
        $data["message"]=$newcart;
       $this->load->view("json",$data);
    }
    function savequantity()
	{
		$product=$this->input->get_post('product');
		$quantity=$this->input->get_post('quantity');
		$data["message"]=$this->product_model->savequantity($product,$quantity);
		$this->load->view("json",$data);
	}
	function getnavigation()
	{
		$data["message"]=$this->navigation_model->getnavigation();
		$this->load->view("json",$data);
	}
	function getproductbycategory()
	{
		$color=$this->input->get_post("color");
		$price1=$this->input->get_post("price1");
		$price2=$this->input->get_post("price2");
		$category=$this->input->get_post("category");
		$data["message"]=$this->product_model->getproductbycategory($category,$color,$price1,$price2);
		$this->load->view("json",$data);
	}
	function getproductdetails()
	{
		$data["message"]=$this->product_model->getproductdetails($this->input->get_post('product'),$this->input->get_post('category'));
		$this->load->view("json",$data);
	}
	function getallslider()
	{
		$data["message"]=$this->db->query("SELECT `slider`.`id` as `id`,`productimage`.`image` as `image`,`product`.`id` as `link`,`product`.`price` as `price`,`slider`.`order` as `order`  FROM `slider` INNER JOIN `product` on `product`.`id`=`slider`.`product` INNER JOIN `productimage` ON `productimage`.`product`=`product`.`id` GROUP BY `product`.`id`  ORDER BY `slider`.`order`,`productimage`.`order`  LIMIT 0,10")->result();
		$this->load->view("json",$data);
	}
}
?>