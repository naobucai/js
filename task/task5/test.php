 	<?php
    	$ch = curl_init();
    	$url = 'https://api.heweather.com/x3/weather?cityid=CN101010100&key=4a6749034d2c40e3ad40918a23d44676';
    	// 执行HTTP请求
    	curl_setopt($ch , CURLOPT_URL , $url);
    	curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , false);
    	$res = curl_exec($ch);
    	echo $res;
    ?>
