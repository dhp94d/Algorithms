const PreOrder = (number, end) => {
    if(number > end) return '';
    else {
        return String(number) + String(PreOrder(number * 2, end)) + String(PreOrder(number * 2 + 1, end));
    }
}

const InOrder = (number, end) => {
    if(number > end) return '';
    else {
        return String(InOrder(number * 2, end)) + String(number) +  String(InOrder(number * 2 + 1, end));
    }
}

const PostOrder = (number, end) => {
    if(number > end) return '';
    else {
        return String(PostOrder(number * 2, end)) + String(PostOrder(number * 2 + 1, end)) + String(number);
    }
}

const DFStype = {
    PreOrder,
    InOrder,
    PostOrder,
}


module.exports = makeDFS = (type, start, end) => {
    return DFStype[type](start,end);
};