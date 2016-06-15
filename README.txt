<?php
	function hello_world(){
		echo "Hello world <br>";
	}

	hello_world();
	hello_world();
	hello_world();
	//en la otra hay una entrada!
	function add($num1, $num2){
		echo $num1 + $num2;
	}

	add(10, 20);

	function add2($num1, $num2){
		$result =  $num1 + $num2;
		return $result;
	}

	echo "<br/>";
	
	$result2 = add2(1,1);
	$result3 = add2(1,3);
	echo $result2 * $result3;
?>
