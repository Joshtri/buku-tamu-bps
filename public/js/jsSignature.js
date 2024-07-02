$(document).ready(function() {
    // Inisialisasi jSignature pada elemen dengan id "signature"
    $('#signature').jSignature({
        'decor-color': 'transparent',
        'background-color': 'transparent',
        'width': '100%',
        'height': '200px'
    });

    // Fungsi untuk menyimpan tanda tangan dalam format base64 ke input hidden
    $('#signature-form').on('submit', function(event) {
        // Mendapatkan tanda tangan dari jSignature dalam format SVG
        const $sigdiv = $("#signature");
        const datapair = $sigdiv.jSignature("getData", "svg");
        const svgData = datapair[1];

        // Mengonversi SVG ke base64
        const base64Data = btoa(unescape(encodeURIComponent(svgData)));

        // Menyimpan data base64 ke input hidden dengan id "signature-field"
        $('#signature-field').val(base64Data);
    });
});

// Fungsi untuk mereset tanda tangan
function resetSignature() {
    $("#signature").jSignature("reset");
}
