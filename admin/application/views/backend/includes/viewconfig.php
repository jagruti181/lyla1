<div class=" row" style="padding:1% 0;">
<!--	<div class=" pull-right col-md-1 createbtn" ><a class="btn btn-primary" href="<?php echo site_url('site/createconfig'); ?>"><i class="icon-plus"></i>Create </a></div>-->
	
</div>
<div class="row">
	<div class="col-lg-12">
		<section class="panel">
			<header class="panel-heading">
                Config Details
            </header>
			<table class="table table-striped table-hover border-top " id="sample_1" cellpadding="0" cellspacing="0" >
			<thead>
				<tr>
					<!--<th>Id</th>-->
					<th>Login Points</th>
					<th>Checkout Percent Points</th>
					<th> Actions </th>
				</tr>
			</thead>
			<tbody>
			   <?php foreach($table as $row) { ?>
					<tr>
						<!--<td><?php echo $row->id; ?></td>-->
						<td><?php echo $row->loginpoints; ?></td>
						<td><?php echo $row->checkoutpercentpoints; ?></td>
						<td> <a class="btn btn-primary btn-xs" href="<?php echo site_url('site/editconfig?id=').$row->id;?>"><i class="icon-pencil"></i></a>
<!--                                      <a class="btn btn-danger btn-xs" href="<?php echo site_url('site/deleteconfig?id=').$row->id; ?>"><i class="icon-trash "></i></a>-->
									 
					  </td>
					</tr>
					<?php } ?>
			</tbody>
			</table>
		</section>
	</div>
  </div>
