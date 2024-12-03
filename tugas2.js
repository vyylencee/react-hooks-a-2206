console.log("[BARATIE RESTAURANT]");
console.log("_".repeat(50));

function processPayment(hargaTotal, bayar, method) {
    try {
        if (typeof bayar !== "number") {
            throw new Error("Error : Both total price and amount must be numbers");
        } else if (bayar < hargaTotal) {
            throw new Error("Error: Amount given is less than the total price");
        } else if (!["cash", "credit", "voucher"].includes(method)) {
            throw new Error("Error: Unknown payment method");
        } 
        const kembalian = bayar - hargaTotal; 
        console.log(`Processing ${method} payment...\nTransaction successful. Change to return: ${kembalian}`);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Cleaning up resources...")
    }
}

const testCases = [
    { label: "[1]", total: 50, bayar: "fifty", method: "credit" },
    { label: "[2]", total: 50, bayar: 35, method: "cash" },
    { label: "[3]", total: 50, bayar: 206, method: "voucher" },
    { label: "[4]", total: 50, bayar: 75, method: "bitcoin" },
]

testCases.forEach(({ label, total, bayar, method }) => {
    console.log(`${label}`);
    processPayment(total, bayar, method);
    console.log("_".repeat(50));
})