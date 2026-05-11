function showScreen(screenId){

    let screens = document.querySelectorAll('.screen');

    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    document.getElementById(screenId).classList.add('active');
}


function login(){

    let username =
        document.getElementById('loginUser').value;

    let password =
        document.getElementById('loginPass').value;

    if(username === 'admin' && password === '1234'){

        alert('Login Successful');

        showScreen('dashboard');

    }else{

        alert('Invalid Username or Password');
    }
}


function register(){

    alert('Account Created Successfully');

    showScreen('login');
}


function logout(){

    alert('Logged Out');

    showScreen('login');
}


function addMedicine(){

    let name =
        document.getElementById('medicineName').value;

    let qty =
        document.getElementById('medicineQty').value;

    let status =
        document.getElementById('medicineStatus').value;


    if(name === '' || qty === ''){

        alert('Please complete all fields');

        return;
    }


    let medicineList =
        document.getElementById('medicineList');

    let card =
        document.createElement('div');

    card.classList.add('medicine-card');


    let statusHTML = '';


    if(status === 'available'){

        statusHTML =
        '<span class="status available">Available</span>';

    }
    else if(status === 'low'){

        statusHTML =
        '<span class="status low">Low Stock</span>';

    }
    else{

        statusHTML =
        '<span class="status out">Out Of Stock</span>';
    }


    card.innerHTML = `

        <h3>${name}</h3>

        <p>Quantity: ${qty}</p>

        ${statusHTML}

    `;


    medicineList.appendChild(card);


    document.getElementById('medicineName').value = '';
    document.getElementById('medicineQty').value = '';


    updateDashboard(status);

    saveMedicine(name, qty, status);
}


function updateDashboard(status){

    if(status === 'available'){

        let count =
            document.getElementById('availableCount');

        count.innerText =
            parseInt(count.innerText) + 1;
    }

    else if(status === 'low'){

        let count =
            document.getElementById('lowCount');

        count.innerText =
            parseInt(count.innerText) + 1;
    }

    else{

        let count =
            document.getElementById('outCount');

        count.innerText =
            parseInt(count.innerText) + 1;
    }
}


let medicines = [];


function saveMedicine(name, qty, status){

    medicines.push({
        name:name,
        qty:qty,
        status:status
    });
}


function searchMedicine(){

    let input =
        document.getElementById('searchInput')
        .value
        .toLowerCase();

    let results =
        document.getElementById('searchResults');

    results.innerHTML = '';


    medicines.forEach(med => {

        if(med.name.toLowerCase().includes(input)){

            results.innerHTML += `

                <div class="medicine-card">

                    <h3>${med.name}</h3>

                    <p>Quantity: ${med.qty}</p>

                    <span class="status ${med.status}">
                        ${med.status}
                    </span>

                </div>

            `;
        }
    });
}