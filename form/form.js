let FirstName = document.getElementsByTagName("input")[0];
let LastName = document.getElementsByTagName("input")[1];
let bisiName = document.getElementsByTagName("input")[2];
let countru = document.getElementsByTagName("select")[0];
let tel = document.getElementsByTagName("input")[3];
let Email = document.getElementsByTagName("input")[4];
let textarea = document.getElementsByTagName("textarea")[0];
let City = document.getElementsByTagName("input")[5];
let State = document.getElementsByTagName("input")[6];
let desc = document.getElementsByTagName("input")[7];
let roboto = document.getElementsByTagName("input")[8];
let BSstr = document.getElementsByTagName("select")[1];
let submit = document.getElementsByTagName("button")[1];
let i = 0;
let arr = [];

submit.addEventListener("click", () => {
    let user = new User(FirstName.value, LastName.value, bisiName.value, countru.value, tel.value, Email.value, textarea.value, City.value, State.value, desc.value, roboto.value, BSstr.value, submit.value);
    user.show();
    user.render();
    // arr.push(user);
    // alert();
})

// render() {
//     let cont = document.querySelector(".showUser");
//     let elem = document.createElement("div");
//     elem.id = this.name + this.counter;
//     elem.classList.add("animal");
//     elem.innerHTML = this.interface;
//     cont.appendChild(elem);
// }


class User {
    constructor(FirstName, LastName, bisiName, countru, tel, Email, textarea, City, State, desc, roboto, BSstr) {
        this.counter = i++;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.bisiName = bisiName;
        this.countru = countru;
        this.tel = tel;
        this.textarea = textarea;
        this.Email = Email;
        this.City = City;
        this.State = State;
        this.desc = desc;
        this.roboto = roboto;
        this.BSstr = BSstr;
        this.interface = `
    
        <p>User ${this.counter}:
        FirstName is ${this.FirstName}
        LastName is ${this.LastName}
        Bisiness Name is ${this.bisiName}
        Countru is ${this.countru}
        Telephone is ${this.tel}
        Bussiness Address is ${this.textarea}
        Bisiness Email is ${this.Email}
        Bisiness City is ${this.City}
        Bisiness State is ${this.State}
        Business Description is ${this.desc}
        Business Structure is ${this.BSstr}
        Not roboto is ${this.roboto}
        <p></p>
    `;

    }

    render() {
        let cont = document.querySelector(".showUser");
        let elem = document.createElement("div");
        elem.id = this.name + this.counter;
        elem.classList.add("animal");
        elem.innerHTML = this.interface;
        cont.appendChild(elem);
    }

    show() {
        console.log(this);
    }




}