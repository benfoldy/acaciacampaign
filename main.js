$(document).ready(function() {
	$("#card").flip({
  	axis: 'y',
  	// trigger: 'click'
  	trigger: 'hover'
});
	$("#card2").flip({
  	axis: 'y',
  	// trigger: 'click'
  	trigger: 'hover'
});
	$("#card3").flip({
  	axis: 'y',
  	// trigger: 'click'
  	trigger: 'hover'
});

	$("#card4").flip({
  	axis: 'y',
  	// trigger: 'click'
  	trigger: 'hover'
});



function tabulate() {
    var donations = $('td.donation:visible')
    var total = 0

    donations.each(function() {
      let num = this.innerHTML.replace('$','').replace(',', '')
      total += parseInt(num)
    })

  

$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}

  
$("span#contr-num").html(`$${total}`).digits();
  }

  tabulate()





  $("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#content tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    tabulate()
  });

});