<?php

    $conn = mysqli_connect("localhost", "root", "", "kwass");

    if(!$conn)
    {
        die ("connection error " . mysqli_connect_error());
    }
?>