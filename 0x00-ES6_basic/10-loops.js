export default function appendToEachArrayValue(array, appendString) {
    const result = [];
    for (let value of array) {
        result.push(appendString + value);
    }
    return result;
}
