# FCM-demo

This project was bootstrapped with Vite and demonstrates the integration of Firebase Cloud Messaging (FCM) for push notifications in a React Vite application.
You can use this to test FCM notification implementation

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Firebase account and project

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Mahmaddz/FCM-token-generator.git
   ```

2. Navigate to the project directory and install dependencies:

   ```bash
   cd FCM-demo
   npm install
   ```

3. Set up Firebase:

   - Create a new Firebase project on the Firebase Console.
   - Obtain Firebase configuration details.
   - Obtain VAPID key.

4. Set up environment variables:

   Create a file named `.env` in the root of your Vite project.

   ```bash
       VITE_APP_API_KEY=your-api-key
       VITE_APP_AUTH_DOMAIN=your-auth-domain
       VITE_APP_PROJECT_ID=your-project-id
       VITE_APP_STORAGE_BUCKET=your-storage-bucket
       VITE_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
       VITE_APP_APP_ID=your-app-id
       VITE_APP_MEASUREMENT_ID=your-measurement-id
       VITE_APP_VAPID_KEY=your-vapid-key

   ```

   Replace your-api-key, your-auth-domain, and other placeholder values with your actual Firebase configuration and VAPID key.

5. Run the application:

   ```bash
   npm run dev
   ```

## Learn More

Explore the documentation to deepen your understanding:

- [React Documentation](https://react.dev/learn): Learn more about building user interfaces with React.
- [Vite Documentation](https://vitejs.dev/guide/): Discover the features and capabilities of the Vite build tool for modern web development.
- [Firebase Cloud Messaging (FCM) Documentation](https://firebase.google.com/docs/cloud-messaging): Understand how to implement Firebase Cloud Messaging for push notifications.

To learn more about other Firebase services, visit the [Firebase Documentation](https://firebase.google.com/docs/web/setup). This resource provides comprehensive documentation for all Firebase services, helping you make the most of the Firebase platform in your projects.
