function getValueOfId(id){
    const idName = document.getElementById(id).value;
    const idParseFloat = parseFloat(idName);
    return idParseFloat;
}

function idTextValueCapture(id){
    const capture = document.getElementById(id).innerText;
    const parseFloatValue = parseFloat(capture);
    return parseFloatValue ;
}

function sectionHidden(id){
    document.getElementById('addMoneyForm').classList.add('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}