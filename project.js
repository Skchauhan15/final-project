
var url1=`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders`;
var url2=`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products`;
var url3=`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users`;

var loginstatus=false;

if(loginstatus==false){
    displayloginpage();
}

function displayloginpage(){
    console.log("form loginpage");
    document.getElementById("loginmain").className="loginmain"
    document.getElementById("orderpage").className+=" hidden"
    document.getElementById("productpage").className+=" hidden"  
    document.getElementById("userpage").className+=" hidden"
    var loginbtn=document.getElementById("loginbtn");
    loginbtn.addEventListener("click",function(){
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;
        if(username==password &&username!=undefined){
            alert("loginsucessfull")
            var setlogged=true;
            localStorage.setItem(`status`, JSON.stringify(setlogged));
            displayOrderpage();
        }
        else{
            alert("plz enter the valid crediential")
        }
    });
}


function createlogoutbtn(){
    var logoutbtn=document.createElement('a');
    logoutbtn.className="a";
    logoutbtn.id="logout"
    logoutbtn.innerText="Logout";
    document.getElementById("header").appendChild(logoutbtn);
    logout= document.getElementById('logout');
    logout.addEventListener("click",fun=()=>{
      localStorage.clear()
      displayloginpage();
      document.getElementById("username").value="";
     document.getElementById("password").value="";
      })
}

function checkstatus (){
var logstatus= localStorage.getItem("status");
   var loginstatusrecieved=JSON.parse(logstatus);
   console.log(loginstatusrecieved,typeof(loginstatusrecieved))
   return loginstatusrecieved;
}
var producthtml=document.getElementById("product.html")
    producthtml.addEventListener('click',function(){
        console.log("product page clicked")
        if(checkstatus()!=null){
        displayproductpage();
        }
    })
    var usershtml=document.getElementById("users.html");
    usershtml.addEventListener("click",function(){
        console.log("user page clicked")
        if(checkstatus()!=null){
        displayuserpage()
        }
    })
    var orderhtml=document.getElementById("order.html");
    orderhtml.addEventListener("click",function(){
        console.log("orderpage clicked")
        if(checkstatus()!=null){
        displayOrderpage()
        }
    })

function displayOrderpage(){
        console.log("from orderpage");
    document.getElementById("loginmain").className+=" hidden"  
    document.getElementById("orderpage").className="orderpage"
    document.getElementById("userpage").className+=" hidden"
    document.getElementById("productpage").className+=" hidden"
    createlogoutbtn();
    
    $.get(url1, (response) => {
    let tableData = document.getElementById("table-data");
    let table = $("<table>");
    let tbody = $("<tbody>");
    for (let i = 0; i < response.length; i++) {
      let table_row = $("<tr>").attr("class", "data-row");
      let td_1 = $("<td>").attr("class", "column1").html(response[i].id);
      let td_2 = $("<td>").attr("class", "column2").html(response[i].customerName);
      let td_3 = $("<td>").attr("class", "column3").html(response[i].orderDate+"<br>"+response[i].orderTime);
      let td_4 = $("<td>").attr("class", "column4").html(response[i].amount);
      let td_5 = $("<td>").attr("class", "column5").html(response[i].orderStatus);
      table_row.append(td_1);
      table_row.append(td_2);
      table_row.append(td_3);
      table_row.append(td_4);
      table_row.append(td_5);
      tbody.append(table_row);
    }
    table.append(tbody);
    table.attr("id", "myTable");
    tableData.append(table[0]);

    
    function displayVals(){
    
        var newcheck = $('#new:checked').val();
        var packed=$('#packed:checked').val();  
        var intansit=$('#intansit:checked').val();
        var deliverd=$('#delivered:checked').val();
        if(newcheck||packed||intansit||deliverd){
            let mytable = document.getElementById("myTable");
            let tr = mytable.getElementsByTagName("tr");
             for (i = 0; i < tr.length; i++) 
             if (true){
                 textValue = tr[i].textContent || tr[i].innerText;
                 if (textValue.indexOf(newcheck) > -1) {
                   tr[i].style.display = "";
                 } 
                 else if (textValue.indexOf(packed) > -1) {
                    tr[i].style.display = "";
                  } 
                  else if (textValue.indexOf(intansit) > -1) {
                    tr[i].style.display = "";
                  } 
                  else if (textValue.indexOf(deliverd) > -1) {
                    tr[i].style.display = "";
                  } 
                 else {
                   tr[i].style.display = "none";
                 }
               }
         }
        else{
            let mytable = document.getElementById("myTable");
            let tr = mytable.getElementsByTagName("tr");
             for (i = 0; i < tr.length; i++) {
                tr[i].style.display = "";
             } 
        }
        
     let mytable = document.getElementById("myTable");
     let tr = mytable.getElementsByTagName("tr");
     var countproduct=0;
     for(i=0;i<tr.length;i++){
        if(tr[i].style.display=="none"){
            countproduct++;
        }
     } 
      document.getElementById("ordercount").innerHTML=` ${(tr.length-1)-countproduct}`;
        }     
        var qqqq = window.setInterval( function(){
                displayVals()
            },
            10
        );
});
}



