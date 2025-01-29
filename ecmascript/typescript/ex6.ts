// Define an enum for days of the week
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// Function to get the name of the day based on the enum value
function getDayName(day: DaysOfWeek): string {
  switch (day) {
    case DaysOfWeek.Sunday:
      return "Sunday";
    case DaysOfWeek.Monday:
      return "Monday";
    case DaysOfWeek.Tuesday:
      return "Tuesday";
    case DaysOfWeek.Wednesday:
      return "Wednesday";
    case DaysOfWeek.Thursday:
      return "Thursday";
    case DaysOfWeek.Friday:
      return "Friday";
    case DaysOfWeek.Saturday:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

// Example usage of the enum and function
const today: DaysOfWeek = DaysOfWeek.Wednesday;
console.log(`Today is ${getDayName(today)}`); // Output: Today is Wednesday

// Example of using the enum value directly
const dayIndex: number = DaysOfWeek.Friday;
console.log(`The index of Friday is ${dayIndex + 1}`); // Output: The index of Friday is 5

// Example of getting the enum value from a string
const dayName: string = "Monday";
const dayEnumValue: DaysOfWeek = DaysOfWeek[dayName as keyof typeof DaysOfWeek];
console.log(`The enum value of ${dayName} is ${dayEnumValue + 1}`); // Output: The enum value of Monday is 1
