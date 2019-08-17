var numJewelsInStones = function(J, S) {
    let jewels = J.split('');
    let count = 0;
    for(var i = 0; i < S.length; i++) {
        if (jewels.includes(S[i])) {
            count++;
        }
    }
    return count;
};
