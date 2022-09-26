//fonction pour récupérer les elements par leurs id

function _(e) {
    return document.getElementById(e);
}

//items-loader variables

let containerheader = _('items-container-header');
let containerheaderimg = _('items__container--header__image');
let containerheadertxt = _('items__container--header__content');
let containerproducts = _('items__container--content');
let containerimg = _('items__container--content__item--image');
let containertxt = _('items__container--content__item--description');

/*
//items variables

let nouveautes = _('nouveautes');
let robes = _('robes');
let pantalons = _('pantalons');
let shorts = _('shorts');
let combinaisons = _('combinaisons');
let tops = _('tops');
let jupes = _('jupes');
let kimonos = _('kimonos');
let accessoires = _('accessoires');
let chemises = _('chemises');
*/

// logingForm variables

let displayform= _('displayForm');
let forLogin= _('forLogin');
let loginForm= _('loginForm');
let forRegister= _('forRegister');
let registerForm= _('registerForm');
let formContainer= _('formContainer');

// déclaration des produits

let robes = {
    header: 'robes',
    logo :  './src/imgs/items-header/robes-logo.jpeg',
    items:[
        {
            id : 'robe1',
            name :'robe 1',
            price :'12000',
            description :'description1',
            pics: ['./src/imgs/items/robes/robe1/image1.webp', './src/imgs/items/robes/robe1/image2.webp', './src/imgs/items/robes/robe1/image3.webp', './src/imgs/items/robes/robe1/image4.webp', './src/imgs/items/robes/robe1/image5.webp']
        },
        {
            id : 'robe2',
            name :'robe 2',
            price :'13500',
            description :'description2',
            pics : ['./src/imgs/items/robes/robe2/image1.webp', './src/imgs/items/robes/robe2/image2.webp', './src/imgs/items/robes/robe2/image3.webp','./src/imgs/items/robes/robe2/image4.webp','./src/imgs/items/robes/robe2/image5.webp']
        },
        {
            id : 'robe3',
            name :'robe 3',
            price :'14000',
            description :'description3',
            pics:['./src/imgs/items/robes/robe3/image1.webp', './src/imgs/items/robes/robe3/image2.webp','./src/imgs/items/robes/robe3/image3.webp','./src/imgs/items/robes/robe3/image4.webp','./src/imgs/items/robes/robe3/image5.webp' ]
        }
    ] 
};

let pantalons = {
    header : 'pantalons',
    logo :  './src/imgs/items-header/pants-logo.jpeg',
    items:[
    {
        id : 'pant1',
        name :'pantalon 1',
        price :'10000',
        description :'description1',
        pics:['./src/imgs/items/pants/pant1/image1.webp', './src/imgs/items/pants/pant1/image2.webp','./src/imgs/items/pants/pant1/image3.webp','./src/imgs/items/pants/pant1/image4.webp']
    },
    {
        id : 'pant2',
        name :'pantalon 2',
        price :'8500',
        description :'description2',
        pics:['./src/imgs/items/pants/pant2/image1.webp', './src/imgs/items/pants/pant2/image2.webp','./src/imgs/items/pants/pant2/image3.webp','./src/imgs/items/pants/pant2/image4.webp']
    }
]
};

let shorts = {
header: 'shorts',
logo :  './src/imgs/items-header/shorts-logo.webp',
items:[
{
    id : 'short1',
    name :'short 1',
    price :'6000',
    description :'description1',
    pics:['./src/imgs/items/shorts/short1/image1.jpeg', './src/imgs/items/shorts/short1/image2.jpeg', './src/imgs/items/shorts/short1/image3.jpeg', './src/imgs/items/shorts/short1/image4.jpeg']
},
{
    id : 'short2',
    name :'short 2',
    price :'5500',
    description :'description2',
    pics:['./src/imgs/items/shorts/short2/image1.webp', './src/imgs/items/shorts/short2/image2.webp', './src/imgs/items/shorts/short2/image3.webp', './src/imgs/items/shorts/short2/image4.webp']
},
{
    id : 'short3',
    name :'short 3',
    price :'5000',
    description :'description3',
    pics:['./src/imgs/items/shorts/short3/image1.webp', './src/imgs/items/shorts/short3/image2.webp', './src/imgs/items/shorts/short3/image3.webp', './src/imgs/items/shorts/short3/image4.webp']
}
]
};

