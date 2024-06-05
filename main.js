let drop_cat = window.document.getElementById('cat')

function cat_open(x){
    var drop = window.document.getElementById(x)
    if (drop.style.display == 'none'){drop.style.display = 'block';}
    else {
        drop.style.display = 'none';
    }
    
}