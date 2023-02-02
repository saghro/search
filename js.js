var data = [{
    id: 1,
    name: "michlan",
}, {
    id: 2,
    name: "michlan2",

}, {
    id: 3,
    name: "michlan3",

}]
for (var i of data) {
    var el = document.createElement('tr');
    //el.innerHTML = "<td>" + i.id + "</td><td>" + i.nom + "</td>"
    document.getElementById('kk').appendChild(el);
}