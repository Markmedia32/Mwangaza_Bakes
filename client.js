document.addEventListener('DOMContentLoaded', function() {
    const addCustomerBtn = document.getElementById('addCustomerBtn');
    const customerNameInput = document.getElementById('customerName');
    const customerEmailInput = document.getElementById('customerEmail');
    const customerPhoneInput = document.getElementById('customerPhone');
    const customerStatusSelect = document.getElementById('customerStatus');
    const customerList = document.getElementById('customerList');

    // Load customers from localStorage if available
    let customers = JSON.parse(localStorage.getItem('customers')) || [];

    // Function to render customers in the card list
    function renderCustomers() {
        customerList.innerHTML = '';

        customers.forEach((customer, index) => {
            const card = document.createElement('div');
            card.classList.add('customer-card');
            card.innerHTML = `
                <strong>Name:</strong> ${customer.name}<br>
                <strong>Email:</strong> ${customer.email}<br>
                <strong>Phone:</strong> ${customer.phone}<br>
                <strong>Status:</strong> ${customer.status === 'active' ? 'Active' : 'Inactive'}<br>
                <div class="customer-actions">
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;
            customerList.appendChild(card);
        });

        // Save customers to localStorage after rendering
        saveCustomers();
    }

    // Function to add new customer to the list
    function addCustomer() {
        const newCustomer = {
            name: customerNameInput.value.trim(),
            email: customerEmailInput.value.trim(),
            phone: customerPhoneInput.value.trim(),
            status: customerStatusSelect.value
        };

        if (newCustomer.name && newCustomer.email && newCustomer.phone) {
            customers.push(newCustomer);
            renderCustomers();
            clearForm();
        } else {
            alert("Please fill in all fields.");
        }
    }

    // Function to edit customer in the list
    function editCustomer(index) {
        const customer = customers[index];
        customerNameInput.value = customer.name;
        customerEmailInput.value = customer.email;
        customerPhoneInput.value = customer.phone;
        customerStatusSelect.value = customer.status;

        addCustomerBtn.textContent = "Update Customer";
        addCustomerBtn.onclick = function() {
            updateCustomer(index);
        };
    }

    // Function to update customer in the list
    function updateCustomer(index) {
        customers[index].name = customerNameInput.value.trim();
        customers[index].email = customerEmailInput.value.trim();
        customers[index].phone = customerPhoneInput.value.trim();
        customers[index].status = customerStatusSelect.value;

        renderCustomers();
        clearForm();
        addCustomerBtn.textContent = "Add Customer";
        addCustomerBtn.onclick = addCustomer;
    }

    // Function to remove customer from the list
    function removeCustomer(index) {
        customers.splice(index, 1);
        renderCustomers();
    }

    // Function to save customers to localStorage
    function saveCustomers() {
        localStorage.setItem('customers', JSON.stringify(customers));
    }

    // Function to clear form fields
    function clearForm() {
        customerNameInput.value = '';
        customerEmailInput.value = '';
        customerPhoneInput.value = '';
        customerStatusSelect.value = 'active';
    }

    // Event listener for add customer button
    addCustomerBtn.addEventListener('click', addCustomer);

    // Event delegation for edit and delete buttons
    customerList.addEventListener('click', function(event) {
        const target = event.target;
        const index = parseInt(target.dataset.index);

        if (target.classList.contains('edit-btn')) {
            editCustomer(index);
        } else if (target.classList.contains('delete-btn')) {
            removeCustomer(index);
        }
    });

    // Initial render of customers
    renderCustomers();
});
