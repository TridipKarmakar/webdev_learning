/* 🧠 2. POLYMORPHISM – Feature Requests from Client
Domain: Notification System

[Beginner]
We’re building notifications. Create Email and SMS types — both should have a send() method with different behavior.


 */

class Notification {
  constructor(recipient) {
    this.recipient = recipient;
  }
}

Notification.prototype.send = function () {
  throw new Error("send() method must be implemented in the subclass");
};

class Email extends Notification {
  constructor(recipient) {
    super(recipient);
  }

  send() {
    return `📧 Sending Email to ${this.recipient}`;
  }
}

class SMS extends Notification {
  constructor(recipient) {
    super(recipient);
  }

  send() {
    return `📱 Sending SMS to ${this.recipient}`;
  }
}

function sendNotification(notificationObj) {
  console.log(notificationObj.send());
}

let Email1 = new Email("tridiplaymakar97@gmail.com");
let SMS1 = new SMS("+91 84799-83303");

// sendNotification(Email1);
// sendNotification(SMS1);

/*
[Easy]
Add a base Notification type. Both Email and SMS should inherit from it and override send(). same as above */

/*

[Intermediate]
I want to be able to keep all notification types in an array and loop through them, calling send() polymorphically.

*/

const notifications = [
  new Email("tridiplaymakar97@gmail.com"),
  new SMS("+91 84799-83303"),
];

// for (let i = 0; i < notifications.length; i++) {
//   sendNotification(notifications[i]);
// }

/*
[Advanced]
Add a new PushNotification type. Ensure it integrates seamlessly into the same system with its own send() logic.
*/

class PushNotification extends Notification {
  constructor(recipient) {
    super(recipient);
  }
  send() {
    return `Hi ${this.recipient}, You have got new massage in whatsapp, Check Now!`;
  }
}

notifications.push(new PushNotification("Tridip"));
// sendNotification(notifications[notifications.length - 1]);

/*
[Expert]
Create a NotificationManager function that accepts a list of mixed notifications and sends each of them using their polymorphic send() method.
 */

function NotificationManager(notificationsList) {
  for (let i = 0; i < notificationsList.length; i++) {
    sendNotification(notificationsList[i]);
  }
}

NotificationManager(notifications);
