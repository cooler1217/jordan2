<?php
	//include('../config.php');
  	include('../tool.php');
	//include('../model/god_model.php');
	// include('../view/god_view.php');
  	date_default_timezone_set('PRC');
	function getDataJson(){
	  	if(isset($_GET['sfrom'])){
	  		$jordanGUID = $_GET['jordanGUID'];
	  		$domain = $_GET['domain'];
	  		$protocol = $_GET['protocol'];
			$path = $_GET['path'];
			$location = $protocol.$domain.$path;
	  		$sfrom = $_GET['sfrom'];
	  		//$db_config = initDBConfig();
			//$mysqllink = initConnection($db_config);
	  		//redis 使用
			// require '../Predis/Autoloader.php';
			// Predis\Autoloader::register();
			// $redis = new Predis\Client(array(
			//     'database' => '0',
			//     'host'   => '49.4.129.122',
			//     'port'   => 6379,
			// ));
	        $datestr = date("Y_m_d_H");
	        $tableName = "request_".$datestr;

	        // if($redis->get("tableName") != $tableName){
	        // 	create_request($tableName);
	        // 	$redis->set("tableName",$tableName);
	        // }
	        $ip =  getip();
	        $request_datetime = date('Y-m-d H:i:s',time());
	        writeLog('../logs/'.$tableName.'.log', "$jordanGUID\t$domain\t$ip\t$sfrom\t$location\t$request_datetime\n");
	        //insert_request_entry($jordanGUID,$domain,$location,$sfrom,$request_datetime,$tableName);
			//insert_request_entry($jordanGUID,$domain,$location,$sfrom,$request_datetime,"request");
			// echo "success";
	  	}else{
	  		// echo "failure";
	  	}
  	}

  	function getip() {
        $unknown = 'unknown';
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && $_SERVER['HTTP_X_FORWARDED_FOR'] && strcasecmp($_SERVER['HTTP_X_FORWARDED_FOR'], $unknown)) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        elseif(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], $unknown)) {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
 
        if (false !== strpos($ip, ',')){ $ip = reset(explode(',', $ip)); }
        return $ip;
    } 
	getDataJson();

?>