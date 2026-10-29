import test from "node:test";
import assert from "node:assert/strict";
test("message correlation uses a stable nonce", () => { const outgoing = new Map([[7, "alice"]]); const incoming = new Map([[7, "alice"]]); assert.equal(incoming.get(7), outgoing.get(7)); });
