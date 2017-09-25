// multi line var definition is EcmaScript 6, possible using `

var obj = new Object();
obj.name = "Kenobi";
obj.surname = "Obiwan";

var html = `
    <html>
        <body>
            ${obj.name} - ${obj.surname}
        </body>
    </html>
`;

// before is was shitty

var html2 = "";
html2 += "<html>";
html2 += "<body>";

function launchFunc(p_function) {
    p_function();
}

// with EcmaScript 5
launchFunc(
    function() {
        console.log("toto");
    }
)

// with EcmaScript 6
launchFunc(
    () => { console.log("toto") }
)
