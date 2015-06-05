<?php
if ( !defined( 'BASEPATH' ) )
	exit( 'No direct script access allowed' );
class Sale_model extends CI_Model
{
	//sale
	public function createsale($status,$order,$product)
	{
		$data  = array(
			'status' => $status,
			'order' => $order,
			'product' => $product
		);
		$query=$this->db->insert( 'sale', $data );
		return  1;
	}
	function viewsale()
	{
		$query=$this->db->query("SELECT `sale`.`id`,`sale`.`product`,`sale`.`order` ,`product`.`name` AS `productname`
        FROM `sale` LEFT OUTER JOIN `product` ON `product`.`id`=`sale`.`product`
		ORDER BY `sale`.`order` ASC")->result();
		return $query;
	}
	public function beforeeditsale( $id )
	{
		$this->db->where( 'id', $id );
		$query=$this->db->get( 'sale' )->row();
		return $query;
	}
	
	public function editsale( $id,$status,$order,$product)
	{
		$data = array(
			'status' => $status,
			'order' => $order,
			'product' => $product
		);
		$this->db->where( 'id', $id );
		$this->db->update( 'sale', $data );
		return 1;
	}
	function deletesale($id)
	{
		$query=$this->db->query("DELETE FROM `sale` WHERE `id`='$id'");
	}
	public function getsaledropdown()
	{
		$query=$this->db->query("SELECT * FROM `sale`  ORDER BY `id` ASC")->result();
		$return=array(
		"" => ""
		);
		foreach($query as $row)
		{
			$return[$row->id]=$row->name;
		}
		
		return $return;
	}
	public function getstatusdropdown()
	{
		$status= array(
			 "1" => "Enabled",
			 "0" => "Disabled",
			);
		return $status;
	}
}
?>