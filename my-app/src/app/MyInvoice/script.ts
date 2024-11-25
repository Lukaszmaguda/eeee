let customersList: Customer[] = [];
let currentEditIndex : number | null = null;

function getElementById(element: string): HTMLInputElement{
    return document.getElementById(element) as HTMLInputElement;
}

function zapiszDane(event: Event) {
    event.preventDefault();
    let newCustomer  = new Customer();
        newCustomer.nazwa = getElementById('exampleInputName1').value,
        newCustomer.nip = getElementById('exampleInputNip1').value,
        newCustomer.miasto = getElementById('exampleInputMiasto1').value,
        newCustomer.ulica = getElementById('exampleInputUlica1').value,
        newCustomer.numerDomu = getElementById('exampleInputNumerDomu1').value,
        newCustomer.numerMieszkania = getElementById('exampleInputNumerMieszkania1').value,
        newCustomer.kodPocztowy = getElementById('exampleInputKodPocztowy1').value,
        newCustomer.uwagi = (document.getElementById('exampleFormControlTextarea1') as HTMLTextAreaElement).value,
        newCustomer.branza = (document.querySelector('.form-select')as HTMLSelectElement).value,
        newCustomer.aktywny = getElementById('flexCheckDefault').checked
    
    console.log(newCustomer)
    let foundCustomer: Customer | null = null;
    for (let i = 0; i < customersList.length; i++) {
        if(customersList[i].nip == newCustomer.nip){
            foundCustomer = customersList[i];
            customersList[i] = newCustomer;
    }
    }
    if(foundCustomer == null){
    customersList.push(newCustomer);
    }
    console.log(customersList)
    showCustomer();
};

function showCustomer() {
    customersList.forEach((customer) => {
        let ul = getElementById("customer-list") as HTMLElement;;
        ul.innerHTML += `<li class="list-group-item" onclick="showForm();loadClient(${customer.nip});">${customer.getCustomerInfo()}</li>`;
    });
    showList();
}

function editCustomer(index: number) {
    currentEditIndex = index; 
    const customer = customersList[index]; 

    getElementById('exampleInputName1').value = customer.nazwa;
    getElementById('exampleInputNip1').value = customer.nip;
    getElementById('exampleInputMiasto1').value = customer.miasto;
    getElementById('exampleInputUlica1').value = customer.ulica;
    getElementById('exampleInputNumerDomu1').value = customer.numerDomu;
    getElementById('exampleInputNumerMieszkania1').value = customer.numerMieszkania;
    getElementById('exampleInputKodPocztowy1').value = customer.kodPocztowy;
    getElementById('exampleFormControlTextarea1').value = customer.uwagi;
    (document.querySelector('.form-select') as HTMLSelectElement).value = customer.branza; 
    getElementById('flexCheckDefault').checked = customer.aktywny;

    getElementById("client-form").style.display = "block";
    getElementById("client-list").style.display = "none";

    getElementById('exampleInputName1').disabled = false;
    getElementById('exampleInputNip1').disabled = false;
    getElementById('exampleInputMiasto1').disabled = false;
    getElementById('exampleInputUlica1').disabled = false;
    getElementById('exampleInputNumerDomu1').disabled = false;
    getElementById('exampleInputNumerMieszkania1').disabled = false;
    getElementById('exampleInputKodPocztowy1').disabled = false;
    getElementById('exampleFormControlTextarea1').disabled = false;
    (document.querySelector('.form-select') as HTMLSelectElement).disabled = false;
    getElementById('flexCheckDefault').disabled = false;
}

function wstawDane() {
    getElementById('exampleInputName1').value = 'Firma XYZ';
    getElementById('exampleInputNip1').value = '1234567890';
    getElementById('exampleInputMiasto1').value = 'Warszawa';
    getElementById('exampleInputUlica1').value = 'Nowa';
    getElementById('exampleInputNumerDomu1').value = '12';
    getElementById('exampleInputNumerMieszkania1').value = '34';
    getElementById('exampleInputKodPocztowy1').value = '00-001';
    getElementById('exampleFormControlTextarea1').value = 'Brak uwag';
    (document.querySelector('.form-select') as HTMLSelectElement).value = '1';
    getElementById('flexCheckDefault').checked = true;

    getElementById('exampleInputName1').disabled = true;
    getElementById('exampleInputNip1').disabled = true;
    getElementById('exampleInputMiasto1').disabled = true;
    getElementById('exampleInputUlica1').disabled = true;
    getElementById('exampleInputNumerDomu1').disabled = true;
    getElementById('exampleInputNumerMieszkania1').disabled = true;
    getElementById('exampleInputKodPocztowy1').disabled = true;
    getElementById('exampleFormControlTextarea1').disabled = true;
    (document.querySelector('.form-select') as HTMLSelectElement).disabled = true;
    getElementById('flexCheckDefault').disabled = true;
}

function showForm() {
    getElementById("client-form").style.display = "block";
    getElementById("client-list").style.display = "none";
}
function showList(){
    getElementById("client-form").style.display = "none";
    getElementById("client-list").style.display = "block";
}

