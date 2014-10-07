<?php
//var_dump($_FILES['uploaded_files']['tmp_name']);
header("Access-Control-Allow-Origin: *");
header('Content-type: application/javascript');

echo json_encode($_FILES['uploaded_files']);
//require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
//use google\appengine\api\cloud_storage\CloudStorageTools;
//$object_url=$_FILES['uploaded_files']['tmp_name'];
//$object_image_url = CloudStorageTools::getImageServingUrl($object_url,
//                                                          ['size' => 400, 'crop' => true]);
//echo $object_image_url;
?>