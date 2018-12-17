<?php
	// print_r($_POST);die;
	if (isset($_REQUEST['companyName']) && isset($_REQUEST['emailAddress']) && isset($_REQUEST['companySite'])  && isset($_REQUEST['projectDtl']) && isset($_REQUEST['budget'])) {

	
	//Edit admin mail and subject
	 $admin_email = "ian@sparky.us"; // < Change this to receive enquiries
	 $subject = "Sparky - Start A Project";
	 $email_from = "ian@sparky.us"; // < From email, needs to be your server email, such as email@yourdomain.com

	 //Sanitize inputs
	 $companyName = filter_var($_REQUEST['companyName'], FILTER_SANITIZE_STRING);
	 $emailAddress = filter_var($_REQUEST['emailAddress'], FILTER_VALIDATE_EMAIL);
	 $companySite = filter_var($_REQUEST['companySite'], FILTER_SANITIZE_STRING);
	 $budget = filter_var($_REQUEST['budget'], FILTER_SANITIZE_STRING);
	 $interest = $_REQUEST['interest'];
	 if(!empty($interest))
	 	$interest = implode(", ",$interest);
	 $projectDtl = filter_var($_REQUEST['projectDtl'], FILTER_SANITIZE_STRING);
	
	
	 $email_message .= '<html><head><title>Sparky</title></head><body>
		                <table>'; 
	 $email_message = "<tr><td><b>".'Company name : '."</b><td>".$companyName.'</td></tr>';
	 $email_message .= "<tr><td><b>".'E-Mail Address : '."</b><td>".$emailAddress.'</td></tr>';
	 if(!empty($companySite)){
	 $email_message .= "<tr><td><b>".'Company Site : '."</b><td>".$companySite.'</td></tr>';	
	 }
	 if(!empty($budget)){
	 $email_message .= "<tr><td><b>".'Budget : '."</b><td>".$budget.'</td></tr>';
	 }
	 $email_message .= "<tr><td><b>".'Interest : '."</b><td>".$interest.'</td></tr>';
	 if(!empty($projectDtl)){
	 $email_message .= "<tr><td><b>".'Project Details : '."</b><td>".$projectDtl.'</td></tr>';
	 }	 
	 $email_message .= '</table></body></html>';
	 $email_message .= '<br/>Thank you';


	 $headers =  "From: " . $email_from . "\r\n";
	 $headers .= "Reply-To: ". $email_from . "\r\n";
	 $headers .= "MIME-Version: 1.0\r\n";
	 $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
         

	if(mail($admin_email,$subject,$email_message,$headers))
	{
	        $msg = array('type'=>'success','message'=>'Message has been sent successfully');
	}
	else
	{
	    $msg = array('type'=>'error','message'=>'Some error occoured please try again later.');
	}

	echo json_encode($msg);
	exit;

} 
?>