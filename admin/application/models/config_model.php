<?php
if ( !defined( 'BASEPATH' ) )
	exit( 'No direct script access allowed' );
class Config_model extends CI_Model
{
	//config
	public function createconfig($loginpoints,$checkoutpercentpoints)
	{
		$data  = array(
			'loginpoints' => $loginpoints,
			'checkoutpercentpoints' => $checkoutpercentpoints
		);
		$query=$this->db->insert( 'config', $data );
		
		return  1;
	}
	function viewconfig()
	{
		$query=$this->db->query("SELECT `id`, `loginpoints`, `checkoutpercentpoints` FROM `config` LIMIT 0,1")->result();
		return $query;
	}
	public function beforeeditconfig( $id )
	{
		$this->db->where( 'id', $id );
		$query=$this->db->get( 'config' )->row();
		return $query;
	}
	
	public function editconfig($id,$loginpoints,$checkoutpercentpoints)
	{
		$data = array(
			'loginpoints' => $loginpoints,
			'checkoutpercentpoints' => $checkoutpercentpoints
		
		);
    $this->db->where( 'id', $id );
		$query=$this->db->update( 'config', $data );    
		return 1;
	}
	function deleteconfig($id)
	{
		$query=$this->db->query("DELETE FROM `config` WHERE `id`='$id'");
		
	}
	
}
?>