let combinaisons = {
header : 'combinaisons',
logo :  './src/imgs/items-header/combis-logo.webp',
items:[
{
    id : 'combi1',
    name :'combi 1',
    price :'10500',
    description :'description1',
    pics:['./src/imgs/items/combis/combi1/image1.webp', './src/imgs/items/combis/combi1/image2.webp', './src/imgs/items/combis/combi1/image3.webp', './src/imgs/items/combis/combi1/image4.webp']
},
{
    id : 'combi2',
    name :'combi 2',
    price :'9500',
    description :'description2',
    pics:['./src/imgs/items/combis/combi2/image1.webp', './src/imgs/items/combis/combi2/image2.webp', './src/imgs/items/combis/combi2/image3.webp', './src/imgs/items/combis/combi2/image4.webp']
}
]
};

let tops = {
header : 'tops',
logo :  './src/imgs/items-header/tops-logo.jpeg',
items:[
{
    id : 'top1',
    name :'top 1',
    price :'8500',
    description :'description1',
    pics:['./src/imgs/items/tops/top1/image1.webp', './src/imgs/items/tops/top1/image2.webp','./src/imgs/items/tops/top1/image3.webp','./src/imgs/items/tops/top1/image4.webp']
},
{
    id : 'top2',
    name :'top 2',
    price :'9500',
    description :'description2',
    pics:['./src/imgs/items/tops/top2/image1.webp', './src/imgs/items/tops/top2/image2.webp','./src/imgs/items/tops/top2/image3.webp','./src/imgs/items/tops/top2/image4.webp']
}
]
};

let jupes = {
header: 'jupes',
logo :  './src/imgs/items-header/jupes-logo.webp',
items:[
{
    id : 'jupe1',
    name :'jupe 1',
    price :'6000',
    description :'description1',
    pics:['./src/imgs/items/jupes/jupe1/image1.webp', './src/imgs/items/jupes/jupe1/image2.webp','./src/imgs/items/jupes/jupe1/image3.webp','./src/imgs/items/jupes/jupe1/image4.webp']
},
{
    id : 'jupe2',
    name :'jupe 2',
    price :'5500',
    description :'description2',
    pics:['./src/imgs/items/jupes/jupe2/image1.webp', './src/imgs/items/jupes/jupe2/image2.webp','./src/imgs/items/jupes/jupe2/image3.webp','./src/imgs/items/jupes/jupe2/image4.webp']
},
{
    id : 'jupe3',
    name :'jupe 3',
    price :'5000',
    description :'description3',
    pics:['./src/imgs/items/jupes/jupe3/image1.webp', './src/imgs/items/jupes/jupe3/image2.webp','./src/imgs/items/jupes/jupe3/image3.webp','./src/imgs/items/jupes/jupe3/image4.webp']
},
{
    id : 'jupe4',
    name :'jupe 4',
    price :'7000',
    description :'description4',
    pics:['./src/imgs/items/jupes/jupe4/image1.webp', './src/imgs/items/jupes/jupe4/image2.webp','./src/imgs/items/jupes/jupe4/image3.webp','./src/imgs/items/jupes/jupe4/image4.webp']
}
]
};

let kimonos = {
header: 'kimonos',
logo :  './src/imgs/items-header/kimonos-logo.webp',
items:[
{
    id : 'kimono1',
    name :'kimono 1',
    price :'14000',
    description :'description1',
    pics:['./src/imgs/items/kimonos/kimono1/image1.webp', './src/imgs/items/kimonos/kimono1/image2.webp','./src/imgs/items/kimonos/kimono1/image3.webp','./src/imgs/items/kimonos/kimono1/image4.webp']
},
{
    id : 'kimono2',
    name :'kimono 2',
    price :'15500',
    description :'description2',
    pics:['./src/imgs/items/kimonos/kimono2/image1.webp', './src/imgs/items/kimonos/kimono2/image2.webp','./src/imgs/items/kimonos/kimono2/image3.webp','./src/imgs/items/kimonos/kimono2/image4.webp']
},
{
    id : 'kimono3',
    name :'kimono 3',
    price :'15000',
    description :'description3',
    pics:['./src/imgs/items/kimonos/kimono3/image1.webp', './src/imgs/items/kimonos/kimono3/image2.webp','./src/imgs/items/kimonos/kimono3/image3.webp','./src/imgs/items/kimonos/kimono3/image4.webp']
}
]
};

