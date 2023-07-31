var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i]);
        var div = document.createElement("div");
        div.innerHTML= `<div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <div class="card">
          <h5 class="card-title">${data1[i].name}</h5>
            <img src="${data1[i].flag}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">redion:${data1[i].region}</p>
              <p class="card-text">code:${data1[i].alpha3Code}</p>
              <p class="card-text">latlag:${data1[i].latlng}</p>
              <a href="#" class="btn btn-primary">click for wheather</a>
            </div>
          </div>
        </div>
        </div> `
        document.body.append(div);
    }

});