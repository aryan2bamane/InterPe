let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (string.endsWith("+") || string.endsWith("-") || string.endsWith("*") || string.endsWith("/")) {
                string = "Error";
            }
            else if (string.startsWith("+") || string.startsWith("-") || string.startsWith("*") || string.startsWith("/")) {
                string = "Error";
            }
            else {
                try {
                    string = eval(string);
                    document.querySelector('input').value = string;
                } catch (err) {
                    document.querySelector('input').value = "Error";
                }
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'Del') {
            string = string.slice(0, -1)
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})