<!DOCTYPE html>
<html>
<body>
    <h3>Upload File</h3>

    <?php if(session('success')): ?>
        <p style="color: green"><?php echo e(session('success')); ?></p>
    <?php endif; ?>

    <form action="<?php echo e(route('upload')); ?>" method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <input type="file" name="document" />
        <button type="submit">Upload</button>
    </form>
</body>
</html>
<?php /**PATH /var/www/resources/views/upload_file.blade.php ENDPATH**/ ?>