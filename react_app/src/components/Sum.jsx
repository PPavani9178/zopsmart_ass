

export default function Sum(num) {
let total=num;
function innerfunction(next){
    if(next==undefined){
        return total;
    }
    total+=next;
    return innerfunction;
}
return innerfunction;
}
