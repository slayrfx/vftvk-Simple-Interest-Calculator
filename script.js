function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{
    var principal = Number(document.getElementById("principal").value);
	if (principal==""){
        alert("Enter a positive number.");
        //principal.focus();
		document.getElementById("principal").focus();
        return false;
    }
    if (principal< "0" ){
        alert("Enter a positive number.");
        //principal.focus();
		document.getElementById("principal").focus();
        return false;
    }
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    var year = new Date().getFullYear()+parseInt(years);
    var interest = Number((principal*years*rate)/100);
    var amount = Number(principal+interest);
    document.getElementById("result").innerHTML="<br><br>If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>"
    
        
}
