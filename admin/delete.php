<?php
    include '../connection.php';

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        echo $id;
        $qry = mysqli_query($conn, "SELECT * FROM names WHERE ID = '$id' ");
        if(mysqli_num_rows($qry)){
            while($items = mysqli_fetch_array($qry)){
                $barcode = $items['ID'];

                $delete_qry = "DELETE FROM names WHERE ID = '$id' ";
                mysqli_query($conn, $delete_qry);

                header('location: view.php');
            }
        }
        
    }
?>
