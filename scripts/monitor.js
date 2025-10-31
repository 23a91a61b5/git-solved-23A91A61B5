/**
 * Unified System Monitoring Script
 * Combines Environment-based and AI-enhanced monitoring
 * Version: 3.1.0
 */

const ENV = process.env.NODE_ENV || 'development';

const monitorConfig = {
  interval: ENV === 'production' ? 60000 : 10000,
  alertThreshold: ENV === 'production' ? 80 : 90,
  metricsEndpoint:
    ENV === 'production'
      ? 'http://localhost:8080/metrics'
      : 'http://localhost:3000/metrics',
  debugMode: ENV !== 'production',
  aiEnabled: ENV === 'production', // Enable AI only in production
  predictiveWindow: 300, // Predict 5 mins ahead
};

console.log('=================================');
console.log(`🚀 DevOps Simulator - Monitor (${ENV.toUpperCase()})`);
console.log('=================================');

function predictFutureMetrics() {
  console.log('\n🤖 AI Prediction Engine:');
  const prediction = {
    cpu: Math.random() * 100,
    memory: Math.random() * 100,
    confidence: (Math.random() * 20 + 80).toFixed(2),
  };
  console.log(`Predicted CPU: ${prediction.cpu.toFixed(2)}%`);
  console.log(`Predicted Memory: ${prediction.memory.toFixed(2)}%`);
  console.log(`Confidence: ${prediction.confidence}%`);

  if (prediction.cpu > monitorConfig.alertThreshold) {
    console.log('⚠️  Predictive Alert: High CPU expected - Scaling triggered');
  }
}

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  console.log(`\n[${timestamp}] System Health Check`);

  const cpuUsage = Math.random() * 100;
  const memUsage = Math.random() * 100;
  const diskUsage = Math.random() * 100;

  console.log(`CPU Usage: ${cpuUsage.toFixed(2)}%`);
  console.log(`Memory Usage: ${memUsage.toFixed(2)}%`);
  console.log(`Disk Usage: ${diskUsage.toFixed(2)}%`);

  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log('⚠️  System Status: WARNING - High resource usage');
  } else {
    console.log('✅ System Status: HEALTHY');
  }

  if (monitorConfig.aiEnabled) {
    predictFutureMetrics();
  }

  if (monitorConfig.debugMode) {
    const mem = process.memoryUsage();
    console.log('\n--- Memory Details ---');
    console.log(`Heap Used: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }

  console.log(`Next check in ${monitorConfig.interval}ms`);
}

setInterval(checkSystemHealth, monitorConfig.interval);
checkSystemHealth();
