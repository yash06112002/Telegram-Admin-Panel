# Weather Update Telegram Bot with NestJS

This Telegram bot is built using the NestJS framework and Node.js. It allows users to subscribe to daily weather updates and features an admin panel with Google login for managing bot settings and user accounts.

## Features

1. **Weather Details**: Users can receive current weather by entering city name.
2. **Admin Panel**: An admin panel with Google login allows you to manage user accounts by first names (blocking/deleting, etc).

## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yash06112002/Nestjs-API.git
    cd Nestjs-API
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Start the Bot**:
    ```bash
    nest start --watch
    ```

5. **Access the Admin Panel**:

    Visit the admin panel using the following URL:
    ```
    https://telegram-admin-panel.vercel.app/
    ```

6. **Use the Telegram Bot**:

    Search for the bot on Telegram by its handle:
    ```
    @weatherupdatedailybot
    ```

## Bot Commands

- `cityName` - Get current details of given city

## Admin Panel

The admin panel provides access to manage user accounts.

## NestAPI repository:
    
    https://github.com/yash06112002/Nestjs-API
 
**Disclaimer**: Accessing bot to retrieve weather info may take some time(2-5 minutes) for first time as backend deployment on render.com goes into sleep mode.
