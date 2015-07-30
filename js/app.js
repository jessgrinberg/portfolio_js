// alert("hello");

$(document).ready(function(){
$('#menuToggle').hide()	

	$('#navTop').click(function(){
		$('#menuToggle').slideToggle()
	}) 

})


$(document).ready(function(){
$('#itemToggle').hide()	

	$('#navDetail').click(function(){
		$('#itemToggle').slideToggle()
	}) 

})



// <span class="glyphicon glyphicon-plus" id="navDetail" data-toggle="modal" data-target="#myModal" ></span>
// <div class="modal fade" id="myModal" role="dialog">
//     <div class="modal-dialog modal-lg">
//       <div class="modal-content">
//         <div class="modal-header">
//           <button type="button" class="close" data-dismiss="modal">&times;</button>
//           <h4 class="modal-title">Tic-Tac-Toe game built with Angular.js and Firebase </h4>
//         </div>
//         <div class="modal-body">
//           <li>Firebase Application</li>
//           <li>CSS animation</li>
//           <li>Responsive , Mobile Optimized</li>
//          <li> Real-time gameplay on multiple devices</li>
//         </div>
//       </div>
//     </div>
//   </div>


	 // <span class="glyphicon glyphicon-plus" id="navDetail"></span> 
 	// 			<div class ="row" id="itemToggle">
  //           <div class="row menuItem">Angular JS</div>
  //           	<div class="row menuItem">Css</div>
		// 		<div class="row menuItem">Firebase</div>
  //    			</div> 