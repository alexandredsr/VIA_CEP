
var registeredDocuments = [];
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;


    
    var email = document.getElementById('email').value;
    
   
    console.log('Submitted: Name - ' + name + ', Email - ' + email);
    

    if (registeredDocuments.includes(doc)) {
        alert('Este documento já foi cadastrado. Apenas um cadastro por documento é permitido.');
        return;
    }

    registeredDocuments.push(doc);

    document.getElementById('myForm').reset();
});
  