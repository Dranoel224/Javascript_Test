let j, k, l, m, input, output, doc = document;

function initUI() { //initializing the User interface
    j = doc.getElementById('pName').value;
    k = parseFloat(doc.getElementById('pAge').value);
    l = doc.getElementById('pDisease').value;
    
    
    var newoutput = doc.getElementById('displayPatients');
    row = newoutput.insertRow(-0.8);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(0);
    cell3 = row.insertCell(0);
    
    //display of data
    cell3.innerHTML = j;
    cell2.innerHTML = k;
    cell1.innerHTML = l;

    /*if(cell2<=70){
        cell1.innerHTML="<font color=RED></font>";
    }else{
        cell1.innerHTML="<font color=red></font>";
    }*/
}