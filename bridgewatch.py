from dataclasses import dataclass
@dataclass(frozen=True)
class Message: chain: str; nonce: int; sender: str; recipient: str; amount: int
def unmatched(outgoing, incoming):
    received = {(m.nonce, m.sender, m.recipient) for m in incoming}
    return [m for m in outgoing if (m.nonce, m.sender, m.recipient) not in received]
if __name__ == "__main__":
    out = [Message("alpha", 7, "alice", "bob", 100), Message("alpha", 8, "alice", "carol", 50)]
    inc = [Message("beta", 7, "alice", "bob", 100)]
    print("pending:", unmatched(out, inc))
