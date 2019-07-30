// hook up the watcher
$("#MainContent_SendMailControl1_emailRequired,#MainContent_SendMailControl1_remail,#box").watch({
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
