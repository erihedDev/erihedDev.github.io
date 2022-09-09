$("a").click(function() {
    if ($(this).attr("id") !== undefined) { 
        let recentElement = document.getElementsByClassName("current"); // Tar bort färgen från senaste sidan ikonen
        recentElement = recentElement[0];
        recentElement.classList.remove("current");
        let getElement = document.getElementById(recentElement.id + "-content");
        getElement.classList.add("hide-content");
        
        let getId = $(this).attr("id"); // Hittar nya ikonen man klickat och byter färg
        document.getElementById(getId).classList.add("current");
        getElement = document.getElementById(getId + "-content");
        getElement.classList.remove("hide-content");
    }
});