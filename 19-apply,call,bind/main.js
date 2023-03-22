import './homework.js'
//// Apply, call, bind ////

let st = {
    name: 'Aziz',
    surname: 'Kamalov',
    oraliq: 46,
    yakuniy: 76,

    // umumiy: function () {
    //     console.log(this.oraliq + this.yakuniy);
    // }
}
// st.umumiy()

let st1 = {
    name: 'Jasur',
    surname: 'Nozimov',
    oraliq: 74,
    yakuniy: 83,

    // umumiy: function () {
    //     console.log(this.oraliq + this.yakuniy);
    // }
}
// st1.umumiy()

const umumiy = function (group, id) {
    console.log(`Srtudent: ${this.name} ${this.surname},  Group: ${group}, TotalScore: ${this.oraliq+ this.yakuniy}`);
    console.log(id);
}


// umumiy.call(st1, 'EKR-80', 579)
// umumiy.apply(st, ['St-234 ', 235])
let bind = umumiy.bind(st, 'ET-456', 345)
bind()