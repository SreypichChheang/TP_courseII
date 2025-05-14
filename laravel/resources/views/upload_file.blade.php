<!DOCTYPE html>
<html>
<body>
    <h3>Upload File</h3>

    @if(session('success'))
        <p style="color: green">{{ session('success') }}</p>
    @endif

    <form action="{{ route('upload') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="file" name="document" />
        <button type="submit">Upload</button>
    </form>
</body>
</html>
