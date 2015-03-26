<?php
//	var_dump($user_profile);

echo "the name is".$user_profile->displayName;

?>
<html>
<body>
 <form action="<?php echo site_url('welcome/facebookinfo');?>" method="post">
  Name  <input type="text" value="<?php echo  $user_profile->displayName;?>" name=" name">
  <input type="submit">
</form>
</html>
</body>

