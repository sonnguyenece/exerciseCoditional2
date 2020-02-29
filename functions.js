function ex1() {
    document.getElementById('resultEx1').innerText = F(prompt("Nhap nhiet do theo do C : "));
}

function F(C) {
    return C * 9 / 5 + 32;
}

function ex2() {
    let m = prompt("Nhap vao do dai theo met : ");
    let ft = m * 3.2808;
    document.getElementById('resultEx2').innerText = ft.toFixed(2) + "ft";
}

function ex3() {
    document.getElementById('square').innerHTML = "dien tich hinh vuong canh : "
        + SquareArea(prompt("Nhap canh hinh vuong : "));
}

function ex4() {
    document.getElementById('rec').innerHTML = "dien tich hinh chu nhat : "
        + rectangle(prompt("Nhap canh hinh chu nhat : "), prompt("Nhap canh con lai : "));
}

function ex5() {
    document.getElementById('righTriangle').innerHTML = "dien tich hinh tam giac : "
        + rightTriangle(prompt("Nhap canh hinh tam giac vuong : "), prompt("Nhap canh con lai : "));
}

function SquareArea(a) {
    return a ** 2;
}

function rectangle(a, b) {
    return a * b;
}

function rightTriangle(a, b) {
    return a * b / 2;
}

function ex9() {
    let result;
    a = prompt("nhap canh a cua tam giac :");
    b = prompt("nhap canh b cua tam giac :");
    c = prompt("nhap canh c cua tam giac :");
 if(a>0&&b>0&&c>0&&a+b-c>0&&a+c-b>0&&c+b-a>0)document.getElementById('testTri').innerHTML=
     "a,b,c la cac canh cua tam giac";
 else document.getElementById('testTri').innerHTML=("a,b,c khong phai la canh tam giac");
}