export function correlateMessage(events) {
  const byId = new Map();
  for (const event of events) {
    const current = byId.get(event.messageId) ?? { messageId: event.messageId, source: null, destination: null, status: 'pending', events: [] };
    current.events.push(event);
    if (event.type === 'sent') current.source = event;
    if (event.type === 'delivered') { current.destination = event; current.status = 'delivered'; }
    byId.set(event.messageId, current);
  }
  return [...byId.values()];
}

export function pendingAlerts(messages, now, timeoutMs = 15 * 60 * 1000) {
  return messages.filter((message) => message.status === 'pending' && now - message.source.timestamp >= timeoutMs).map((message) => ({ ...message, severity: 'warning' }));
}
