$('#myicon').click(()=> {
    if ($('#myicon').hasClass('fa-moon')) {
     $('#myicon').addClass('fa-sun')
     $('#myicon').removeClass('fa-moon')
    } else {
     $('#myicon').addClass('fa-moon')
     $('#myicon').removeClass('fa-sun')
    }
    $('.fa-solid').css(
     {
     'backgroundColor':'yellow',
     'color':'white',
     'fontSize':'150px'
     }
     )
 })