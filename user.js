document.addEventListener('DOMContentLoaded', function() {
    // Dummy profile data (replace with actual user data)
    const profile = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
        address: '123 Main St, City, Country'
    };

    // Function to display user information
    function displayUserProfile() {
        const nameElement = document.createElement('p');
        nameElement.innerHTML = `<strong>Name:</strong> ${profile.name}`;

        const emailElement = document.createElement('p');
        emailElement.innerHTML = `<strong>Email:</strong> ${profile.email}`;

        const phoneElement = document.createElement('p');
        phoneElement.innerHTML = `<strong>Phone:</strong> ${profile.phone}`;

        const addressElement = document.createElement('p');
        addressElement.innerHTML = `<strong>Address:</strong> ${profile.address}`;

        const profileInfo = document.querySelector('.profile-info');
        profileInfo.innerHTML = ''; // Clear previous content
        profileInfo.appendChild(nameElement);
        profileInfo.appendChild(emailElement);
        profileInfo.appendChild(phoneElement);
        profileInfo.appendChild(addressElement);
    }

    // Event listeners for profile actions
    document.getElementById('edit-profile-btn').addEventListener('click', function() {
        alert('Implement edit profile functionality here.');
    });

    document.getElementById('change-password-btn').addEventListener('click', function() {
        alert('Implement change password functionality here.');
    });

    // Display initial user profile
    displayUserProfile();
});
