// JavaScript Document
var $ = jQuery.noConflict();

jQuery(document).ready(function(){
	$('.product_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1500,
		dots: false,
		fade: true,
		arrows: true
	});

	$(".menu_icon").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
    $("body").toggleClass("open_popup");
		$(".logo").toggleClass("logo_active");
		$(".project_form_popup").toggleClass("open_popup");
		if($(".menu_icon").hasClass('active')) {
			$(".menu_icon span").text("close");
		}else {
			$(".menu_icon span").text("get in touch");
		}
	});

	$(".start_project").click(function(e){
		e.preventDefault();
		$(".menu_icon").trigger("click");
	});
	$( document ).on( 'keydown', function ( e ) {
	    if ( e.keyCode === 27 ) { // ESC
	    	if($(".menu_icon").hasClass('active')) {
		        $(".menu_icon").removeClass("active");
				$(".logo").removeClass("logo_active");
				$(".project_form_popup").removeClass("open_popup");
				$(".menu_icon span").text("get in touch");
        $("body").removeClass("open_popup");
			}
	    }
	});

	$("#login-form").validate({
          ignore: [],
          rules: {
            companyName:{ required: true},
            "interest[]": { required: true},
            emailAddress:{ required: true,email:true},
          },
          errorClass:'error',
          validClass:'valid',
          errorElement:'div',
          highlight: function (element, errorClass, validClass) { 
            $(element).addClass(errorClass).removeClass(validClass); 
          }, 
          unhighlight: function (element, errorClass, validClass) { 
            $(element).removeClass(errorClass).addClass(validClass);
          },
          messages: {
            "interest[]":"Please Select Field Of Interest",
          },
          errorPlacement: function(error, element) {
          	if($(element).is('input[type="checkbox"]')){
				error.insertAfter($(element).closest(".checkbox_main"));
			}else {
            	error.insertAfter(element);
            }
          },
          submitHandler: function (form) { // for demo
			  	console.log(345354);
            	var form_data = $("#login-form").serialize();
                var request = $.ajax({                        
                            url: "send_form_email.php",
                            type: "POST",
                            data: form_data,
                            dataType: "json",
                      success: function(r) {
                        console.log(r);
                        if (r.type == "success") {
                            $('.successmsg').fadeIn();
                        } else if (r.type == "error") {
                            alert(r.message);
                        }
                    },
                    error: function() {
                        //console.log('error msg');
                    }
                });
            $('.successmsg').fadeIn();
            $('#login-form')[0].reset();
            	return false;
        	}
        });
        
        
        $('.felment').on('blur',function(){
          $("#login-form").validate().element(this);
        });          
       $(".submit-button").click(function(){
          setTimeout(function(){
              $("form input.error").first().focus();
          },50) 
      })
});