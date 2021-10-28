const generateNumber = (count) =>{
    let number = "";

    for (let i = 0; i < count; i++) {
        number += Math.floor(Math.random() * 10);
    }

    return number;
}

const getDate = () =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const myDate = new Date();

    let day = myDate.getDate();
    let month = monthNames[myDate.getMonth()];
    let year = myDate.getFullYear();

    let date = month+" "+day+" "+year;

    return date;
}

const previewText = (letter) =>{
    let newText = letter.substr(0, 100);

    return newText+"...";
}

const sweetToast = (state, text) =>{
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: state,
        title: text,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    })
}

export {generateNumber, getDate, previewText, sweetToast}