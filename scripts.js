$(document).ready(function() {
    $(window).scroll(function() {
        var top_of_architect = $("#architect").offset().top;
        var bottom_of_architect = $("#architect").offset().top + $("#architect").outerHeight();

        var top_of_ptm = $("#ptm").offset().top;
        var bottom_of_ptm = $("#ptm").offset().top + $("#architect").outerHeight();

        var top_of_byte = $("#bytecast").offset().top;
        var bottom_of_byte = $("#bytecast").offset().top + $("#architect").outerHeight();

        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
    
        if ((bottom_of_screen > top_of_architect) && (top_of_screen < bottom_of_architect)){
            $('#project-meta').html(`
                <h3>Architect</h3>
                <p>UX/UI research and design, WordPress development</p>
            `)
        } 
        else if ((bottom_of_screen > top_of_ptm) && (top_of_screen < bottom_of_ptm)){
            $('#project-meta').html(`
            <h3>Pass the Mic</h3>
            <p>UX/UI design and prototyping</p>
        `)
        }
        else if ((bottom_of_screen > top_of_byte) && (top_of_screen < bottom_of_byte)){
            $('#project-meta').html(`
            <h3>Bytecast</h3>
            <p>UX/UI design and prototyping</p>
        `)
        }    
        
    });
})

