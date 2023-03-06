
function getValue() {
    const uname = document.getElementById('username').value;
    const pwd = document.getElementById('password').value;
    const obj = { uname: uname, pwd: pwd }
    console.log(obj);
    return obj;

}

function login(username, password) {
    const obj = {"uname": "user1", "pwd": "123"}
    if (username === obj.uname && password === obj.pwd) {
        console.log('true')
        return true;
    } else {
        console.log('false')
        return false;
    }
}

// --------------------------Validate Date type----------------------------------------

// function isValidDate(dateString) {
//     const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
//     dateString = '20230219';
//     if (!dateRegex.test(dateString)) {
//       return false;
//     }
//     const dateParts = dateString.split('-');
//     const year = parseInt(dateParts[0]);
//     const month = parseInt(dateParts[1]);
//     const day = parseInt(dateParts[2]);
//     const date = new Date(year, month - 1, day);
//     if (isNaN(date.getTime())) {
//       return false;
//     }
//     return date.toISOString().slice(0, 10) === dateString;
//   }

function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return false;
    }
  
    // Parse the date parts to integers
    const parts = dateString.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
  
    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12) {
      return false;
    }
  
    // Check the number of days in the month
    const monthDays = new Date(year, month, 0).getDate();
    if (day > monthDays || day === 0) {
      return false;
    }
    // If all checks pass, return true
    return true;
  }

//-----------------------------Is Valid Email------------------------------------

function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    console.log('1:' + emailRegex.test(email));
    return emailRegex.test(email);
  }

