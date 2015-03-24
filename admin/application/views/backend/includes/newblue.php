<div class=" row" style="padding:1% 0;">
<div class=" pull-right col-md-1 createbtn" ><a class="btn btn-primary" href="<?php echo site_url('site/createnewblue')?>"><i class="icon-plus"></i>Create</a></div>
</div>
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
					<th>Id</th>
					<th>Profuct Id</th>
					<th>Name</th>
			       <th> Actions </th>

				</tr>
			</thead>
			<tbody>
<!--           <?php print_r($table)?>-->
			   <?php foreach($table as $row) { ?>
					<tr>
						<td><?php echo $row->id; ?></td>
						<td><?php echo $row->podname;?></td>
<!--						<td><?php echo $row->firstname." ".$row->lastname; ?></td>-->
						<td><?php echo $row->catname;?></td>
<!--
						<td><?php echo $row->orderstatus;?></td>
						<td><?php echo $row->timestamp;?></td>
-->
						<td>
                            <a class="btn btn-danger btn-xs" href="<?php echo site_url('site/deletenewblue?id=').$row->id.'&productcat='.$row->product;?>" onclick="return confirm('Are you sure?')"><i class="icon-trash "></i></a>
									 
					  </td>
					</tr>
					<?php } ?>
			</tbody>
			</table>
		</section>
	</div>
  </div>
