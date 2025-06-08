const fibonacci = function(n) {
    n = parseInt(n);

    if(n < 0)
    {
        return "OOPS";
    }

    return clacFib(n);

};

function clacFib(n)
{
    if(n <= 1)
    {
        return n;
    }

    return clacFib(n - 1) + clacFib(n - 2);
}
// Do not edit below this line
module.exports = fibonacci;
