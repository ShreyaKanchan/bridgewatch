from dataclasses import dataclass
@dataclass
class Alert: nonce: int; reason: str; severity: str = "warning"
def stale_alerts(messages, now, max_age): return [Alert(m.nonce, "message exceeded relay window") for m in messages if now - m.nonce > max_age]
