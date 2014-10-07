	    <section class="panel">
		    <header class="panel-heading">
				 Product Details
			</header>
			<div class="panel-body">
				 <form class="form-horizontal row-fluid" method="post" enctype="multipart/form-data" action="<?php echo site_url('site/uploadproductimagesubmit?id=').$before['product']->id;?>">
					
					  <div class="form-group">
							<label class="col-sm-2 control-label">Image Upload</label>
							<div class="col-sm-4">
				                <input type="file" class="spa1n6 fileinput" id="search-input" name="image" class="imagename" >
							</div>
						</div>
					  
					  <div class="span3"> <button class="btn btn-primary imagesubmit">Submit</button>
							<a href="<?php echo site_url('site/viewproduct'); ?>" type="submit" class="btn btn-info">Cancel</a></div>
				 </form>
			
             <div class="hidden jsontable"><?php echo json_encode($table);?></div>
             
             
            <script>
                $(document).ready(function() {
                    var jsontable=JSON.parse($(".jsontable").text());
                    function createtable(data)
                    {
                        var table=$(".tablecontent");
                        $(table).html("");
                        for(var i=0;i<data.length;i++)
                        {
                            $(table).append("<tr><td style='display:none;' class='rowid'>"+data[i].id+"</td><td><img src='http://zibacollection.co.uk/lyla/uploads/"+data[i].productimage+"' style='height:100px;width:100px;'></td><td>Image is default</td><td><a style='' class='btn btn-primary' href2='http://localhost:10080/admin/index.php/site/defaultimage?imageid="+data[i].id+" &amp;&amp; id=10'>Default</a></td><td><input type='text' id='normal-field' class='order3 form-control' value='"+data[i].order+"' class='form-control' name='ordernumber'><td style='width:30px;'></td><td class='ms'><div class='btn-group'><a href2='http://localhost:10080/admin/index.php/site/deleteimage?imageid="+data[i].id+" &amp;&amp; id=10' class='button red deleteimage btn btn-danger btn-xs' rel='tooltip'><i class='icon-trash'></i></a> </div></td></tr>");
                        }
                    };
                    
                    createtable(jsontable);
                });
                
                
            </script>
              
              
                <table class="table table-striped table-hover" id="" style="width:100%;margin-bottom:0; ">
                    <thead>
                        <tr>
                            <th class="to_hide_phone  no_sort">Name</th>
                            <th>Status</th>
                            <th>Make it Default?</th>
                            <th>Order Number</th>
                            <th class="ms no_sort "> Actions </th>
                        </tr>
                    </thead>
                    <tbody class="tablecontent">
                        
                    </tbody>
              </table>

				  <!--<table id="datatable_example" class="table table-striped table-hover" id="sample_1" style="width:100%;margin-bottom:0; ">
					<thead>
					  <tr>
						  <th class="to_hide_phone  no_sort">Name</th>
						  <th>Status</th>
						  <th>Make it Default?</th>
						  <th>Order Number</th>
						 <th class="ms no_sort "> Actions </th>
					  </tr>
					</thead>
					<tbody class="tablebody">
					<tr>
					 <?php foreach($table as $row) {  ?>
						<td style="display:none;" class="rowid"><?php echo $row->id;?></td>          
						<td ><img src="<?php echo base_url("uploads");?><?php echo "/".$row->productimage;?>" style="height:100px;width:100px;" /></td>
						<td><?php if($row->is_default=="1") { echo "Image is default"; } else { echo "";} ?></td>
						<td><a style="" href="<?php echo site_url('site/defaultimage?imageid='.$row->id.' && id='.$before['product']->id);?>">Default</a></td>
						<td style="width:30px;"><?php if($row->is_default=="1") { echo ''; } else { echo "<input type='text' id='normal-field' class='order3' value='".$row->order."' class='form-control' name='ordernumber'>";} ?></td>
						<td class="ms"><div class="btn-group"><a href="<?php echo site_url('site/deleteimage?imageid='.$row->id.' && id='.$before['product']->id );?>" class="button red deleteimage btn btn-danger btn-xs" rel="tooltip" ><i class="icon-trash"></i></a> </div></td>
						</tr>
					   <?php } ?>
						</tbody>
				</table>-->

			</div>
		</section>
    
 <script>
	$(document).ready(function(e) {
		$('.order3').keyup(function() {
			var form_data={
				order: $(this).val(),
				id: parseInt($(this).parents('tr').children('.rowid').text()),
				product:"<?php echo $_REQUEST['id']; ?>"
			};
			console.log(form_data);
			$.post("<?php echo site_url("site/changeorder"); ?>", form_data);
		});
	});
	</script>