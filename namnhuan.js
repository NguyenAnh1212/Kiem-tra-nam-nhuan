function ketqua() {
    let result;
    let y = parseInt(document.getElementById("year").value);
    if (y%4==0){
        if(y%100==0) {
            if(y%400==0){
                result = "là năm nhuận"
            }else {
                result = "không phải là năm nhuận"
            }
        }else {
            result = "là năm nhuận"
            }
    }else{
        result = "không phải là năm nhuận"
    }
    document.getElementById("hienthi").innerText = "Năm "+y +" "+ result
}
