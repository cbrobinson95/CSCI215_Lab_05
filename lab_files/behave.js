console.clear();

// ---------------------------------------------
var divNode = document.getElementById("fiddle");
// ---------------------------------------------


// ---------------------------------------------
var pNode = document.createElement("p");
var pTextNode = document.createTextNode("CSCI 215: Lab 5 Todo");

pNode.appendChild(pTextNode);
divNode.appendChild(pNode);
// ---------------------------------------------


// ---------------------------------------------
var hrNode = document.createElement("hr");

divNode.appendChild(hrNode);
// ---------------------------------------------


// ---------------------------------------------
var olNode = document.createElement("ol");
var liNode1 = document.createElement("li");
var liNode2 = document.createElement("li");
var liTextNode1 = document.createTextNode("Read Assignment");
var liTextNode2 = document.createTextNode("Code Assignment");

liNode1.appendChild(liTextNode1);
liNode2.appendChild(liTextNode2);
olNode.appendChild(liNode1);
olNode.appendChild(liNode2);
divNode.appendChild(olNode);
// ---------------------------------------------


// ---------------------------------------------
var imgNode = document.createElement("img");
var srcAttr = document.createAttribute("src");

srcAttr.value="http://munsellb.people.cofc.edu/img/prettypicture.jpg";

imgNode.setAttributeNode(srcAttr);
divNode.appendChild(imgNode);
// ---------------------------------------------




