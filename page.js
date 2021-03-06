function createPage(emps){
    let employeeSection=
    `<!doctype html>
    <html lang="en">
    
    <head>
        <title>Team Page</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
        <style>
            body{
                margin-top:50px;
                /* background-color: green; */
                background-image: url("https://media.gettyimages.com/photos/paper-old-texture-background-picture-id954549046?b=1&k=6&m=954549046&s=612x612&w=0&h=BdbSRywp1dIm0jByRNQpDdSvmoOOFIy06lp7eiUC46k=")
            }
            ul{
                list-style-type: none;
            }
            li{
                border:1px solid grey;
            }
            h1{
                text-align: center;
            }
            .row{
                margin-top:30px;
            }
            .eCol{
                border:1px solid black;
                text-align: center;
                margin-top:15px;
            }
            .manager{
                background-color: cyan;
            }
            .engineer{
                background-color: lightcyan;
            }
            .intern{
                background-color: lightblue;
            }
    
        </style>
    </head>
    
    <body>
        <div class="container">
            <h1>Your Beautiful Employees: </h1>
    
            <div class="row contentRow">`;
emps.forEach(element => {
    let ePanel="";
    switch(element.title){
        case "Manager":
            ePanel = createManagerPanel(element);
            break;
        case "Engineer":
            ePanel=createEngineerPanel(element);
            break;
        case "Intern":
            ePanel = createInternPanel(element);
            break;
    }//switch
    employeeSection+=ePanel;
});//for each employee
employeeSection+=`  <!--End Row-->
</div>
</div>
</body>

</html>`;

return employeeSection;
}

function createEngineerPanel(eng){
return `<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 eCol engineer">
<div class="eHead">
    <h2>${eng.name}</h3>
    <h4>Engineer 💻</h4>
</div>
<ul>
<li>ID: <span>${eng.id}</span></li>
<li>Email: <a href="${eng.email}">${eng.email}</a></li>
<li>Github: <a href="https://www.github.com/${eng.github}">${eng.github}</a></li>
</ul>
</div>
<!-- col end -->`
}//engineerPanel

function createManagerPanel(man){
    return `<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 eCol manager">
    <div class="eHead">
        <h2>${man.name}</h3>
        <h4>Manager ☕</h4>
    </div>
    <ul>
    <li>ID: <span>${man.id}</span></li>
    <li>Email: <a href="${man.email}">${man.email}</a></li>
    <li>Office Number: <span>${man.officeNumber}</span></li>
    </ul>
    </div>
    <!-- col end -->`
}//managerPanel

function createInternPanel(inter){
return `<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 eCol intern">
<div class="eHead">
    <h2>${inter.name}</h3>
    <h4>Intern 📚</h4>
</div>
<ul>
<li>ID: <span>${inter.id}</span></li>
<li>Email: <a href="${inter.email}">${inter.email}</a></li>
<li>School: <span>${inter.school}</span></li>
</ul>
</div>
<!-- col end -->`
}//internPanel

module.exports = {
    createPage: createPage
};