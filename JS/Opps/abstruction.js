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
setTemp.setTemperature(45);

/* [Intermediate]
Design a SecuritySystem object. I just need arm() and disarm() methods. The rest should be internal.
 */

/* [Advanced]
Implement a SmartHomeController that abstracts control of multiple devices (Light, Fan, Thermostat). Provide a unified runScenario('night') method.
 */

/* [Expert]
Expose an external API object that lets third-party apps interact only with high-level smart-home commands like lockDoors(), startCleaning(), hiding all internal class logic.
 */
