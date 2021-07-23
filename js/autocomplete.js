const names = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
]

// Credit to https://www.w3schools.com/howto/howto_js_autocomplete.asp 

function autocomplete(input, array) {
    let currentFocus; // which item is selected by arrow keys
    input.addEventListener("input", function() { // execute when input is typed
        let val = this.value; // this is the object is exists in 
        closeAllLists(); // close previous autofill items
        if (!val) { return false;}
        currentFocus = -1;

        let container = document.createElement("DIV"); // container for autofill items
        container.setAttribute("id", `${this.id}autocomplete-list`);
        container.className = "autocomplete-items";
        this.parentNode.appendChild(container);

        for (let i = 0; i < array.length; i++) {
          if (array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) { // check if item starts with same 
            let autoChoice = document.createElement("DIV"); //create an auto item
            autoChoice.innerHTML = `<strong>${array[i].substr(0, val.length)}</strong>${array[i].substr(val.length)}`; // bold matching display the rest
            /*insert a input field that will hold the current array item's value:*/
            autoChoice.innerHTML += `<input type='hidden' value='${array[i]}'>` //"<input type='hidden' value='" + array[i] + "'>";
            autoChoice.addEventListener("click", function(e) { // when an auto div is clicked
                input.value = this.getElementsByTagName("input")[0].value; // insert auto value
                closeAllLists();
            });
            container.appendChild(autoChoice); // add the option to the list
          }
        }
    });

    // USE ARROW KEYS + ENTER TO SELECT
    input.addEventListener( 'keydown', function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName('div');
        if (e.keyCode == 40) { // 40 refers to the down arrow
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38 ) { // 38 refers to the up arrow
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) { // 13 refers to enter
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) { x[currentFocus].click(); };
            }
        }
    });
    
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }
    
    function closeAllLists(element) {
        let x = document.getElementsByClassName('autocomplete-items');
        for (let i = 0; i < x.length; i++) {
            if (element != x[i] && element != input) { 
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener('click', function(e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById('user-field'), names);