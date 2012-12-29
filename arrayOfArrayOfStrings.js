var data = [
    ['Child1', 'Child2'],
    ['Child3', 'Child4'],
    ['Child4'],
    ['Child2', 'Child1'],
    ['Child5', 'Child1', 'Child2'],
    ['Child6', 'Child7']
];

find(data, function(idx, els) { document.write("Array[" + idx + "] - "
                                               + els.toString().replace(',', ', ')
                                               + "; "); });

function find(dataArray, callback) {
    for (var i = 0; i < dataArray.length; i++) {
        var result = findDuplicateOrNonUniqueElements(dataArray, i);
        if (result.foundDuplicate) continue; // duplicate found, non-unique parent
        if (result.nonUniqueElements.length != 0) callback(i, result.nonUniqueElements); // non-unique children found
    }
}

// array of array of strings
function findDuplicateOrNonUniqueElements(dataArray, idx) {
    var el = dataArray[idx];
    var els = [];
    for (var i = 0; i < dataArray.length; i++) {
        if (i == idx) continue; // don't compare to itself
        if (equals(dataArray[i], el)) return { foundDuplicate : true, nonUniqueElements : [] }; // found duplicated parent
        for (var j = 0; j < el.length; j++) {
            if (dataArray[i].indexOf(el[j]) != -1 && els.indexOf(el[j]) == -1) { // non-unique children found
                els.push(el[j]);
            }
        }
    }
    return { foundDuplicate : false, nonUniqueElements : els };
}

// array of strings
function equals(arr1, arr2) {
    return (arr1.sort().toString() === arr2.sort().toString());
}
