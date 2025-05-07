# Lab 5

## Group Members
- Chuheng Xi

## Check Your Understanding

1. **Unit‐testing the “message” feature**  
   I would **not** write a pure unit test for the “message” feature (typing, sending, delivering, and displaying the message). That workflow touches the UI component, validation logic, network/API calls, cloud server handling, and the recipient’s view, so it spans multiple modules and external dependencies. To cover it fully we'd need higher level integration or end to end tests, not isolated unit tests.

2. **Unit‐testing the “max message length” feature**  
   I **would** write unit tests for the “max message length” check, because it’s a small function (e.g. `validateLength(input)`) that simply returns true/false based on string length. It has no external dependencies, runs quickly, and can be used with a lot of fixed inputs, which is exactly what unit tests are good for.

## Links to Pages 
- [Expose](https://xchuheng613.github.io/Lab5_Starter/expose.html)
- [Explore](https://xchuheng613.github.io/Lab5_Starter/explore.html)