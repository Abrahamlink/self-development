$('#id_title').on('input', function() {
    value = $('#id_title').val();
    if (value.length >= 100) {
        $('#id_title').val(value.substring(0, 100))
    }
    if (value.indexOf(' ') != -1) {
        if (value.toUpperCase() != value & value.length > 1) {
            $('#id_title').val(value[0].toUpperCase() + value.substring(1));
        }
    }
})