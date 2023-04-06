import axios from "axios";

function storeRegistrationData(registrationData) {
    axios.post('https://registration-62676-default-rtdb.firebaseio.com//registrations.json', registrationData);
}

export { storeRegistrationData };
