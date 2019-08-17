var defangIPaddr = function(address) {
    let output = address.replace(/\./g, '[.]');
    return output;
};
