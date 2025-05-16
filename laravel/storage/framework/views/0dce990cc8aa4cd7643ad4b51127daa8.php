<html>

<body>
    <h3>Upload File</h3>
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <input type="file" name="document" />
        <button type="submit">Upload</button>
    </form>
</body>

</html><?php /**PATH /var/www/resources/views/upload_file.blade.php ENDPATH**/ ?>