
let table_exist = false;
let n;
let k = 1;
let b = 0;

create_table.onclick = function () {
    if (table_exist) {
        alert('There is a table already');
    }
    else {
        remove.disabled = false;
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        tbody.id = 'tbody';
        table.appendChild(thead);
        table.appendChild(tbody);
        table.id = 'table';
        document.getElementById('table-section').appendChild(table);
        table_exist = true;
        n = column_num.value;
        let head = document.createElement('tr');
        for (let i = 0; i < n; i++) {
            let element = document.createElement('th');
            let form = document.createElement('input');
            form.id = 'input_' + i;
            form.type = 'text';
            let k = 100 / n;
            element.id = 'element_'+i;
            element.style.width = k + '%';
            form.style.width = '90%';
            element.appendChild(form);
            head.appendChild(element);
        }
        b++;
        submit.style.display = 'block';
        thead.appendChild(head);
        add.disabled = false;
    }  
    
}



submit.onclick = function() {
    for (let i = 0; i < n; i++) {
        let str = document.getElementById('input_' + i).value;
        document.getElementById('element_' + i).innerHTML = str;
        document.getElementById('element_' + i).removeAttribute('id');
    }
    b--;
    if (b <= 0) {
        submit.style.display = 'none';
    }
}

add.onclick = function () {
    let row = document.createElement('tr');
    
    for (let i = 0; i < n; i++) {
        let element = document.createElement('th');
        let form = document.createElement('input');
        form.id = 'input_' + i;
        form.type = 'text';
        let k = 100 / n;
        element.id = 'element_' + i;
        element.style.width = k + '%';
        form.style.width = '90%';
        element.appendChild(form);
        row.appendChild(element);
    }
    b++;
    submit.style.display = 'block';
    tbody.appendChild(row);
}


remove.onclick = function () {
    k = remove_num.value;
    let arr = tbody.querySelectorAll('tr');
    if (k == 0 || k == null) {
        table.remove();
        table_exist = false;
        b = 0;
        submit.style.display = 'none';

    }
    else if (k > arr.length) {
        alert("There is no the row");
    }
    else {arr[k-1].remove(); }
    
}
