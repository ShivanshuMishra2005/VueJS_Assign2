<!-- App.vue -->
<template>
  <v-app>
    <v-content>
      <v-container>
        <v-card>
          <v-card-title>Vue.js Project with Vuetify</v-card-title>
          <v-card-text>
            <p>Welcome Message: {{ welcomeMessageText }}</p>
            <p>Conversion: 100 Celsius to Fahrenheit is {{ convertedValue }} Fahrenheit</p>
            <p>Math Operation Result: {{ mathOperationResult }}</p>
            <p>Custom Function Result: {{ customFunctionResult }}</p>
            <p>Reversed String: {{ reversedString }}</p>
            <p>Is 17 a prime number? {{ isPrimeResult }}</p>
            <p>Random number between 1 and 10: {{ randomNumber }}</p>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      welcomeMessageText: '',
      convertedValue: 0,
      mathOperationResult: 0,
      customFunctionResult: 0,
      reversedString: '',
      isPrimeResult: '',
      randomNumber: 0
    };
  },
  mounted() {
    this.welcomeMessageText = welcomeMessage("John", "Doe");
    this.convertedValue = convertMeasurement(100, "Celsius");
    this.mathOperationResult = mathOperation(1, 2, 3, 4, 5);
    this.customFunctionResult = customFunction(5);
    this.reversedString = reverseString("hello");
    this.isPrimeResult = isPrime(17) ? 'Yes' : 'No';
    this.randomNumber = getRandomNumber(1, 10);
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
