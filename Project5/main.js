while (answer !== "yes" || answer !== "yeah")
{ 
    var answer = prompt("Are we there yet?");
    if (answer == "yes" || answer == "yeah")
{
    alert("Yay, we finally made it!");
    exit();
}
}
