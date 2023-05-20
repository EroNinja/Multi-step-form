<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'post') {
    $first_name = $_POST['First_Name'];
    $last_name = $_POST['Last_Name'];
    $email = $_POST['Email_Address'];
    $phone_number = $_POST['Phone_Number'];
    $date = $_POST['Date'];
    $gender = $_POST['Gender'];
    $username = $_POST['Username'];
    $password = $_POST['Password'];

    $form_data = array(
        'First Name' => $first_name,
        'Last Name' => $last_name,
        'Email Address' => $email,
        'Phone number' => $phone_number,
        'Date' => $date,
        'Gender' => $gender,
        'Username' => $username,
        'Password' => $password
    );

    $json_data = json_encode($form_data);

    $file_path = 'D:/Faisal/WebScipt Workspace/Project/Complete project/data.json';

    $result = file_put_contents($file_path, $json_data);

    if ($result !== false) {
        echo "Form data saved successfully!";
    } else {
        echo "Error: Unable to save form data.";
    }
}
?>