let accessoires = {
header : 'accessoires',
logo :  './src/imgs/items-header/access-logo.jpg',
items:[
{
    id : 'access1',
    name :'accessoire 1',
    price :'8500',
    description :'description1',
    pics:['./src/imgs/items/accessoires/access1/image1.webp', './src/imgs/items/accessoires/access1/image2.webp','./src/imgs/items/accessoires/access1/image3.webp','./src/imgs/items/accessoires/access1/image4.webp']
},
{
    id : 'access2',
    name :'accessoire 2',
    price :'9500',
    description :'description2',
    pics:['./src/imgs/items/accessoires/access2/image1.webp', './src/imgs/items/accessoires/access2/image2.webp','./src/imgs/items/accessoires/access2/image3.webp','./src/imgs/items/accessoires/access2/image4.webp']
}
]
};

let chemises = {
header: 'chemises',
logo :  './src/imgs/items-header/chemises-logo.webp',
items:[
{
    id : 'chemise1',
    name :'chemise 1',
    price :'5000',
    description :'description1',
    pics:['./src/imgs/items/chemises/chemise1/image1.webp', './src/imgs/items/chemises/chemise1/image2.webp','./src/imgs/items/chemises/chemise1/image3.webp','./src/imgs/items/chemises/chemise1/image4.webp']
},
{
    id : 'chemise2',
    name :'chemise 2',
    price :'5500',
    description :'description2',
    pics:['./src/imgs/items/chemises/chemise2/image1.webp', './src/imgs/items/chemises/chemise2/image2.webp','./src/imgs/items/chemises/chemise2/image3.webp','./src/imgs/items/chemises/chemise2/image4.webp']
},
{
    id : 'chemise3',
    name :'chemise 3',
    price :'6000',
    description :'description3',
    pics:['./src/imgs/items/chemises/chemise3/image1.webp', './src/imgs/items/chemises/chemise3/image2.webp','./src/imgs/items/chemises/chemise3/image3.webp','./src/imgs/items/chemises/chemise3/image4.webp']
}
]
};

let news = {
    header: 'nouveautes',
    logo :  './src/imgs/items-header/news-logo.webp',
    items: [robes.items[0], chemises.items[1], tops.items[0], kimonos.items[2]]
};

//déclaration des tableaux de produits

let Products = [robes, pantalons, shorts, combinaisons, tops, jupes, kimonos, accessoires, chemises, news ];
let wishlist = [];
let basket =[];

//fonction popup

function openPopup(popup){
    _('popup-overlay').style.display="flex";
    _('popup').classList.add('open-popup');
};

_('close-popup').onclick= function closePopup(){
    _('popup').classList.remove('open-popup');
    _('popup-overlay').style.display="none";
};

_('tologin').onclick=function (){
    _('popup-overlay').style.display="none";
    _('popup').classList.remove('open-popup');
    displayform.click();
}

//au chargement de la page

window.onload= function(){
    setTimeout(openPopup, 1000);
    _("nouveautes").click();
    _('basket-postit').textContent=basket.length;
    _('wishlist-postit').textContent=wishlist.length;
    _('top-page').click(); 
    if (screen.width <1200){
        _('sidebar-toggle').click();
     }; 
    };


//fonction formulaire d'inscription
let formwrapper = document.querySelector('.form-wrapper .card');
displayform.addEventListener('click', (e)=>{
    
    formwrapper.classList.add('show');
    if (formwrapper.classList.contains('show')){
        _('formLogReg-overlay').style.display="flex"
        displayform.style.backgroundColor= "var(--second-color)";
    } else {
        displayform.style.backgroundColor= "white";
    };

    _('loginbtn').onclick=function(){
        formwrapper.classList.remove('show');
        _('formLogReg-overlay').style.display="none";
        displayform.style.backgroundColor= "white";
        _('top-page').click();  
        };
                        
    _('googlebtn').onclick=function(){
        formwrapper.classList.remove('show');
        _('formLogReg-overlay').style.display="none";
        displayform.style.backgroundColor= "white";
        _('top-page').click();  
            };
    });




forRegister.addEventListener('click', (e) => {
    forLogin.classList.remove('active');
    forRegister.classList.add('active');
    if(registerForm.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(-100%)';
        formContainer.style.transition = 'transform 0.2s';
        registerForm.classList.remove('toggleForm');
        loginForm.classList.add('toggleForm');
    };
});

forLogin.addEventListener('click', (e) => {
    forLogin.classList.add('active');
    forRegister.classList.remove('active');
    if(loginForm.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(0%)';
        formContainer.style.transition = 'transform 0.2s';
        loginForm.classList.remove('toggleForm');
        registerForm.classList.add('toggleForm');
    };
});

