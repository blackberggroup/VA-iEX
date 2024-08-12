# Website Template


## Dev URL's
Main Branch - 

Develop Branch - 

## How to Install and Run the Project
1. Clone this repo. Navigate to the directory where you'd like to put the va-ohil directory and run:
    ```bash
    git clone https://github.com/WBDynamics/va-ohil.git
    ```
    
    This will create a va-ncchi-beta directory with the website files inside. Navigate to this new directory:
    ```bash
    cd va-ohil
    ```

1. Install Node.js `16.16.0` or higher =>
    * Check your node version if it is already installed `node -v`
    * [Download](https://nodejs.org/en/).    

1. Install the project dependencies:
    ```bash
    npm install
    ```
    
1. Start the local server. You'll find the home page located at: `http://localhost:8080/`
    ```bash
    npm start
    ```

1. Run gulp to watch any changes you make to `scss` files:
    ```bash
    gulp watch

## NOTES: "Coming Soon" page
1. The "Coming Soon" page is a duplicate of the home page (index.html) with just the hero.html _include

1. The resulting compiled page, _site/coming-soon/index.html, is copied directly into _site and renamed "coming-soon.html" - _site/coming-soon.html
