for (let i = 0; i < ds.length; i++) {
    document.getElementById("show").innerHTML += 
    `<div class="col3">
        <img src="images/${ds[i].hinh}" alt="" />
        <h2>${ds[i].ten}</h2>
        
        <h3>${ds[i].gia}</h3>
        <button>Buy Now</button>
        <!-- <div class="km">Giảm 100%</div> -->
    </div>`
}
for (let i = 0; i < cf.length; i++) {
    document.getElementById("cf").innerHTML +=
    `<div class="col3">
        <img src="images/${cf[i].hinh}" alt="" />
        <h2>${cf[i].ten}</h2>
        <h3>${cf[i].gia}</h3>
        <button>Buy Now</button>
        <button class="fm" onclick='detail(${cf[i].id})'  >Chi tiết</button>
        <!-- <div class="km">Giảm 100%</div> -->
    </div>`
    
}
for (let i = 0; i < bm.length; i++) {
    document.getElementById("bm").innerHTML +=
    `<div class="col3">
        <img src="images/${bm[i].hinh}" alt="" />
        <h2>${bm[i].ten}</h2>
        
        <h3>${bm[i].gia}</h3>
        <button>Buy Now</button>
        <button class="fm" onclick='detail(${bm[i].id})'  >Chi tiết</button>
        <!-- <div class="km">Giảm 100%</div> -->
    </div>`
}
for (let i = 0; i < ll.length; i++) {
    document.getElementById("ll").innerHTML +=
    `<div class="col3">
          <img src="images/${ll[i].hinh}" alt="" />
          <h2>${ll[i].ten}</h2>
          <button class="fm" onclick='detail(${ll[i].id})'  >Chi tiết</button>
   
    </div>`
}       
ds.forEach(item => {
    document.getElementById("show").innerHTML += 
    `<div class="col3">
        <img src="images/${item.hinh}" alt="" />
        <h2>${item.ten}</h2>
        
        <h3>${item.gia}</h3>
 
        <button>Buy Now</button>
        <!-- <div class="km">Giảm 100%</div> -->
    </div>`
});
