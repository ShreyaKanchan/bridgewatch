# Bridgewatch

> A cross-chain message monitor prototype that correlates origin events with destination events and highlights pending delivery.

![Bridgewatch](assets/logo.svg)

Cross-chain event monitor prototype that compares outgoing and incoming messages by nonce.

```bash
python3 bridgewatch.py
```

## Monitoring model

Bridgewatch correlates an origin message with a destination message using nonce, sender, and recipient. Unmatched origin records become a review queue for delayed relays, failed delivery, or suspicious activity.

In production, add finality windows, chain-specific confirmations, persistent checkpoints, replay protection, alert severity, RPC retry logic, and independent validation of amounts and message payloads.
