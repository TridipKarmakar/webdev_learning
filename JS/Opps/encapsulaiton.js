/* ENCAPSULATION – Feature Requests from Client
Domain: Finance App

[Beginner]
We need a Wallet that has a private balance. Expose only deposit() and getBalance().

[Easy]
Add a withdraw(amount) function to the wallet. It should not allow negative balance.

[Intermediate]
Create a BankAccount that uses a private variable for accountNumber and balance. Expose methods for transferring money between two accounts.

[Advanced]
Allow locking of a BankAccount. Once locked, it should block further deposits or withdrawals.

[Expert]
Create a TransactionManager that keeps a private transaction log. Expose only addTransaction() and getSummary().

 */

function log() {
  const timeStamp = new Date().toISOString();
  return timeStamp;
}

const timeStamp = log();
console.log(timeStamp);
