function run(){
    let htmlCode=document.getElementById("html-code").value;
        let CssCode=document.getElementById("css-code").value;
        let JsCode=document.getElementById("js-code").value;
        let output=document.getElementById("output");


        output.contentDocument.body.innerHTML = htmlCode+"<style>" +CssCode +"</style>";
        output.contentWindow.eval(JsCode);
   }
