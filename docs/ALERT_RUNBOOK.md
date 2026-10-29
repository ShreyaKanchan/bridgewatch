# Bridgewatch alert runbook

When a message remains pending beyond the delivery window:

1. Confirm the source event exists and record its timestamp.
2. Check whether a destination event arrived under the same `messageId`.
3. Use `pendingAlerts` to produce a warning for messages that exceeded the timeout.
4. Keep the correlated event list with the incident for later review.

The monitor intentionally separates correlation from notification so a production adapter can decide where alerts should be delivered.
