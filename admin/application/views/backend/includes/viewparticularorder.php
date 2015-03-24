
<!--
	<div class="col-md-10">
		<div class=" pull-right col-md-1 createbtn" ><a class="btn btn-primary" href="<?php echo site_url('site/exportordercsv'); ?>"target="_blank"><i class="icon-plus"></i>Export to CSV </a></div>
	</div>	
-->
<!--
<div class=" pull-right col-md-1 createbtn" ><a class="btn btn-primary" href="<?php echo site_url('site/createorder'); ?>"><i class="icon-plus"></i>Create </a></div>
</div>
-->
<div class="row">

	<div class="col-lg-12">
		<section class="panel">
			<header class="panel-heading">
                Order Details
            </header>
			<table class="table table-striped table-hover border-top " id="sample_1" cellpadding="0" cellspacing="0" >
			<thead>
				<tr>
					<!--<th>Id</th>-->
					<th>Customer Name</th>
					<th>Final Amount</th>
					<th>Status</th>
					<th>Time</th>
<!--					<th>Action</th>-->
				</tr>
			</thead>
			<tbody>
<!--           <?php print_r($order)?>-->
			   <?php foreach($order as $row) { ?>
					<tr>
						<!--<td><?php echo $row->id; ?></td>-->
						<td><?php echo $row->firstname." ".$row->lastname; ?></td>
						<td><?php echo $row->finalamount; ?></td>
						<td><?php echo $row->name; ?></td>
						<td><?php echo $row->timestamp; ?></td>
                       
<!--
						<td> <a class="btn btn-primary btn-xs" href="<?php echo site_url('site/editorder?id=').$row->id;?>"><i class="icon-pencil"></i></a>
                            <a class="btn btn-danger btn-xs" href="<?php echo site_url('site/deleteorder?id=').$row->id; ?>" onclick="return confirm('Are you sure?')"><i class="icon-trash "></i></a>
									 
					  </td>
-->
					</tr>
					<?php } ?>
			</tbody>
			</table>
		</section>
	</div>
  </div>

