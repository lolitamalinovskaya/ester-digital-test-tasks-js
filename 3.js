let objForSort = {
    "Java": 10,
    "Ruby": 75,
    "Python": 65,
};

const sortObjToGrade = (objForSort) => {
   let obj = Object.entries(objForSort);
    obj.sort((a,b) => b[1] - a[1]);

    return obj.filter((el) => el[1] >= 60).map((el) => el[0]);
}

let result = sortObjToGrade(objForSort);
console.log(result);
