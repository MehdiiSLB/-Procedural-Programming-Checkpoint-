
function payment(prix) {
    let prixStr = prix.toString();
    let prixArr = prixStr.split(".");
    if (prixArr[1] == undefined) {
      prixArr[1] = "00";
    }
    if (prixArr[1].length == 1) {
      prixArr[1] += "0";
    }
    if (prixArr[1] > 2) {
      prixArr[1] = prixArr[1].substring(0, 2);
    }
    return "$" + prixArr.join(".");
  
    /* return (
      "$" + prix.toFixed(2)
    );*/
  }
  payment(5.33);