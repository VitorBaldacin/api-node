exports.mTel = (tel) => {
    tel=tel.replace(/\D/g,"")
    tel=tel.replace(/^(\d)/,"+$1")
    tel=tel.replace(/(.{3})(\d)/,"$1($2")
    tel=tel.replace(/(.{6})(\d)/,"$1)$2")
    if(tel.length == 12) {
        tel=tel.replace(/(.{1})$/,"-$1")
    } else if (tel.length == 13) {
        tel=tel.replace(/(.{2})$/,"-$1")
    } else if (tel.length == 14) {
        tel=tel.replace(/(.{3})$/,"-$1")
    } else if (tel.length == 15) {
        tel=tel.replace(/(.{4})$/,"-$1")
    } else if (tel.length > 15) {
        tel=tel.replace(/(.{4})$/,"-$1")
    }
    return tel;
}