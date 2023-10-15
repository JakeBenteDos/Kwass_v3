<?php 
    include '../connection.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $select_sql = "SELECT * FROM names";
        $sql1 = mysqli_query($conn, $select_sql);
        if (mysqli_num_rows($sql1)) {
            while($myDate = mysqli_fetch_array($sql1)){
                
                ?>
                    <table border="1px">
                        <thead>
                            <tr>
                                <th>Names</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><?php echo $myDate['Name']; ?></td>
                                <td><?php echo $myDate['Date']; ?></td>
                                <td><?php echo $myDate['Time']; ?></td>
                                <td>
                                    <a href="../admin/delete.php?id=<?php echo $myDate['ID']?>">REMOVE</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                <?php
            }
        }
    ?>
    <a href="../Oo.php">Back</a>
</body>
</html>