//animation de la sidebar en responsive

_('todiscover').onclick=function(){
    if (screen.width <1200){
        _('sidebar-toggle').click();
     };
}

//chargement du header du container

function itemHeaderList(object){
                containerheaderimg.style.backgroundImage = "url("+object.logo+")";
                containerheadertxt.textContent = object.header.toUpperCase();
            };


//chargement du contenu du container

function itemsList(items){
    containerproducts.innerHTML = items.map( prod => 
     
    `<div class="items__container--content__item" id="item-container">
        <div id="items__container--content__item--image" > 
            <a href="#items-container"><img src=${prod.pics[0]} id=${prod.id} class="item-image"></a></div>
            <div id="items__container--content__item--description">${prod.name.toUpperCase()}
            <div id="items__container--content__item--price">${prod.price} xpf</div>
        </div>
    </div>`).join('')
};

//chargement du container du slideshow

function setContainer(a, b){            
    containerheader.style.display = a;
    containerproducts.style.display = a;
    _('slideshow-container').style.display = b;
    if(screen.width < "1200px"){
    sidebar.style.transform = 'translate(-100%)';
    _('togglearrow').style.transform = ('rotate(0deg)')
    } 
    };


function setSlideshow(e, a){
    let item = e.find(elt=> {return elt.id === a});
    let curIndex = 0;
    let imgDuration = 2000;  
                    
    setContainer("none", "flex");
            
    function slideShow() {
        let index = item.pics[curIndex];
        _('item-name').textContent=item.name.toUpperCase();
        _('item-price').textContent=item.price + " xpf";
        _('item-description--text').textContent=item.description;
        _('img-slideshow').src = index;
        curIndex++;
        if(curIndex==item.pics.length){curIndex=0};
        timeout = window.setTimeout(slideShow, imgDuration);
    };

    slideShow();

        _('return-btn').onclick = function(){
            setContainer("flex", "none")
            window.clearTimeout(timeout);
            }; 
    
        _('addToWishlist').onclick =function(){
            wishlist.push(item);
            _('wishlist-postit').textContent=wishlist.length;
            };
                    
        _('addToBasket').onclick =function(){
            basket.push(item);
            _('basket-postit').textContent=basket.length;
            };
    };


// on récupère les evts de click dans la sidebar et le conteneur 

let selectedlist =document.querySelectorAll(['.sidebar-item']);

    selectedlist.forEach(element => {
        element.addEventListener('click', (e)=>{

            _('return-btn').click();
            let value = e.target.id; 
            let object = Products.find(element => {return element.header == value});

            itemHeaderList(object);  
    
            let items = object.items;

            itemsList(items);

            //récupération des items chargés dans le container
        
            let selecteditems =document.querySelectorAll(['.item-image']);

            selecteditems.forEach(element => {
                element.addEventListener('click', (e)=>{
                    e.stopPropagation();
                    let id=e.target.id;
                    console.log(id);

                    //on charge le slideshow avec l'objet cliqué (id) parmi les objects affichés (items)

                    setSlideshow(items, id);
                    
                })
            });
                if (screen.width <1200){
               _('sidebar-toggle').click();
            };
            
        })
    });

//fonction sidebar responsive toggle

    _('sidebar-toggle').onclick=function(){
        sidebar.classList.toggle('show');
        if (sidebar.classList.contains('show')){
            sidebar.style.transform = 'translate(0%)';
            _('togglearrow').style.transform = ('rotate(180deg)');
            sidebar.style.boxShadow= "5px 5px 5px rgba(0, 0, 0, 0.3)";
        } else {
            sidebar.style.transform = 'translate(-100%)';
            _('togglearrow').style.transform = ('rotate(0deg)');
            sidebar.style.boxShadow= "none";
        };

        if(_('togglearrow').style.display == "none"){
            sidebar.style.transform = 'translate(0%)'
        };
    
    }
    

//fonction wishlist loader

