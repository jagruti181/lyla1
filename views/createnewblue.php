<div class="row">
	<div class="col-lg-12">
	    <section class="panel">
		    <header class="panel-heading">
				 Banner1 Details
			</header>
			<div class="panel-body">
				<form class="form-horizontal row-fluid" method="post" action="<?php echo site_url('site/createnewbluesubmit');?>">
				<div class=" form-group">
					  <label class="col-sm-2 control-label">Status</label>
					  <div class="col-sm-4">
						<?php
							echo form_dropdown('product',$status,set_value('product'),'class="chzn-select form-control" 	data-placeholder="Choose a Accesslevel..."');
						?>
					  </div>
					</div>	
			<div class="form-group">
<!--						<label class="col-sm-2 control-label">&nbsp;</label>-->
						<div class="col-sm-4">	
							<button type="submit" class="btn btn-info">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</section>
    </div>
</div>
<script type="text/javascript">
adroll_adv_id = "G6LALHLSQND65BWFJHGK64";
adroll_pix_id = "66MZJPUDNNFL3LTOO5ORSG";
(function () {
var oldonload = window.onload;
window.onload = function(){
   __adroll_loaded=true;
   var scr = document.createElement("script");
   var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
   scr.setAttribute('async', 'true');
   scr.type = "text/javascript";
   scr.src = host + "/j/roundtrip.js";
   ((document.getElementsByTagName('head') || [null])[0] ||
    document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
   if(oldonload){oldonload()}};
}());
</script>
