<div class=" row" style="padding:1% 0;">
<!--
	<div class="col-md-10">
		<div class=" pull-right col-md-1 createbtn" ><a class="btn btn-primary" href="<?php echo site_url('site/exportorderitemcsv'); ?>"target="_blank"><i class="icon-plus"></i>Export to CSV </a></div>
	</div>
-->
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
               Top 10 Product All Time
            </header>
			<table class="table table-striped table-hover border-top " id="sample_1" cellpadding="0" cellspacing="0" >
			<thead>
				<tr>
					<!--<th>Id</th>-->
					
					<th>Name</th>
					<th>Total Product</th>
					<th>SKU</th>
					<th>Price</th>
					
				</tr>
			</thead>
			<tbody>
			   <?php foreach($order as $row) { ?>
					<tr>
						
						<td><?php echo $row->name;?></td>
						<td><?php echo $row->prodcount;?></td>
						<td><?php echo $row->sku;?></td>
						<td><?php echo $row->price;?></td>
<!--
                        <td> <a class="btn btn-primary btn-xs" href="<?php echo site_url('site/vieworderdetails?id=').$row->id;?>"><i class="icon-pencil"></i></a></td>
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
