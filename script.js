function condition() {
    let a = prompt('Please enter a number', '');
    let b = prompt('Please enter another number', '');

    if (a > b) {
        alert('Value A is Higher');
    }else if (b > a) {
        alert('Value B is Higher');
    }else if (a == b) {
        alert('Equal');
    }
}
