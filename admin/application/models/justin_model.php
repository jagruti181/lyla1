<?php
if ( !defined( 'BASEPATH' ) )
	exit( 'No direct script access allowed' );
class Justin_model extends CI_Model
{
	//justin
	public function createjustin($status,$order,$product)
	{
		$data  = array(
			'status' => $status,
			'order' => $order,
			'product' => $product
		);
		$query=$this->db->insert( 'justin', $data );
		return  1;
	}
	function viewjustin()
	{
		$query=$this->db->query("SELECT `justin`.`id`,`justin`.`product`,`justin`.`order` ,`product`.`name` AS `productname`
        FROM `justin` LEFT OUTER JOIN `product` ON `product`.`id`=`justin`.`product`
		ORDER BY `justin`.`order` ASC")->result();
		return $query;
	}
	public function beforeeditjustin( $id )
	{
		$this->db->where( 'id', $id );
		$query=$this->db->get( 'justin' )->row();
		return $query;
	}
	
	public function editjustin( $id,$status,$order,$product)
	{
		$data = array(
			'status' => $status,
			'order' => $order,
			'product' => $product
		);
		$this->db->where( 'id', $id );
		$this->db->update( 'justin', $data );
		return 1;
	}
	function deletejustin($id)
	{
		$query=$this->db->query("DELETE FROM `justin` WHERE `id`='$id'");
	}
	public function getjustindropdown()
	{
		$query=$this->db->query("SELECT * FROM `justin`  ORDER BY `id` ASC")->result();
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