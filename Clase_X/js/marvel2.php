<?php
  //echo json_encode($_POST);
  $conn = NULL;
  try{
    $con = new PDO("mysql:host=localhost; dbname=marvel; charset=utf8", 'root', '');
    if(isset($_POST['Name']) && isset($_POST['Alignment']) && isset($_POST['Gender']) && isset($_POST['Hometown']) && isset($_POST['Fighting_Skills'])){
        $name = $_POST['Name'];
        $align = $_POST['Alignment'];
        $gender = $_POST['Gender'];
        $home = $_POST['Hometown'];
        $figth = $_POST['Fighting_Skills'];
        $sql = "INSERT INTO characters (Name, Alignment, Gender, Hometown, Fighting_Skills) VALUES ('$name', '$align', '$gender', '$home', '$figth')";
        $stm=$con->prepare($sql);
        $stm->execute();
    }
  }catch (PDOException $e){
    echo "Error ".$e->getMessage();
  }
?>