function displayproductpage(){
    
    console.log("from productpage")
    document.getElementById("loginmain").className+=" hidden"
    document.getElementById("orderpage").className+=" hidden"
    document.getElementById("userpage").className+=" hidden"
    document.getElementById("productpage").className="orderpage"
    $.get(url2, (response1) => {
    let tableData = document.getElementById("table-data2");
    let table = $("<table>");
    let tbody = $("<tbody>");
    for (let i = 0; i < response1.length; i++) {
      let table_row = $("<tr>").attr("class", "data-row");
      let td_1 = $("<td>").attr("class", "column1").html(response1[i].id);
      let td_2 = $("<td>").attr("class", "column2").html(response1[i].medicineName);
      let td_3 = $("<td>").attr("class", "column3").html(response1[i].medicineBrand);
      let td_4 = $("<td>").attr("class", "column4").html(response1[i].expiryDate);
      let td_5 = $("<td>").attr("class", "column5").html(response1[i].unitPrice);
      let td_6 = $("<td>").attr("class", "column5").html(response1[i].stock);
      table_row.append(td_1);
      table_row.append(td_2);
      table_row.append(td_3);
      table_row.append(td_4);
      table_row.append(td_5);
      table_row.append(td_6);
      tbody.append(table_row);
    }
    table.append(tbody);
    table.attr("id", "myTable1");
    tableData.append(table[0]);
   
function displayVal1(){
    var expire = $('#expire:checked').val();
    var lowstock=$('#lowstock:checked').val();  
    if(lowstock){
        let mytable = document.getElementById("myTable1");
        let tr = mytable.getElementsByTagName("tr");
         for (i = 0; i < tr.length; i++) 
         if (tr[i].lastChild.textContent>=100){
            tr[i].style.display = ""; 
           }
           else {
               tr[i].style.display = "none";
             }
     }
     else if(expire){
        let mytable = document.getElementById("myTable1");
        let tr = mytable.getElementsByTagName("tr");
         for (i = 0; i < tr.length; i++) 
         if (new Date(tr[i].childNodes[3].textContent)>new Date()){
            tr[i].style.display = ""; 
           }
           else {
               tr[i].style.display = "none";
             }
     }
     else {
        let mytable = document.getElementById("myTable1");
        let tr = mytable.getElementsByTagName("tr");
         for (i = 0; i < tr.length; i++) {
            tr[i].style.display = "";
         }
     }
     let mytable = document.getElementById("myTable1");
     let tr = mytable.getElementsByTagName("tr");
     var countproduct=0;
     for(i=0;i<tr.length;i++){
        if(tr[i].style.display=="none"){
            countproduct++;
        }
     } 
      document.getElementById("productcount").innerHTML=` ${(tr.length-1)-countproduct}`;
    }
    
    var pppp = window.setInterval( function(){
            displayVal1()
        },
        10
    );     
    
});
}

function displayuserpage(){
    
    console.log("from userpage")
    document.getElementById("loginmain").className+=" hidden"
    document.getElementById("orderpage").className+=" hidden"
    document.getElementById("productpage").className+=" hidden"
    document.getElementById("userpage").className="orderpage"
    $.get(url3, (response2) => {
        let tableData = document.getElementById("table-data3");
        let table = $("<table>");
        let tbody = $("<tbody>");
        for (let i = 0; i < response2.length; i++) {
          let table_row = $("<tr>").attr("class", "data-row");
          let td_1 = $("<td>").attr("class", "c1").html(response2[i].id);
          let td_2 = $("<td>").attr("class", "c2").html(`<img src=${response2[i].profilePic}"></img>`);
          let td_3 = $("<td>").attr("class", "c3").html(response2[i].fullName);
          let td_4 = $("<td>").attr("class", "c4").html(response2[i].dob);
          let td_5 = $("<td>").attr("class", "c5").html(response2[i].gender);
          let td_6 = $("<td>").attr("class", "c6").html(response2[i].currentCity+","+response2[i].currentCountry);
          table_row.append(td_1);
          table_row.append(td_2);
          table_row.append(td_3);
          table_row.append(td_4);
          table_row.append(td_5);
          table_row.append(td_6);
          tbody.append(table_row);
        }
        table.append(tbody);
        table.attr("id", "myTable4");
        tableData.append(table[0]);
    });
    $(document).keypress(function(event){
	
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            var fname=$("#searchbox").val();
            if (fname!=null &&fname.length>=2){
           $.get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${fname}`,(response3)=>{
              console.log(response3);
               let fulltable=document.getElementById("table-data3");
               fulltable.style.display="none"
               let tableData = document.getElementById("table-data4");
               let table = $("<table>");
               let tbody = $("<tbody>");
               for (let i = 0; i < response3.length; i++) {
                   let table_row = $("<tr>").attr("class", "data-row");
                   let td_1 = $("<td>").attr("class", "c1").html(response3[i].id);
                   let td_2 = $("<td>").attr("class", "c2").html(`<img src=${response3[i].profilePic}"></img>`);
                   let td_3 = $("<td>").attr("class", "c3").html(response3[i].fullName);
                   let td_4 = $("<td>").attr("class", "c4").html(response3[i].dob);
                   let td_5 = $("<td>").attr("class", "c5").html(response3[i].gender);
                   let td_6 = $("<td>").attr("class", "c6").html(response3[i].currentCity+","+response3[i].currentCountry);
                   table_row.append(td_1);
                   table_row.append(td_2);
                   table_row.append(td_3);
                   table_row.append(td_4);
                   table_row.append(td_5);
                   table_row.append(td_6);
                   tbody.append(table_row);
                 }
                 table.append(tbody);
                 table.attr("id", "myTable5");
                 tableData.append(table[0]);
           })
       }
       else{
           alert("plz enter atleast 2 charachter");
           return;
       }
        } 
    });
    let resetbtn=document.getElementById('reset');
      resetbtn.addEventListener('click',function(){
        document.getElementById("table-data3").style.display=""
        let tableData = document.getElementById("table-data4");
        tableData.style.display="none"
        document.getElementById('searchbox').value=""
      }) 
    
}


