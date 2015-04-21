<div class=" row" style="padding:1% 0;">
	<div class="col-md-12">
	<div class=" pull-right col-md-1 createbtn" ><a class="btn btn-primary" href="<?php echo site_url('site/creatediscountcoupon'); ?>"><i class="icon-plus"></i>Create </a></div>
	</div>
	
</div>

<div class="row">
    <div class="col-md-6">
        <div class="well">
        <b>Most Popular Of Month</b>
        </div>
        <div class="row state-overview"  >
            <div class="col-lg-12 col-sm-12">
                <section class="panel">
                    <div class="symbol terques">
                        <i class="icon-user"></i>
                    </div>
<!--                    <a href="<?php echo site_url('site/dashboardzonewise'); ?>">-->
                    <div class="value">
                       <p>Most Popular Of Month </p>
                        <h1><?php echo $monthpopularcouponcode->couponcode;?></h1>

                    </div>
<!--                    </a>-->
                </section>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="well">
        <b>Most Popular Of Year</b>
        </div>
        <div class="row state-overview"  >
            <div class="col-lg-12 col-sm-12">
                <section class="panel">
                    <div class="symbol terques">
                        <i class="icon-user"></i>
                    </div>
<!--                    <a href="<?php echo site_url('site/dashboardzonewise'); ?>">-->
                    <div class="value">
                       <p>Most Popular Of Year </p>
                        <h1><?php echo $yearpopularcouponcode->couponcode;?></h1>

                    </div>
<!--                    </a>-->
                </section>
            </div>
        </div>
    </div>
</div>
<div class="row">
    
	<div class="col-lg-12">
		<section class="panel">
			<header class="panel-heading">
                Discount Coupon Details
            </header>
			<table class="table table-striped table-hover border-top " id="sample_1" cellpadding="0" cellspacing="0" >
			<thead>
				<tr>
					<!--<th>Id</th>-->
					<th>Coupon Type</th>
					<th>Coupon Code</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Category</th>
					<th> Actions </th>
				</tr>
			</thead>
			<tbody>
			   <?php foreach($table as $row) { ?>
					<tr>
						<!--<td><?php echo $row->id; ?></td>-->
						<td><?php echo $row->coupontype; ?></td>
						<td><?php echo $row->couponcode; ?></td>
						<td><?php echo $row->startdate; ?></td>
						<td><?php echo $row->enddate; ?></td>
						<td><?php echo $row->category; ?></td>
						<td> <a class="btn btn-primary btn-xs" href="<?php echo site_url('site/editdiscountcoupon?id=').$row->id;?>"><i class="icon-pencil"></i></a>
                                      <a class="btn btn-danger btn-xs" href="<?php echo site_url('site/deletediscountcoupon?id=').$row->id; ?>"><i class="icon-trash "></i></a>
									 
					  </td>
					</tr>
					<?php } ?>
			</tbody>
			</table>
		</section>
	</div>
  </div>
