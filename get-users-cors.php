<?php 
//添加一个cors的响应头
header('Access-Control-Allow-Origin:http://localhost:8000');
$users = [
	['name'=>'tom','role'=>'admin'],
	['name'=>'jerry','role'=>'user']
];
echo json_encode($users);




