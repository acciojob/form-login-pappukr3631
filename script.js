function getFormvalue() {
    //Write your code here
	let d = document.getElementsByTagName("input");
	let fname = d[0].value;
	let lname = d[1].value;

	alert(fname + " " + lname);
}
