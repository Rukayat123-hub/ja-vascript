           
let score =59;
function task1(){
    if(score >= 90){
        console.log("outstanding! Grade A+  Excellent!")
    }else if(score >= 80){
        console.log("score: 80 - 89 Grade: B Good  work!")
    }else if(score >= 70){
        console.log("score: 70 - 79 Grade: c Satisfactory")
    }else if(score >= 60){
       console.log("score:60 -69 Grade: D  Needs improvement") 
    }else{
        console.log("Grade: f  Please see instructor ")
    }

}




function task2(){
function calculatePrice(price, customerType, isFirstPurchase) {
  // 1️⃣ Determine base discount by customer type
  let discount = 0;
  switch (customerType.toLowerCase()) {
    case "student":
      discount = 0.10;
      break;
    case "senior":
      discount = 0.15;
      break;
    case "employee":
      discount = 0.20;
      break;
    default:
      discount = 0; // no discount
  }

  // 2️⃣ Add 5% if this is the first purchase
  if (isFirstPurchase) {
    discount += 0.05;
  }

  // 3️⃣ Calculate final price
  const finalPrice = (price * (1 - discount)).toFixed(2);

  // 4️⃣ Print a full receipt
  console.log("------ RECEIPT ------");
  console.log(`Original Price : $${price.toFixed(2)}`);
  console.log(`Discount       : ${(discount * 100).toFixed(0)}%`);
  console.log(`Final Price    : $${finalPrice}`);
}

calculatePrice(100, "Student", true);
// Prints receipt and returns 85.00
}

function task3(){
    function weatherAdvice(temperature, isRaining) {
  let advice = "25";

  // 🌡️ Main advice using if / else if
  if (temperature < 32 && isRaining) {
    advice = "Freezing rain! Stay inside!";
  } else if (temperature < 32) {
    advice = "Very cold, wear a heavy coat.";
  } else if (temperature >= 32 && temperature <= 60) {
    advice = "Chilly, bring a jacket.";
  } else if (temperature > 60 && temperature <= 80) {
    advice = "Nice weather!";
  } else if (temperature > 80) {
    advice = "It's hot, stay hydrated!";
  } else {
    advice = "Check the weather data!";
  }

  // ☔ Quick advice using ternary operator
  const umbrellaAdvice = isRaining ? "Bring an umbrella" : "No umbrella needed";

  // Combine the two messages
  return `${advice} ${umbrellaAdvice}.`;
}

// ✅ Example usage
console.log(weatherAdvice(30, true));
// → "Freezing rain! Stay inside! Bring an umbrella."

console.log(weatherAdvice(70, false));
// → "Nice weather! No umbrella needed."

}




function task4(){
    function atm(balance, action, amount) {
  let message = "";

  if (action === "withdraw") {
    // 🚫 Challenge: Block withdrawals over 500 at once
    if (amount > 500) {
      return `Withdrawal limit exceeded: You tried to withdraw $${amount}, but the maximum per transaction is $500.`;
    }

    // Check if funds are sufficient
    if (amount <= balance) {
      balance -= amount;
      message = `Withdrawal of $${amount} successful. New balance: $${balance}.`;
    } else {
      message = `Insufficient funds. Your balance is $${balance}.`;
    }

  } else if (action === "deposit") {
    balance += amount;
    message = `Deposit of $${amount} successful. New balance: $${balance}.`;

  } else {
    message = `Invalid action: "${action}". Please choose "withdraw" or "deposit".`;
  }

  return message;
}

// ✅ Example usage
console.log(atm(1000, "withdraw", 200));
// → "Withdrawal of $200 successful. New balance: $800."

console.log(atm(300, "withdraw", 600));
// → "Withdrawal limit exceeded: You tried to withdraw $600, but the maximum per transaction is $500."

console.log(atm(500, "deposit", 150));
// → "Deposit of $150 successful. New balance: $650."

}    

function task5(){
    
}   function personalAssistant(hour, weather, dayType) {
  // ✅ Validate inputs
  if (typeof hour !== "number" || hour < 0 || hour > 23) {
    return "Invalid hour. Please use a number between 0 and 23.";
  }
  const validWeather = ["sunny", "rainy", "cloudy"];
  if (!validWeather.includes(weather.toLowerCase())) {
    return `Invalid weather. Choose from: ${validWeather.join(", ")}.`;
  }
  const validDayType = ["workday", "weekend", "holiday"];
  if (!validDayType.includes(dayType.toLowerCase())) {
    return `Invalid day type. Choose from: ${validDayType.join(", ")}.`;
  }

  // 🕒 Determine part of the day
  let timeAdvice = "";
  if (hour >= 6 && hour < 12) {
    timeAdvice = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    timeAdvice = "Good afternoon!";
  } else if (hour >= 18 && hour < 22) {
    timeAdvice = "Good evening!";
  } else {
    timeAdvice = "It's late—consider some rest.";
  }

  // ☁️ Weather advice with ternary operator for simple umbrella decision
  const umbrellaAdvice = weather.toLowerCase() === "rainy" 
    ? "Bring an umbrella." 
    : "No umbrella needed.";

  // 🗓️ Day-based activity suggestions using logical operators
  let dayAdvice = "";
  if (dayType === "workday" && hour >= 8 && hour <= 17) {
    dayAdvice = "Focus on your work tasks and stay productive.";
  } else if ((dayType === "weekend" || dayType === "holiday") && hour >= 10 && hour <= 20) {
    dayAdvice = "Great time to relax or enjoy fun activities.";
  } else if (dayType === "workday" && (hour < 8 || hour > 17)) {
    dayAdvice = "Outside work hours—take some personal time.";
  } else {
    dayAdvice = "Use this time for rest or light activities.";
  }

  // 🌞 Extra: combine weather & time with logical AND
  if (weather.toLowerCase() === "sunny" && hour >= 12 && hour <= 16) {
    dayAdvice += " Perfect weather for a short walk!";
  }

  // 📜 Final combined advice
  return `${timeAdvice} ${dayAdvice} ${umbrellaAdvice}`;
}

// ✅ Example usage:
console.log(personalAssistant(9, "sunny", "workday"));
// → "Good morning! Focus on your work tasks and stay productive. No umbrella needed."

console.log(personalAssistant(21, "rainy", "weekend"));
// → "Good evening! Use this time for rest or light activities. Bring an umbrella."

console.log(personalAssistant(15, "cloudy", "holiday"));
// → "Good afternoon! Great time to relax or enjoy fun activities. No umbrella needed."

   