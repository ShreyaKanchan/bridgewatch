import test from 'node:test';
import assert from 'node:assert/strict';
import { correlateMessage, pendingAlerts } from '../src/monitor.js';

test('correlates sent and delivered bridge events', () => {
  const result = correlateMessage([{ messageId: 'm1', type: 'sent', timestamp: 10 }, { messageId: 'm1', type: 'delivered', timestamp: 20 }]);
  assert.equal(result[0].status, 'delivered');
  assert.equal(result[0].events.length, 2);
});

test('alerts on messages pending past the delivery window', () => {
  const [alert] = pendingAlerts([{ messageId: 'm2', status: 'pending', source: { timestamp: 0 } }], 1000, 500);
  assert.equal(alert.severity, 'warning');
});
