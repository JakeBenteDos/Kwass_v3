<?php 
    include 'connection.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="OoStyles.css">
    <title>Tara ba?</title>
</head>
<body>
    <main>
        <div class="container">
            <video width="300" autoplay loop>
            <source src="img/Yiee.mp4" type="video/mp4">
            </video>
            <div>
                <h1>Yieeh! tara! Set ka sched kung kaylan ka pwede hehe</h1>
                <img id="image" src="https://favim.com/pd/p/orig/2018/07/15/love-soft-memes-heart-Favim.com-6029293.jpg" id="yie" alt="">

                <form action="" method="post">
                    <div class="form">
                        <div class="username">
                            <label for="name">Name: </label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="date">
                            <label for="date">Set Date and Time: </label>
                            <input type="date" name="date" id="date" required><br>
                            <input type="time" name="time">
                        </div>
                        <button type="submit" name="submit" id="submit">Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
        
    </main>
    <?php 
        $admin = "admin";
        if(isset($_POST['submit'])){
            date_default_timezone_set('Asia/Manila');
            $name = $_POST['name'];
            $date = $_POST['date'];
            $time = $_POST['time'];
            if($name == $admin){
                echo "<script>location.href = 'admin/view.php';</script>";
            }else{
                $insert_sql = "INSERT INTO `names`(`Name`,`Date`,`Time`) VALUES ('$name','$date', '$time')";
                $sql = mysqli_query($conn, $insert_sql);
            }
            
        }
    ?>
    
</body>
</html>