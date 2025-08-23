// Save this as testroute.js in your project root
import express from 'express';

const app = express();

console.log('🧪 Testing routes individually...\n');

async function testRoute(routeName, routePath) {
    try {
        console.log(`Testing ${routeName}...`);
        const routes = (await import(routePath)).default;
        
        // Try to mount the route
        app.use(`/test/${routeName}`, routes);
        console.log(`✅ ${routeName} loaded successfully\n`);
        return true;
    } catch (error) {
        console.log(`❌ ${routeName} FAILED:`);
        console.log(`   Error: ${error.message}`);
        console.log(`   Stack: ${error.stack}\n`);
        return false;
    }
}

// Test each route file individually
const routes = [
    { name: 'auth', path: './backend/routes/auth.route.js' },           // must be auth.route.js
    { name: 'users', path: './backend/routes/user.routes.js' },           // must be user.route.js
    { name: 'posts', path: './backend/routes/post.route.js' },           // must be post.route.js
    { name: 'notifications', path: './backend/routes/notification.route.js' }, // must be notification.route.js
    { name: 'connections', path: './backend/routes/connection.route.js' }      // must be connection.route.js
];


let allPassed = true;

for (const route of routes) {
    const passed = await testRoute(route.name, route.path);
    if (!passed) {
        allPassed = false;
        console.log(`🛑 Found the problem! Check ${route.name} routes file.`);
        break;
    }
}

if (allPassed) {
    console.log('🎉 All individual routes work fine!');
    console.log('The issue might be in how they\'re combined or server setup.');
    
    // Start a test server
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`🚀 Test server running on http://localhost:${PORT}`);
        console.log('Try making requests to test routes...');
    });
} else {
    console.log('🔍 Focus on fixing the failed route file above.');
    process.exit(1);
}