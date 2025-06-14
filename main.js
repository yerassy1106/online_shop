let tovar =[
    {
    name:'Iphone 13',
    price:'420 000 ₸',
    date:'10.06.2022',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Iphone 12',
    price:'320 000 ₸',
    date:'10.06.2020',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Iphone 11',
    price:'240 000 ₸',
    date:'10.06.2019',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Samsung A5',
    price:'90 000 ₸',
    date:'10.06.2016',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Xiaomi 15 ulta',
    price:'670 000 ₸',
    date:'10.06.2023',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Oppo A78',
    price:'75 000 ₸',
    date:'10.05.2020',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Oppo A31',
    price:'2000 т',
    date:'10.06.2020',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Oppo Reno 8т',
    price:'80 000 ₸',
    date:'10.06.2021',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Xiaomi Redmi Note 14',
    price:'99 000 ₸',
    date:'10.06.2019',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   },
    {
    name:'Samsung J3 ',
    price:'120 000 ₸',
    date:'10.06.2017',
    img:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/10297/6cZRaKicqcfr7cTHFnvcw.jpg"
   }
];



let card = document.getElementById("block");
let searchInput = document.getElementById("searchInput");

function era(qwerty){
   card.innerHTML = "";
   qwerty.forEach(item =>{
    const car = document.createElement("div");
    car.className="card";
    car.innerHTML = ` 
      <img src="${item.img}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <small>${item.date}</small>
       `;
       card.appendChild(car);


   });
     
 
   };
     searchInput.oninput = () => {
      const value = searchInput.value.trim().toLowerCase();
      const filtered = tovar.filter(i => i.name.toLowerCase().includes(value));
      era(filtered);
    };
    era(tovar);
