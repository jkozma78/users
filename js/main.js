// konstans változók értékadása
let url = "http://localhost:3000/adatok";
keys = ["id", "text", "neve"];


function putServerData(url) {
  /* fetch('http://localhost:3000/adatok', {
      method: 'PosT', // or 'PUT'
      headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(appendData),
   })
   .then(response => response.json())
   .then(data => {
   console.log('Success:', data)
  })
   .catch((error) => {
     console.error('Error:', error);
   }); */
  if (document.querySelector("#id").value="" || document.querySelector("#dat").value ){


    appendData = { "text": document.querySelector("#id").value, "neve": document.querySelector("#dat").value }
    document.querySelector("#id").value = "";
    document.querySelector("#dat").value = "";

    let fetchOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appendData),

    };
    return fetch(url, fetchOptions).then(
      data => data.json(),
      err => console.error(err)
    ).then(
      data => getServerData(url).then(data => userTable(data))
    );

  }
  else {
    alert("Beviteli mező nem lehet üres!")
  }
};

function olvas() {
  putServerData(url);
  // getServerData(url).then(data=>userTable(data))
};

function getServerData(url) {
  let fetchOptions = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",



  };
  return fetch(url, fetchOptions).then(
    data => data.json(),
    err => alert(err)
  )
};

document.querySelector("#getData").addEventListener("click", function () {
  getServerData(url).then(
    data => userTable(data))
});

document.querySelector(".btn.btn-success").addEventListener("click", function () { olvas() });

function userTable(data) {

  let table = document.querySelector("#adatok");
  table.innerHTML = "";
  for (let row of data) {
    let tr = document.createElement("tr");
    for (let k of keys) {
      let td = document.createElement("td");
      td.innerHTML = row[k];
      tr.appendChild(td);

    }
    table.appendChild(tr);

    bt = document.createElement("button");
    bt.setAttribute("class", "btn btn-danger");
    bt.setAttribute("id", "gmb");
    tr.appendChild(bt);
    bt.innerHTML = '<i class="fas fa-user-minus"></i>'

  }
  btn = document.querySelectorAll("#gmb");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () { katt(this.parentElement.firstChild.innerHTML) });

  }

};

function katt(i) {

  let fetchOptions = {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache"
  }

  fetch(url + "/" + i, fetchOptions).then(
    resp => resp.json(),
    err => console.log(err)
  ).then(
    data => getServerData(url).then(data => userTable(data))
  )
};