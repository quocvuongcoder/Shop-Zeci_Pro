let list = document.querySelectorAll('.list .item');
list.forEach(item =>{
    /*cho item lắng nghe khi click vào*/
    item.addEventListener('click', function(event){
        /*thêm vào giỏ hàng khi click vào nút ADD TO CARD*/
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset = false;
            let listCart = document.querySelectorAll('.cart .item');
            document.querySelector('.listCart').appendChild(itemNew);
            if(event.target.classList.contains('remove')){
                var itemNew = item.cloneNode(true);}
        }
    })
})