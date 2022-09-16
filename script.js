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

const langArray = [
    ["python", "python is a high-level programming language that is easy to learn and use. It is used for web development, software development, mathematics, system scripting and more."],
    ["javascript", "javascript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."],
    ["html", "html is the standard markup language for creating web pages and web applications. With Cascading Style Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web."],
    ["css", "css is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."],
    ["lua", "lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications."],
    ["selenium", "selenium is a portable framework for testing web applications. Selenium provides a playback tool for authoring functional tests without the need to learn a test scripting language (Selenium IDE)."],
    ["mysql", "mysql is an open-source relational database management system. Its name is a combination of \"My\", the name of co-founder Michael Widenius's daughter, and \"SQL\", the abbreviation for Structured Query Language."],
    ["github", "github is a web-based hosting service for version control using git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features."],
]

$('.experience-icons i').click(function() {
    let currentId = this.id;
    currentRow = document.getElementById("current-console-row").innerHTML;
    clickedIconName = currentId.split("-").pop()
    document.getElementById("current-console-row").innerHTML = currentRow + " python print_" + clickedIconName + ".py";

    childElements = $("#console").children();
    console.log(childElements.length);
    if (childElements.length >= 5) {
        childElements[0].remove();
        childElements[1].remove();
    }

    for (let i = 0; i < langArray.length; i++) {
        if (langArray[i][0] == clickedIconName) {
            $("#console").append("<p>" + langArray[i][1] + "</p>");
        }
    }

    $('#current-console-row').removeAttr('id');
    cElement = $("#console").append("<p>PS C:\\Users\\erihedDev\\Documents\\SomeScript></p>");
    cElement.children().last()[0].setAttribute("id", "current-console-row");
    console.log(cElement.children().last()[0]);
});