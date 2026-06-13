function show(value) {
    let result = document.getElementById("result");

    if (result.innerText === "0") {
        result.innerText = value;
    } else {
        result.innerText += value;
    }
}

function solveExp() {
    let result = document.getElementById("result");

    try {
        result.innerText = eval(result.innerText);
    } catch (error) {
        result.innerText = "Error";
    }
}

function clearData() {
    document.getElementById("result").innerText = "0";
}

function clearLastEntry() {
    let result = document.getElementById("result");

    result.innerText = result.innerText.slice(0, -1);

    if (result.innerText === "") {
        result.innerText = "0";
    }
}