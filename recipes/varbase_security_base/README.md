[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Security Base
[![pipeline status](https://git.drupalcode.org/project/varbase_security_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_security_base/-/pipelines)
[![Varbase Security Base](https://img.shields.io/badge/Varbase%20Security%20Base-1.0.1-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_security_base/-/pipelines?ref=1.0.1)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A recipe to manage default security configurations for Varbase.

This recipe provides comprehensive security features including:
- Password policy with character type requirements, length, and username checks
- Username enumeration prevention
- Security Kit (SecKit) for XSS, CSRF, and clickjacking protection
- CAPTCHA and reCAPTCHA for form protection
- Honeypot for spam prevention
- Antibot for additional bot protection
- Flood control to prevent brute force attacks

## Installation

Add the recipe using composer:
```
composer require drupal/varbase_security_base:~1.0.0
```

Change directory to `/web` or `/docroot`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/contrib/varbase_security_base
```

or

Run the Drush recipe command:
```
drush recipe recipes/contrib/varbase_security_base
```

## Security Features

### Password Policy
The default password policy requires:
- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 number
- At least 1 special character
- Password different from username

### Honeypot
Protected forms include:
- User registration form
- User login form
- Password reset form
- Webform submissions
- Comment forms

### Flood Control
- IP-based login attempt limits: 5 attempts per 30 minutes
- User-based login attempt limits: 4 attempts per 30 minutes

### Security Kit
- XSS protection enabled
- Clickjacking protection via X-Frame-Options
- Autocomplete disabled for sensitive forms
