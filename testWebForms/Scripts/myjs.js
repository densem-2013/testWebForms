// hook up the watcher
$("#MainContent_SendMailControl1_emailRequired,#MainContent_SendMailControl1_remail").watch({
    // specify CSS styles or attribute names to monitor
    properties: "visibility",

    // callback function when a change is detected
    callback: function (data, i) {
        var propChanged = data.props[i];
        var newValue = data.vals[i];

        var el = this;
        var el$ = $(this);
        let id = el$.attr("id");
        let val = newValue === 'visible' ? 'block' : 'none';
        el$.css({ 'display': val });
        if (id !== "box") {

            if (id === "MainContent_SendMailControl1_emailRequired")
            {
                let valPros = newValue === 'visible' ? 'none' : 'block' ;
                $("#MainContent_SendMailControl1_remail").css({ 'display': valPros });
            } else {

                let valPros = newValue === 'visible' ? 'none' : 'block';
                $("#MainContent_SendMailControl1_emailRequired").css({ 'display': valPros });
                }
        }
        // do what you need based on changes
        // or do your own checks
    }
});

$("#MainContent_SendMailControl1_emailBox,#MainContent_SendMailControl1_textBox1").on('change paste keydown', function () {
    let currentVal = base64EncodeUnicode($(this).val());
    let idval = $(this).attr("id");
    if (idval ==='MainContent_SendMailControl1_emailBox')
    {
        let length = getTextWidth('MainContent_SendMailControl1_emailBox',$(this).val());
        let screenWidth = screen.width;
        //let textWidth = getTextWidth($(this).val(),);
        if (length > screenWidth * 0.05 && length < screenWidth * 0.3) {
            var input = document.getElementById('MainContent_SendMailControl1_emailBox'); // get the input element
            resizeInput.call(input); // immediately call the function
        }

    }
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 30);
    document.cookie = idval + "=" + currentVal + ";expires=" + exdate.toUTCString();
});

function base64EncodeUnicode(str) {
    // First we escape the string using encodeURIComponent to get the UTF-8 encoding of the characters, 
    // then we convert the percent encodings into raw bytes, and finally feed it to btoa() function.
    utf8Bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    });

    return btoa(utf8Bytes);
}

function resizeInput() {
    this.style.width = this.value.length+2 + "ch";
}
function getTextWidth(elemId, text) {
    var font = getStylePropertyValue(elemId, 'font-family');
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}
function getStylePropertyValue(elemId, prop) {
    var elem = document.getElementById(elemId);
    return window.getComputedStyle(elem).getPropertyValue(prop);
}