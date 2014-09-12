
		<section class="panel">
			<header class="panel-heading">
                Product Waiting <span class="pull-right">Product :<?php echo $before['product']->name; ?></span>
            </header>
			<table class="table table-striped table-hover border-top " id="sample_1" cellpadding="0" cellspacing="0" >
			<thead>
				<tr>
					<!--<th>Id</th>-->
					<th>User</th>
					<th>Email</th>
					<th>Time Stamp</th>
					
				</tr>
			</thead>
			<tbody>
			   <?php foreach($table as $row) { ?>
					<tr>
						<!--<td><?php echo $row->id; ?></td>-->
						<td><?php echo $row->firstname." ".$row->lastname; ?></td>
						<td><?php echo $row->email;  ?></td>
						<td><?php echo $row->timestamp; ?></td>
						
					</tr>
					<?php } ?>
			</tbody>
			</table>
		</section>
	