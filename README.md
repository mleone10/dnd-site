# D&D Site
> Dungeons and Dragons character management application

This unnamed project is a webapp which aims to provide D&D character management tools.  Prospective features include:
* Basic character information
    * Name
    * Race
    * Class
    * Proficiency modifiers
    * Ability scores/modifiers
    * Skill proficiencies
    * Equipment tracking
* Rule clarification/search via a D&D API
* Common rolls (hit, damage, saves, etc)
* Rule clarification via a D&D API
* Login via AWS Cognito and Google/Facebook
* Backend persistence via AWS Lambda and DynamoDB

## Architecture
This site is hosted as a static GitHub page.  A custom domain name is configured with AWS Route53.  All rendering and utility operations will be performed client-side.  An authenticated API will be used to persist character information on the backend.

## Ideas
* Persist rolls and modifications to the backend real-time

## To Do
* Tech
    * Design/build basic UI
    * Integrate with Cognito/Google/Facebook
    * Create a simple character persistance API
    * Implement bundling/minification with Gulp and Webpack
    * Automate budling/minification via GitHub actions
* Product
    * Pick a name for the site
    * Create a new character with basic information
    * Buttons for ability, skill, and save rolls
    * Add weapons to character via D&D API search
    * Add custom weapons to character
    * Buttons for hit/damage rolls
    * Add spells to character via D&D API search
    * Add custom spells to character
    * Buttons for melee/ranged spell attacks
    * Add equipment via D&D API search
    * Add custom equipment to character
    * Export as JSON
    * Import from JSON
