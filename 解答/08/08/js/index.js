/**
 * 封装函数，传入任意数量的数组，返回长度最大的数组集合
 */
const getMaxArrays = (...arrays) => {
    // TODO：待补充代码
    try {
        // 有参数不是数组
        if (!arrays.every(e => e instanceof Array)) {
            return []
        }

        function maxLength() {
            let max = 0;
            arrays.forEach(e => {
                // 非数组
                if (e instanceof Array)
                    if (e.length > max) {
                        max = e.length;
                    }
            })
            return max;
        }

        function getMaxLengthArray(length) {
            return arrays.filter(e => {
                // 非数组
                if (!e instanceof Array) {
                    return false;
                }
                return e.length == length
            });
        }

        // 所有数组长度相同
        const max = maxLength();
        if (arrays.every(e => e.length == max)) {
            return []
        }



        return getMaxLengthArray(max);
    } catch (e) {
        return []
    }
};
module.exports = getMaxArrays; //请勿删除