_('toWishlist').onclick =function(){
    _('wishlist-postit').textContent=wishlist.length;
    _('wishlist-overlay').style.display="flex";
    _('wishlist-container').style.display = "flex";
    _('basket-container').style.display = "none";
    _('transfert-basket').innerText = 'Transférer au panier';
    if (wishlist.length == 0){
        _('wishlist').innerHTML = `<p>Pas d'envies pour le moment ...</p>`
    }else{
        _('wishlist').innerHTML = wishlist.map( prod => 
            `<div id="wishlist-item-container">
           <div id="wishlist-item--image" >
           <a href="#items-container"><img src=${prod.pics[0]}  width=60 height=80 class="item-img" name="${prod.id}"></a></div>
           <div id="wishlist-item--name">${prod.name.toUpperCase()}</div>
           <div id="wishlist-item--price">${prod.price} xpf</div>
           <div class="item-remove"><i class="fa-solid fa-xmark" id="${prod.id}" id="item--remove"></i></div>  
            </div>`).join('')

            let itemstoremove =document.querySelectorAll(['.item-remove']);

                itemstoremove.forEach(element => {
                    element.addEventListener('click', (e)=>{
 
                    let itemid=e.target.id;

                    let itemtoremove = wishlist.findIndex(element => {
                        return element.id == itemid});

                    wishlist.splice(itemtoremove,1);
                    _('toWishlist').click()
                })
            });

            let itemstopick =document.querySelectorAll(['.item-img']);

            itemstopick.forEach(element => {
                element.addEventListener('click', (e)=>{

                let itemname=e.target.name;

                let itemtopick = wishlist.find(element => {
                    return element.id == itemname});

                let id= itemtopick.id;
                
                _('wishlist-overlay').style.display ="none";
                _('wishlist-container').style.display = "none";
                window.clearTimeout(timeout);

                setSlideshow(wishlist, id);
            })
        });
    }
};

_('toBasket').onclick =function(){
    _('basket-postit').textContent=basket.length;
    _('basket-overlay').style.display="flex";
    _('basket-container').style.display = "flex";
    _('wishlist-container').style.display = "none";
    _('cashout').style.display = "none";
    _('validate-basket').textContent= `Valider ma commande`;
    if (basket.length == 0){
        _('basket').innerHTML = `<p>Votre panier est vide</p>`
    } else {
        _('basket').innerHTML = basket.map( prod => 
            `<div id="basket-item-container">
                <div id="basket-item--image" >
                <a href="#items-container"><img src=${prod.pics[0]} width=60 height=80 class="item-img" name="${prod.id}"></a></div>
               <div id="basket-item--name">${prod.name.toUpperCase()}</div>
               <div id="basket-item--price">${prod.price} xpf</div>
               <div class="item-remove"><i class="fa-solid fa-xmark" id="${prod.id}"></i></div>
            </div> 
             `).join('')

                let itemstoremove =document.querySelectorAll(['.item-remove']);

                itemstoremove.forEach(element => {
                    element.addEventListener('click', (e)=>{

                    let itemid=e.target.id;

                    let itemtoremove = basket.findIndex(element => {
                        return element.id == itemid});

                    basket.splice(itemtoremove,1);
                    _('toBasket').click()
                })
            });

            let itemstopick =document.querySelectorAll(['.item-img']);

                itemstopick.forEach(element => {
                    element.addEventListener('click', (e)=>{
 
                    let itemname=e.target.name;

                    let itemtopick = basket.find(element => {
                        return element.id == itemname});

                    let id= itemtopick.id;
                    
                    _('basket-overlay').style.display ="none";
                    _('basket-container').style.display = "none";
                    window.clearTimeout(timeout);

                    setSlideshow(basket, id);
                })
            });

    }   
};

_('continue-visit').onclick = function(){
    _('wishlist-overlay').style.display ="none";
    _('basket-container').style.display = "none";
    _('wishlist-container').style.display = "none";
};

_('continue-shopping').onclick = function(){
    _('wishlist-overlay').style.display="none";
    _('basket-overlay').style.display="none";
    _('basket-container').style.display = "none";
    _('wishlist-container').style.display = "none";
    _('validate-basket').style.display = "flex";
};

_('transfert-basket').onclick = function(){
    if(wishlist.length == 0){
        _('wishlist').innerHTML = `<p>Rien à transférer !</p>`
    } else {
        basket = wishlist
        _('wishlist').innerHTML = `<p>Liste transférée !</p>`
        _('transfert-basket').textContent = `Voir le panier`;
        _('transfert-basket').addEventListener('click', () => {
            _('wishlist-overlay').style.display="none";
            _('toBasket').click()
        })
    }
};

_('validate-basket').onclick = function(){
    if(basket.length == 0){
        _('basket').innerHTML = `<p>Votre panier est vide...</p>`
    }else {
        _('validate-basket').style.display = "none";
        _('cashout').style.display = "flex";
    }
};
