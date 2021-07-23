const names = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
]

function autocomplete(input, array) {
    let currentFocus; 

    input.addEventListener( 'input', (e) => {
        let a, b, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1; 

        a = document.createElement("DIV");
        a.setAttribute('id', this.id + "autocomplete-list" );
        a.className = "autocomplete-items";

        this.parentNode.appendChild(a);

        for (let i = 0; i < array.length; i++ ) {
            if (array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = `<strong> ${array[i].substr(0, val.length)} </strong>`;
                b.innerHTML += array[i].substr(val.length);

                b.innerHTML += `<input type='hidden' value='"${array[i]}"'>`

                b.addEventListener( 'click', (e) => {
                    input.value = this.getElementsByTagName('input')[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    input.addEventListener( 'keydown', (e) => {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName('div');
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38 ) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    
    function addActive(x) {
        if (!x) return false; 
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0; 
        if (currentFocus < 0) currentFocus = (x.length -1);
        x[currentFocus].classList.add('autocomplete-active');
    }
    
    function removeActive(x) {
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    
    function closeAllLists(element) {
        let x = document.getElementsByClassName('autocomplete-items');
        for (let i = 0; i < x.length; i++) {
            if (element != x[i] && element != input) { x[i].parentNode.removeChild(x[i]);}
        }
    }
    
    document.addEventListener('click', (e) => {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById('user-field'), names);