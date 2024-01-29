function NextPage(maxPageCount) {
    let pagination = document.getElementById("paginationDiv");
    let pages = pagination.getElementsByTagName("a");

    for (var i = 0; i < pages.length; i++) {

        if (parseInt(pages[pages.length-1].innerHTML) == maxPageCount) break;

        pages[i].innerHTML = parseInt(pages[i].innerHTML) + 1;
    }
}

function PreviousPage() {
    let pagination = document.getElementById("paginationDiv");
    let pages = pagination.getElementsByTagName("a");

    for (var i = 0; i < pages.length; i++) {

        if (parseInt(pages[i].innerHTML) == 1) break;

        pages[i].innerHTML = parseInt(pages[i].innerHTML) - 1;
    }
}


function SelectPage(selected) {

    let pagination = document.getElementById("paginationDiv");
    let pages = pagination.getElementsByTagName("a");

    for (var i = 0; i < pages.length; i++) {

        if (pages[i] == selected) {
            selected.classList.add("current");
        } else {
            pages[i].classList.remove("current");
        }
       
           
    }
}
