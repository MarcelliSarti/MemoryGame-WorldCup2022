<?php
  $sname = "localhost";
  $uname = "root";
  $pwd = "";
  try {
    $conn = new PDO("mysql:host=$sname;dbname=myDB", $uname, $pwd);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
  catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
  }
?>