## Reproduction

* `yarn install`
* Run `yarn test`, verify that the test files for both `client-lib`, `component-lib`, and `application` run without issue.
* Attempt to run `Wallaby: Start`, and receive an error like:

```
‌[Error] Automatic Jest configuration error: Module jest-cli is not found in '.'. 
[Error]  
[Error] We've also tried to automatically configure Wallaby.js for other frameworks 
[Error] Automatic Vitest configuration error: Unable to extract Vitest configuration. 
```

Resulting diagnostic report is in `wallaby-report.md`.
