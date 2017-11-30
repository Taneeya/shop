<?php 
$callback=isset($_GET['jsonp_callback'])?$_GET['jsonp_callback']:'';

$users = [
	['name'=>'tom','role'=>'admin'],
	['name'=>'jerry','role'=>'user']
];
$result=json_encode($users);

if($callback!=''){
    echo $callback."({$result})";
}else{
	echo json_encode($users);
}


// echo "myjsonpCallback({$result})";


