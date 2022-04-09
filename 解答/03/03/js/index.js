function formSubmit() {
    // TODO：待补充代码

    const myForm = document.getElementById("myForm")

    const result = document.getElementById("result");

    const quescontent = document.getElementById("quescontent");

    function controller() {
        quescontent.style.display = 'none';
        result.style.display = 'block'
    }

    const placeText = ['公园', '健身房', '户外']


    const data = {
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        male: myForm.male.value == 1 ? '女' : '男',
        place: Array.from(document.getElementsByName("place")).filter(e => e.checked).map(e => placeText[parseInt(e.value) - 1]).join("、")
    }

    console.log(data)

    const str = `身高${data.height}cm，体重${data.weight}kg，性别${data.male}，会在${data.place}锻炼`;

    console.log(str)

    result.innerHTML += "<br />" + str;

    controller();

}