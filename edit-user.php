<?php 
header('Access-Control-Allow-Origin:http://localhost:8000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Method:POST');
$users = [
	['name'=>'tom','role'=>'admin'],
	['name'=>'jerry','role'=>'user']
];
$data=json_decode(file_get_contents('php://input'),true);
$action=$_GET['action'];//update或add
if($action=='add'){
	try{
		array_push($users,$data);
		echo json_encode(['success'=>true,'data'=>$users]);
	}catch(Exception $e){
		echo json_encode(['success'=>false]);
	}
}else{
	try{
		for ($i=0; $i < count($users); $i++) { 
			if ($users[$i]['name']==$data['name']) {
				//更新
				$users[$i]=$data;
				exit(json_encode(['success'=>true,'data'=>$users]));
			}
		}
		echo json_encode(['success'=>false]);
	}catch(Exception $e){
		echo json_encode(['success'=>false]);
	}
}

