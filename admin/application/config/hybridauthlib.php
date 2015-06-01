<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*!
* HybridAuth
* http://hybridauth.sourceforge.net | http://github.com/hybridauth/hybridauth
* (c) 2009-2012, HybridAuth authors | http://hybridauth.sourceforge.net/licenses.html
*/

// ----------------------------------------------------------------------------------------
//	HybridAuth Config file: http://hybridauth.sourceforge.net/userguide/Configuration.html
// ----------------------------------------------------------------------------------------


	
$config =
	array(
		// set on "base_url" the relative url that point to HybridAuth Endpoint
		'base_url' => '/hauth/endpoint',

		"providers" => array (
			// openid providers
			"OpenID" => array (
				"enabled" => false
			),

			"Yahoo" => array (
				"enabled" => false,
				"keys"    => array ( "id" => "", "secret" => "" ),
			),

			"AOL"  => array (
				"enabled" => false
			),

			"Google" => array (
				"enabled" => true,
				"keys"    => array ( "id" => "64627381966-tfa6hpcnpnvmornmj41b2hujimmjinnj.apps.googleusercontent.com", "secret" => "USyTj9PZgB_-_ZayjiCrL0xK" ),
			),

			"Facebook" => array (
				"enabled" => true,
				"keys"    => array ( "id" => "592087774264615", "secret" => "1052096e2077169246e5aac026f4b80c" ),
                "scope"   => "email, user_about_me, user_birthday, user_hometown, user_website",
//				"keys"    => array ( "id" => "431094100390990", "secret" => "2d5f411a4bf15cdefb7977eb875c6a52" ),

			),

			"Twitter" => array (
				"enabled" => true,
				"keys"    => array ( "key" => "zdI4WWVFsXLRSI24eagDuZQsj", "secret" => "m94tvojX7itbnYnihQYbc3l2KmKMDZ34L0HCqP1vv8e1nWOLbt" )
			),

			// windows live
			"Live" => array (
				"enabled" => false,
				"keys"    => array ( "id" => "", "secret" => "" )
			),

			"MySpace" => array (
				"enabled" => false,
				"keys"    => array ( "key" => "", "secret" => "" )
			),

			"LinkedIn" => array (
				"enabled" => false,
				"keys"    => array ( "key" => "", "secret" => "" )
			),

			"Foursquare" => array (
				"enabled" => false,
				"keys"    => array ( "id" => "", "secret" => "" )
			),
		),

		// if you want to enable logging, set 'debug_mode' to true  then provide a writable file by the web server on "debug_file"
		"debug_mode" => (ENVIRONMENT == 'development'),

		"debug_file" => APPPATH.'/logs/hybridauth.log',
	);


/* End of file hybridauthlib.php */
/* Location: ./application/config/hybridauthlib.php */