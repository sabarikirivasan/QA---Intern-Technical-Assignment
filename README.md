# QA Intern Technical Assignment – Tichi App

- **Candidate:** Sabarikirivasan R
- **Email:** sabarikirivasanrr23it@srishakthi.ac.in
- **Application URL:** https://tichi-app-webapp-stage.web.app

---

## Objective
- Evaluate manual testing and analytical thinking skills.
- Cover Test Case Design, Defect Reporting, and Automation (Optional) for Login & Signup functionality.

---

## Repository Structure
```
├── README.md
├── test-cases/
│   └── Login_Signup_TestCases.xlsx
├── defect-report/
│   └── Invalid_Email_Login_Defect.pdf
└── automation/
    ├── tests/
    ├── playwright.config.js
    ├── package.json
    └── reports/
```

---

## Task 1: Test Case Creation (Manual)
- Test cases written for **Login** and **Signup** pages.
- Coverage includes:
  - Positive scenarios (valid login/signup)
  - Negative scenarios (invalid inputs)
  - Boundary value scenarios (min/max field length)
  - Field validation (email format, mandatory fields, password rules)
  - UI/UX checks (placeholders, error messages, button states)
  - Duplicate signup / existing user handling
  - Session handling (logout, session expiry)
- File: `test-cases/Login_Signup_TestCases.xlsx`

---

## Task 2: Defect Reporting (Manual)
- **Issue Reported:** Application allows login with an invalid email format.
- Report includes:
  - Steps to reproduce
  - Expected result
  - Actual result
  - Severity & Priority
  - Environment details
- File: `defect-report/Invalid_Email_Login_Defect.pdf`

---

## Task 3: Automation (Optional) – Completed
- **Feature Automated:** Login functionality
- **Tool/Framework:** Playwright
- **Language:** JavaScript
- **Test Runner:** Playwright Test Runner

### Scenarios Automated
- Valid login
- Invalid credentials (wrong password)
- Invalid email format
- Empty email/password field validation
- Login button disabled/error state checks

### How to Run
```bash
cd automation
npm install
npx playwright install
npx playwright test
```

### View Execution Report
```bash
npx playwright show-report
```
- Report location: `automation/reports/`

---



## Submission
- Submitted via the official Google Form.
- Submission completed within the 72-hour timeline.
- All deliverables (test cases, defect report, automation code, execution report) included.
