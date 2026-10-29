import unittest
from bridgewatch import Message, unmatched

class BridgewatchTests(unittest.TestCase):
    def test_only_unsettled_messages_are_returned(self):
        outgoing = [Message("a", 1, "x", "y", 10), Message("a", 2, "x", "z", 20)]
        incoming = [Message("b", 1, "x", "y", 10)]
        self.assertEqual(unmatched(outgoing, incoming), [outgoing[1]])

if __name__ == "__main__": unittest.main()
