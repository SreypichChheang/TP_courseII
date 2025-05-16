<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_FILES["document"]) && $_FILES["document"]["error"] === UPLOAD_ERR_OK) {
        $uploadDir = "uploads/";
        $uploadFile = $uploadDir . basename($_FILES["document"]["name"]);
        
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        
        if (move_uploaded_file($_FILES["document"]["tmp_name"], $uploadFile)) {
            echo json_encode([
                "success" => true,
                "message" => "File uploaded successfully",
                "path" => $uploadFile
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Failed to upload file"
            ]);
        }
    } else {
        echo json_encode([
            "success" => false,
            "message" => "No file uploaded or error: " . ($_FILES["document"]["error"] ?? "unknown")
        ]);
    }
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Simple Upload Test</title>
</head>
<body>
    <h1>Simple Upload Test</h1>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" name="document">
        <button type="submit">Upload</button>
    </form>
</body>
</html>
