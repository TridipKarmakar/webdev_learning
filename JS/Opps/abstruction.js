/*  ABSTRACTION – Feature Requests from Client
Domain: Smart Home System

[Beginner]
Create a LightSwitch object. I should only be able to turn it on/off. Internals like circuit control must be hidden.
*/

class LightSwitch {
  #idOn;
  #circuitConnected;

  constructor() {
    this.#idOn = false;
    this.#circuitConnected = true;
  }
  turnOn() {
    if (this.#circuitConnected) {
      this.#idOn = true;

      return "💡 Bulb is ON";
    } else {
      return " ❌ Circuit issue. Cannot turn on.";
    }
  }
  turnOff() {
    if (this.#circuitConnected) {
      if (this.#idOn) {
        return "🔌 Bulb is OFF";
      } else {
        return "⚠️  Bulb is already turned off !";
      }
    } else {
      return "❌ Circuit issue. Cannot turn on.";
    }
  }
}

let bulb1 = new LightSwitch();

// console.log(bulb1.turnOn());
// console.log(bulb1.turnOff());

/* [Easy]
Add a Thermostat object with methods like setTemperature(), but the heating mechanism should remain abstracted.
 */

class Thermostat {
  #currentTemperature;
  #targetTemperature;

  constructor() {
    this.#currentTemperature = 20;
    this.#targetTemperature = 24;
  }
  //this is the public function
  setTemperature(temperature) {
    this.#targetTemperature = temperature;
    console.log(`🌡️ Target temperature set to ${this.#targetTemperature}°C`);
    this.#heatingMechanism();
  }

  //this is the private function
  #heatingMechanism() {
    if (this.#currentTemperature < this.#targetTemperature) {
      console.log(
        "🔥 Heater is ON. Warming up the room... \n✅ Desired temperature will be maintained."
      );
    } else {
      console.log("🌬️ Room already at or above target temperature.");
    }
  }
}

let setTemp = new Thermostat();
// setTemp.setTemperature(45);

/* [Intermediate]
Design a SecuritySystem object. I just need arm() and disarm() methods. The rest should be internal.
 */

class SecuritySystem {
  #isArmed;
  #alarmTriggered;
  #systemLog;

  constructor() {
    this.#isArmed = false;
    this.#alarmTriggered = false;
    this.#systemLog = [];
  }

  arm() {
    if (!this.#isArmed) {
      this.#isArmed = true;
      this.#systemLog = [];
    } else {
      console.log("System is already armed.");
    }
  }

  disarm() {
    if (this.#isArmed) {
      this.#isArmed = true;
      this.#alarmTriggered = false;
      this.#log("System disarmed.");
      console.log("🔓 Security system is now DISARMED.");
    } else {
      console.log("System is already disarmed.");
    }
  }

  #log(massage) {
    const timeStamp = new Date().toISOString();
    this.#systemLog.push(`[${timeStamp}] ${massage}`);
  }

  showLogs() {
    console.log(this.#systemLog);
  }
}

let homeSecurity = new SecuritySystem();

// homeSecurity.arm();
// homeSecurity.disarm();
// homeSecurity.showLogs();

/* [Advanced]
Implement a SmartHomeController that abstracts control of multiple devices (Light, Fan, Thermostat). Provide a unified runScenario('night') method.
 */

class Light {
  #isON = false;
  turnOn() {
    this.#isON = true;
    console.log("💡 Light is ON");
  }

  turnOff() {
    this.#isON = false;
    console.log("💡 Light is OFF");
  }
}

class Fan {
  #isON = false;
  turnOn() {
    this.#isON = true;
    console.log("🌀 Fan is ON");
  }

  turnOff() {
    this.#isON = false;
    console.log("🌀 Fan is OFF");
  }
}

class Thermostat2 {
  #temperature = 24;
  setTemperature(temp) {
    this.#temperature = temp;
    console.log(`🌡️  Thermostat set to ${temp}°C`);
  }
}
class SmartHomeController {
  #light;
  #fan;
  #thermostat;

  constructor() {
    this.#light = new Light();
    this.#fan = new Fan();
    this.#thermostat = new Thermostat2();
  }

  runScenario(ScenarioName) {
    switch (ScenarioName.toLowerCase()) {
      case "night":
        this.#light.turnOn();
        this.#fan.turnOn();
        this.#thermostat.setTemperature(22);
        console.log("🌙 Night scenario activated");
        break;
      case "day":
        this.#light.turnOff();
        this.#fan.turnOn();
        this.#thermostat.setTemperature(22);
        console.log("🌞 Day scenario activated");
        break;

      default:
        console.log("⚠️  Unknown scenario");
    }
  }
}

const smartHome = new SmartHomeController();
// smartHome.runScenario("day");

/* [Expert]
Expose an external API object that lets third-party apps interact only with high-level smart-home commands like lockDoors(), startCleaning(), hiding all internal class logic.
 */

class DoorLock {
  lock() {}

  unlock() {}
}

class SmartVacuum {
  turnOn() {}

  turnOn() {}
}

class SmartHome {
  #doorLock;
  #vacuum;

  constructor() {
    this.doorLock = new DoorLock();
    this.SmartVacuum = new SmartHome();
  }

  lockDoors() {} // if check status is on and input is unlock then open else stay remain or ask for the should i closed the door ? Yes or No

  smartClean() {} // Check if cleaner is onn then ask the permission to off else remain onn.
}
